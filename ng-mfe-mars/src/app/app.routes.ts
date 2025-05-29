import { Routes } from '@angular/router';
import { EmptyComponent } from './micro-frontend/empty.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mars',
    pathMatch: 'full',
  },
  {
    path: 'mars',
    loadChildren: () => import('./views/mars.routes').then(m => m.MARS_ROUTES),
  },
  {
    path: '**',
    component: EmptyComponent,
  }
];
