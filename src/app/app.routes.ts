import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout').then(m => m.Layout),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile').then(m => m.Profile)
      },
      {
        path: 'tables',
        loadComponent: () => import('./pages/tables/tables').then(m => m.Tables)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
