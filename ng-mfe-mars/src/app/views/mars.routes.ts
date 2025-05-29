import { Routes } from '@angular/router';
import { MarsComponent } from './mars.component';

export const MARS_ROUTES: Routes = [
  {
    path: '',
    component: MarsComponent,
    children: [
      {
        path: '',
        redirectTo: 'atmosphere',
        pathMatch: 'full',
      },
      {
        path: 'atmosphere',
        loadComponent: () => import('./atmosphere/atmosphere.component').then(m => m.AtmosphereComponent),
      },
      {
        path: 'volcanoes',
        loadComponent: () => import('./volcanoes/volcanoes.component').then(m => m.VolcanoesComponent),
      },
    ],
  },
];