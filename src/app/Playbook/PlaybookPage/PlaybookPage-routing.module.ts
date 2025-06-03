import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaybookPageComponent } from './PlaybookPage.component';

const routes: Routes = [
  { path: '', component: PlaybookPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaybookPageRoutingModule { }