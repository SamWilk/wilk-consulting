export const profile = {
  name: "Sam Wilk",
  role: "Software Engineer",
  location: "Jacksonville, FL",
  summary:
    "Full-stack engineer focused on C#, React, Node.js, cloud platforms, and the production realities that keep systems reliable.",
  heroDescription:
    "I build and maintain production software across APIs, microservices, modern web applications, and the tooling around them.",
  email: "samwilk1898@gmail.com",
  phone: "(904) 599-3512",
  github: "https://github.com/SamWilk",
  portfolio: "https://samwilk.github.io/portfolio/",
  calendly: "https://calendly.com/samwilk1898/30min",
};

export const skills = [
  "C#",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "SQL Server",
  "RabbitMQ",
  "Docker",
];

export const highlights = [
  {
    metric: "4 roles",
    label: "across product and agency work",
    detail:
      "Experience spans enterprise software, internal platforms, and shipping customer-facing interfaces.",
  },
  {
    metric: "C# + React",
    label: "core delivery stack",
    detail:
      "Most of the work centers on APIs, event-driven services, SQL-backed systems, and modern frontend delivery.",
  },
  {
    metric: "Production",
    label: "reliability mindset",
    detail:
      "The emphasis is on maintainable services, observability, performance, and the day-two concerns that matter in real systems.",
  },
];

export const focusAreas = [
  "Core API maintenance and production support",
  "Event-driven services with RabbitMQ and relational databases",
  "React and Next.js interfaces for modern web applications",
  "Performance work in C# and SQL for long-running workflows",
  "Monitoring, alerting, and operational visibility improvements",
  "Mentoring interns and driving delivery on small teams",
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Black Diamond Wealth Solutions",
    location: "Jacksonville, FL (Hybrid)",
    period: "March 2026 - Present",
    responsibilities: [
      "Maintain core APIs that provide foundational financial data across internal systems.",
      "Develop and support C# services with RabbitMQ eventing, PostgreSQL, and SQL Server.",
      "Maintain core API functionality with a focus on reliability, data integrity, and production support.",
      "Own and maintain an audit-data project that supports traceability and compliance workflows.",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Beeline, Inc",
    location: "Jacksonville, FL",
    period: "May 2022 - 2026",
    responsibilities: [
      "Built and maintained a production-grade microservice within an event-driven architecture.",
      "Drove migration from Azure Application Insights to Grafana for monitoring and alerting.",
      "Led and mentored multiple cohorts of interns and guided internship project delivery.",
      "Optimized C# and SQL workflows to reduce runtimes for enterprise client processes.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Beeline, Inc",
    location: "Jacksonville, FL",
    period: "May 2022 - October 2022",
    responsibilities: [
      "Improved batch import performance for enterprise clients including Meta, Amazon, and JP Morgan Chase.",
      "Built RESTful APIs with ASP.NET 5 and C# to support service integrations.",
      "Migrated SQL stored procedures into C# classes to reduce technical debt and centralize logic.",
    ],
  },
  {
    title: "Front End Developer",
    company: "Perspective, Inc",
    location: "Jacksonville, FL",
    period: "August 2021 - May 2022",
    responsibilities: [
      "Led a small developer team to deliver a production-ready social media platform on schedule.",
      "Implemented core React features with responsive layouts and stronger UX.",
    ],
  },
];

export const projects = [
  {
    title: "Spendr",
    description:
      "Expense tracking application for managing spending habits, categories, and budgets.",
    technologies: ["React", "Vite", "JavaScript"],
    period: "December 2025",
    highlights: [
      "Built an interface for tracking expenses and reviewing patterns quickly.",
      "Implemented budget management features for everyday use.",
      "Deployed on Vercel for simple access and iteration.",
    ],
    liveLink: "https://spendr-x9la.vercel.app/",
    githubLink: "https://github.com/SamWilk/spendr",
  },
  {
    title: "Handicap Trackr",
    description:
      "Golf handicap tracking application for rounds, scores, and handicap-index calculations.",
    technologies: ["React", "Vite", "JavaScript"],
    period: "November 2025",
    highlights: [
      "Built a clean workflow for entering and reviewing scores.",
      "Implemented handicap calculation logic for repeat use.",
      "Shipped as a live app for easy access across devices.",
    ],
    liveLink: "https://vite-react-nu-two-36.vercel.app",
    githubLink: "https://github.com/SamWilk/handicap-trackr",
  },
  {
    title: "JobTrackr",
    description:
      "Full-stack application for tracking job applications with authentication and containerized deployment.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "JWT"],
    period: "August 2025 - Present",
    highlights: [
      "Built secure JWT authentication into a full-stack workflow.",
      "Containerized the app with Docker and Docker Compose.",
      "Delivered a responsive UI for repeated day-to-day use.",
    ],
    githubLink: "https://github.com/SamWilk/job-tracker",
  },
];
