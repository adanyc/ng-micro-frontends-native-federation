import { Routes } from '@angular/router';
import { EmptyComponent } from './micro-frontend/empty.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'venus',
    pathMatch: 'full',
  },
  {
    path: 'venus',
    loadChildren: () => import('./views/venus.routes').then(m => m.VENUS_ROUTES),
  },
  {
    path: '**',
    component: EmptyComponent,
  }
];
