import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-plant-iframe',
  imports: [],
  template: `
    <div style="height: 600px;">
      <iframe
        #iframe
        [src]="safeIframeUrl"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantIframeComponent {
  @ViewChild('iframe', { static: false }) iframe!: ElementRef;
  iframeUrl = environment.pdmBaseUrl + '/digital-plant-embed/index.html'; // Path to your HTML file with WebGL
  safeIframeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.iframeUrl,
    );
  }
  ngAfterViewInit(): void {
    const iframeElement = this.iframe.nativeElement as HTMLIFrameElement;
    iframeElement.onload = () => {
      const iframeWindow = iframeElement.contentWindow;
      if (iframeWindow) {
        // You can now interact with the iframe's content, e.g., call functions
        // defined within the iframe's JavaScript code.
        // Example:
        // iframeWindow.myWebGLFunction();
      }
    };
  }
}
