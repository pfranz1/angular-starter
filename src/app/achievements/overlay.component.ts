import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Achievement } from './achievement';

@Component({
  selector: 'app-overlay',
  imports: [],
  template: `
    @if (achievement) {
      <div
        class="fixed inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center min-h-screen z-50"
        (click)="onOverlayClick()"
        (keydown)="onOverlayClick()"
        tabindex="-1"
      >
        <div
          class="flex flex-col items-center relative"
          (click)="$event.stopPropagation()"
          (keydown)="$event.stopPropagation()"
          tabindex="-1"
        >
          <button
            class="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-3xl font-bold focus:outline-1  rounded-full transition-colors duration-200 ease-in-out"
            (click)="close()"
            (keydown)="close()"
            aria-label="Close"
            tabindex="1"
          >
            &times;
          </button>
          <div
            class="bg-white rounded-full shadow-lg flex items-center justify-center w-32 h-32 mb-6"
          >
            <img
              [src]="achievement.icon"
              alt="{{ achievement.name }}"
              class="w-20 h-20 object-contain"
            />
          </div>
          <div
            class="bg-white rounded-xl shadow-lg px-8 py-6 flex flex-col items-center max-w-xs"
          >
            <h2 class="text-2xl font-bold mb-2 text-center">
              {{ achievement.name }}
            </h2>
            <p class="text-base text-gray-600 text-center">
              {{ achievement.description }}
            </p>
          </div>
        </div>
      </div>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent {
  achievement: Achievement<unknown> | null = null;

  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
    this.achievement = null;
  }

  onOverlayClick() {
    this.close();
  }
}
