import type { KeycloakInitOptions, KeycloakLoginOptions, KeycloakLogoutOptions } from 'keycloak-js';

import type { components as IamComponents } from '../../shared/api/generated/iam-api';
import { ApiRequestError, createJsonHttpClient, type JsonHttpClient } from '../../shared/api/http';

export type CurrentActor = IamComponents['schemas']['CurrentActorResponse'];

export type AuthSessionState =
  | { status: 'initializing' }
  | { status: 'anonymous' }
  | { status: 'authenticated'; actor: CurrentActor }
  | { status: 'unavailable'; source: 'identity' | 'backend' };

export interface KeycloakClient {
  authenticated: boolean;
  token?: string;
  onAuthLogout?: () => void;
  onAuthRefreshError?: () => void;
  onTokenExpired?: () => void;
  init(options: KeycloakInitOptions): Promise<boolean>;
  login(options?: KeycloakLoginOptions): Promise<void>;
  logout(options?: KeycloakLogoutOptions): Promise<void>;
  updateToken(minValidity?: number): Promise<boolean>;
  clearToken(): void;
}

export interface AuthSessionOptions {
  keycloak: KeycloakClient;
  apiBaseUrl: string;
  browserOrigin: string;
  fetch?: typeof fetch;
}

const isUnauthorized = (error: unknown): boolean =>
  error instanceof ApiRequestError && 'status' in error.detail && error.detail.status === 401;

class SessionEndedError extends Error {}

export class AuthSession {
  private readonly keycloak: KeycloakClient;
  private readonly browserOrigin: string;
  private readonly httpClient: JsonHttpClient;
  private readonly listeners = new Set<() => void>();
  private state: AuthSessionState = { status: 'initializing' };
  private initialization?: Promise<void>;
  private refresh: Promise<string | null> | undefined;
  private expiration: Promise<void> | undefined;

  constructor({ keycloak, apiBaseUrl, browserOrigin, fetch }: AuthSessionOptions) {
    this.keycloak = keycloak;
    this.browserOrigin = new URL(browserOrigin).origin;
    this.httpClient = createJsonHttpClient({
      baseUrl: apiBaseUrl,
      getAccessToken: this.getAccessToken,
      onUnauthorized: this.expireSession,
      ...(fetch ? { fetch } : {}),
    });
  }

  readonly getSnapshot = (): AuthSessionState => this.state;

  readonly subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  readonly initialize = (): Promise<void> => {
    this.initialization ??= this.initializeOnce();
    return this.initialization;
  };

  readonly login = async (): Promise<void> => {
    const redirectUri = new URL('/app', this.browserOrigin).href;
    await this.keycloak.login({ redirectUri });
  };

  readonly logout = async (): Promise<void> => {
    await this.expireSession();
  };

  readonly verifyActor = async (): Promise<void> => {
    if (!this.keycloak.authenticated) {
      this.setState({ status: 'anonymous' });
      return;
    }

    try {
      const { data: actor } = await this.httpClient.request<CurrentActor>({
        path: '/iam/me',
        method: 'GET',
      });
      this.setState({ status: 'authenticated', actor });
    } catch (error) {
      if (isUnauthorized(error) || error instanceof SessionEndedError) {
        this.setState({ status: 'anonymous' });
        return;
      }

      this.setState({ status: 'unavailable', source: 'backend' });
    }
  };

  private readonly getAccessToken = async (): Promise<string | null> => {
    if (!this.keycloak.authenticated) {
      return null;
    }

    this.refresh ??= this.refreshAccessToken().finally(() => {
      this.refresh = undefined;
    });

    return this.refresh;
  };

  private async initializeOnce(): Promise<void> {
    this.keycloak.onTokenExpired = () => {
      void this.getAccessToken().catch(() => undefined);
    };
    this.keycloak.onAuthRefreshError = () => {
      void this.expireSession();
    };
    this.keycloak.onAuthLogout = () => {
      this.setState({ status: 'anonymous' });
    };

    try {
      const authenticated = await this.keycloak.init({
        onLoad: 'check-sso',
        flow: 'standard',
        pkceMethod: 'S256',
        redirectUri: new URL('/', this.browserOrigin).href,
        checkLoginIframe: true,
        enableLogging: false,
      });

      if (!authenticated) {
        this.setState({ status: 'anonymous' });
        return;
      }

      await this.verifyActor();
    } catch {
      this.setState({ status: 'unavailable', source: 'identity' });
    }
  }

  private async refreshAccessToken(): Promise<string | null> {
    try {
      await this.keycloak.updateToken(30);
    } catch {
      await this.expireSession();
      throw new SessionEndedError();
    }

    if (!this.keycloak.token) {
      await this.expireSession();
      throw new SessionEndedError();
    }

    return this.keycloak.token;
  }

  private readonly expireSession = (): Promise<void> => {
    this.expiration ??= this.expireSessionOnce().finally(() => {
      this.expiration = undefined;
    });
    return this.expiration;
  };

  private async expireSessionOnce(): Promise<void> {
    this.keycloak.clearToken();
    this.setState({ status: 'anonymous' });

    try {
      await this.keycloak.logout({ redirectUri: new URL('/', this.browserOrigin).href });
    } catch {
      // La sesión local ya está invalidada. No se registran tokens ni detalles del proveedor.
    }
  }

  private setState(state: AuthSessionState): void {
    this.state = state;
    this.listeners.forEach((listener) => listener());
  }
}
