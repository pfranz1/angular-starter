import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AchivementService } from '../../achievements/achivement.service';
import {
  AchievementName,
  TravelAchivementState,
} from '../../achievements/achievement';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',

  imports: [],
  template: `
    <div class="flex flex-wrap gap-8 justify-center items-center w-full mt-8">
      @for (
        achievement of this.achievementService.getAchievements();
        track achievement.name
      ) {
        <div class="max-w-md w-full relative flex-shrink-0">
          <div
            class="bg-slate-100 overflow-hidden max-w-md w-full relative flex-shrink-0 rounded-3xl"
            style="flex-basis: 320px;"
          >
            <div
              class="bg-slate-800 text-slate-100 font-bold pb-2 text-3xl px-6 py-4 mx-8 my-6 text-center tracking-widest"
            >
              <span>{{ achievement.name }}</span>
            </div>
            <div
              class="min-h-[200px] flex items-center justify-center relative px-6 pb-0 mt-6 mx-8 bg-slate-300 text-black-300 text-4xl text-center"
            >
              <p class="text-left">{{ achievement.description }}</p>
            </div>

            <div
              class="flex items-center justify-center relative h-14 px-6 mb-6 mx-8 bg-slate-300 text-slate-400 text-lg text-center"
            >
              <p
                [class]="'m-b-2 italic'"
                [classList]="
                  achievement.isAchieved()
                    ? 'text-slate-900 '
                    : 'text-sltae-300'
                "
              >
                {{
                  achievement.isAchieved()
                    ? '- Complete -'
                    : achievement.percentComplete() + '% complete'
                }}
              </p>

              <div
                class="absolute bottom-0 right-0 bg-white rounded-full shadow w-32 h-32 flex items-center justify-center border-4 border-5 border-transparent"
                style="transform: translate(25%, 20%);"
              >
                <div
                  class="border-8 border-slate-400 rounded-full p-2 shadow-sm bg-slate-500"
                >
                  <img
                    class=""
                    [classList]="
                      achievement.isAchieved()
                        ? 'm-3 w-14 h-14 object-contain'
                        : 'm-3 grayscale w-14 h-14 object-contain opacity-75 blur-sm'
                    "
                    [src]="achievement.icon"
                    [alt]="achievement.name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementsComponent implements OnInit {
  constructor(public achievementService: AchivementService) {}

  ngOnInit() {
    this.achievementService.updateState(
      { achivmentPageOpened: true },
      AchievementName.Starter,
    );

    const stateUpdate: Partial<TravelAchivementState> = {
      achievementsVisited: true,
    };

    this.achievementService.updateState(stateUpdate, AchievementName.Travel);
  }

  testDisplayAchievement() {
    this.achievementService.displayOverlay(
      this.achievementService.getAchievements()[0],
    );
  }
}
