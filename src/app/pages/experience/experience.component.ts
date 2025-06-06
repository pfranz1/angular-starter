import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header.component';
import {
  AchievementName,
  TravelAchivementState,
} from '../../achievements/achievement';
import { AchivementService } from '../../achievements/achivement.service';

@Component({
  selector: 'app-experience',
  imports: [SectionHeaderComponent],
  template: ` <app-section-header title="Experience" /> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements OnInit {
  constructor(private achievementService: AchivementService) {}

  ngOnInit(): void {
    const stateUpdate: Partial<TravelAchivementState> = {
      experienceVisited: true,
    };

    this.achievementService.updateState(stateUpdate, AchievementName.Travel);
  }
}
