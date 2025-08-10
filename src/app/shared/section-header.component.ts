import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-section-header',
  imports: [NgStyle],
  template: `
    <div class="border-solid w-full text-center border-t-2 border-b-2">
      <h1
        [@myAnimation]
        class=" mt-1 lg:mt-4 m-0 lg:m-4 pt-1 text-slate-300 wave-text"
      >
        @for (char of title().split(''); track char) {
          <span [ngStyle]="{ 'animation-delay': 0.5 + $index * 0.2 + 's' }">{{
            char
          }}</span>
        }
      </h1>
    </div>
  `,
  styles: `
    .wave-text span {
      @apply text-[3rem] lg:text-[4rem];
      display: inline-block;
      animation: wave 1.25s ease-in-out;
      animation-iteration-count: 2;
    }

    @keyframes wave {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,

  animations: [
    trigger('myAnimation', [
      state('final', style({ opacity: 1, transform: 'scale(1)' })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SectionHeaderComponent {
  title = input.required<string>();
}
