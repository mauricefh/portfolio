export const firstName = "Maurice";
export const lastName = "Filiatreault";
export const fullName = `${firstName} ${lastName}`;
export const location = "Edmonton, Alberta, Canada";
export const email = "inbox@mauricefh.com";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [];

export const myProjects = [
  {
    title: "Helhest Cane Corso - Dog Breeder Website",
    desc: "Helhest Cane Corso is a premier dog breeding platform dedicated to the exceptional Cane Corso breed. With a focus on health, temperament, and pedigree, they provide carefully raised puppies ready for adoption. The streamlined request process makes it easy for dog lovers to find their perfect companion, ensuring each puppy is matched with a loving home.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 15, MaterialUI, TypeScript, PostgreSQL, Helhest Cane Corso is designed for simplicity and multilanguage support.",
    href: "https://www.helhestcanecorso.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Centre Franco-Ontarien De Ressources Pédagogiques",
    pos: "Full Stack Developer",
    duration: "Sept 2024 – Feb 2025",
    bullets: [
      {
        title: "Automated workflows using LLMs, cutting manual effort by 30%.",
      },
      {
        title:
          "Developed optimized static websites with Astro, boosting performance and SEO.",
      },
      {
        title:
          "Resolved code issues through team collaboration, ensuring smooth development.",
      },
      {
        title:
          "Aligned solutions with business needs by gathering cross-functional requirements.",
      },
    ],
    icon: "/assets/cforp.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Freelance",
    pos: "Web Developer",
    duration: "Mar 2024 – Sept 2024",
    bullets: [
      {
        title:
          "Amplified client engagement by 20% via JavaScript and React applications.",
      },
      {
        title:
          "Slashed load times by 35% using code splitting and lazy loading.",
      },
      {
        title:
          "Boosted user interaction efficiency by 50% via RESTful APIs and GraphQL.",
      },
      {
        title:
          "Reduced bounce rates by 15% by diagnosing performance bottlenecks.",
      },
    ],
    icon: "/assets/logo.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "3wDesign",
    pos: "Software Engineer",
    duration: "Apr 2023 – Mar 2024",
    bullets: [
      {
        title:
          "Accommodated 50% more traffic with Blazor, maintaining performance.",
      },
      { title: "Increased user retention by 30% with responsive Blazor UIs." },
      { title: "Accelerated SQL queries by 40%, optimizing data retrieval." },
      { title: "Cut front-end dev time by 25% by adopting Vue.js." },
    ],
    icon: "/assets/3wdesign.svg",
    animation: "salute",
  },
  {
    id: 4,
    name: "House of Commons",
    pos: "Back-end Developer",
    duration: "Nov 2022 – Mar 2023",
    bullets: [
      { title: "Strengthened system reliability by 20% using ASP.NET Core." },
      { title: "Enhanced team collaboration by migrating to Azure DevOps." },
      {
        title: "Halved deployment times by configuring Azure CI/CD pipelines.",
      },
      {
        title:
          "Saved 15 hours per project by publishing reusable NuGet packages.",
      },
    ],
    icon: "/assets/hoc.svg",
    animation: "victory",
  },
];
