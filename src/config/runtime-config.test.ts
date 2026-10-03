import { describe, expect, it } from 'vitest';

import { readRuntimeConfig } from './runtime-config';

const validEnvironment = {
  VITE_API_BASE_URL: 'http://localhost:8080/api/v1',
  VITE_KEYCLOAK_URL: 'http://localhost:8081',
  VITE_KEYCLOAK_REALM: 'siafq',
  VITE_KEYCLOAK_CLIENT_ID: 'siafq-web',
};

describe('readRuntimeConfig', () => {
  it('acepta la configuración pública local documentada', () => {
    expect(readRuntimeConfig(validEnvironment)).toEqual({
      apiBaseUrl: 'http://localhost:8080/api/v1',
      keycloak: {
        url: 'http://localhost:8081',
        realm: 'siafq',
        clientId: 'siafq-web',
      },
    });
  });

  it('rechaza URLs con credenciales', () => {
    expect(() =>
      readRuntimeConfig({
        ...validEnvironment,
        VITE_KEYCLOAK_URL: 'https://user:password@identity.example',
      }),
    ).toThrow('VITE_KEYCLOAK_URL no puede contener credenciales');
  });
});
