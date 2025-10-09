// Simple project model + sample data (edit to your real projects)
export type Project = {
  id: string;
  title: string;
  tagline: string;
  period: string;        // e.g. "2025"
  tech: string[];        // ["Next.js","Tailwind"]
  repo?: string;         // GitHub URL
  live?: string;         // Live demo URL
  cover?: string;        // /images/...
  highlights: string[];  // bullet points
};

export const projects: Project[] = [
  {
    id: "personal-dashboard",
    title: "Personal Dashboard (WPF)",
    tagline: "Clock, calendar, tasks, and weather widgets with MVVM.",
    period: "2025",
    tech: ["C#", "WPF", "MVVM", "APIs"],
    repo: "https://github.com/xmikolay/PersonalDashboard",
    cover: "/og-image.png",
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
    cover: "/og-image.png",
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
    cover: "/og-image.png",
    highlights: [
      "Fetches and displays data from WOT public API",
      "Search and filter tanks, users and maps by various criteria",
      "Responsive UI with Bootstrap",
      "Client-side routing with Angular Router"
    ],
  },
  {
    id: "csgo-market",
    title: "CS:GO Skin Marketplace",
    tagline: "Web app simulating browsing and purchasing CS:GO skins.",
    period: "2025",
    tech: ["Angular", "TypeScript", "Bootstrap, AWS"],
    repo: "",
    cover: "/og-image.png",
    highlights: [
      "Fetches and displays skin data from S3 bucket and DynamoDB",
      "Search and filter skins by various criteria",
      "Responsive UI with Bootstrap"
    ],
  },
];
