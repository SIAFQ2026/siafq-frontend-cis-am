export interface RuntimeConfig {
  apiBaseUrl: string;
  keycloak: {
    url: string;
    realm: string;
    clientId: string;
  };
}

type PublicEnvironment = Pick<
  ImportMetaEnv,
  'VITE_API_BASE_URL' | 'VITE_KEYCLOAK_CLIENT_ID' | 'VITE_KEYCLOAK_REALM' | 'VITE_KEYCLOAK_URL'
>;

const required = (name: keyof PublicEnvironment, value: string | undefined): string => {
  if (!value?.trim()) {
    throw new Error(`Falta la variable pública ${name}.`);
  }

  return value.trim();
};

const publicHttpUrl = (name: keyof PublicEnvironment, value: string | undefined): string => {
  const configuredValue = required(name, value);
  const url = new URL(configuredValue);

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error(`${name} debe usar HTTP o HTTPS.`);
  }

  if (url.username || url.password || url.search || url.hash) {
    throw new Error(`${name} no puede contener credenciales, query ni fragmento.`);
  }

  return url.toString().replace(/\/$/, '');
};

export const readRuntimeConfig = (environment: PublicEnvironment): RuntimeConfig => ({
  apiBaseUrl: publicHttpUrl('VITE_API_BASE_URL', environment.VITE_API_BASE_URL),
  keycloak: {
    url: publicHttpUrl('VITE_KEYCLOAK_URL', environment.VITE_KEYCLOAK_URL),
    realm: required('VITE_KEYCLOAK_REALM', environment.VITE_KEYCLOAK_REALM),
    clientId: required('VITE_KEYCLOAK_CLIENT_ID', environment.VITE_KEYCLOAK_CLIENT_ID),
  },
});
