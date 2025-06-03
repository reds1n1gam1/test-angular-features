import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntranceComponent } from './entrance.component';
import { EntrancePageRoutingModule } from './EntrancePage/EntrancePage-routing.module';

@NgModule({
  declarations: [EntranceComponent],
  imports: [CommonModule, EntrancePageRoutingModule]
})
export class FeatureBModule {}