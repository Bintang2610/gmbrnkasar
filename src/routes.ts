import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';
import { Router, Route } from "@solidjs/router"

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Emplist from './pages/emplist';
import Editemplist from './pages/edit-emplist';

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
    path: '/edit-employee',
    component: Editemplist,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
