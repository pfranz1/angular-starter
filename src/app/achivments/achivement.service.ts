import { Injectable, signal, WritableSignal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Achievements } from './achivement.enum';

@Injectable({
  providedIn: 'root',
})
export class AchivementService {
  achivementsOpened: WritableSignal<boolean> = signal(false);

  constructor(private localStorageService: LocalStorageService) {
    // Initialize the signal with the value from local storage
    this.achivementsOpened.set(
      (this.localStorageService.getItem(
        Achievements.OpeningAchievement,
      ) as boolean) || false,
    );
  }

  recordAchivmentsOpened() {
    this.localStorageService.setItem(Achievements.OpeningAchievement, true);
  }
}
