import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaybookRoutingModule } from './playbook-routing.module';
import { PlaybookComponent } from './playbook.component';

@NgModule({
  imports: [
    CommonModule,
    PlaybookRoutingModule
  ],
  declarations: [PlaybookComponent]
})
export class PlaybookModule { }