import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./entrance/entrance.module').then(m => m.EntranceModule)
  },
  {
    path: 'playbook',
    loadChildren: () => import('./playbook/playbook.module').then(m => m.PlaybookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
