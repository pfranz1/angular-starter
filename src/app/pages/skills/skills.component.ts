import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AchivementService } from '../../achievements/achivement.service';
import {
  AchievementName,
  TravelAchivementState,
} from '../../achievements/achievement';
import { SkillCategory, SkillsByCategory } from './skills.interface';
import { SubSectionHeaderComponent } from './sub-section-header.component';

@Component({
  selector: 'app-skills',
  imports: [SubSectionHeaderComponent],
  template: `
    <!--    <div class="mt-3 mb-3">-->
    <!--      <h2>Here is my toolbox - the skill levels are as follows:</h2>-->
    <!--      <h3>1 - {{ 1 | skillLevelName }}</h3>-->
    <!--      <h3>2 - {{ 2 | skillLevelName }}</h3>-->
    <!--      <h3>3 - {{ 3 | skillLevelName }}</h3>-->
    <!--      <h3>4 - {{ 4 | skillLevelName }}</h3>-->
    <!--      <h3>5 - {{ 5 | skillLevelName }}</h3>-->
    <!--    </div>-->

    <div>
      @for (
        skillCategory of [
          SkillCategory.frameworksAndLibraries,
          SkillCategory.programmingLanguages,
          SkillCategory.foundational,
          SkillCategory.softSkills,
          SkillCategory.hobbiesAndInterests,
        ];
        track $index
      ) {
        <app-sub-section-header
          [title]="skillCategory"
          [skills]="SkillsByCategory[skillCategory]"
        ></app-sub-section-header>
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

  protected readonly SkillsByCategory = SkillsByCategory;
  protected readonly SkillCategory = SkillCategory;
}
