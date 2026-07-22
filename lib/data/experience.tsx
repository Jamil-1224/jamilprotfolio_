export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Tech Solutions Inc.",
    duration: "Jan 2024 - Present",
    description: "Developing scalable backend services using Node.js and integrating with modern React frontend.",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "InnovateTech",
    duration: "Jun 2023 - Dec 2023",
    description: "Built responsive UIs and optimized database queries for performance improvements.",
  },
];
