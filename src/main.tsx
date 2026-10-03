import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { createRouter } from './app/router';
import { readRuntimeConfig } from './config/runtime-config';
import { AuthProvider } from './features/auth/AuthContext';
import { AuthSession } from './features/auth/auth-session';
import { createKeycloakClient } from './features/auth/keycloak-client';
import './styles/global.css';

const rootElement = document.querySelector('#root');

if (!(rootElement instanceof HTMLElement)) {
  throw new Error('No se encontró el elemento raíz de la aplicación.');
}

const root = createRoot(rootElement);

const renderStartupFailure = () => {
  root.render(
    <StrictMode>
      <main className="page" id="main-content" tabIndex={-1}>
        <section className="status-card" aria-labelledby="startup-error-title">
          <p className="eyebrow">Servicio no disponible</p>
          <h1 id="startup-error-title">No fue posible iniciar CIS-AM</h1>
          <p className="lead">Revisa la configuración pública y vuelve a cargar la aplicación.</p>
        </section>
      </main>
    </StrictMode>,
  );
};

const bootstrap = async () => {
  const config = readRuntimeConfig(import.meta.env);
  const session = new AuthSession({
    keycloak: createKeycloakClient(config.keycloak),
    apiBaseUrl: config.apiBaseUrl,
    browserOrigin: window.location.origin,
  });

  await session.initialize();

  root.render(
    <StrictMode>
      <AuthProvider session={session}>
        <RouterProvider router={createRouter()} />
      </AuthProvider>
    </StrictMode>,
  );
};

void bootstrap().catch(renderStartupFailure);
