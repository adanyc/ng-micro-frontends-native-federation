import { Routes } from '@angular/router';
import { VenusComponent } from './venus.component';

export const VENUS_ROUTES: Routes = [
  {
    path: '',
    component: VenusComponent,
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