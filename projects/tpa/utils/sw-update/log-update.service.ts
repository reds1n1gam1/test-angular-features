import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({providedIn: 'root'})
export class LogUpdateService {

  constructor(updates: SwUpdate) {
    updates.versionUpdates.subscribe(evt => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.warn(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.warn(`Current app version: ${evt.currentVersion.hash}`);
          console.warn(`New app version ready for use: ${evt.latestVersion.hash}`);
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.warn(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
          break;
        default:
          console.warn(`${evt.type} Default case`)
      }
    });
  }
}