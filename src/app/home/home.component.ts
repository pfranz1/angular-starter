import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div
      class="p-6 pt-7 bg-slate-300 border-neutral-400 text-start text-2xl rounded-xl border-4"
    >
      <p>Welcome to my website! What can I help you find?</p>
    </div>

    <div
      class="grid sm:grid-cols-2 grid-rows-2 gap-4 mt-4 justify-items-center"
    >
      <button class="section-button">
        <div class="h-24 flex flex-wrap justify-start items-center">
          <div class="max-sm:basis-full max-sm:flex max-sm:justify-center">
            <div class="max-sm:inline-block ml-1 h-16 w-16 sm:h-20 sm:w-20">
              <img alt="pages" src="assets/img/pages.svg" />
            </div>
          </div>

          <div class="flex-grow">
            <h1 class="text-center">Experience</h1>
          </div>
        </div>
      </button>

      <button class="section-button">
        <div class="h-24 flex flex-wrap justify-start items-center">
          <div class="max-sm:basis-full max-sm:flex max-sm:justify-center">
            <div class="max-sm:inline-block ml-1 h-16 w-16 sm:h-20 sm:w-20">
              <img alt="computer" src="assets/img/computer.svg" />
            </div>
          </div>

          <div class="flex-grow">
            <h1 class="text-center">Projects</h1>
          </div>
        </div>
      </button>

      <button class="section-button">
        <div class="h-24 flex flex-wrap justify-start items-center">
          <div class="max-sm:basis-full max-sm:flex max-sm:justify-center">
            <div class="max-sm:inline-block ml-1 h-16 w-16 sm:h-20 sm:w-20">
              <img alt="person icon" src="assets/img/meeple.svg" />
            </div>
          </div>

          <div class="flex-grow max-sm:mt-1">
            <h1 class="text-center">About</h1>
          </div>
        </div>
      </button>

      <button class="section-button">
        <div class="h-24 flex flex-wrap justify-start items-center">
          <div class="max-sm:basis-full max-sm:flex max-sm:justify-center">
            <div class="max-sm:inline-block ml-1 h-16 w-16 sm:h-20 sm:w-20">
              <img alt="star" src="assets/img/star.svg" />
            </div>
          </div>

          <div class="flex-grow max-sm:mt-1">
            <h1 class="text-center">Skills</h1>
          </div>
        </div>
      </button>
    </div>
  `,
  styles: `
    h1 {
      @apply text-4xl lg:text-5xl;
    }

    .section-button {
      @apply bg-slate-300 rounded-lg w-full text-start max-sm:pl-6 pl-12 p-4 pl-2 pt-5 text-lg;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
