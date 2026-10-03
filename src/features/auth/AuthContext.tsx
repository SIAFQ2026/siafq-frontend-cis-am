import { createContext, type ReactNode, useContext, useMemo, useSyncExternalStore } from 'react';

import { type AuthSession, type AuthSessionState } from './auth-session';

interface AuthContextValue {
  state: AuthSessionState;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  verifyActor: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ session, children }: { session: AuthSession; children: ReactNode }) {
  const state = useSyncExternalStore(session.subscribe, session.getSnapshot, session.getSnapshot);
  const value = useMemo(
    () => ({
      state,
      login: session.login,
      logout: session.logout,
      verifyActor: session.verifyActor,
    }),
    [session, state],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
}

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe utilizarse dentro de AuthProvider.');
  }

  return context;
};
