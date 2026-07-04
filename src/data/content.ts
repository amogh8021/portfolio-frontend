
export const profile = {
  name: 'Amogh Shrivastav',
  title: 'Java Full Stack Developer',
  motto: 'Every Great Product Begins with the Right Move.',
  email: 'amoghdev8021@gmail.com',
  github: 'https://github.com/amogh8021',
  linkedin: 'https://www.linkedin.com/in/amoghshrivastav',
  resumeUrl: "/resume/Amogh_resume.pdf",
  focus:
    'Building scalable backend applications with Spring Boot while crafting clean and responsive user experiences using React.',
};

export const heroHeadlines = [
  'Every Move Matters.',
  'Think Ahead. Build Better.',
  'Engineering with Strategy.',
  'From Ideas to Reliable Software.',
  'Solving Problems, One Move at a Time.',
];

export const aboutParagraphs = [
  `My journey into software development didn't begin with writing perfect code—it began with curiosity. I enjoyed understanding how things worked and slowly discovered that programming was the best way to turn ideas into something people could actually use.`,

  `Alongside coding, chess became one of the biggest influences on how I think. It taught me that rushing rarely leads to good results. The strongest move isn't always the fastest one; it's the one you understand completely. That same mindset now shapes the way I approach software development.`,

  `Before I start writing code, I like to understand the problem first. I spend time planning the structure, thinking about edge cases, and breaking larger problems into smaller, manageable pieces. It saves time later and makes debugging much easier when the application grows.`,

  `Most of my learning has come from building projects instead of simply following tutorials. Every project has introduced new challenges—whether it was implementing authentication, designing REST APIs, managing application state, or improving database relationships. Each challenge has helped me become a more thoughtful developer.`,

  `I'm currently focused on becoming a strong backend engineer while continuing to improve my frontend skills. My immediate goal is to contribute to a real engineering team through a software development internship, where I can learn from experienced developers and build software that solves meaningful problems.`,
];



export type SkillGroup = {
  phase: string;
  subtitle: string;
 
  items: {
    name: string;
    level: number;
  }[];
};

export const skillGroups: SkillGroup[] = [
  {
    phase: "Preparation",
   
    subtitle:
      "Building the fundamentals before making the first move.",

    items: [
      { name: "Java", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "TypeScript", level: 76 },
      { name: "SQL", level: 82 },
      { name: "DSA", level: 80 },
    ],
  },

  {
    phase: "Opening",
   
    subtitle:
      "Building secure and scalable backend applications.",

    items: [
      { name: "Spring Boot", level: 86 },
      { name: "Spring Security", level: 80 },
      { name: "REST APIs", level: 88 },
      { name: "Hibernate / JPA", level: 82 },
      { name: "MySQL", level: 84 },
    ],
  },

  {
    phase: "Middlegame",
   
    subtitle:
      "Crafting responsive, modern and interactive user interfaces.",

    items: [
      { name: "React", level: 78 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 86 },
      { name: "Tailwind CSS", level: 84 },
      { name: "Framer Motion", level: 68 },
    ],
  },

  {
    phase: "Endgame",
   
    subtitle:
      "Testing, collaboration, deployment and continuous improvement.",

    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 92 },
      { name: "Docker", level: 65 },
      { name: "Deployment", level: 70 },
    ],
  },
];

export interface Project {
  slug: string;

  name: string;

  tagline: string;

  accent: 'gold' | 'forest' | 'ink';

  status: 'shipped' | 'in-progress' | 'planned';

  category: string;

  duration: string;

  image: string;

  github?: string;

  live?: string;

  problem: string;

  solution: string;

  architecture: string;

  challenges: string;

  lessons: string;

  features: string[];

  techStack: string[];

  metrics: {
    label: string;
    value: string;
  }[];
}


export const projects: Project[] = [
  {
    slug: "bookstore",

    name: "BookStore",

    tagline: "A complete full-stack bookstore built with Spring Boot and React.",

    category: "Full Stack",

    duration: "3 Weeks",

    image: "/projects/bookstore.webp",

    accent: "gold",

    status: "shipped",

    github: "https://github.com/amogh8021/Bookstore",

    live: "#",

    metrics: [
      {
        label: "REST APIs",
        value: "25+",
      },
      {
        label: "Database",
        value: "12 Tables",
      },
      {
        label: "Security",
        value: "JWT",
      },
      {
        label: "Frontend",
        value: "React",
      },
    ],

    problem:
      "Most bookstore tutorials only demonstrate CRUD operations. I wanted to build something much closer to a real-world application where users can browse books, authenticate securely, manage shopping carts, place orders and administrators can manage the catalog.",

    solution:
      "Built a production-style full-stack bookstore using Spring Boot and React with JWT authentication, role-based authorization, REST APIs and an admin dashboard.",

    architecture:
      "Layered architecture using Controller → Service → Repository with MySQL database. Spring Security handles authentication while Hibernate/JPA manages persistence. React communicates through REST APIs.",

    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
      "React",
      "MySQL",
      "REST API",
    ],

    features: [
      "User Authentication",
      "JWT Login",
      "Role Based Authorization",
      "Book Catalog",
      "Search & Filter",
      "Shopping Cart",
      "Order Management",
      "Admin Dashboard",
      "REST APIs",
      "Responsive React UI",
    ],

    challenges:
      "Implementing JWT authentication correctly using Spring Security filters, understanding authentication flow and securing protected endpoints.",

    lessons:
      "Learned how enterprise applications are structured, how frontend communicates with backend through REST APIs and why clean architecture matters more than adding random features.",
  },
  

  {
    slug: "juttjao",

    name: "JuttJao",

    tagline: "Khelna Hai? JuttJao.",

    category: "Full Stack",

    duration: "Planning",

    image: "/projects/juttjao.webp",

    accent: "forest",

    status: "in-progress",

    github: "https://github.com/amogh8021",

    live: "#",

    metrics: [
      {
        label: "Stage",
        value: "Planning",
      },
      {
        label: "Focus",
        value: "Community",
      },
      {
        label: "Backend",
        value: "Spring",
      },
      {
        label: "Frontend",
        value: "React",
      },
    ],

    problem:
      "Players often struggle to find teammates for casual sports. Existing solutions rely on WhatsApp groups and personal contacts, making last-minute coordination difficult.",

    solution:
      "A hyperlocal sports community platform where users can create matches, discover nearby games, join teams and build trusted player communities.",

    architecture:
      "Planned architecture consists of a Spring Boot REST backend, JWT authentication, MySQL database and React frontend following modular service-oriented design.",

    techStack: [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React",
      "MySQL",
    ],

    features: [
      "Create Matches",
      "Join Nearby Matches",
      "Player Profiles",
      "Sports Communities",
      "Organizer Dashboard",
      "Authentication",
      "Future Reputation System",
    ],

    challenges:
      "Understanding the real user problem before writing code. Product research is more important than jumping directly into development.",

    lessons:
      "Software engineering starts with understanding users, not writing code. Good planning saves months of unnecessary development.",
  },

  {
    slug: "next-move",

    name: "Next Move",

    tagline: "Always learning. Always building.",

    category: "Research",

    duration: "Future",

    image: "/projects/nextmove.webp",

    accent: "ink",

    status: "planned",

    metrics: [
      {
        label: "Status",
        value: "Research",
      },
      {
        label: "Architecture",
        value: "Planning",
      },
      {
        label: "Goal",
        value: "Production",
      },
      {
        label: "Stack",
        value: "TBD",
      },
    ],

    problem:
      "Technology evolves continuously and every completed project opens the door to solving more meaningful problems.",

    solution:
      "Instead of creating unfinished side projects, I focus on researching, planning and building one high-quality production-ready application at a time.",

    architecture:
      "Currently under research and architectural planning.",

    techStack: [
      "Spring Boot",
      "React",
      "Docker",
    ],

    features: [
      "Research",
      "Architecture",
      "Planning",
    ],

    challenges:
      "Choosing the right problem to solve is usually harder than writing the code itself.",

    lessons:
      "Quality compounds. A few well-built projects teach far more than dozens of incomplete ones.",
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
  {
    move: 1,
    notation: "e4",
    title: "Programming Fundamentals",
    year: "2022",
    detail:
      "Started with the basics of programming, learning how logic, problem solving and clean thinking come together to build software.",
  },

  {
    move: 2,
    notation: "Nf3",
    title: "Java & Object-Oriented Programming",
    year: "2023",
    detail:
      "Built a strong foundation in Java while understanding object-oriented programming, collections and writing maintainable code.",
  },

  {
    move: 3,
    notation: "Bb5",
    title: "Backend Development",
    year: "2024",
    detail:
      "Moved beyond console applications and started building REST APIs using Spring Boot, Hibernate and MySQL.",
  },

  {
    move: 4,
    notation: "O-O",
    title: "Authentication & Security",
    year: "2024",
    detail:
      "Implemented JWT authentication and role-based authorization with Spring Security, gaining a deeper understanding of secure backend development.",
  },

  {
    move: 5,
    notation: "d4",
    title: "Full Stack Development",
    year: "2025",
    detail:
      "Combined React with Spring Boot to build complete applications where frontend and backend communicate through REST APIs.",
  },

  {
    move: 6,
    notation: "c4",
    title: "Building Real Projects",
    year: "2025",
    detail:
      "Focused on applying concepts by building practical projects instead of only completing tutorials, learning through debugging and iteration.",
  },

  {
    move: 7,
    notation: "Re1",
    title: "BookStore Project",
    year: "2026",
    detail:
      "Developed a complete full-stack bookstore application featuring authentication, role-based access, product management and a responsive React frontend.",
  },

  {
    move: 8,
    notation: "Qd1",
    title: "Next Move",
    year: "Present",
    detail:
      "Preparing for software development internships while designing JuttJao, improving DSA skills and continuing to build production-ready applications.",
  },
];

export const achievements = [
  {
    value: "6+",
    label: "Projects Built",
    detail:
      "Full Stack and Backend applications using Java, Spring Boot, React and MySQL.",
  },
  {
    value: "150+",
    label: "DSA Problems",
    detail:
      "Solved on LeetCode and GeeksforGeeks to strengthen problem-solving skills.",
  },
  {
    value: "150+",
    label: "REST APIs",
    detail:
      "Developed secure and scalable REST APIs using Spring Boot.",
  },
  {
    value: "5+",
    label: "Certificates",
    detail:
      "Completed certifications in Java, Web Development and Backend technologies.",
  },
];

export const chessQuotes = [
  "Every move creates a new position. Every decision shapes the software.",
  "Strong software is built the same way strong positions are built—patiently.",
  "Good engineers don't rush solutions; they understand problems first.",
  "The best move isn't always the fastest one. It's the one that lasts.",
  "Planning saves more time than fixing avoidable mistakes.",
  "Simple solutions usually come from deep understanding.",
  "Every project teaches the next move.",
];

export const footerQuotes = [
  "Every great product begins with the right move.",
  "Building software with strategy, patience and purpose.",
  "Think ahead. Build better.",
  "Great software isn't rushed. It's carefully planned, one move at a time.",
];