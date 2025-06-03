import { Routes } from '@angular/router';
import { EntranceComponent } from './Entrance/Entrance.component';

export const entranceRoutes: Routes = [
  {
    path: '',
    component: EntranceComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./Entrance/EntrancePage/EntrancePage-routing.module').then(m => m.EntrancePageRoutingModule)
      }
    ]
  }
];

