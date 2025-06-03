import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrancePageComponent } from './EntrancePage.component';
import { EntrancePageRoutingModule } from './EntrancePage-routing.module';

@NgModule({
  declarations: [EntrancePageComponent],
  imports: [CommonModule, EntrancePageRoutingModule]
})
export class EntrancePageModule {}