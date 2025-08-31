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
          class=" shadow-lg rounded-[30px]  md:rounded-[60px]"
          [ngClass]="
            $even
              ? 'md:rounded-l-[150px] exp-gradient-l'
              : 'md:rounded-r-[150px] exp-gradient-r'
          "
        >
          <div class=" flex flex-col items-stretch overflow-hidden">
            <div class="flex justify-center">
              <div
                class="w-full flex flex-row justify-center bookmark-rounding  text-center bg-slate-800 width-full max-w-[35rem] md:max-w-[30rem]  lg:max-w-[35rem] xl:max-w-[40rem] p-4 md:p-8 lg:p-4 pt-5 md:pt-10 pb-6 d:pb-10"
              >
                <div
                  class="flex flex-col w-1/3 justify-center md:hidden items-center"
                >
                  <div
                    class="flex items-center justify-center w-[90px] h-[90px] overflow-hidden mb-2 m-3 rounded-full bg-white "
                    [style]="'outline: 7px ' + exp.logoColor + ' double'"
                  >
                    <img
                      [src]="exp.logo"
                      [alt]="exp.company"
                      class="object-contain w-full h-full m-2 "
                      width="100"
                      height="100"
                    />
                  </div>
                  <div
                    class="tracking-tighter text-xl font-normal text-slate-300 mt-2"
                    [style]="'color:' + exp.logoColor"
                  >
                    {{ exp.company }}
                  </div>
                </div>
                <div class="flex w-2/3 flex-col justify-between max-md:pl-2">
                  <h2
                    class="max-md:whitespace-break-spaces text-3xl md:text-3xl lg:text-4xl text-slate-300"
                  >
                    {{ exp.role }}
                  </h2>
                  <span
                    class=" hidden md:block tracking-tighter text-xl font-light opacity-90 text-slate-300"
                  >
                    <span class="opacity-65">at</span> {{ exp.company }}
                  </span>
                  <div class="md:hidden ">
                    <div>
                      <h3 class="text-2xl pt-2 font-bold text-slate-400">
                        {{ exp.location }}
                      </h3>
                    </div>
                    <div
                      class="text-lg text-slate-400 font-semibold mt-3 mb-3 text-center "
                    >
                      {{ exp.startDate | date: 'MMMM yyyy' }} –
                      {{
                        exp.endDate
                          ? (exp.endDate | date: 'MMMM yyyy')
                          : 'Present'
                      }}
                    </div>

                    <div
                      class="text-md text-slate-300 font-semibold leading-none"
                    >
                      {{ getDuration(exp.startDate, exp.endDate) }}

                      @if (exp.workType) {
                        |
                        <span
                          class=" font-normal text-slate-400 opacity-95 overflow-hidden"
                        >
                          {{ exp.workType }}
                        </span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-row items-strech overflow-hidden pt-2 pb-4">
              @if ($even) {
                <div class="md:pr-4"></div>

                <ng-container *ngTemplateOutlet="image"></ng-container>
                <div class="md:pr-4"></div>
                <ng-container *ngTemplateOutlet="text"></ng-container>
                <div class="md:pr-12"></div>
              } @else {
                <div class="md:pr-12"></div>
                <ng-container *ngTemplateOutlet="text"></ng-container>
                <div class="md:pr-4"></div>

                <ng-container *ngTemplateOutlet="image"></ng-container>
                <div class="md:pr-4"></div>
              }
            </div>
            <ng-template #image>
              <div
                class="max-md:hidden flex flex-col items-center justify-center w-1/3 p-6 pt-1"
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
                <div>
                  <h3
                    [style]="'color:' + exp.logoColor"
                    class="text-2xl pt-2 font-bold"
                  >
                    {{ exp.location }}
                  </h3>
                </div>

                <div
                  class="text-lg text-slate-800 font-semibold mt-2 text-center max-md:leading-[0.25]"
                >
                  {{ exp.startDate | date: 'MMMM yyyy' }} –
                  <br class="lg:hidden" />
                  {{
                    exp.endDate ? (exp.endDate | date: 'MMMM yyyy') : 'Present'
                  }}
                </div>

                <div class="text-md text-slate-700 font-semibold leading-none">
                  {{ getDuration(exp.startDate, exp.endDate) }}

                  @if (exp.workType) {
                    |
                    <span class=" font-normal text-slate-700 opacity-95">
                      {{ exp.workType }}
                    </span>
                  }
                </div>
              </div>
            </ng-template>

            <ng-template #text>
              <div
                class="flex flex-col justify-top w-full md:w-2/3 pt-1 whitespace-break-spaces"
              >
                <div class="h-full flex justify-around flex-col">
                  @for (a of exp.accomplishments; track a.desc) {
                    @if (!$first && $count > 2) {
                      <div
                        class="w-full h-0 mt-1 mb-1"
                        [ngClass]="'border-t-2'"
                        style="border-color: rgba(50,65,84,0.15)"
                      ></div>
                    } @else if (!$first) {
                      <div
                        class="w-full h-0 mt-1 mb-1 md:hidden"
                        [ngClass]="'border-t-2'"
                        style="border-color: rgba(50,65,84,0.15)"
                      ></div>
                    }

                    <div
                      class="flex w-full items-center gap-4 pl-8 pr-8 md:pr-0 md:pl-0"
                    >
                      <div
                        class="flex-shrink-0 min-w-[85px] w-1/7 flex justify-around flex-col text-center items-center "
                      >
                        <div
                          class="pentagon-border-container drop-shadow-xl flex items-center justify-center w-[85px] h-[85px] relative"
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
                          <h3 class="pt-1 font-semibold text-slate-800">
                            {{ a.skill.name }}
                          </h3>
                        </div>
                      </div>
                      <div class="w-6/7">
                        <p
                          class="indent-5 mt-3 text-lg text-center sm:text-left text-slate-800 font-[350]"
                        >
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

    .bookmark-rounding {
      position: relative;
      overflow: hidden;
      border-radius: 0 0 60px 60px / 0 0 40px 40px;
      /* fallback for browsers without clip-path support */
      z-index: 1;
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
      background: oklch(0.635 0.036 256.799);
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
    let months = endDate.getMonth() - startDate.getMonth() + 1;

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
