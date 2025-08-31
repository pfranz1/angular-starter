import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlantIframeComponent } from './plant-iframe.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [PlantIframeComponent, NgOptimizedImage],
  template: `
    <div class="translate-y-[-340px] sm:translate-y-[-275px]">
      <app-plant-iframe class="z-10"> </app-plant-iframe>

      <!-- <i
        class="w-full mt-2 text-slate-400 text-center justify-center inline-flex"
        >press g to pause</i
      > -->
      <div
        class="translate-y-[-220px] sm:translate-y-[-220px] lg:translate-y-[-80px]"
      >
        <div class="flex flex-col w-full lg:flex-row justify-end ">
          <a
            class="circle-button self-end flex align-center justify-center"
            target="_blank"
            href="https://linkedin.com/in/peter-franz-9a543a210"
          >
            <img
              class="place-self-center slate-filter"
              ngSrc="assets/img/linkedin.png"
              alt="LinkedIn"
              height="48"
              width="48"
            />
          </a>

          <a
            class="circle-button self-end flex align-center justify-center"
            target="_blank"
            href="https://github.com/pfranz1"
          >
            <img
              class="place-self-center slate-filter"
              ngSrc="assets/img/github.png"
              alt="GitHub"
              height="48"
              width="48"
            />
          </a>
          <a class="circle-button self-end opacity-85" href="achievements">
            <img
              class="place-self-center"
              ngSrc="assets/img/achivement.png"
              alt="Achievements"
              height="64"
              width="64"
            />
          </a>
        </div>

        <div
          class="p-6 pt-7 mt-1 bg-slate-300 border-neutral-400 text-4xl md:text-5xl rounded-xl border-4 text-center"
        >
          <p class="pb-2 mt-1">Welcome to my website!</p>
          <p>What can I help you find?</p>
        </div>

        <div
          class="grid md:grid-cols-2 grid-rows-2 md:gap-4 gap-4 mt-4 justify-items-center"
        >
          <a class="section-button" [href]="'experience'">
            <div class="h-24 flex flex-wrap justify-start items-center">
              <div class="max-sm:basis-full max-sm:flex max-sm:justify-center">
                <div class="max-sm:inline-block ml-1 h-16 w-16 sm:h-20 sm:w-20">
                  <img class="icon" alt="pages" src="assets/img/pages.svg" />
                </div>
              </div>

              <div class="flex-grow">
                <h1 class="text-center">Experience</h1>
              </div>
            </div>
          </a>

          <a class="section-button" [href]="'projects'">
            <div class="h-24 flex flex-wrap justify-start items-center">
              <div class="max-sm:basis-full max-sm:flex max-sm:justify-center">
                <div class="max-sm:inline-block ml-1 h-16 w-16 sm:h-20 sm:w-20">
                  <img
                    class="icon"
                    alt="computer"
                    src="assets/img/computer.svg"
                  />
                </div>
              </div>

              <div class="flex-grow">
                <h1 class="text-center">Projects</h1>
              </div>
            </div>
          </a>

          <a class="section-button" [href]="'about'">
            <div class="h-24 flex flex-wrap justify-start items-center">
              <div class="max-sm:basis-full max-sm:flex max-sm:justify-center">
                <div class="max-sm:inline-block ml-1 h-16 w-16 sm:h-20 sm:w-20">
                  <img
                    class="icon"
                    alt="person icon"
                    src="assets/img/meeple.svg"
                  />
                </div>
              </div>

              <div class="flex-grow max-sm:mt-1">
                <h1 class="text-center">About</h1>
              </div>
            </div>
          </a>

          <a class="section-button" [href]="'skills'">
            <div class="h-24 flex flex-wrap justify-start items-center">
              <div class="max-sm:basis-full max-sm:flex max-sm:justify-center">
                <div class="max-sm:inline-block ml-1 h-16 w-16 sm:h-20 sm:w-20">
                  <img class="icon" alt="star" src="assets/img/star.svg" />
                </div>
              </div>

              <div class="flex-grow max-sm:mt-1">
                <h1 class="text-center">Skills</h1>
              </div>
            </div>
          </a>
        </div>

        <div>
          <!-- <div class="inline-flex w-full justify-center">
        <button class="mr-12 link-button bg-slate-500 text-slate-700 ">
          Github
        </button>
        <button class="ml-12 link-button ">Linkedin</button>
      </div> -->
        </div>
      </div>
    </div>
  `,
  styles: `
    h1 {
      @apply text-4xl lg:text-5xl;
    }

    .section-button {
      @apply bg-slate-300 rounded-lg w-full text-start max-sm:pl-6 pl-12 p-4 pl-3 pt-5 text-lg;
    }

    .section-button {
      // rgba(7, 52, 62, 1)
      box-shadow: rgba(7, 52, 62, 0.5) 0 -25px 18px -14px inset;
      cursor: pointer;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      transition:
        box-shadow 250ms,
        transform 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .section-button:hover {
      box-shadow: #94a3b8 0 -25px 18px -14px inset;
      transform: scale(1.05);
    }

    .icon {
      transition: all 250ms;
    }

    .section-button:hover .icon {
      transform: rotate(3deg);
    }

    .slate-filter {
      filter: brightness(0) saturate(100%) invert(94%) sepia(7%) saturate(1088%)
        hue-rotate(180deg) brightness(91%) contrast(93%);

      opacity: 0.3;
    }

    .circle-button {
      @apply rounded-full;

      width: 72px;
      height: 72px;
      border: none;
      transition: transform 250ms;
    }

    .circle-button:hover,
    .circle-button:focus {
      transform: scale(1.1);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
