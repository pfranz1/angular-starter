import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import {
  Achievement,
  AchievementName,
  AchievementStateType,
  StarterAchivement,
  StarterAchvimentState,
  TravelAchivement,
  TravelAchivementState,
  TestAchivement,
  TestAchivementState,
  GardenerAchivement,
  GardenerAchivementState,
} from './achievement';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { OverlayComponent } from './overlay.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class AchivementService {
  readonly achivements: Achievement<AchievementStateType>[];

  public getAchievements(): Achievement<AchievementStateType>[] {
    return this.achivements;
  }

  public static overrideMatching(
    partialState: Partial<AchievementStateType>,
    currentState: AchievementStateType,
  ): AchievementStateType {
    return { ...currentState, ...partialState };
  }

  public static addMatching(
    partialState: Partial<AchievementStateType>,
    currentState: AchievementStateType,
  ) {
    // Itterates over the keys of the partialState and adds them to the currentState
    Object.keys(partialState).forEach((key) => {
      // @ts-expect-error We can't guarantee that the keys of partialState are the same as currentState
      currentState[key] += partialState[key];
    });
    return currentState;
  }

  public updateState(
    partialState: Partial<AchievementStateType>,
    name: AchievementName,
    strategy = AchivementService.overrideMatching,
  ): void {
    const achievement = this.achivements.find((a) => a.name === name);
    if (achievement && !achievement.isAchieved()) {
      achievement.state = strategy(partialState, achievement.state);
      this.saveState(achievement);

      if (achievement.isAchieved()) {
        console.log(`Achievement ${achievement.name} achieved!`);
        this.displayOverlay(achievement);
      }
    } else if (!achievement) {
      console.warn(`Achievement with name ${name} not found.`);
    }
  }

  public clearAchievementStorage(): void {
    this.localStorageService.clear();
  }

  public getAllLocalStorage(): string {
    return this.localStorageService.getAllItems() as string;
  }

  constructor(
    private localStorageService: LocalStorageService,
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
  ) {
    this.achivements = [
      new StarterAchivement(
        (this.loadState(AchievementName.Starter) as StarterAchvimentState) || {
          achivmentPageOpened: false,
        },
      ),
      new TravelAchivement(
        (this.loadState(AchievementName.Travel) as TravelAchivementState) || {
          experienceVisited: false,
          skillsVisited: false,
          achievementsVisited: false,
          aboutVisited: false,
          projectsVisited: false,
        },
      ),
      new TestAchivement(
        (this.loadState(AchievementName.Test) as TestAchivementState) || {
          testCompleted: false,
        },
      ),
      new GardenerAchivement(
        (this.loadState(
          AchievementName.Gardener,
        ) as GardenerAchivementState) || {
          leavesSnipped: 0,
        },
      ),
    ];
  }

  /**
   * Loads the state of an achievement from local storage.
   * @param achievementName The name of the achievement whose state is to be loaded.
   * @returns The state of the achievement or null if not found.
   */
  private loadState(
    achievementName: AchievementName,
  ): AchievementStateType | null {
    const state = this.localStorageService.getItem(achievementName);
    if (state) {
      return state as AchievementStateType;
    }
    return null;
  }

  /**
   * Saves the state of an achievement to local storage.
   * @param achievement The achievement whose state is to be saved.
   */
  private saveState(
    achievement: Achievement<AchievementStateType> | null,
  ): void {
    if (!achievement) return;
    this.localStorageService.setItem(achievement.name, achievement.state);
  }

  /**
   * Displays an overlay for the given achievement.
   * The overlay is centered globally and displays the achievement details.
   * @param achievement The achievement to display in the overlay.
   */
  displayOverlay(achievement: Achievement<AchievementStateType>): void {
    // Center the overlay globally
    const positionStrategy = this.overlayPositionBuilder
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      panelClass: 'achievement-overlay-panel',
      width: '320px',
      height: '100%',
    });

    // Attach the OverlayComponent dynamically
    const portal = new ComponentPortal(OverlayComponent);
    const componentRef = overlayRef.attach(portal);

    componentRef.instance.achievement = achievement;

    componentRef.instance.closed.subscribe(() => {
      overlayRef.dispose();
    });
  }
}
