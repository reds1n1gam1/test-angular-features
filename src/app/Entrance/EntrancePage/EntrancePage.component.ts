import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tap-entrance-page',
  template: `<p>EntrancePage works!</p>`,
  styleUrl: './EntrancePage.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntrancePageComponent { }
