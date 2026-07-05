
export const profile = {
  name: 'Amogh Shrivastav',
  title: 'Java Full Stack Developer',
  motto: 'Every Great Product Begins with the Right Move.',
  email: 'amoghdev8021@gmail.com',
  github: 'https://github.com/amogh8021',
  linkedin: 'https://www.linkedin.com/in/amogh-shrivastav-45a6b0346/',
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

  image: string[];

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

  tagline:
    "A production-inspired full-stack bookstore built with Spring Boot and React.",

  category: "Full Stack",

  duration: "7 week",

  image: [
       "/projects/bookstore/shop.png",
      "/projects/bookstore/dashboard.png",
      "/projects/bookstore/login.png"
    ] ,

  accent: "gold",

  status: "shipped",

  github: "https://github.com/amogh8021/Bookstore",

  live: "https://portfolio-frontend-delta-tan.vercel.app",

  metrics: [
    {
      label: "Modules",
      value: "10+",
    },
    {
      label: "Security",
      value: "JWT",
    },
    {
      label: "Payment",
      value: "Razorpay",
    },
    {
      label: "Vercel & Render",
      value: "Deployed",
    },
  ],

  problem:
    "Most bookstore projects focus only on basic CRUD operations. I wanted to build a production-style application that combines secure authentication, role-based authorization, shopping cart management, online payments, order processing, and an admin dashboard into a single modular system.",

  solution:
    "Developed a complete full-stack bookstore where users can securely register, browse books, manage wishlists and carts, place orders, and complete online payments. Administrators can manage books, offers, orders, and users through protected REST APIs secured with Spring Security and JWT.",

  architecture:
    "Designed using a layered architecture (Controller → Service → Repository) with Spring Boot, Spring Security, JWT authentication, Hibernate/JPA, MySQL, and a React frontend communicating through REST APIs. The project follows clean separation of concerns with DTOs, mappers, exception handling, and modular services.",

  techStack: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "Hibernate",
    "JPA",
    "MySQL",
    "React",
    "javascript",
    "chart.js",
    "REST API",
    "Docker",
    "Google OAuth",
    "Razorpay",
  ],

  features: [
    "JWT Authentication",
    "Google OAuth Login",
    "Role-Based Authorization",
    "Book Management",
    "Shopping Cart",
    "Wishlist",
    "Order Management",
    "Razorpay Payment Integration",
    "Admin Dashboard",
    "Offer Management",
    "RESTful APIs",
    "Responsive React UI",
  ],

  challenges:
    "One of the biggest challenges was understanding Spring Security and implementing JWT authentication correctly while protecting routes based on user roles. Integrating payments, authentication, and multiple business modules into a clean architecture also required careful API and database design.",

  lessons:
    "This project helped me understand how real-world full-stack applications are structured. I learned how authentication, authorization, database relationships, REST APIs, frontend integration, and modular backend architecture work together to build scalable applications.",
},

{
  slug: "poshansetu",

  name: "PoshanSetu",

  tagline:
    "AI-powered nutrition and healthcare platform for Anganwadi management.",

  category: "Full Stack (Team Project - 3)",

  duration: "College Major Project",

 image: [
  
      "/projects/poshansetu/login.png",
      "/projects/poshansetu/dashboard.png",
      "/projects/poshansetu/parent.png",
      "/projects/poshansetu/admin.png"
    ] ,

  accent: "forest",

  status: "in-progress",

  github: "https://github.com/amogh8021",

  live: "#",

  metrics: [
    {
      label: "Architecture",
      value: "4-Tier",
    },
    {
      label: "ML Models",
      value: "2",
    },
    {
      label: "User Roles",
      value: "3",
    },
    {
      label: "team-member",
      value: "3",
    },
  ],

  problem:
    "Anganwadi centres still rely heavily on paper records to manage child growth, maternal health, vaccinations and nutrition. Manual workflows make it difficult to identify high-risk children, maintain historical records and coordinate efficiently between parents, healthcare workers and administrators.",

  solution:
    "Built an AI-powered healthcare platform that digitizes Anganwadi operations using React, Spring Boot and a Flask machine learning microservice. The system predicts child malnutrition and pregnancy risk, manages vaccination schedules, tracks nutrition and provides role-based dashboards for different users.",

  architecture:
    "Designed as a four-tier architecture with a React frontend, Spring Boot REST APIs, Flask-based ML microservice and MySQL database. Spring Security with JWT secures the application while REST communication connects the backend with machine learning services and Twilio SMS notifications.",

  techStack: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "React",
    "Tailwind CSS",
    "MySQL",
    "Python",
    "Flask",
    "Scikit-Learn",
    "Random Forest",
    "REST API",
    "Twilio",
  ],

  features: [
    "JWT Authentication",
    "Role-Based Access Control",
    "Child Health Monitoring",
    "Malnutrition Prediction",
    "Pregnancy Risk Prediction",
    "Vaccination Management",
    "Nutrition Tracking",
    "Attendance Management",
    "Growth Analytics",
    "Twilio SMS Notifications",
    "REST API Integration",
    "Responsive Dashboard",
  ],

  challenges:
    "Coordinating multiple technologies across frontend, backend and machine learning services while maintaining secure authentication, REST communication and reliable data flow between Spring Boot and the Flask prediction service.",

  lessons:
    "This project strengthened my understanding of enterprise backend architecture, JWT authentication, REST API integration and team collaboration. It also gave me practical exposure to integrating machine learning services into a full-stack application.",

},

  {
    slug: "juttjao",

    name: "JuttJao",

    tagline: "Khelna Hai? JuttJao.",

    category: "Full Stack",

    duration: "Planning",

    image: [
      "/projects/bookstore.webp",
      "/projects/bookstore-dashboard.webp",
      "/projects/bookstore-cart.webp"
    ],

    accent: "forest",

    status: "in-progress",

    github: "https://github.com/amogh8021/Poshansetu",

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