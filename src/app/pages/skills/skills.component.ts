import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AchivementService } from '../../achievements/achivement.service';
import {
  AchievementName,
  TravelAchivementState,
} from '../../achievements/achievement';
import { SkillsMap } from './skills.interface';
import { KeyValuePipe } from '@angular/common';
import { SkillsCardComponent } from './skill-card.component';

@Component({
  selector: 'app-skills',
  imports: [KeyValuePipe, SkillsCardComponent],
  template: `
    <!--    <div>-->
    <!--      <h2>Here is my toolbox - the skill levels are as follows:</h2>-->
    <!--      <h3>1 - {{ 1 | skillLevelName }}</h3>-->
    <!--      <h3>2 - {{ 2 | skillLevelName }}</h3>-->
    <!--      <h3>3 - {{ 3 | skillLevelName }}</h3>-->
    <!--      <h3>4 - {{ 4 | skillLevelName }}</h3>-->
    <!--      <h3>5 - {{ 5 | skillLevelName }}</h3>-->
    <!--    </div>-->

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center align-middle gap-x-4 mt-5"
    >
      @for (skillEntry of SkillsMap | keyvalue; track skillEntry.key) {
        <app-skill-card [skill]="skillEntry.value"></app-skill-card>
      }
    </div>
  `,
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

  protected readonly SkillsMap = SkillsMap;
}
