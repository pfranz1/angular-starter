import { getSkill, Skill, SkillName } from '../skills/skills.interface';

export interface Accomplishment {
  desc: string;
  skill: Skill<SkillName>;
}

export interface Experience {
  logo: string;
  logoColor: string;
  role: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  workType?: string;
  accomplishments: Accomplishment[];
}

/**
 * All dates approximate
 */
export const Experiences: Experience[] = [
  {
    logo: 'assets/img/cgi.png',
    logoColor: '#d9324b', // CGI's brand color
    role: 'Full Stack\n Software Developer',
    company: 'CGI Federal',
    location: 'Lafayette, LA',
    startDate: new Date('2024-06-01'),
    endDate: new Date('2025-08-08'),
    workType: 'Full-time',
    accomplishments: [
      {
        desc: 'Full-stack consultant, developing Angular and Java based applications to improve the efficiency of air permitting for the Environmental Protection Agency.',
        skill: getSkill(SkillName.Java),
      },
      {
        desc: "Created a keyboard accessible multiselect and dropdown integrated with Angular's reactive forms. Drafted requirements and delivered a production-level plug-and-play solution now used by 5+ applications.",
        skill: getSkill(SkillName.Angular),
      },
      {
        desc: "Industry mentor for University of Louisiana at Lafayette's Senior Capstone computer development project. Jumped in to provide a course lecture on user story centered development and UI/UX.",
        skill: getSkill(SkillName.Presenting),
      },
    ],
  },
  {
    logo: 'assets/img/cgi.png',
    logoColor: '#d9324b', // CGI's brand color
    role: 'Summer Software Development Intern',
    company: 'CGI Federal',
    workType: 'Full-time',
    location: 'Lafayette, LA',
    startDate: new Date('2023-06-02'),
    endDate: new Date('2023-08-09'),
    accomplishments: [
      {
        desc: 'Utilizing Agile and Jira task-management, collaborated with a hybrid-team to develop upgrades for an Angular dashboard.',
        skill: getSkill(SkillName.Angular),
      },
      {
        desc: "Collaborated with other interns to develop and professionally present our fundraising teamwork - winning CGI's “Present Like a Consultant” competition among two dozen intern teams nationwide. ",
        skill: getSkill(SkillName.Presenting),
      },
      {
        desc: 'Applied user-personas and environmental analysis to shape poster design and placement. Information in the elevator, eye-catching slogans in walkways, and calls to action in break areas.',
        skill: getSkill(SkillName.UX),
      },
    ],
  },
  {
    logo: 'assets/img/lsu.jpg',
    logoColor: '#773ec2',
    role: 'Research Assistant\n Distributed Computing',
    company: 'Louisiana State University',
    location: 'Baton Rouge, LA',
    workType: 'Sem. P/T',
    startDate: new Date('2020-09-02'),
    endDate: new Date('2023-03-23'),
    accomplishments: [
      {
        desc: 'Decreased trial setup time by 80% while improving trial diversity and consistency. Upgraded our scripts to enable sequential trials, automatic error recovery, and snapshotting of experiment configurations. ',
        skill: getSkill(SkillName.Python),
      },
      {
        desc: 'Coauthored paper accepted at WAMTA, a technical workshop. Presented half-hour technical presentation on our decentralized approach to solving many-task-applications with distributed heterogeneous virtual machines.',
        skill: getSkill(SkillName.Presenting),
      },
      {
        desc: 'Publication: Mithila, S.P., Franz, P., Baumgartner, G. (2023). Scheduling Many-Task Applications on Multi-clouds and Hybrid Clouds. Asynchronous Many-Task Systems and Applications. WAMTA 2023. Lecture Notes in Computer Science, vol 13861. Springer, Cham. https://doi.org/10.1007/978-3-031-32316-4_6',
        skill: getSkill(SkillName.Writing),
      },
    ],
  },
  {
    logo: 'assets/img/tei.jpg',
    logoColor: '#37753f', // TEI's brand color
    role: 'Full-stack Software Engineering Intern',
    company: 'TEI Software Development',
    workType: 'Full-time',
    location: 'Baton Rouge, LA',
    startDate: new Date('2022-05-15'),
    endDate: new Date('2022-08-15'),
    accomplishments: [
      {
        desc: 'Touched the full stack: wrote MongoDB aggregation pipelines, created endpoints with C#, and implemented Angular webpages. Effectively resolved a variety of tasks.',
        skill: getSkill(SkillName.FullStack),
      },
      {
        desc: "In collaboration with a senior engineer, created a high level service to manage multiple components's form controls. Picked up some 'advanced ng tricks' like hierarchical dependency injection, and leveraging polymorphism and inhertenace.",
        skill: getSkill(SkillName.Angular),
      },
    ],
  },
  {
    logo: 'assets/img/tei.jpg',
    logoColor: '#37753f', // TEI's brand color
    role: 'Full-stack Software Engineering Intern',
    company: 'TEI Software Development',
    location: 'Baton Rouge, LA',
    workType: 'Full-time',
    startDate: new Date('2021-05-15'),
    endDate: new Date('2021-08-15'),
    accomplishments: [
      {
        desc: 'Specialized in Flutter front-end development, rapidly learning a new framework to support a new app with a tight deadline. We successfully delivered a functional prototype by summer’s end.',
        skill: getSkill(SkillName.Flutter),
      },
      {
        desc: 'To allow the team to iterate rapidly, leveraged Flutters hot-reload to rapidly implemented styling suggestions often within the very same meeting. This facilitated the high level of polish despite the tight deadline.',
        skill: getSkill(SkillName.UX),
      },
    ],
  },
  {
    logo: 'assets/img/mw.png',
    logoColor: 'rgb(75,113,191)', // TEI's brand color
    role: 'Lifeguard and Swim Coach',
    company: 'Magnolia Woods Swim and Racquet Club',
    location: 'Baton Rouge, LA',
    workType: 'Summer PT',
    startDate: new Date('2017-05-15'),
    endDate: new Date('2020-08-15'),
    accomplishments: [
      {
        desc: 'Explained strokes, ran drills, and helped swimmers at meets. Helped coach the seven and eights in the morning, introducing back and breast stroke, diving, and not holding onto the rope quite so much.',
        skill: getSkill(SkillName.Presenting),
      },
      {
        desc: 'Red cross certified lifeguard. Watched the pool, insisted on walking, and judged splash contents in the deep end. Brushed decks, setup pool chairs, and pulled (stinky) trash.',
        skill: getSkill(SkillName.Hardwork),
      },
    ],
  },
];
