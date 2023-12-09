import journal from "@/public/journal.jpeg";
import game from "@/public/game.jpeg";
import response from "@/public/response.jpeg";
export const projects = [
  {
    projectName: "React Web Application using RAWG API",
    id: 1,
    description:
      "Developed a dynamic web application utilizing the RAWG API to provide comprehensive information about games. Implemented features such as sorting, REST API category filtering by genres, and a search functionality for an enhanced user experience.",
    technologies: {
      frontend: [
        "React ",
        "React Query ",
        "React Router ",
        "Zustand ",
        "Chakra UI",
      ],
    },
    functionalityHighlights: [
      "Implemented sorting options for a user-friendly game listing.",
      "Integrated REST API category filtering based on genres for enhanced content organization.",
      "Incorporated a search feature to facilitate quick access to specific games.",
      "Utilized React Infinite Scrolling component for a seamless browsing experience.",
    ],
    deployment: "Deployed the application on Vercel.",
    image: game,
    link: "https://itachi-gaming.vercel.app/",
  },
  {
    projectName: "Journal App with Next.js",
    id: 2,
    description:
      "Developed a dynamic journal application using Next.js, enabling users to seamlessly add daily entries. Implemented authentication initially with Clerk Docs and later integrated NextAuth with Google Auth provider middleware, utilizing Prisma and Supabase for backend functionality. In development, MySQL database was employed for data storage, allowing users to perform CRUD operations such as deleting and modifying journal entries. The application also features autosaving and the ability to create new journal entries.",
    technologies: {
      frontend: ["Next.js ", "Next UI ", "Tailwind CSS ", "Chakra UI "],
      authentication: ["Clerk Docs ", "NextAuth with Google Auth provider"],
      backend: ["Prisma ", "Supabase ", "MySQL "],
    },
    functionalityHighlights: [
      "Users can add daily journal entries.",
      "Authentication initially implemented with Clerk Docs and later with NextAuth.",
      "CRUD operations enabled, allowing users to delete and modify journal entries.",
      "Autosaving feature for user convenience.",
      "Ability to create new journal entries.",
    ],
    stylingLibraries: ["Next UI", "Tailwind CSS", "Chakra UI"],
    deployment:
      "Deployed the application on [Deployment Platform] (replace with the actual deployment platform).",
    image: journal,
    link: "https://journal-fawn-ten.vercel.app/",
  },
  {
    projectName: "Response Issue Full Stack Web Application",
    id: 3,
    description:
      "Developed a feature-rich full-stack web application using Next.js, enabling users to dynamically fetch and write responses. Utilized Prisma as the ORM for PostgreSQL and Supabase databases, implementing CRUD operations for seamless data management. The application features a dark theme and incorporates user authentication via NextAuth with the OAuth Google provider, along with middleware for efficient sign-in and sign-out processes.",
    technologies: {
      frontend: ["Next.js ", "Radix UI ", "Next UI ", "Tailwind CSS "],
      backend: ["Prisma ", "Supabase ", "PostgreSQL "],
      authentication: ["NextAuth ", "OAuth Google provider "],
    },
    functionalityHighlights: [
      "Full-stack capabilities allowing users to fetch and write responses",
      "CRUD operations seamlessly integrated with Prisma and both PostgreSQL and Supabase databases",
      "Dark theme implementation for an aesthetically pleasing user experience",
      "User authentication using NextAuth with OAuth Google provider",
      "Middleware for streamlined sign-in and sign-out processes",
    ],
    stylingLibraries: ["Radix UI ", "Next UI ", "Tailwind CSS "],
    deployment:
      "Deployed the application on [Deployment Platform] (replace with the actual deployment platform).",
    image: response,
    link: "https://response-nextjs.vercel.app/",
  },
];
