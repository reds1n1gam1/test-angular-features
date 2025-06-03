import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaybookRoutes } from './Playbook/playbook-routing.module.';
import { entranceRoutes } from './Entrance/entrance-page-routing.module';

const routes: Routes = [
  ...entranceRoutes,
  ...PlaybookRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
