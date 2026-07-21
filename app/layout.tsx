import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { personalData } from "@/lib/data/personal-data";

const sourceSans3Heading = Source_Sans_3({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalData.full_name} | ${personalData.post}`,
  description: personalData.post_description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, sourceSans3Heading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
