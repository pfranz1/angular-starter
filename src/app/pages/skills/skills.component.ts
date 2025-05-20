import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header.component';

@Component({
  selector: 'app-skills',
  imports: [SectionHeaderComponent],
  template: ` <app-section-header title="Skills" /> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {}
