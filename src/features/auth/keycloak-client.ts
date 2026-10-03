import Keycloak from 'keycloak-js';

import type { RuntimeConfig } from '../../config/runtime-config';

export const createKeycloakClient = (config: RuntimeConfig['keycloak']): Keycloak =>
  new Keycloak(config);
