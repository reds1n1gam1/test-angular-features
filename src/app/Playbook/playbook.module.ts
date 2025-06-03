import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaybookComponent } from './playbook.component';
import { PlaybookPageRoutingModule } from './PlaybookPage/PlaybookPage-routing.module';

@NgModule({
  declarations: [PlaybookComponent],
  imports: [CommonModule, PlaybookPageRoutingModule]
})
export class FeatureBModule {}