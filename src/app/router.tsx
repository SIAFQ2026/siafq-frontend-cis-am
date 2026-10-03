import { createBrowserRouter, type RouteObject } from 'react-router';

import { RequireAuthentication } from '../features/auth/RequireAuthentication';
import { AuthenticatedPage } from '../routes/AuthenticatedPage';
import { HomePage } from '../routes/HomePage';
import { LoginPage } from '../routes/LoginPage';
import { NotFoundPage } from '../routes/NotFoundPage';
import { AppLayout } from './AppLayout';

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'app',
        element: (
          <RequireAuthentication>
            <AuthenticatedPage />
          </RequireAuthentication>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const createRouter = () => createBrowserRouter(routes);
