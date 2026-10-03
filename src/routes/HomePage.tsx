import { Link } from 'react-router';

export function HomePage() {
  return (
    <main className="page" id="main-content" tabIndex={-1}>
      <section className="status-card" aria-labelledby="page-title">
        <p className="eyebrow">Base frontend</p>
        <h1 id="page-title">CIS-AM</h1>
        <p className="lead">
          La plataforma institucional valida su sesión con Keycloak y con el servicio IAM antes de
          abrir una ruta protegida.
        </p>
        <p className="status-message" role="status">
          Entrega E3: autenticación y sesión en memoria.
        </p>
        <Link className="primary-link" to="/app">
          Ingresar a CIS-AM
        </Link>
      </section>
    </main>
  );
}
