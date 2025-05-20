import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  template: `
    <div
      [@myAnimation]
      class="border-solid w-full text-center border-t-2 border-b-2"
    >
      <h1 class="text-4xl m-5 text-slate-300">{{ title() }}</h1>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,

  animations: [
    trigger('myAnimation', [
      state('final', style({ opacity: 1, transform: 'scale(1)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
    ]),
  ],
})
export class SectionHeaderComponent {
  title = input.required<string>();
}
