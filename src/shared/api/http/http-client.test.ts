import { describe, expect, it, vi } from 'vitest';

import { ApiRequestError } from './errors';
import { createJsonHttpClient } from './http-client';

const jsonResponse = (body: unknown, init: ResponseInit): Response =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'content-type': 'application/json',
      ...init.headers,
    },
  });

describe('createJsonHttpClient', () => {
  it('devuelve JSON tipado y envía los encabezados explícitos', async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(
      jsonResponse(
        { issuer: 'https://identity.example/realms/siafq', subject: 'actor-1' },
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
            'x-request-id': 'response-request',
            'x-correlation-id': 'response-correlation',
          },
        },
      ),
    );
    const client = createJsonHttpClient({
      baseUrl: 'https://api.example/api/v1/',
      fetch: fetcher,
      getAccessToken: () => 'access-token',
    });

    const response = await client.request<{ issuer: string; subject: string }, { value: string }>({
      path: '/iam/me',
      method: 'POST',
      body: { value: 'test' },
      requestId: 'request-1',
      correlationId: 'correlation-1',
      idempotencyKey: 'operation-1',
    });

    expect(response).toEqual({
      data: { issuer: 'https://identity.example/realms/siafq', subject: 'actor-1' },
      status: 200,
      requestId: 'response-request',
      correlationId: 'response-correlation',
    });
    expect(fetcher).toHaveBeenCalledOnce();

    const [url, init] = fetcher.mock.calls[0] ?? [];
    const headers = new Headers(init?.headers);

    expect(url).toBe('https://api.example/api/v1/iam/me');
    expect(init?.credentials).toBe('omit');
    expect(headers.get('accept')).toBe('application/json, application/problem+json');
    expect(headers.get('authorization')).toBe('Bearer access-token');
    expect(headers.get('content-type')).toBe('application/json');
    expect(headers.get('x-request-id')).toBe('request-1');
    expect(headers.get('x-correlation-id')).toBe('correlation-1');
    expect(headers.get('x-idempotency-key')).toBe('operation-1');
    expect(init?.body).toBe('{"value":"test"}');
  });

  it('admite respuestas exitosas sin contenido', async () => {
    const client = createJsonHttpClient({
      baseUrl: 'https://api.example/api/v1',
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(null, { status: 204 })),
    });

    await expect(
      client.request<void>({ path: '/governance/resource', method: 'DELETE' }),
    ).resolves.toMatchObject({ data: undefined, status: 204 });
  });

  it('normaliza Problem de Governance sin perder trazabilidad', async () => {
    const problem = {
      code: 'GOVERNANCE_PROFILE_NOT_FOUND',
      message: 'Institution profile was not found.',
      path: '/governance/institutions/institution-1/profile',
      timestamp: '2026-10-03T12:00:00Z',
      requestId: 'request-1',
      correlationId: 'correlation-1',
      details: [{ field: 'institutionId' }],
    };
    const client = createJsonHttpClient({
      baseUrl: 'https://api.example/api/v1',
      fetch: vi.fn<typeof fetch>().mockResolvedValue(
        jsonResponse(problem, {
          status: 404,
          headers: { 'content-type': 'application/problem+json' },
        }),
      ),
    });

    await expect(
      client.request({ path: '/governance/institutions/institution-1/profile', method: 'GET' }),
    ).rejects.toMatchObject({
      detail: { kind: 'governance', status: 404, ...problem },
    });
  });

  it('normaliza ApiError de IAM', async () => {
    const apiError = {
      timestamp: '2026-10-03T12:00:00Z',
      status: 401,
      error: 'Unauthorized',
      message: 'Authentication is required to access this resource.',
      path: '/iam/me',
    };
    const client = createJsonHttpClient({
      baseUrl: 'https://api.example/api/v1',
      fetch: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(apiError, { status: 401 })),
    });

    await expect(client.request({ path: '/iam/me', method: 'GET' })).rejects.toMatchObject({
      detail: { kind: 'iam', ...apiError },
    });
  });

  it('notifica un 401 después de normalizarlo', async () => {
    const onUnauthorized = vi.fn();
    const client = createJsonHttpClient({
      baseUrl: 'https://api.example/api/v1',
      onUnauthorized,
      fetch: vi.fn<typeof fetch>().mockResolvedValue(
        jsonResponse(
          {
            timestamp: '2026-10-03T12:00:00Z',
            status: 401,
            error: 'Unauthorized',
            message: 'Authentication is required to access this resource.',
            path: '/iam/me',
          },
          { status: 401 },
        ),
      ),
    });

    await expect(client.request({ path: '/iam/me', method: 'GET' })).rejects.toBeInstanceOf(
      ApiRequestError,
    );
    expect(onUnauthorized).toHaveBeenCalledOnce();
  });

  it('normaliza fallos de red sin exponer el error original', async () => {
    const client = createJsonHttpClient({
      baseUrl: 'https://api.example/api/v1',
      fetch: vi.fn<typeof fetch>().mockRejectedValue(new TypeError('DNS details')),
    });

    await expect(client.request({ path: '/iam/me', method: 'GET' })).rejects.toMatchObject({
      detail: {
        kind: 'network',
        message: 'No fue posible conectar con el servicio.',
      },
    });
  });

  it('propaga AbortSignal y distingue una cancelación', async () => {
    const controller = new AbortController();
    const fetcher = vi.fn<typeof fetch>().mockImplementation((_input, init) => {
      expect(init?.signal).toBe(controller.signal);
      controller.abort();
      return Promise.reject(new DOMException('Aborted', 'AbortError'));
    });
    const client = createJsonHttpClient({
      baseUrl: 'https://api.example/api/v1',
      fetch: fetcher,
    });

    await expect(
      client.request({ path: '/iam/me', method: 'GET', signal: controller.signal }),
    ).rejects.toMatchObject({ detail: { kind: 'aborted' } });
  });

  it('rechaza URLs absolutas antes de solicitar o enviar el token', async () => {
    const fetcher = vi.fn<typeof fetch>();
    const tokenProvider = vi.fn(() => 'secret-token');
    const client = createJsonHttpClient({
      baseUrl: 'https://api.example/api/v1',
      fetch: fetcher,
      getAccessToken: tokenProvider,
    });

    await expect(
      client.request({ path: 'https://attacker.example/collect', method: 'GET' }),
    ).rejects.toThrow(TypeError);
    expect(tokenProvider).not.toHaveBeenCalled();
    expect(fetcher).not.toHaveBeenCalled();
  });

  it('usa un error HTTP seguro para cuerpos no contractuales', async () => {
    const client = createJsonHttpClient({
      baseUrl: 'https://api.example/api/v1',
      fetch: vi
        .fn<typeof fetch>()
        .mockResolvedValue(new Response('<html>gateway error</html>', { status: 502 })),
    });

    try {
      await client.request({ path: '/iam/me', method: 'GET' });
      throw new Error('Expected request to fail');
    } catch (error) {
      expect(error).toBeInstanceOf(ApiRequestError);
      expect(error).toMatchObject({
        message: 'La solicitud no pudo completarse.',
        detail: { kind: 'http', status: 502 },
      });
      expect(String(error)).not.toContain('gateway error');
    }
  });
});
