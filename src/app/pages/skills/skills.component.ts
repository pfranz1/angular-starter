import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AchivementService } from '../../achievements/achivement.service';
import {
  AchievementName,
  TravelAchivementState,
} from '../../achievements/achievement';

@Component({
  selector: 'app-skills',
  imports: [],
  template: ``,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
  constructor(private achievementService: AchivementService) {}

  ngOnInit(): void {
    const stateUpdate: Partial<TravelAchivementState> = {
      skillsVisited: true,
    };

    this.achievementService.updateState(stateUpdate, AchievementName.Travel);
  }
}
