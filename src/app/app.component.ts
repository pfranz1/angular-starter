import { Component, Signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { filter, map } from 'rxjs';
import { SectionHeaderComponent } from './shared/section-header.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    NgTemplateOutlet,
    SectionHeaderComponent,
  ],
  template: `
    <div #centerContent class=" flex justify-center">
      <div #lConstrain class="ml-4 mr-4 md:ml-12 md:mr-12 max-w-5xl w-full">
        <div>
          <ng-template #nameContainer>
            <div class="block justify-center">
              <a
                [tabindex]="this.router.url.toString() === '/' ? -1 : 0"
                class="md:p-5 mr-14"
                [href]="'.'"
                style="display: block; width: min-content; padding-bottom: 5px;"
              >
                <h1
                  class="text-slate-300 text-[2.75rem] sm:text-[4rem] md:text-[5rem]"
                  style="
          position: relative;
          top: 0.7rem;
          line-height: 1;"
                >
                  Peter
                </h1>
                <h1
                  style="
          position: relative;
          rotate: 7deg;
          width: min-content;
          font-weight: 350;
          line-height: 1.75rem;"
                  class="text-slate-300 sm:left-[165px] md:left-[195px] left-[125px] sm:text-[1.25rem] md:text-[1.25rem] text-[1rem]"
                >
                  Alexander
                </h1>
                <h1
                  style="
          position: relative;
          top: -1.1rem;
          left: 1.6rem;
          line-height: 1;"
                  class="text-slate-300 text-[2.75rem] sm:text-[4rem] md:text-[5rem]"
                >
                  Franz
                </h1>
              </a>
            </div>
          </ng-template>

          <ng-template #headshot>
            <div class="pb-4 sm:pb-2 sm:pr-2 md:pb-0">
              <div
                style="
        border-radius: 50%;
        overflow: hidden;
        background-color: #FFFFFF;
        "
                class="circular-image-container max-sm-width-4 md:w-32 md:h-32 sm:w-28 sm:h-28 w-20 h-20"
              >
                <img
                  (mouseenter)="onMouseEnter()"
                  (mouseleave)="onMouseLeave()"
                  [class]="this.headshotHovered ? 'rot-headshot' : ''"
                  [ngSrc]="
                    headshotHovered
                      ? 'assets/img/headshot-funny.jpg'
                      : 'assets/img/headshot.jpg'
                  "
                  width="400"
                  height="533.328"
                  alt="headshot of me"
                  priority
                />
              </div>
            </div>
          </ng-template>

          @if (!pageTitle() || isSmall()) {
            <div class="flex items-center pt-5 pl-0 pr-0 justify-between">
              <ng-container *ngTemplateOutlet="nameContainer"></ng-container>
              <ng-container *ngTemplateOutlet="headshot"></ng-container>
            </div>
            @if (pageTitle()) {
              <app-section-header [title]="pageTitle() ?? ''">
              </app-section-header>
            }
          } @else {
            <div class="flex items-center pt-5 pl-0 pr-0">
              <div class="inline-flex items-center w-1/2 sm:w-3/5">
                <ng-container *ngTemplateOutlet="headshot"></ng-container>
                <ng-container *ngTemplateOutlet="nameContainer"></ng-container>
              </div>
              @if (!isSmall()) {
                <div
                  class="inline-flex w-1/2 sm:w-2/5 justify-end sm:justify-start"
                >
                  <app-section-header [title]="pageTitle() ?? ''">
                  </app-section-header>
                </div>
              }
            </div>
          }
        </div>
        <router-outlet />
      </div>
    </div>
  `,
  styles: `
    .test {
      width: 200px;
    }

    .circular-image-container {
      border-radius: 50%; /* Make the container a circle */
      overflow: hidden;
    }

    .circular-image-container img {
      z-index: 1;
      width: 100%; /* Ensure the image fills the container */
      height: auto; /* Maintain the image's aspect ratio */
      transition: transform 250ms ease-in-out;
      transform-origin: 50% 50%;
    }

    .rot-headshot {
      transform: rotate(5deg);
    }

    .first-name {
      position: relative;
      top: 0.5rem;
      font-size: 3.75rem;
      line-height: 1;
    }

    .middle-name {
      position: relative;
      left: 150px;
      rotate: 6deg;
      width: min-content;
      font-weight: 350;
      font-size: 1.25rem /* 20px */;
      line-height: 1.75rem /* 28px */;
    }

    .last-name {
      position: relative;
      top: -1rem;
      left: 2rem;
      font-size: 3.75rem;
      line-height: 1;
    }
  `,
})
export class AppComponent {
  pageTitle: Signal<string | null | undefined>;
  isSmall: Signal<boolean | undefined>;

  headshotHovered = false;

  onMouseEnter() {
    this.headshotHovered = true;
  }

  onMouseLeave() {
    this.headshotHovered = false;
  }

  constructor(
    public router: Router,
    public breakpointObserver: BreakpointObserver,
  ) {
    this.isSmall = toSignal(
      this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
        map((state) => {
          return state.matches;
        }),
      ),
    );

    this.pageTitle = toSignal(
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => this.getTitle(event.urlAfterRedirects)),
      ),
    );
  }

  getTitle(str: string): string | null {
    if (str === '/') {
      return null;
    } else {
      return str.substring(1, 2).toUpperCase() + str.substring(2);
    }
  }
}
