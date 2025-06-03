import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrancePageComponent } from './EntrancePage.component';

const routes: Routes = [
  { path: '', component: EntrancePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrancePageRoutingModule {}