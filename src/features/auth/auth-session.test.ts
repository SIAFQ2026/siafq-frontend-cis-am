import type { KeycloakInitOptions } from 'keycloak-js';
import { describe, expect, it, vi } from 'vitest';

import { AuthSession, type KeycloakClient } from './auth-session';

const iamActor = {
  issuer: 'http://localhost:8081/realms/siafq',
  subject: 'actor-id',
  username: 'local-test',
};

const iamError = {
  timestamp: '2026-10-03T12:00:00Z',
  status: 401,
  error: 'Unauthorized',
  message: 'Authentication is required to access this resource.',
  path: '/iam/me',
};

const createKeycloak = (authenticated = true): KeycloakClient => ({
  authenticated,
  ...(authenticated ? { token: 'access-token' } : {}),
  init: vi.fn(async () => authenticated),
  login: vi.fn(async () => undefined),
  logout: vi.fn(async () => undefined),
  updateToken: vi.fn(async () => false),
  clearToken: vi.fn(),
});

const createSession = (keycloak: KeycloakClient, response: Response): AuthSession =>
  new AuthSession({
    keycloak,
    apiBaseUrl: 'http://localhost:8080/api/v1',
    browserOrigin: 'http://localhost:3001',
    fetch: vi.fn<typeof fetch>().mockResolvedValue(response),
  });

describe('AuthSession', () => {
  it('inicializa Authorization Code con PKCE S256 y valida la sesión en IAM', async () => {
    const keycloak = createKeycloak();
    const session = createSession(
      keycloak,
      new Response(JSON.stringify(iamActor), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      }),
    );

    await session.initialize();

    expect(keycloak.init).toHaveBeenCalledWith({
      onLoad: 'check-sso',
      flow: 'standard',
      pkceMethod: 'S256',
      redirectUri: 'http://localhost:3001/',
      checkLoginIframe: true,
      enableLogging: false,
    } satisfies KeycloakInitOptions);
    expect(keycloak.updateToken).toHaveBeenCalledWith(30);
    expect(session.getSnapshot()).toEqual({ status: 'authenticated', actor: iamActor });
  });

  it('permanece anónima cuando Keycloak no tiene una sesión', async () => {
    const keycloak = createKeycloak(false);
    const session = createSession(keycloak, new Response(null, { status: 500 }));

    await session.initialize();

    expect(session.getSnapshot()).toEqual({ status: 'anonymous' });
    expect(keycloak.updateToken).not.toHaveBeenCalled();
  });

  it('elimina los tokens y cierra sesión ante un 401 de IAM', async () => {
    const keycloak = createKeycloak();
    const session = createSession(
      keycloak,
      new Response(JSON.stringify(iamError), {
        status: 401,
        headers: { 'content-type': 'application/json' },
      }),
    );

    await session.initialize();

    expect(keycloak.clearToken).toHaveBeenCalledOnce();
    expect(keycloak.logout).toHaveBeenCalledWith({ redirectUri: 'http://localhost:3001/' });
    expect(session.getSnapshot()).toEqual({ status: 'anonymous' });
  });

  it('renueva al vencer y cierra sesión si la renovación falla', async () => {
    const keycloak = createKeycloak();
    const updateToken = vi.mocked(keycloak.updateToken);
    updateToken.mockResolvedValueOnce(false).mockRejectedValueOnce(new Error('expired'));
    const session = createSession(
      keycloak,
      new Response(JSON.stringify(iamActor), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      }),
    );
    await session.initialize();

    keycloak.onTokenExpired?.();

    await vi.waitFor(() => expect(keycloak.logout).toHaveBeenCalledOnce());
    expect(keycloak.clearToken).toHaveBeenCalledOnce();
    expect(session.getSnapshot()).toEqual({ status: 'anonymous' });
  });

  it('usa redirects locales y no persiste credenciales desde la sesión', async () => {
    const keycloak = createKeycloak(false);
    const session = createSession(keycloak, new Response(null, { status: 500 }));
    const localStorageSpy = vi.spyOn(Storage.prototype, 'setItem');

    await session.initialize();
    await session.login();

    expect(keycloak.login).toHaveBeenCalledWith({ redirectUri: 'http://localhost:3001/app' });
    expect(localStorageSpy).not.toHaveBeenCalled();
    localStorageSpy.mockRestore();
  });
});
