import type { Metadata } from "next";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  metadataBase: new URL("https://rousonjamil.vercel.app"),
  
  verification: {
    google: "oGvE4WMmpWlip1ALUeEJFuYLnCUXOPB09tV9XDKO1-w",
  },

  title: {
    default: "Rouson Jamil | Software Engineer & AI Research Enthusiast",
    template: "%s | Rouson Jamil",
  },

  description:
    "Portfolio of Rouson Jamil, a Computer Science student specializing in Full Stack Development, Artificial Intelligence, Machine Learning, and Software Engineering.",

  keywords: [
    "Rouson Jamil",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Science",
    "Bangladesh Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Rouson Jamil",
    },
  ],

  creator: "Rouson Jamil",

  openGraph: {
    title: "Rouson Jamil | Software Engineer & AI Research Enthusiast",

    description:
      "Building modern software solutions with Full Stack Development, Artificial Intelligence, and Machine Learning.",

    url: "https://rousonjamil.vercel.app",

    siteName: "Rouson Jamil Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rouson Jamil Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Rouson Jamil | Software Engineer",

    description:
      "Software Engineer portfolio showcasing Full Stack Development, AI, and Machine Learning projects.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://rousonjamil.vercel.app",
  },
};


const BlankPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 w-full">
        <Container>
          {children}
        </Container>
      </main>

      <Footer />
    </div>
  );
};


export default BlankPageLayout;