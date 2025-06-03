import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { playbookRoutes } from './Playbook/playbook-routing.module.';
import { entranceRoutes } from './Entrance/entrance-page-routing.module';

const routes: Routes = [
  ...entranceRoutes,
  ...playbookRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
