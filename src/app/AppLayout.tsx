import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>

      <header className="app-header">
        <div className="app-header__content">
          <span className="app-brand">SIAFQ+</span>
          <span className="app-product">CIS-AM</span>
        </div>
      </header>

      <Outlet />

      <footer className="app-footer">
        <p>Sistema Integral Académico, Financiero y de Calidad</p>
      </footer>
    </div>
  );
}
