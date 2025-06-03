import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaybookComponent } from './Playbook.component';

export const PlaybookRoutes: Routes = [
  {
    path: '',
    component: PlaybookComponent,
    children: [
      {
        path: 'playbook',
        loadChildren: () => import('./PlaybookPage/PlaybookPage-routing.module').then(m => m.PlaybookPageRoutingModule)
      }
    ]
  }
];