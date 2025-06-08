import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaybookComponent } from './playbook.component';

const routes: Routes = [
    {
        path: '',
        component: PlaybookComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlaybookRoutingModule { }