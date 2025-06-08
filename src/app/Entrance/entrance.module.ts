import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntranceRoutingModule } from './entrance-routing.module';
import { EntranceComponent } from './entrance.component';

@NgModule({
  imports: [
    CommonModule,
    EntranceRoutingModule
  ],
  declarations: [EntranceComponent]
})
export class EntranceModule { }