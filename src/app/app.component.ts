import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage],
  template: `
    <div #centerContnet class="flex justify-center">
      <div #lConstrain class="ml-6 mr-6 md:ml-12 md:mr-12 max-w-5xl w-full">
        <div>
          <div class="flex items-center pt-5 pl-0 pr-0 ">
            <div #nameContainer class="flex-auto">
              <a
                [tabindex]="this.router.url.toString() === '/' ? -1 : 0"
                [href]="'.'"
                style="display: block; width: min-content;  padding: 20px; padding-right:80px; padding-bottom: 5px;"
              >
                <h1
                  class="text-slate-300"
                  style="      
          position: relative;
          top: 0.7rem;
          font-size: 5.0rem;
          line-height: 1;"
                >
                  Peter
                </h1>
                <h1
                  style="
          position: relative;
          left: 185px;
          rotate: 7deg;
          width: min-content;
          font-weight: 350;
          font-size: 1.25rem;
          line-height: 1.75rem;"
                  class="text-slate-300"
                >
                  Alexander
                </h1>
                <h1
                  style="
          position: relative;
          top: -1.1rem;
          left: 1.6rem;
          font-size: 5.0rem;
          line-height: 1;"
                  class="text-slate-300"
                >
                  Franz
                </h1>
              </a>
            </div>
            <div>
              <div
                style="      
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        overflow: hidden;
        background-color: #FFFFFF;
        "
                class="circular-image-container max-sm-width-4"
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
          </div>
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
      width: 200px; /* Set the desired width of the circle */
      height: 200px; /* Set the desired height of the circle */
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
  title = 'angular-starter';

  headshotHovered = false;

  onMouseEnter() {
    this.headshotHovered = true;
  }

  onMouseLeave() {
    this.headshotHovered = false;
  }

  constructor(public router: Router) {}
}
