import { Navigate } from 'react-router';

import { useAuth } from '../features/auth/AuthContext';

export function LoginPage() {
  const { state, login, verifyActor } = useAuth();

  if (state.status === 'authenticated') {
    return <Navigate replace to="/app" />;
  }

  const unavailable = state.status === 'unavailable';

  return (
    <main className="page" id="main-content" tabIndex={-1}>
      <section className="status-card" aria-labelledby="login-title">
        <p className="eyebrow">Acceso institucional</p>
        <h1 id="login-title">Iniciar sesión</h1>
        <p className="lead">
          Las credenciales se ingresan únicamente en Keycloak. CIS-AM no solicita ni almacena
          contraseñas.
        </p>

        {unavailable ? (
          <div className="notice" role="alert">
            <p>No fue posible comprobar la sesión con los servicios de identidad.</p>
            {state.source === 'backend' ? (
              <button className="secondary-button" type="button" onClick={() => void verifyActor()}>
                Reintentar comprobación
              </button>
            ) : (
              <a className="text-link" href="/login">
                Reintentar inicio
              </a>
            )}
          </div>
        ) : (
          <button className="primary-button" type="button" onClick={() => void login()}>
            Continuar con Keycloak
          </button>
        )}
      </section>
    </main>
  );
}
