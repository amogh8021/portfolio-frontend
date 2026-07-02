export const profile = {
  name: 'Amogh Shrivastav',
  title: 'Java Full Stack Developer',
  motto: 'Every Great Product Begins with the Right Move.',
  email: 'amogh.shrivastav@gmail.com',
  github: 'https://github.com/amoghshrivastav',
  linkedin: 'https://www.linkedin.com/in/amoghshrivastav',
  resumeUrl: '/resume.pdf',
  focus:
    'Building scalable backend systems with Spring Boot and modern frontend experiences using React.',
};

export const heroHeadlines = [
  'Every Move Matters.',
  'Think. Build. Execute.',
  'Engineering with Strategy.',
  'Turning Ideas into Well-Planned Systems.',
  'Thinking Beyond the Next Commit.',
];

export const aboutParagraphs = [
  'I learned to program the same way I learned to play chess — slowly, deliberately, and with a lot of lost games. The first time I sat down to build something real, I rushed. I wrote code before I understood the problem, shipped before I tested the edges, and refactored for weeks because I had not thought the position through.',
  'Chess fixed that. Before a move, you calculate. You consider two or three replies, not just the one you hope for. You accept that the obvious move is often wrong, and that patience is a competitive advantage. Somewhere between my first tournament and my first production bug, the two disciplines merged into one.',
  'Now I plan before I code. I sketch the architecture, list the failure modes, and only then open the editor. When something breaks — and it always does — I stop, reproduce, and read the position before I move. Debugging is just analysis with a console. Refactoring is just improving a position you are no longer happy with.',
  'I break large problems the way you break a complex middlegame: into smaller positions you can actually evaluate. I iterate the way you analyze a board — try a line, reject it, try another, keep the one that holds. And I have learned to stay calm when the build is red, because panic in chess and in code leads to the same place: a blunder you cannot take back.',
];

export type SkillGroup = {
  phase: string;
  subtitle: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    phase: 'Opening',
    subtitle: 'The first moves — the languages I think in.',
    items: [
      { name: 'Java', level: 92 },
      { name: 'TypeScript', level: 80 },
      { name: 'SQL', level: 78 },
      { name: 'Python', level: 65 },
    ],
  },
  {
    phase: 'Middlegame',
    subtitle: 'Where the structure holds — the backend.',
    items: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring Security', level: 82 },
      { name: 'REST APIs', level: 88 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Hibernate / JPA', level: 84 },
    ],
  },
  {
    phase: 'Position',
    subtitle: 'How the board looks to the user — the frontend.',
    items: [
      { name: 'React', level: 85 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Framer Motion', level: 75 },
      { name: 'HTML / CSS', level: 88 },
    ],
  },
  {
    phase: 'Endgame',
    subtitle: 'Closing the game cleanly — shipping & tooling.',
    items: [
      { name: 'Docker', level: 72 },
      { name: 'Git', level: 90 },
      { name: 'CI / CD', level: 68 },
      { name: 'AWS', level: 60 },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  features: string[];
  challenges: string;
  lessons: string;
  github?: string;
  live?: string;
  status: 'shipped' | 'in-progress' | 'planned';
  accent: 'gold' | 'forest' | 'ink';
};

export const projects: Project[] = [
  {
    slug: 'juttjao',
    name: 'JuttJao',
    tagline: 'Khelna Hai? JuttJao.',
    problem:
      'Finding people to play a casual game of cricket or football in your own neighbourhood is surprisingly hard. Group chats fragment, last-minute dropouts go unmanaged, and there is no trusted way to discover players at your skill level nearby.',
    solution:
      'A hyperlocal sports community platform that helps people discover players, organize matches, and build trusted sports communities around the grounds they actually play on.',
    architecture:
      'Spring Boot REST backend with PostgreSQL for persistence, JWT auth with Spring Security, a spatial query layer for proximity-based player discovery, and a React + TypeScript frontend with optimistic UI for match creation and RSVP flows.',
    techStack: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Spring Security', 'JWT'],
    features: [
      'Proximity-based player discovery',
      'Match creation with RSVP and waitlist',
      'Skill-level matching and trust ratings',
      'Community feeds per locality and sport',
      'Secure JWT authentication',
    ],
    challenges:
      'Designing a trust system that felt fair without becoming a rating economy. Proximity queries at scale needed careful indexing — a naive filter turned a 200ms response into a 4s one.',
    lessons:
      'The hardest part of a community product is not the code — it is the cold start. I learned to design for the first ten users before designing for ten thousand.',
    github: 'https://github.com/amoghshrivastav/juttjao',
    live: '#',
    status: 'in-progress',
    accent: 'forest',
  },
  {
    slug: 'bookstore',
    name: 'BookStore',
    tagline: 'A full-stack commerce experience, built end to end.',
    problem:
      'Most bookstore tutorials stop at a product list and a cart. A real commerce system has to handle auth, inventory, orders, payments, and an admin surface — and they all have to agree.',
    solution:
      'A complete bookstore application with customer browsing, cart and checkout, an admin dashboard for inventory and orders, and role-based access throughout.',
    architecture:
      'Layered Spring Boot backend (controller / service / repository), Spring Security with role-based authorization, JPA entities with proper relationships, and a React frontend with shared cart state and protected admin routes.',
    techStack: ['Spring Boot', 'Spring Security', 'JPA / Hibernate', 'React', 'PostgreSQL', 'REST'],
    features: [
      'Role-based auth (customer / admin)',
      'Product catalog with search and filter',
      'Cart and checkout flow',
      'Admin inventory and order management',
      'RESTful API with proper status codes',
    ],
    challenges:
      'Keeping the cart state honest across the client and server when a user could add items, leave, and come back days later. Solved it by persisting the cart server-side and hydrating on login.',
    lessons:
      'State that lives in two places will drift. I learned to pick one source of truth and make the other a projection of it.',
    github: 'https://github.com/amoghshrivastav/bookstore',
    status: 'shipped',
    accent: 'gold',
  },
  {
    slug: 'future-project',
    name: 'Future Project',
    tagline: 'A position I am still calculating.',
    problem:
      'Every engineer has a project they have not started yet — the one they are thinking through before they write a single line. This is mine.',
    solution:
      'A real-time collaboration tool for engineering teams that treats decisions as first-class objects — not just chat messages, but recorded, searchable moves with context and rationale.',
    architecture:
      'Planned: Spring Boot + WebSocket gateway, event-sourced decision log, PostgreSQL with append-only decision tables, React frontend with live cursors and a timeline view.',
    techStack: ['Spring Boot', 'WebSockets', 'React', 'PostgreSQL', 'Event Sourcing'],
    features: [
      'Decision log with full history',
      'Real-time collaborative editing',
      'Searchable rationale and context',
      'Timeline of every move a team made',
    ],
    challenges:
      'Designing an event-sourced model that stays readable as the dataset grows. The architecture is the hard part — the code is the easy part.',
    lessons:
      'Some projects are worth waiting for. The right move is sometimes to keep calculating.',
    status: 'planned',
    accent: 'ink',
  },
];

export type StrategicMove = {
  move: number;
  notation: string;
  title: string;
  year: string;
  detail: string;
};

export const strategicMoves: StrategicMove[] = [
  { move: 1, notation: 'e4', title: 'Programming Fundamentals', year: '2021', detail: 'The first move. Loops, conditionals, and the slow realization that code is just clear thinking made executable.' },
  { move: 2, notation: 'Nf3', title: 'Java', year: '2022', detail: 'Chose a language and stayed with it. Learned OOP, collections, and the discipline of a strongly typed world.' },
  { move: 3, notation: 'Bb5', title: 'Spring Boot', year: '2022', detail: 'Moved into the backend. Dependency injection, layered architecture, and the moment frameworks stopped feeling like magic.' },
  { move: 4, notation: 'O-O', title: 'Authentication', year: '2023', detail: 'Castled. Learned Spring Security, JWT, sessions, and why protecting the king is the first real responsibility.' },
  { move: 5, notation: 'd4', title: 'REST APIs', year: '2023', detail: 'Opened the center. Designed contracts, status codes, and learned that a good API is a promise you keep.' },
  { move: 6, notation: 'c4', title: 'React', year: '2023', detail: 'Flank attack. Components, hooks, state, and the frontend mental model that finally clicked.' },
  { move: 7, notation: 'Re1', title: 'Full Stack Projects', year: '2024', detail: 'Brought the pieces together. Built end-to-end systems where the backend and frontend had to agree.' },
  { move: 8, notation: 'Qd1', title: 'Internship Journey', year: '2024', detail: 'The queen enters. Real codebases, real deadlines, and the shift from building to learn to building to ship.' },
];

export const achievements = [
  { label: 'Projects Built', value: '8+', detail: 'Full-stack and backend systems, from commerce to community platforms.' },
  { label: 'Problems Solved', value: '200+', detail: 'LeetCode and real-world debugging — the daily analysis that sharpens the position.' },
  { label: 'Consistency', value: '365', detail: 'Days of continuous learning. The board does not study itself.' },
  { label: 'Open Source', value: 'Next', detail: 'Contributing back is the next move on the board.' },
];

export const chessQuotes = [
  'The hardest game to win is a won game. — Emanuel Lasker',
  'Every chess master was once a beginner. — Irving Chernev',
  'A good player is always lucky. — José Capablanca',
  'The pin is mightier than the sword. — Fred Reinfeld',
  'Patience is the most valuable trait of a chess player. — Reuben Fine',
  'Tactics flow from a superior position. — Bobby Fischer',
  'When you see a good move, look for a better one. — Emanuel Lasker',
];

export const footerQuotes = [
  'Every masterpiece begins with a well-planned move.',
  'The board is never empty — only the next move is unwritten.',
  'A position improves one quiet move at a time.',
  'Great software, like great chess, is built one thoughtful move at a time.',
];
