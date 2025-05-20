import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header.component';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent],
  template: ` <app-section-header title="About" /> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
