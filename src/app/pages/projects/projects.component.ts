import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header.component';
import { AchivementService } from '../../achievements/achivement.service';
import {
  AchievementName,
  TravelAchivementState,
} from '../../achievements/achievement';

@Component({
  selector: 'app-projects',
  imports: [SectionHeaderComponent],
  template: ` <app-section-header title="Projects" /> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  constructor(private achievementService: AchivementService) {}

  ngOnInit(): void {
    const stateUpdate: Partial<TravelAchivementState> = {
      projectsVisited: true,
    };

    this.achievementService.updateState(stateUpdate, AchievementName.Travel);
  }
}
