import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/guards/auth.guards';

export const routes: Routes = [
  // rutas publicas
  {
    path: 'auth',
    canActivate: [publicGuard],
    loadChildren: () => import('./auth/features/auth.routes'),
  },
  // rutas privadas
  {
    path: '',
    canActivate: [privateGuard],
    loadComponent: () => import('./shared/ui/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
      },
      {
        path: 'products',
        loadChildren: () => import('./products/features/product.routes'),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
