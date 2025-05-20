import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header.component';

@Component({
  selector: 'app-experience',
  imports: [SectionHeaderComponent],
  template: ` <app-section-header title="Experience" /> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {}
