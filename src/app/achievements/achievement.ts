export enum AchievementName {
  Test = 'Test Achievement',
  Starter = 'Hello, World',
  Travel = 'Digital Nomad',
  Gardener = 'Gardener',
}

export type AchievementType =
  | StarterAchivement
  | TravelAchivement
  | TestAchivement
  | GardenerAchivement;

export type AchievementStateType =
  | StarterAchvimentState
  | TravelAchivementState
  | TestAchivementState
  | GardenerAchivementState;

export type AchievementSerializationType = Map<
  AchievementName,
  AchievementStateType
>;

export abstract class Achievement<S> {
  name: AchievementName;
  description: string;
  icon: string;
  state: S;

  constructor(
    name: AchievementName,
    description: string,
    icon: string,
    state: S,
  ) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.state = state;
  }

  isAchieved(): boolean {
    return false; // Default implementation, should be overridden
  }

  percentComplete(): number {
    return this.isAchieved() ? 100 : 0; // Default implementation
  }
}

// ====== Starter Achievement ======

export interface StarterAchvimentState {
  achivmentPageOpened: boolean;
}

export class StarterAchivement extends Achievement<StarterAchvimentState> {
  constructor(state: StarterAchvimentState) {
    super(
      AchievementName.Starter,
      'Your first! Can you find them all?',
      'assets/img/apple.webp',
      state,
    );
  }

  public override isAchieved(): boolean {
    return this.state.achivmentPageOpened;
  }
}

// ====== Travel Achievement ======

export interface TravelAchivementState {
  experienceVisited: boolean;
  skillsVisited: boolean;
  achievementsVisited: boolean;
  aboutVisited: boolean;
  projectsVisited: boolean;
}
export class TravelAchivement extends Achievement<TravelAchivementState> {
  constructor(state: TravelAchivementState) {
    super(
      AchievementName.Travel,
      'Visit each page of the site at least once.',
      'assets/img/compass.webp',
      state,
    );
  }

  public override isAchieved(): boolean {
    // Check if all properties in the state object are true
    for (const key of Object.keys(
      this.state,
    ) as (keyof TravelAchivementState)[]) {
      if (!this.state[key]) {
        // If any property is false, the achievement is not achieved
        return false;
      }
    }
    // All properties are true, the achievement is achieved
    return true;
  }

  public override percentComplete(): number {
    let count = 0;
    for (const key of Object.keys(
      this.state,
    ) as (keyof TravelAchivementState)[]) {
      if (this.state[key]) count++;
    }

    const total = Object.keys(this.state).length;
    return (count / total) * 100; // Return percentage of pages visited
  }
}

// ====== Test Achievement ======

export interface TestAchivementState {
  testCompleted: boolean;
}
export class TestAchivement extends Achievement<TestAchivementState> {
  constructor(state: TestAchivementState) {
    super(
      AchievementName.Test,
      'Un-achieveable by normal means... Hackers only.',
      'assets/img/cookie-hint-hint.webp',
      state,
    );
  }

  public override isAchieved(): boolean {
    return this.state.testCompleted;
  }
}

// ====== Gardener Achievement ======

export interface GardenerAchivementState {
  leavesSnipped: number;
}

export class GardenerAchivement extends Achievement<GardenerAchivementState> {
  constructor(state: GardenerAchivementState) {
    super(
      AchievementName.Gardener,
      'Snip five leaves from the plant on the home page.',
      'assets/img/large-leaf-single.png',
      state,
    );
  }

  public override isAchieved(): boolean {
    return this.state.leavesSnipped >= 5;
  }

  public override percentComplete(): number {
    return (this.state.leavesSnipped / 5) * 100; // Return percentage of leaves snipped
  }
}
