import type { LucideIcon } from "lucide-react";
import {
  Brain,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  Microscope,
  Smartphone,
  Layers3,
  Users,
} from "lucide-react";

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
    title: "Database",
    items: [
      "MySQL",
      "Firebase",
      "Firestore",
      "SQL"
    ],
    icon: Database,
  },

  {
    title: "Artificial Intelligence",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Data Preprocessing",
      "Scikit-learn",
      "TensorFlow"
    ],
    icon: Brain,
  },

  {
    title: "Research",
    items: [
      "Phishing Detection",
      "Literature Review",
      "Dataset Collection"
    ],
    icon: Microscope,
  },

  {
    title: "Mobile Development",
    items: [
      "Android Studio",
      "Java",
      "Firebase",
      "Material Design"
    ],
    icon: Smartphone,
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