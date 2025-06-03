import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-entrance-page',
  imports: [],
  template: `<p>EntrancePage works!</p>`,
  styleUrl: './EntrancePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntrancePageComponent { }
