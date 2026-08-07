import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { personalData } from "@/lib/data/personal-data";

const siteUrl = "https://rousonjamil.vercel.app";
const pageTitle = `${personalData.full_name} | ${personalData.post}`;
const pageDescription = `${personalData.post_description} Portfolio showcasing skills, experience, projects, and ways to get in touch.`;
const ogImageUrl = new URL("/opengraph-image", siteUrl).toString();

const sourceSans3Heading = Source_Sans_3({ subsets: ["latin"], variable: "--font-heading" });

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s | ${personalData.full_name}`,
  },
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  applicationName: personalData.full_name,
  authors: [{ name: personalData.full_name }],
  creator: personalData.full_name,
  publisher: personalData.full_name,
  verification: {
    google: "oGvE4WMmpWlip1ALUeEJFuYLnCUXOPB09tV9XDKO1-w",
  },
  keywords: [
    personalData.full_name,
    personalData.post,
    "portfolio",
    "full stack developer",
    "backend developer",
    "competitive programming",
    "BAUST",
    "Bangladesh",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: personalData.full_name,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${personalData.full_name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalData.full_name,
  jobTitle: personalData.post,
  description: personalData.post_description,
  url: siteUrl,
  image: ogImageUrl,
  email: `mailto:${personalData.email}`,
  sameAs: [
    personalData.social_usernames.github,
    personalData.social_usernames.linkedIn,
    personalData.social_usernames.facebook,
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: personalData.universityEducation.institution,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: personalData.full_name,
  url: siteUrl,
  description: pageDescription,
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
      <head>
        <meta name="google-site-verification" content="oGvE4WMmpWlip1ALUeEJFuYLnCUXOPB09tV9XDKO1-w" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
