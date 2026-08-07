import { HomeView } from "@/view/home";
import type { Metadata } from "next";
import { personalData } from "@/lib/data/personal-data";

const siteUrl = "https://rousonjamil.vercel.app";

export const metadata: Metadata = {
  title: `${personalData.full_name} | Full Stack Developer, BAUST CSE Student`,
  description:
    "Portfolio of Khalad Ebnay Rouson Jamil, a BAUST CSE student, full stack developer, mentor, and competitive programmer focused on backend development, teaching, and problem solving.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personalData.full_name} | Full Stack Developer, BAUST CSE Student`,
    description:
      "Portfolio of Khalad Ebnay Rouson Jamil, a BAUST CSE student, full stack developer, mentor, and competitive programmer focused on backend development, teaching, and problem solving.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.full_name} | Full Stack Developer, BAUST CSE Student`,
    description:
      "Portfolio of Khalad Ebnay Rouson Jamil, a BAUST CSE student, full stack developer, mentor, and competitive programmer focused on backend development, teaching, and problem solving.",
  },
};

const HomePage = () => {
  return <HomeView />;
};

export default HomePage;
