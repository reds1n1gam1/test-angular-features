import { Component, inject } from '@angular/core';
import { CheckForUpdateService, LogUpdateService } from '@tpa/utils/sw-update';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly checkForUpdate = inject(CheckForUpdateService);
  private readonly logServiceWorker = inject(LogUpdateService)

  title = 'test-project-app';
}
