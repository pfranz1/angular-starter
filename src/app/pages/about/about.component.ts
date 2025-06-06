import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header.component';
import {
  AchievementName,
  TravelAchivementState,
} from '../../achievements/achievement';
import { AchivementService } from '../../achievements/achivement.service';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent],
  template: ` <app-section-header title="About" /> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  constructor(private achievementService: AchivementService) {}

  ngOnInit(): void {
    const stateUpdate: Partial<TravelAchivementState> = {
      aboutVisited: true,
    };

    this.achievementService.updateState(stateUpdate, AchievementName.Travel);
  }
}
