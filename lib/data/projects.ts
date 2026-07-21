import type { LucideIcon } from "lucide-react";
import { FolderHeart, Terminal, HeartPulse } from "lucide-react";

export interface Project {
  title: string;
  type: string;
  role: string;
  description: string[];
  icon: LucideIcon;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "PetCare & Reminder Web Application",
    type: "Independent Project",
    role: "Web Developer",
    icon: FolderHeart,
    tags: ["PHP", "MySQL", "HTML5", "CSS3"],
    description: [
      "Developed a PetCare & Reminder web application to manage pet healthcare, reminders, and medical records.",
      "Designed features such as notifications, health logs and care schedules for pet owners.",
      "Used PHP, MySQL, HTML and CSS to build an interactive and reliable system."
    ]
  },
  {
    title: "Data Structures & Algorithms Projects",
    type: "Lab Work",
    role: "Algorithm Developer",
    icon: Terminal,
    tags: ["C++", "Algorithms", "Data Structures", "Complexity Analysis"],
    description: [
      "Implemented sorting algorithms (Merge Sort, Quick Sort, Counting Sort, Radix Sort) and analyzed their time and space complexities.",
      "Developed programs for Topological Sort, Strongly Connected Components, Kruskal’s, Prim’s and Dijkstra’s algorithms."
    ]
  },
  {
    title: "Self-Healthcare Project",
    type: "University Project",
    role: "Full Stack Developer",
    icon: HeartPulse,
    tags: ["PHP", "MySQL", "HTML5", "CSS3", "CRUD"],
    description: [
      "Implemented CRUD operations with PHP & MySQL ensuring smooth database integration.",
      "Designed and developed a web-based healthcare management system with modules for My Details, Doctor Details, Prescription and Test Reports."
    ]
  }
];
