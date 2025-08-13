export enum SkillName {
  Apple = 'Apple',
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
  Writing = 'Writting',
  Presenting = 'Public Speaking',
  Hardwork = 'Elbow Grease',
}

export interface Skill<T extends SkillName> {
  icon: string;
  name: T;
}

export const SkillsMap = new Map<SkillName, Skill<SkillName>>([
  [
    SkillName.Apple,
    { icon: 'assets/img/skills/apple.png', name: SkillName.Apple },
  ],
  [
    SkillName.Python,
    { icon: 'assets/img/skills/python.png', name: SkillName.Python },
  ],
  [
    SkillName.Angular,
    { icon: 'assets/img/skills/angular.jpg', name: SkillName.Angular },
  ],
  [
    SkillName.Linux,
    { icon: 'assets/img/skills/linux.png', name: SkillName.Linux },
  ],
  [
    SkillName.Java,
    { icon: 'assets/img/skills/java.png', name: SkillName.Java },
  ],
  [
    SkillName.React,
    { icon: 'assets/img/skills/react.png', name: SkillName.React },
  ],
  [
    SkillName.Docker,
    { icon: 'assets/img/skills/docker.png', name: SkillName.Docker },
  ],
  [
    SkillName.JavaScript,
    { icon: 'assets/img/skills/javascript.png', name: SkillName.JavaScript },
  ],
  [
    SkillName.Cypress,
    { icon: 'assets/img/skills/cypress.jpg', name: SkillName.Cypress },
  ],
  [SkillName.Git, { icon: 'assets/img/skills/git.png', name: SkillName.Git }],
  [
    SkillName.C_CPP,
    { icon: 'assets/img/skills/c_cpp.png', name: SkillName.C_CPP },
  ],
  [
    SkillName.Spring_JPA,
    { icon: 'assets/img/skills/spring_jpa.png', name: SkillName.Spring_JPA },
  ],
  [
    SkillName.Figma,
    { icon: 'assets/img/skills/figma.webp', name: SkillName.Figma },
  ],
  [
    SkillName.Flutter,
    { icon: 'assets/img/skills/flutter.png', name: SkillName.Flutter },
  ],
  [
    SkillName.Firebase,
    { icon: 'assets/img/skills/firebase.png', name: SkillName.Firebase },
  ],
  [
    SkillName.VSCode,
    { icon: 'assets/img/skills/vscode.png', name: SkillName.VSCode },
  ],
  [
    SkillName.Unknown,
    { icon: 'assets/img/skills/unknown.webp', name: SkillName.Unknown },
  ],
  [SkillName.UX, { icon: 'assets/img/skills/ux.png', name: SkillName.UX }],
  [
    SkillName.FullStack,
    { icon: 'assets/img/skills/fullstack.png', name: SkillName.FullStack },
  ],
  [
    SkillName.Writing,
    { icon: 'assets/img/skills/writing.webp', name: SkillName.Writing },
  ],
  [
    SkillName.Presenting,
    { icon: 'assets/img/skills/presenting.png', name: SkillName.Presenting },
  ],
  [
    SkillName.Hardwork,
    { icon: 'assets/img/skills/hardwork.png', name: SkillName.Hardwork },
  ],
]);

export function getSkill(name: SkillName) {
  return SkillsMap.get(name) ?? UnknownSkill;
}

export const UnknownSkill: Skill<SkillName.Unknown> = {
  icon: 'assets/img/skills/unknown.jpg',
  name: SkillName.Unknown,
};

export const Skills: Skill<SkillName>[] = [
  {
    icon: 'assets/img/apple.png',
    name: SkillName.Apple,
  },
];
