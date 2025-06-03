import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-entrance',
  imports: [],
  template: `<p>Entrance works!</p>`,
  styleUrl: './Entrance.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntranceComponent { }
