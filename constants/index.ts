// Define TypeScript Interfaces for Skills and Project Cards
export interface Skill {
  skillName: string;
  image: string;
  width: number;
  height: number;
}

export interface ProjectCard {
  image: string;
  width: number;
  height: number;
  title: string;
  description: string;
  page: string;
}

// FRONTEND_SKILLS Data
export const FRONTEND_SKILLS: Skill[] = [
  {
    skillName: "HTML 5",
    image: "/images/icons/html.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "CSS",
    image: "/images/icons/css.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "JavaScript",
    image: "/images/icons/js.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "Tailwind CSS",
    image: "/images/icons/tailwind.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "React",
    image: "/images/icons/react.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "TypeScript",
    image: "/images/icons/ts.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "Next.js",
    image: "/images/icons/next.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "Framer Motion",
    image: "/images/icons/framer.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "Figma",
    image: "/images/icons/figma.png",
    width: 96,
    height: 96,
  },
];

// BACKEND_SKILLS Data
export const BACKEND_SKILLS: Skill[] = [
  {
    skillName: "Node.js",
    image: "/images/icons/node-js.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "Express.js",
    image: "/images/icons/express.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "MongoDB",
    image: "/images/icons/mongodb.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "MySQL",
    image: "/images/icons/mysql.png",
    width: 96,
    height: 96,
  },
  {
    skillName: "GitHub",
    image: "/images/icons/github.png",
    width: 96,
    height: 96,
  },
];

// PROJECT_CARDLIST Data
export const PROJECT_CARDLIST: ProjectCard[] = [
  {
    image: "/images/portfolio/portfolio.png",
    width: 1280,
    height: 862,
    title: "Portfolio",
    description: "A page to showcase my front-end developer skills.",
    page: "/portfolio",
  },
  {
    image: "/images/portfolio/food-app.png",
    width: 1280,
    height: 862,
    title: "Food App",
    description: "A platform to search for your favorite recipes.",
    page: "/foodapp",
  },
  {
    image: "/images/portfolio/tindog.png",
    width: 1280,
    height: 862,
    title: "Tindog",
    description: "An app for dog owners to connect.",
    page: "/tindog",
  },
  {
    image: "/images/portfolio/simon-game.png",
    width: 1280,
    height: 862,
    title: "Simon Game",
    description: "A simple JavaScript Simon game.",
    page: "/simon-game",
  },
  {
    image: "/images/portfolio/dice-game.png",
    width: 1280,
    height: 862,
    title: "Dice Game",
    description: "A fun dice game built with JavaScript.",
    page: "/dice-game",
  },
  {
    image: "/images/portfolio/rfs.png",
    width: 1280,
    height: 862,
    title: "Red Flag Symptoms",
    description: "An alphabetical list of symptoms to help diagnose patients.",
    page: "/rfs",
  },
  {
    image: "/images/portfolio/todolistv2.png",
    width: 1280,
    height: 862,
    title: "Todo List",
    description: "A simple to-do list application to manage tasks.",
    page: "/todolistv2",
  },
  {
    image: "/images/portfolio/newsletter.png",
    width: 1280,
    height: 862,
    title: "Newsletter",
    description: "Sign up to receive the latest newsletter updates.",
    page: "/newsletter",
  },
  {
    image: "/images/portfolio/secrets.png",
    width: 1280,
    height: 862,
    title: "Secrets",
    description: "Share secrets anonymously with the world.",
    page: "/secrets",
  },
];
