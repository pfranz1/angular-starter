import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { AchivementService } from '../achievements/achivement.service';
import {
  AchievementName,
  GardenerAchivementState,
} from '../achievements/achievement';

@Component({
  selector: 'app-plant-iframe',
  imports: [],
  template: `
    <div class="h-[600px]">
      <iframe #iframe [src]="safeIframeUrl" width="100%" height="100%"></iframe>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantIframeComponent implements AfterViewInit {
  @ViewChild('iframe', { static: false }) iframe!: ElementRef;
  iframeUrl = (environment.plantHost ?? window.origin) + environment.plantPath;
  safeIframeUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private achievementService: AchivementService,
  ) {
    this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.iframeUrl,
    );
  }
  ngAfterViewInit(): void {
    const iframeElement = this.iframe.nativeElement as HTMLIFrameElement;
    iframeElement.onload = () => {
      const iframeWindow = iframeElement.contentWindow;
      if (iframeWindow) {
        window.addEventListener('message', (event) => {
          if (event.origin !== window.origin) {
            return; // Ignore messages from other origins
          }

          const message = event.data;
          if (message.type === 'snip') {
            this.achievementService.updateState(
              { leavesSnipped: 1 } as Partial<GardenerAchivementState>,
              AchievementName.Gardener,
              AchivementService.addMatching,
            );
          }
        });
      }
    };
  }

  protected readonly environment = environment;
}
