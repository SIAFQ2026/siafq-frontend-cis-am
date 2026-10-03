import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

import { AuthProvider } from '../features/auth/AuthContext';
import { AuthSession, type KeycloakClient } from '../features/auth/auth-session';
import { routes } from './router';

describe('enrutamiento base', () => {
  it('muestra la página inicial de CIS-AM', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });

    render(<RouterProvider router={router} />);

    expect(screen.getByRole('heading', { level: 1, name: 'CIS-AM' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Entrega E3');
  });

  it('permite regresar desde una ruta inexistente', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ['/ruta-inexistente'] });

    render(<RouterProvider router={router} />);

    await user.click(screen.getByRole('link', { name: 'Volver al inicio' }));

    expect(screen.getByRole('heading', { level: 1, name: 'CIS-AM' })).toBeInTheDocument();
  });

  it('redirige una ruta protegida al acceso cuando no existe sesión', async () => {
    const keycloak: KeycloakClient = {
      authenticated: false,
      init: vi.fn(async () => false),
      login: vi.fn(async () => undefined),
      logout: vi.fn(async () => undefined),
      updateToken: vi.fn(async () => false),
      clearToken: vi.fn(),
    };
    const session = new AuthSession({
      keycloak,
      apiBaseUrl: 'http://localhost:8080/api/v1',
      browserOrigin: 'http://localhost:3001',
    });
    await session.initialize();
    const router = createMemoryRouter(routes, { initialEntries: ['/app'] });

    render(
      <AuthProvider session={session}>
        <RouterProvider router={router} />
      </AuthProvider>,
    );

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Iniciar sesión' }),
    ).toBeInTheDocument();
  });
});
