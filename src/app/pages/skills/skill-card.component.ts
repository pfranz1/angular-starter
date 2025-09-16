import { Component, input } from '@angular/core';
import {
  Skill,
  SkillLevelBg,
  SkillLevelColor,
  SkillLevelTransform,
} from './skills.interface';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-skill-card',
  imports: [
    SkillLevelTransform,
    NgOptimizedImage,
    NgClass,
    SkillLevelTransform,
    SkillLevelColor,
    SkillLevelBg,
  ],
  template: `
    <div
      @animate
      class="skill-card-container max-w-md w-60 md:w-64 lg:w-72 mx-4 px-2 place-self-center"
    >
      <div class="grid grid-rows-[8rem,8rem,2fr] relative">
        <!--        image-->
        <div
          class="bg-white rounded-full shadow w-32 h-32 flex items-center justify-center border-4  border-transparent place-self-center relative z-10"
        >
          <div
            class="border-8 rounded-full p-2 shadow-sm bg-white {{
              skill().level | skillLevelColor
            }}"
          >
            <img
              class=""
              [classList]="'m-3 w-14 h-14 object-contain'"
              [ngSrc]="skill().icon"
              height="56"
              width="56"
              [alt]="skill().name"
            />
          </div>
        </div>
        <!--        name-->
        <div
          class="bg-slate-800 flex-col justify-center items-center z-0 relative bottom-12 rounded-t-2xl"
        >
          <div class="w-full bg-slate-700 h-7 rounded-t-2xl"></div>
          <div
            class="flex w-full h-5/6 justify-center align-middle items-center flex-wrap"
          >
            <span
              class="text-slate-100 font-bold text-center tracking-widest text-3xl whitespace-break-spaces"
              >{{ skill().name }}</span
            >
          </div>
        </div>
        <!--        level-->
        <div
          class=" flex flex-col items-center justify-evenly relative bg-slate-300 text-black-300 text-2xl text-center overflow-hidden bottom-12 rounded-b-2xl"
        >
          <div class="w-full">
            <div
              class="flex flex-row w-full px-2 justify-center gap-x-2 relative mt-2"
            >
              @for (_ of [].constructor(5); track $index) {
                <div
                  class="w-8 h-12 m-1 flex items-center justify-center rounded-full border-slate-900 border-opacity-30 border-2 "
                  [ngClass]="[
                    $index + 1 > skill().level
                      ? 'opacity-30 bg-slate-700'
                      : 'opacity-100  ' + (skill().level | skillLevelBg),
                    $index + 1 === skill().level ? 'border-slate-500' : '',
                  ]"
                ></div>
              }
            </div>
          </div>

          <em class="text-center tracking-wide opacity-70 pt-1">
            {{ skill().level | skillLevelName }}
          </em>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  animations: [
    trigger('animate', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('250ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class SkillsCardComponent {
  skill = input.required<Skill>();
}
