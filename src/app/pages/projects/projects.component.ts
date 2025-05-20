import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header.component';

@Component({
  selector: 'app-projects',
  imports: [SectionHeaderComponent],
  template: ` <app-section-header title="Projects" /> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {}
