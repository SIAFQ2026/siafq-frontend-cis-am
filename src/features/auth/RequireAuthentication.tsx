import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

import { useAuth } from './AuthContext';

export function RequireAuthentication({ children }: { children: ReactNode }) {
  const { state } = useAuth();

  if (state.status === 'authenticated') {
    return children;
  }

  if (state.status === 'initializing') {
    return (
      <main className="page" id="main-content" tabIndex={-1}>
        <p role="status">Comprobando la sesión…</p>
      </main>
    );
  }

  return <Navigate replace to="/login" />;
}
