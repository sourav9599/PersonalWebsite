import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sourav Mohanty",
  initials: "SM",
  location: "Hyderabad, India",
  locationLink: "https://maps.app.goo.gl/8eBMrefU4tfw4AWy9",
  about:
    "Detail-oriented Software Engineer dedicated to building high-quality products.",
  summary:
    "Detail-oriented software engineer with 3 years of experience in full-stack development and python automation. Proficient in  Python, Java and JavaScript, with hands-on experience in developing scalable web applications using React.js. Strong problem-solving abilities and a passion for writing clean, efficient code. Proven ability to collaborate with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://test.me",
  contact: {
    email: "sourav10mohanty@gmail.com",
    tel: "+919848883212",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sourav9599",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sourav-mohanty/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sourav_9599",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "GITAM UNIVERSITY",
      degree: "BTech in Computer Science and Engineering CGPA 9.07",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "LTIMindtree",
      link: "https://www.ltimindtree.com/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ConsultlyLogo,
      start: "Jun-2021",
      end: null,
      description:
        "\n• Canvas AI: Part of a cross-functional team to develop Appscribe, an MVP product within Canvas AI, integrating generative AI capabilities for user story generation, code/script generation, reviews, and pipeline scripting, resulting in positive client reception.\n\n• CAPE Engineering: Engineered RESTful APIs with Spring Boot, integrated diverse tools into CAPE Dashboard to meet client specifications, architected end-to-end workflows for specification management and deployment onto client environments, and conducted meticulous code analysis to diagnose and rectify issues.\n\n• CCPA Automation: Orchestrated the design and implementation of an end-to-end automation system for privacy rights compliance under the California Consumer Privacy Act (CCPA), yielding a significant 100 hrs (approx) per month reduction in manual workload.\n\n• 5xx Error Alerts Automation: Developed container-based solution automating the handling of Jira and Service Now tickets triggered by error alerts (5XX), resulting in an impressive 15-20% reduction in MTTR and a remarkable 20 FTE hrs/week saved.\n\n• Weekly KPI Automation: Devised an intuitive Databricks dashboard that seamlessly aggregates vital KPI data from diverse sources for weekly presentations. Automated the creation of associated PowerPoint reports, subsequently dispatched to relevant stakeholders.\n\n• Databricks Job Alerts Automation: Innovated an advanced alerting mechanism for preemptively identifying missing files and errors pre and post-job execution, resulting in an outstanding 90% reduction in data ingestion job failures.\n\n\n",
    },
  ],
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Material UI",
    "Flask",
    "Fast Api",
    "SpringBoot",
    "CI/CD using Jenkins",
    "MongoDB",
    "PostgreSQL",
    "Docker & Kubernetes",
    "AWS",
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
