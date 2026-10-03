import { useAuth } from '../features/auth/AuthContext';

export function AuthenticatedPage() {
  const { logout } = useAuth();

  return (
    <main className="page" id="main-content" tabIndex={-1}>
      <section className="status-card" aria-labelledby="authenticated-title">
        <p className="eyebrow">Sesión autenticada</p>
        <h1 id="authenticated-title">Acceso verificado</h1>
        <p className="lead">
          Keycloak autenticó la sesión e IAM confirmó al actor mediante <code>/iam/me</code>.
        </p>
        <p className="notice" role="status">
          Esta comprobación no determina institución, membresía, rol ni permisos.
        </p>
        <button className="secondary-button" type="button" onClick={() => void logout()}>
          Cerrar sesión
        </button>
      </section>
    </main>
  );
}
