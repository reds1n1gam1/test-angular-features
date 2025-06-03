import { Routes } from '@angular/router';
import { PlaybookComponent } from './playbook.component';

export const playbookRoutes: Routes = [
  {
    path: 'playbook',
    component: PlaybookComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./PlaybookPage/PlaybookPage.module.').then(m => m.PlaybookModule)
      }
    ]
  }
];