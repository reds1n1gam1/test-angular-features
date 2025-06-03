import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playbook-page',
  template: `<p>PlaybookPage works!</p>`,
  styleUrl: './PlaybookPage.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaybookPageComponent { }
