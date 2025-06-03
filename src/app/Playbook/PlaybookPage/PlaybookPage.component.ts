import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playbook-page',
  imports: [],
  template: `<p>PlaybookPage works!</p>`,
  styleUrl: './PlaybookPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaybookPageComponent { }
