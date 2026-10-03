import { ApiRequestError, normalizeApiError } from './errors';

export type AccessTokenProvider = () => Promise<string | null> | string | null;

export interface JsonHttpClientOptions {
  baseUrl: string;
  fetch?: typeof fetch;
  getAccessToken?: AccessTokenProvider;
  onUnauthorized?: () => Promise<void> | void;
}

export interface JsonRequest<TBody = never> {
  path: string;
  method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
  body?: TBody;
  signal?: AbortSignal;
  requestId?: string;
  correlationId?: string;
  idempotencyKey?: string;
}

export interface JsonResponse<TData> {
  data: TData;
  status: number;
  requestId: string | null;
  correlationId: string | null;
}

export interface JsonHttpClient {
  request<TData, TBody = never>(request: JsonRequest<TBody>): Promise<JsonResponse<TData>>;
}

const normalizeBaseUrl = (baseUrl: string): string => {
  const url = new URL(baseUrl);

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new TypeError('La URL base debe usar HTTP o HTTPS.');
  }

  if (url.search || url.hash) {
    throw new TypeError('La URL base no puede contener query ni fragmento.');
  }

  return url.toString().replace(/\/$/, '');
};

const resolveRequestUrl = (baseUrl: string, path: string): string => {
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('\\')) {
    throw new TypeError('La ruta HTTP debe ser relativa al servicio y comenzar con una sola /.');
  }

  return `${baseUrl}${path}`;
};

const isJsonContent = (contentType: string | null): boolean =>
  contentType?.toLowerCase().includes('json') ?? false;

const parseBody = (contents: string, contentType: string | null): unknown => {
  if (!contents || !isJsonContent(contentType)) {
    return undefined;
  }

  try {
    return JSON.parse(contents) as unknown;
  } catch {
    return undefined;
  }
};

const isAbortError = (error: unknown, signal?: AbortSignal): boolean =>
  signal?.aborted === true ||
  (error instanceof DOMException && error.name === 'AbortError') ||
  (typeof error === 'object' && error !== null && 'name' in error && error.name === 'AbortError');

export const createJsonHttpClient = ({
  baseUrl,
  fetch: fetchImplementation = globalThis.fetch,
  getAccessToken,
  onUnauthorized,
}: JsonHttpClientOptions): JsonHttpClient => {
  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);

  return {
    async request<TData, TBody = never>({
      path,
      method,
      body,
      signal,
      requestId,
      correlationId,
      idempotencyKey,
    }: JsonRequest<TBody>): Promise<JsonResponse<TData>> {
      const url = resolveRequestUrl(normalizedBaseUrl, path);
      const headers = new Headers({ Accept: 'application/json, application/problem+json' });
      const accessToken = (await getAccessToken?.())?.trim();

      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }

      if (requestId) {
        headers.set('x-request-id', requestId);
      }

      if (correlationId) {
        headers.set('x-correlation-id', correlationId);
      }

      if (idempotencyKey) {
        headers.set('x-idempotency-key', idempotencyKey);
      }

      let serializedBody: string | undefined;

      if (body !== undefined) {
        headers.set('Content-Type', 'application/json');
        serializedBody = JSON.stringify(body);
      }

      let response: Response;
      const requestInit: RequestInit = {
        method,
        headers,
        credentials: 'omit',
      };

      if (serializedBody !== undefined) {
        requestInit.body = serializedBody;
      }

      if (signal !== undefined) {
        requestInit.signal = signal;
      }

      try {
        response = await fetchImplementation(url, requestInit);
      } catch (error) {
        if (isAbortError(error, signal)) {
          throw new ApiRequestError(
            { kind: 'aborted', message: 'La solicitud fue cancelada.' },
            { cause: error },
          );
        }

        throw new ApiRequestError(
          { kind: 'network', message: 'No fue posible conectar con el servicio.' },
          { cause: error },
        );
      }

      const contents = await response.text();
      const parsedBody = parseBody(contents, response.headers.get('content-type'));

      if (!response.ok) {
        const requestError = new ApiRequestError(normalizeApiError(response.status, parsedBody));

        if (response.status === 401) {
          await onUnauthorized?.();
        }

        throw requestError;
      }

      if (contents && parsedBody === undefined) {
        throw new ApiRequestError({
          kind: 'invalid-response',
          status: response.status,
          message: 'El servicio devolvió una respuesta no válida.',
        });
      }

      return {
        data: parsedBody as TData,
        status: response.status,
        requestId: response.headers.get('x-request-id'),
        correlationId: response.headers.get('x-correlation-id'),
      };
    },
  };
};
