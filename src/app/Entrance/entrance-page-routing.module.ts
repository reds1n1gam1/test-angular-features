import { Routes } from '@angular/router';
import { EntranceComponent } from './entrance.component';

export const entranceRoutes: Routes = [
  {
    path: '',
    component: EntranceComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./EntrancePage/entrance-page.module').then(m => m.EntrancePageModule)
      }
    ]
  }
];