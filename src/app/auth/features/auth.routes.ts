import { Routes } from '@angular/router';

export default [
  {
    path: 'log-in',
    loadComponent: () => import('./log-in/log-in.component'),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.component'),
  },
] as Routes;
