export enum SkillName {
  Python = 'Python',
  Angular = 'Angular',
  Linux = 'Linux',
  Java = 'Java',
  React = 'React',
  Docker = 'Docker',
  JavaScript = 'JavaScript',
  Cypress = 'Cypress',
  Git = 'Git',
  C_CPP = 'C/C++',
  Spring_JPA = 'Spring JPA',
  Figma = 'Figma',
  Flutter = 'Flutter',
  Firebase = 'Firebase',
  VSCode = 'VSCode',
  Unknown = 'Unknown',
  UX = 'UI / UX',
  FullStack = 'Full Stack',
  Writing = 'Writing',
  Presenting = 'Public Speaking',
  ReverseEngineering = 'Reverse Engineering',
  SoftwareExploitation = 'Software Exploitation',
  Compilers = 'Compilers',
  Agile = 'Agile',
  PickupBasketball = 'Pickup Basketball',
  SpreadsheetScripting = 'Spreadsheet Scripting',
  Leadership = 'Leadership',
  Hardwork = 'Elbow Grease',
  Programming = 'Programming',
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillLevelName', // This is the name you'll use in templates
})
export class SkillLevelTransform implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Beginner';
      case 2:
        return 'Intermediate';
      case 3:
        return 'Proficient';
      case 4:
        return 'Advanced';
      case 5:
        return 'Expert';
      default:
        return 'Unknown';
    }
  }
}

@Pipe({
  name: 'skillLevelColor',
})
export class SkillLevelColor implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1: // Beginner
        return 'border-green-500';
      case 2: // Intermediate
        return 'border-teal-500';
      case 3: // Proficient
        return 'border-blue-500';
      case 4: // Advanced
        return 'border-red-500';
      case 5: // Mastery
        return 'border-purple-500';
      default:
        return 'border-gray-500'; // A default color for undefined levels
    }
  }
}

@Pipe({
  name: 'skillLevelBg',
})
export class SkillLevelBg implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1: // Beginner
        return 'bg-green-500';
      case 2: // Intermediate
        return 'bg-teal-300';
      case 3: // Proficient
        return 'bg-blue-600';
      case 4: // Advanced
        return 'bg-red-500';
      case 5: // Mastery
        return 'bg-purple-600';
      default:
        return 'bg-purple-200'; // A default color for undefined levels
    }
  }
}

export enum SkillLevel {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
}

export interface Skill {
  icon: string;
  name: SkillName;
  level: SkillLevel;
}

export function getSkill(name: SkillName) {
  return SkillsMap[name];
}

const python: Skill = {
  icon: 'assets/img/skills/python.png',
  name: SkillName.Python,
  level: SkillLevel.two,
};

const angular: Skill = {
  icon: 'assets/img/skills/angular.jpg',
  name: SkillName.Angular,
  level: SkillLevel.four,
};

const linux: Skill = {
  icon: 'assets/img/skills/linux.png',
  name: SkillName.Linux,
  level: SkillLevel.three,
};

const java: Skill = {
  icon: 'assets/img/skills/java.png',
  name: SkillName.Java,
  level: SkillLevel.three,
};

const react: Skill = {
  icon: 'assets/img/skills/react.png',
  name: SkillName.React,
  level: SkillLevel.two,
};

const docker: Skill = {
  icon: 'assets/img/skills/docker.png',
  name: SkillName.Docker,
  level: SkillLevel.two,
};

const javascript: Skill = {
  icon: 'assets/img/skills/js.png',
  name: SkillName.JavaScript,
  level: SkillLevel.three,
};

const cypress: Skill = {
  icon: 'assets/img/skills/cypress.jpg',
  name: SkillName.Cypress,
  level: SkillLevel.two,
};

const git: Skill = {
  icon: 'assets/img/skills/git.png',
  name: SkillName.Git,
  level: SkillLevel.three,
};

const c_cpp: Skill = {
  icon: 'assets/img/skills/c_cpp.png',
  name: SkillName.C_CPP,
  level: SkillLevel.two,
};

const spring_jpa: Skill = {
  icon: 'assets/img/skills/spring_jpa.png',
  name: SkillName.Spring_JPA,
  level: SkillLevel.two,
};

const figma: Skill = {
  icon: 'assets/img/skills/figma.webp',
  name: SkillName.Figma,
  level: SkillLevel.three,
};

const flutter: Skill = {
  icon: 'assets/img/skills/flutter.png',
  name: SkillName.Flutter,
  level: SkillLevel.three,
};

const firebase: Skill = {
  icon: 'assets/img/skills/firebase.png',
  name: SkillName.Firebase,
  level: SkillLevel.two,
};

const vscode: Skill = {
  icon: 'assets/img/skills/vscode.png',
  name: SkillName.VSCode,
  level: SkillLevel.three,
};

const unknown: Skill = {
  icon: 'assets/img/skills/unknown.webp',
  name: SkillName.Unknown,
  level: SkillLevel.one,
};

const ux: Skill = {
  icon: 'assets/img/skills/ux.png',
  name: SkillName.UX,
  level: SkillLevel.three,
};

const fullstack: Skill = {
  icon: 'assets/img/skills/fullstack.png',
  name: SkillName.FullStack,
  level: SkillLevel.three,
};

const writing: Skill = {
  icon: 'assets/img/skills/writing.webp',
  name: SkillName.Writing,
  level: SkillLevel.four,
};

const presenting: Skill = {
  icon: 'assets/img/skills/presenting.png',
  name: SkillName.Presenting,
  level: SkillLevel.three,
};

const programming: Skill = {
  icon: 'assets/img/skills/hardwork.png',
  name: SkillName.Programming,
  level: SkillLevel.five,
};

const reverseEngineering: Skill = {
  icon: 'assets/img/skills/reverse-engineering.png',
  name: SkillName.ReverseEngineering,
  level: SkillLevel.one,
};

const softwareExploitation: Skill = {
  icon: 'assets/img/skills/software-exploitation.png',
  name: SkillName.SoftwareExploitation,
  level: SkillLevel.one,
};

const compilers: Skill = {
  icon: 'assets/img/skills/compiler.png',
  name: SkillName.Compilers,
  level: SkillLevel.two,
};

const agile: Skill = {
  icon: 'assets/img/skills/agile.png',
  name: SkillName.Agile,
  level: SkillLevel.three,
};

const pickupBasketball: Skill = {
  icon: 'assets/img/skills/pickup-basketball.webp',
  name: SkillName.PickupBasketball,
  level: SkillLevel.two,
};

const spreadsheetScripting: Skill = {
  icon: 'assets/img/skills/spreadsheet-scripting.png',
  name: SkillName.SpreadsheetScripting,
  level: SkillLevel.two,
};

const leadership: Skill = {
  icon: 'assets/img/skills/leadership.png',
  name: SkillName.Leadership,
  level: SkillLevel.three,
};

const hardwork: Skill = {
  icon: 'assets/img/skills/hardwork.png',
  name: SkillName.Hardwork,
  level: SkillLevel.three,
};

export const SkillsMap: Record<SkillName, Skill> = {
  [SkillName.Python]: python,
  [SkillName.Angular]: angular,
  [SkillName.Linux]: linux,
  [SkillName.Java]: java,
  [SkillName.React]: react,
  [SkillName.Docker]: docker,
  [SkillName.JavaScript]: javascript,
  [SkillName.Cypress]: cypress,
  [SkillName.Git]: git,
  [SkillName.C_CPP]: c_cpp,
  [SkillName.Spring_JPA]: spring_jpa,
  [SkillName.Figma]: figma,
  [SkillName.Flutter]: flutter,
  [SkillName.Firebase]: firebase,
  [SkillName.VSCode]: vscode,
  [SkillName.Unknown]: unknown,
  [SkillName.UX]: ux,
  [SkillName.FullStack]: fullstack,
  [SkillName.Writing]: writing,
  [SkillName.Presenting]: presenting,
  [SkillName.ReverseEngineering]: reverseEngineering,
  [SkillName.SoftwareExploitation]: softwareExploitation,
  [SkillName.Compilers]: compilers,
  [SkillName.Agile]: agile,
  [SkillName.PickupBasketball]: pickupBasketball,
  [SkillName.SpreadsheetScripting]: spreadsheetScripting,
  [SkillName.Leadership]: leadership,
  [SkillName.Hardwork]: hardwork,
  [SkillName.Programming]: programming,
};
