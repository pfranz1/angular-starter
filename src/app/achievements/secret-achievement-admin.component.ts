import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { AchivementService as AchievementService } from './achivement.service';
import { AchievementName } from './achievement';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent],
  template: `
    <app-section-header title="✨ Admin ✨" />
    <div class="rad-buttons">
      <button class="rad-btn clear-btn" (click)="clearAchievements()">
        🧹 Clear Achievements
      </button>
      <button class="rad-btn test-btn" (click)="doTestAchievement()">
        🚀 Trigger Test Achievement
      </button>
    </div>
    <p class="terminal-output">
      {{ this.achievementService.getAllLocalStorage() }}
    </p>
    <p></p>
  `,
  styles: `
    // Ai generated styles for the admin page
    .rad-buttons {
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin-top: 2rem;
    }
    .rad-btn {
      font-size: 1.2rem;
      padding: 1rem 2.5rem;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-weight: bold;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      transition:
        transform 0.1s,
        box-shadow 0.1s;
      outline: none;
    }
    .clear-btn {
      background: linear-gradient(90deg, #ff5858 0%, #f09819 100%);
      color: #fff;
      text-shadow: 1px 1px 2px #b23a3a;
    }
    .test-btn {
      background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
      color: #fff;
      text-shadow: 1px 1px 2px #185a9d;
    }
    .rad-btn:hover {
      transform: scale(1.07) rotate(-2deg);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);
      filter: brightness(1.1);
    }
    .terminal-output {
      background: #181818;
      color: #39ff14;
      font-family: 'Fira Mono', 'Consolas', 'Menlo', 'Monaco', monospace;
      font-size: 1.25rem;
      padding: 1.5rem 2rem;
      border-radius: 8px;
      margin: 2rem auto;
      max-width: 80%;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
      line-height: 1.6;
      border: 1px solid #222;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecretAchievementPageComponent {
  constructor(public achievementService: AchievementService) {}

  clearAchievements(): void {
    this.achievementService.clearAchievementStorage();
  }

  doTestAchievement(): void {
    this.achievementService.updateState(
      { testCompleted: true },
      AchievementName.Test,
    );
  }
}
