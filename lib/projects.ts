export type Project = {
  id: string;
  title: string;
  tagline: string;
  period: string;       
  tech: string[];       
  repo?: string;         
  live?: string;         
  cover?: string;        
  highlights: string[];  
};

export const projects: Project[] = [
  {
    id: "personal-dashboard",
    title: "Personal Dashboard (WPF)",
    tagline: "Clock, calendar, tasks, and weather widgets with MVVM.",
    period: "2025",
    tech: ["C#", "WPF", "MVVM", "APIs"],
    repo: "https://github.com/xmikolay/PersonalDashboard",
    cover: "/dash.png",
    highlights: [
      "MVVM architecture with commands/services",
      "ICS calendar import (read-only)",
      "Material styling, CSV persistence",
      "Interactive To-Do list"
    ],
  },
  {
    id: "choose-part",
    title: "ChoosePart - PC Part Picker",
    tagline: "App simulating PC part selection and compatibility checks.",
    period: "2025",
    tech: ["C#", "WPF", "SQL", "NUnit"],
    repo: "https://github.com/xmikolay/PC-Parts-Picker-Project",
    cover: "/pcpart.png",
    highlights: [
      "Allows user selection of PC parts",
      "Checks compatibility between selected parts",
      "Uses SQL for data (parts) storage",
      "Unit tests with NUnit"
    ],
  },
  {
    id: "wot-api",
    title: "World of Tanks API Explorer",
    tagline: "Web app to explore World of Tanks data via public API.",
    period: "2025",
    tech: ["Angular", "TypeScript", "REST API", "Bootstrap"],
    repo: "https://github.com/xmikolay/WOT-API-Project-2",
    cover: "/placeholder.svg",
    highlights: [
      "Fetches and displays data from WOT public API",
      "Search and filter tanks, users and maps by various criteria",
      "Responsive UI with Bootstrap",
      "Client-side routing with Angular Router"
    ],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    tagline: "Personal Portfolio website built on Next.js.",
    period: "2025",
    tech: ["Next.js", "Tailwind", "Resend", "Netlify"],
    repo: "https://github.com/xmikolay/portfolio",
    cover: "/portfolio.png",
    highlights: [
      "Shows off selected projects that I am most proud of.",
      "Responsive, modern and sleek UI.",
      "Working mailing service using resend (try it, I might reply :) ).",
      "My favourite project so far."
    ],
  },
];
