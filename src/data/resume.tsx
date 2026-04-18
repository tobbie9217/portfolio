import { Icons } from "@/components/icons";
import { HomeIcon, FolderIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Abdulsamad Tobi Abdulsalam",
  initials: "AA",
  url: "https://abdulsamad.dev",
  location: "Essen, Germany",
  locationLink: "https://www.google.com/maps/place/Essen,+Germany",
  description:
    "Fullstack Web Developer specializing in React, Next.js, Node.js, and TypeScript. I build fast, scalable web applications and love turning complex problems into clean, maintainable code.",
  summary:
    "I'm a Fullstack Web Developer with 6+ years of experience shipping production-grade web applications. I've reduced page load times by up to 40%, refactored 50,000+ line legacy codebases into modern React/TypeScript architectures, and built reusable component libraries that cut cross-team dev time by 25%. Currently, I'm pursuing an [MSc in Econometrics at TU Dortmund](/#education), pairing strong analytical skills with hands-on engineering — and [building products at Splexx](/#work) with React, Next.js, and Node.js.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Vue.js" },
    { name: "Nuxt 3" },
    { name: "Express" },
    { name: "Firebase" },
    { name: "REST APIs" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Tailwind CSS" },
    { name: "SCSS" },
    { name: "HeroUI" },
    { name: "shadcn/ui" },
    { name: "Radix UI" },
    { name: "GitHub Actions" },
    { name: "Vercel" },
    { name: "Figma" },
    { name: "Git" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
  ],
  contact: {
    email: "abdulsalamabdulsamad@gmail.com",
    tel: "+4916320367340",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdulsamad-abdulsalam",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:abdulsalamabdulsamad@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Splexx",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer (Fullstack Collaboration)",
      logoUrl: "",
      start: "Nov 2024",
      end: "Present",
      description:
        "Architected and delivered production-ready web applications in React, Next.js, and TypeScript serving 5,000+ monthly active users. Built a reusable 30+ component UI library, cutting cross-team dev time by ~25%. Integrated with Node.js services and REST APIs to ship authentication, real-time dashboards, and notification systems. SSR and code-splitting improved LCP by 40%. Set up GitHub Actions + Vercel pipelines that reduced deploy cycles from hours to under 15 minutes.",
    },
    {
      company: "Tomato Jos Ltd",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer (Systems & Process Optimization)",
      logoUrl: "",
      start: "Mar 2021",
      end: "Oct 2024",
      description:
        "Built internal React/TypeScript tools and dashboards for 10+ departments to manage supply chain, inventory, and field data. Developed ETL workflows that cut manual reporting effort by ~60%. Refactored a 50,000+ line jQuery/vanilla JS codebase into modern React/TypeScript, lifting maintainability score by 35% (SonarQube). Integrated third-party APIs (weather, logistics, government data) and optimized data fetching, dropping average page response times from 3.2s to 1.1s.",
    },
    {
      company: "Excel Kaduna",
      href: "#",
      badges: [],
      location: "Remote",
      title: "UI/UX Designer",
      logoUrl: "",
      start: "Jun 2019",
      end: "Feb 2021",
      description:
        "Designed user-centered interfaces for 8+ web and mobile products, translating stakeholder requirements into wireframes, prototypes, and production-ready Figma specs. Ran usability testing and iterative reviews that improved task completion rates by 20%. Delivered pixel-perfect handoffs that cut frontend implementation time by 15%.",
    },
  ],
  education: [
    {
      school: "TU Dortmund University",
      href: "https://www.tu-dortmund.de/",
      degree: "MSc Econometrics — Statistical modeling, data analysis, quantitative methods",
      logoUrl: "/tu-dortmund.svg",
      start: "2025",
      end: "Present",
    },
    {
      school: "Ahmadu Bello University",
      href: "https://abu.edu.ng/",
      degree: "BSc Economics",
      logoUrl: "/abu.jpg",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Tuneyverse",
      href: "https://www.tuneyverse.com",
      dates: "",
      active: true,
      description:
        "Frontend architecture for an AI-powered music and karaoke platform. Audio playback, karaoke sessions, AI-driven recommendations, and performance-critical components handling concurrent audio streams and dynamic playlists.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Cloud APIs",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.tuneyverse.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tuneyverse.webp",
      video: "",
    },
    {
      title: "Nodecademy",
      href: "https://www.nodecademy.com",
      dates: "",
      active: true,
      description:
        "Fullstack Nuxt 3 learning platform built on a Nitro server engine with PostgreSQL + Prisma. TypeScript strict-mode across the app, Tailwind-based design system with custom typography (Baloo Chettan 2, Inter, Poppins, Orbitron, Be Vietnam Pro), bcryptjs auth, and Nodemailer email flows. Nuxt middleware + server plugins power admin routes and role-based access.",
      technologies: [
        "Nuxt 3",
        "Vue 3",
        "TypeScript",
        "Nitro",
        "Vite 6",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "Nodemailer",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.nodecademy.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nodecademy.jpg",
      video: "",
    },
    {
      title: "Betastudy",
      href: "https://betastudy.app",
      dates: "",
      active: true,
      description:
        "A scalable SSR-driven educational platform serving 1,000+ active learners. Modular frontend architecture enables rapid feature iteration with zero-downtime deployments.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://betastudy.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/betastudy.jpg",
      video: "",
    },
    {
      title: "Splexx",
      href: "https://www.splexx.com",
      dates: "",
      active: true,
      description:
        "Static marketing site for a digital agency offering Digital Marketing, UI/UX, and AI services. Hand-rolled HTML/CSS/JS with a custom nav drawer, multiple service and case-study pages, and zero dependencies outside Google Fonts. Deployed on Azure Static Web Apps via GitHub Actions.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Azure Static Web Apps",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.splexx.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/splexx.jpg",
      video: "",
    },
  ],
  hackathons: [],
} as const;
