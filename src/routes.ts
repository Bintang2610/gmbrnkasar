import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Emplist from './pages/emplist';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/employee',
    component: Emplist,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
