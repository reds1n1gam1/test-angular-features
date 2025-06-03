import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playbook',
  imports: [],
  template: `<p>Playbook works!</p>`,
  styleUrl: './Playbook.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaybookComponent { }
