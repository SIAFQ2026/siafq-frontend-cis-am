import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <main className="page" id="main-content" tabIndex={-1}>
      <section className="status-card" aria-labelledby="not-found-title">
        <p className="eyebrow">Error 404</p>
        <h1 id="not-found-title">Página no encontrada</h1>
        <p className="lead">La dirección solicitada no pertenece a la base actual de CIS-AM.</p>
        <Link className="text-link" to="/">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
