import type { LucideIcon } from "lucide-react";
import { BrainCircuit, BriefcaseBusiness, Layers3, Users } from "lucide-react";

export type SkillGroup = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Java", "Python"],
    icon: Layers3,
  },
  {
    title: "Problem Solving",
    items: ["Competitive Programming", "Codeforces", "beecrowd"],
    icon: BrainCircuit,
  },
  {
    title: "Teaching & Communication",
    items: ["Explaining concepts clearly", "Creating learning materials", "Mentoring"],
    icon: Users,
  },
  {
    title: "Tools & Platforms",
    items: ["Scratch", "VS Code", "GitHub", "Google Classroom"],
    icon: BriefcaseBusiness,
  },
];

export const focusAreas = [
  "Helping beginners build confidence with programming fundamentals.",
  "Breaking down algorithms into small, reusable steps.",
  "Designing workshops and tutoring sessions that stay practical.",
  "Balancing teaching with regular competitive programming practice.",
];