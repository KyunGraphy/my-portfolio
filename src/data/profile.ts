// =============================================================
//  EDIT THIS FILE ONLY to fill your real portfolio content.
//  Structure is fixed; just replace the placeholder strings.
// =============================================================

export const profile = {
  // --- Cover (main role) ---
  cover: {
    name: "TRAN TRUNG KIEN",
    nickname: "Ken",
    role: "Software Engineering · AI Engineering",
    tagline: "No change no chance",
  },

  // --- Introduction ---
  intro: {
    heading: "Introduction",
    body: `My journey into software engineering started with a curiosity about how massive web applications function behind the scenes. Today, as a Full-Stack Engineer, I take pride in owning the entire lifecycle of a product—from the very first pixel on the screen to the complex database queries running in the background.

To me, coding isn't just about syntax; it's about building tools that simplify lives and solve real-world problems. When I'm not coding, you'll likely find me exploring system design, reading up on cloud optimizations, or contributing to open-source projects.`,
  },

  // --- Main skill + Education + Certificate ---
  skills: [
    {
      group: "Frontend Development",
      items: [
        { name: "ReactJS", url: "https://react.dev" },
        { name: "NextJS", url: "https://nextjs.org" },
        { name: "Redux Toolkit", url: "https://redux-toolkit.js.org" },
      ],
    },
    {
      group: "Backend Development",
      items: [
        { name: "TypeScript", url: "https://www.typescriptlang.org" },
        { name: "Golang", url: "https://go.dev" },
        { name: "Microservices", url: "https://microservices.io" },
        { name: "RESTful API", url: "https://restfulapi.net" },
        { name: "Python", url: "https://www.python.org" },
      ],
    },
    {
      group: "Database & Caching",
      items: [
        { name: "PostgreSQL", url: "https://www.postgresql.org" },
        { name: "MySQL", url: "https://www.mysql.com" },
        { name: "MongoDB", url: "https://www.mongodb.com" },
        { name: "Redis", url: "https://redis.io" },
        { name: "TypeORM", url: "https://typeorm.io" },
      ],
    },
    {
      group: "Core Strengths",
      items: [
        {
          name: "Problem-Solving",
          url: "https://en.wikipedia.org/wiki/Problem_solving",
        },
        {
          name: "Technical Communication",
          url: "https://en.wikipedia.org/wiki/Technical_communication",
        },
        {
          name: "System Design",
          url: "https://en.wikipedia.org/wiki/Systems_design",
        },
      ],
    },
    {
      group: "Languages",
      items: [
        {
          name: "English",
          url: "https://en.wikipedia.org/wiki/English_language",
        },
        {
          name: "Chinese",
          url: "https://en.wikipedia.org/wiki/Chinese_language",
        },
      ],
    },
  ],

  education: [
    {
      school: "Vietnam National University – International University (IU)",
      degree: "Bachelor",
      period: "2019 – 2024",
    },
  ],

  certificates: [
    { name: "TOEIC", issuer: "ETS", year: "2023" },
    { name: "TOEIC Speaking & Writing", issuer: "ETS", year: "2023" },
    { name: "HSK Level 5", issuer: "Hanban", year: "2026" },
    { name: "HSKK", issuer: "Hanban", year: "2026" },
  ],

  activities: [
    {
      name: "Calculus & Physics Teaching Assistant",
      role: "Teaching Assistant",
      period: "",
      skills: [
        "Explaining complex concepts simply",
        "Public speaking & presentation",
        "Mentoring 100+ students",
        "Patience & time management",
      ],
    },
    {
      name: "PASS Community",
      role: "Teaching Assistant",
      period: "",
      skills: [
        "Peer-assisted study facilitation",
        "Team collaboration",
        "Session planning",
        "Leadership",
      ],
    },
    {
      name: "IU Ambassador",
      role: "Member",
      period: "",
      skills: [
        "Event organization",
        "Networking & communication",
        "Cross-cultural engagement",
        "Leadership",
      ],
    },
  ],

  // --- My Interests (edit freely) ---
  interests: [
    { name: "Linguistics", icon: "linguistics", description: "" },
    { name: "Music", icon: "music", description: "" },
    { name: "Journey", icon: "journey", description: "" },
    { name: "Machine Learning", icon: "ml", description: "" },
    { name: "Data Analyze", icon: "data", description: "" },
    { name: "Coding", icon: "code", description: "" },
    { name: "Travelling", icon: "travelling", description: "" },
    { name: "Sport", icon: "sport", description: "" },
    { name: "Photograph", icon: "photograph", description: "" },
  ],

  // --- Work Experience + Achievement ---
  experience: [
    {
      company: "Codeforce Vina",
      role: "Junior Developer",
      period: "Apr 2024 – Present",
      location: "Ho Chi Minh City · On-site",
      points: [
        "Fundamental knowledge of Microservices architecture and RESTful API design.",
        "Experience with ElasticSearch for efficient data retrieval and search functionalities.",
        "Aerospike for high-performance NoSQL database management.",
        "SSE (Server-Sent Events) implementation for real-time data updates.",
      ],
    },
    {
      company: "Briswell Vietnam Co., Ltd",
      role: "Back-end Developer (Internship)",
      period: "Dec 2023 – Feb 2024",
      location: "Ho Chi Minh City · On-site",
      points: [
        "Data migration and database management tasks.",
        "Execute CSV data import scripts to migrate legacy data into new database schemas.",
      ],
    },
    {
      company: "The Ark Studio",
      role: "Frontend Developer (Internship)",
      period: "Jun 2022 – Dec 2022",
      location: "Ho Chi Minh City · Remote",
      points: [
        "Fundamental knowledge of ReactJS and NextJS for building responsive web applications.",
        "Scrum Agile methodologies for efficient project management and team collaboration.",
      ],
    },
    {
      company: "Viet A Soft (VietA Software Solutions)",
      role: "Software Engineer (Internship)",
      period: "Mar 2022 – Sep 2022",
      location: "Ho Chi Minh City · Hybrid",
      points: [
        "Fundamental knowledge of ReactJS and NextJS for building responsive web applications.",
        "Real time data updates using WebSockets for enhanced user experience.",
      ],
    },
  ],

  achievements: [
    "Released a mobile website for Resales Application in 2025.",
    "The business revenue increased by 20% after launching the mobile website.",
    "Application has gained 20000+ users in January 2026.",
  ],

  // --- Projects ---
  projects: [
    {
      name: "Kyun Booking Hotel Application",
      period: "Sep 2022 – Mar 2024",
      description:
        "Individual full-stack hotel booking platform built on the MERN stack, enabling domestic and international customers to browse and book guest rooms with ease.",
      tech: ["MUI", "React.js", "JWT", "Node.js", "MongoDB"],
      link: "https://github.com/KyunGraphy/The-K-Hotel-System-Management.git",
    },
    {
      name: "Social App – Messenger Clone",
      period: "May 2023 – Jul 2023",
      description:
        "A Facebook/Messenger-style social application with real-time messaging, media uploads via Cloudinary, and live updates powered by Socket.io.",
      tech: ["Socket.io", "Cloudinary", "MongoDB"],
      link: "https://github.com/KyunGraphy/Social-App-Kyunbook",
    },
    {
      name: "Chatty",
      period: "Jul 2022 – Aug 2022",
      description:
        "Team real-time chat application using Socket.io to connect people and build an interactive communication environment. Associated with The Ark Studio.",
      tech: ["Socket.io", "React.js", "Node.js"],
      link: "https://github.com/KyunGraphy/Social-App-Kyunbook.git",
    },
    {
      name: "Kyun Book Store Website",
      period: "Feb 2022 – Jun 2022",
      description:
        "Team university e-commerce project for electronics and books, graded 91/100, focused on giving consumers more choices when shopping online.",
      tech: ["Handlebars.js", "Node.js", "SQL"],
      link: "https://github.com/KyunGraphy/Bookstore_Website",
    },
    {
      name: "Software Engineering – Clothing Store",
      period: "Aug 2021 – Jan 2022",
      description:
        "An e-commerce website for selling clothes built with Java JSP, achieving high lecturer feedback with a score of 83/100.",
      tech: ["JavaServer Pages (JSP)", "MySQL"],
      link: "https://drive.google.com/drive/folders/18vh6GEWFOmczmteJsi2Le4Z_P0tgq5zY?usp=sharing",
    },
    {
      name: "Employee Management System",
      period: "Jan 2021 – May 2021",
      description:
        "First mobile application — an Employee Management System to control and manage staff, supporting department decisions on salary and policies.",
      tech: ["Swift", "SQL"],
      link: "https://drive.google.com/drive/folders/1lGEz0i002xRwb3Lz0-SkDnegnpcY8ob4?usp=sharing",
    },
  ],

  // --- Contact ---
  contact: {
    email: "ttkien.hcmiu@gmail.com",
    location: "Ho Chi Minh City, Vietnam",
    linkedin: "https://www.linkedin.com/in/trungkien1718/",
    github: "https://github.com/KyunGraphy",
    phone: "+84 933 592 344",
  },
};

export type Profile = typeof profile;
