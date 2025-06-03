import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaybookPageComponent } from './PlaybookPage.component';
import { PlaybookPageRoutingModule } from './PlaybookPage-routing.module';

@NgModule({
  declarations: [PlaybookPageComponent],
  imports: [CommonModule, PlaybookPageRoutingModule]
})
export class PlaybookModule {}