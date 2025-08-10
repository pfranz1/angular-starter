import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header.component';
import { Experiences, Experience } from './experience.interface';
import { AchivementService } from '../../achievements/achivement.service';
import {
  AchievementName,
  TravelAchivementState,
} from '../../achievements/achievement';
import { DatePipe, NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [SectionHeaderComponent, DatePipe, NgTemplateOutlet, NgClass],
  template: `
    <app-section-header title="Experience" />
    <div class="flex flex-col gap-12 mt-8 pl-8 pr-8 mb-8">
      @for (exp of this.experiences; track exp.startDate) {
        <div
          class=" shadow-lg rounded-[60px]"
          [ngClass]="
            $even
              ? 'sm:rounded-l-[150px] exp-gradient-l'
              : 'sm:rounded-r-[150px] exp-gradient-r'
          "
        >
          <div class=" flex flex-col items-stretch overflow-hidden">
            <div class="flex flex-row justify-center">
              <h2
                class="max-md:whitespace-break-spaces concave-h2 text-2xl md:text-4xl text-slate-300 bg-slate-800 width-full max-w-[20rem] sm:max-w-[30rem] lg:max-w-[40rem] p-8 text-center pt-10 pb-10"
              >
                {{ exp.role }}
                <br />
                <span class="tracking-tighter text-xl font-light opacity-90">
                  {{ exp.company }}
                </span>
              </h2>
            </div>

            <div class="flex flex-row items-strech overflow-hidden pt-2 pb-4">
              @if ($even) {
                <ng-container *ngTemplateOutlet="image"> </ng-container>
                <ng-container *ngTemplateOutlet="text"> </ng-container>
              } @else {
                <ng-container *ngTemplateOutlet="text"> </ng-container>
                <ng-container *ngTemplateOutlet="image"> </ng-container>
              }
            </div>
            <ng-template #image>
              <div
                class="flex flex-col items-center justify-center w-1/3 p-6 pt-1 pl-10"
              >
                <div
                  class="flex items-center justify-center w-[250px] h-[250px] overflow-hidden mb-2 m-5 rounded-full bg-white "
                  [style]="'outline: 7px ' + exp.logoColor + ' double'"
                >
                  <img
                    [src]="exp.logo"
                    [alt]="exp.company"
                    class="object-contain w-full h-full m-5 "
                    width="250"
                    height="250"
                  />
                </div>
                <div class="text-lg text-slate-800 font-semibold mt-1">
                  {{ exp.startDate | date: 'MMMM yyyy' }} -
                  {{
                    exp.endDate ? (exp.endDate | date: 'MMMM yyyy') : 'Present'
                  }}
                </div>

                <div class="text-lg text-slate-500 font-semibold mt-1">
                  {{ getDuration(exp.startDate, exp.endDate) }}
                </div>
                @if (exp.workType) {
                  <div class="italic text-md text-slate-500">
                    {{ exp.workType }}
                  </div>
                }
              </div>
            </ng-template>

            <ng-template #text>
              <div
                class="flex flex-col justify-top w-2/3 p-8 pt-1 whitespace-break-spaces"
              >
                <div class="h-full flex justify-around flex-col">
                  @for (a of exp.accomplishments; track a.desc) {
                    <div class="flex w-full items-center gap-4">
                      <div
                        class="flex-shrink-0 w-1/7 flex justify-around flex-col text-center"
                      >
                        <div
                          class="pentagon-border-container drop-shadow-lg flex items-center justify-center w-[85px] h-[85px] relative"
                        >
                          <div
                            class="pentagon-border absolute top-0 left-auto right-auto w-[85px] h-[85px]"
                          ></div>
                          <div
                            class="pentagon-container relative w-[75px] h-[75px] flex justify-center items-center"
                          >
                            <img
                              [src]="a.skill.icon"
                              [alt]="a.skill.name"
                              class="object-contain w-[55px] h-[55px]"
                              width="55"
                              height="55"
                            />
                          </div>
                        </div>
                        <div>
                          <h3
                            class="pt-1 font-semibold text-slate-600 font-bold"
                          >
                            {{ a.skill.name }}
                          </h3>
                        </div>
                      </div>
                      <div class="w-6/7">
                        <p class="indent-5 mt-3 text-lg text-left ">
                          {{ a.desc }}
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </ng-template>
          </div>
        </div>
      }
    </div>
  `,
  styles: `
    .exp-gradient-l {
      background: linear-gradient(
        90deg,
        oklch(87% 0.065 274.039) 15%,
        oklch(93.2% 0.032 255.585) 100%
      );
    }

    .exp-gradient-r {
      background: linear-gradient(
        270deg,
        oklch(87% 0.065 274.039) 15%,
        oklch(93.2% 0.032 255.585) 100%
      );
    }

    .concave-h2 {
      position: relative;
      overflow: hidden;
      border-radius: 0 0 60px 60px / 0 0 40px 40px;
      /* fallback for browsers without clip-path support */
      z-index: 1;
      /* Concave effect using clip-path */
      clip-path: path('M0,0 H100% V100 Q50%,80 100%,100 V0 Z');
    }
    @supports (clip-path: path('')) {
      .concave-h2 {
        clip-path: path('M0,0 H100% V100 Q90,0 0,100 V0 Z');
      }
    }
    /* Custom width utilities for 1/7 and 6/7 */
    .w-1\\/7 {
      width: 14.2857143%;
    }
    .w-6\\/7 {
      width: 85.7142857%;
    }

    .pentagon-border-container {
      position: relative;
      width: 85px;
      height: 85px;
    }

    .pentagon-border {
      background: oklch(70.4% 0.04 256.788);
      clip-path: polygon(50% 0%, 0% 38%, 19% 100%, 81% 100%, 100% 38%);
      width: 85px;
      height: 85px;
      z-index: 1;
      position: absolute;
    }

    .pentagon-container {
      background: white;
      clip-path: polygon(50% 0%, 0% 38%, 19% 100%, 81% 100%, 100% 38%);
      width: 75px;
      height: 75px;
      z-index: 2;
      display: flex;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = Experiences;

  constructor(private achievementService: AchivementService) {}

  ngOnInit(): void {
    const stateUpdate: Partial<TravelAchivementState> = {
      experienceVisited: true,
    };
    this.achievementService.updateState(stateUpdate, AchievementName.Travel);
  }

  getDuration(start: Date, end: Date | null): string {
    const endDate = end ? new Date(end) : new Date();
    const startDate = new Date(start);
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthStr =
      months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';
    return [yearStr, monthStr].filter(Boolean).join(' ') || 'Less than a month';
  }
}
