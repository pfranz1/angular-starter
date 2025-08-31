import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { SecretAchievementPageComponent } from './achievements/secret-achievement-admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Peter's Website" },
  { path: 'about', component: AboutComponent, title: 'About' },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience',
  },
  { path: 'skills', component: SkillsComponent, title: 'Skills' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  {
    path: 'achievements',
    component: AchievementsComponent,
    title: 'Achievements',
  },
  {
    path: 'admin',
    component: SecretAchievementPageComponent,
    title: 'Top-Secret Admin',
  },
];
