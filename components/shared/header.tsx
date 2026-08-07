"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Container } from "./container";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { getStickyHeaderOffset, scrollToElement, scrollToTop } from "@/lib/scroll";
import { setScrollTarget } from "@/view/home/scroll-to-target";
import { personalData } from "@/lib/data/personal-data";

const navLinks = [
  { name: "Home", type: "route", target: "/" },
  { name: "Skills", type: "section", target: "skill" },
  { name: "Projects", type: "section", target: "projects" },
  { name: "Experience", type: "section", target: "experience" },
  { name: "Education", type: "section", target: "education" },
  { name: "Highlights", type: "section", target: "blog" },
  { name: "Contact", type: "section", target: "contact" },
];

const sectionOrder = ["home", "skill", "projects", "experience", "education", "blog", "contact"];

const sectionToLink: Record<string, string> = {
  home: "Home",
  experience: "Experience",
  skill: "Skills",
  projects: "Projects",
  blog: "Highlights",
  education: "Education",
  contact: "Contact",
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const pathname = usePathname();
  const router = useRouter();
  const autoScrollTargetRef = useRef<string | null>(null);
  const isAutoScrollingRef = useRef(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const updateActiveLink = () => {
      const offset = getStickyHeaderOffset();
      const marker = window.scrollY + offset + window.innerHeight * 0.35;
      let currentSection = "home";

      for (const sectionId of sectionOrder) {
        const element = document.getElementById(sectionId);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (marker >= top && marker < bottom) {
          currentSection = sectionId;
          break;
        }

        if (marker >= top) {
          currentSection = sectionId;
        }
      }

      if (isAutoScrollingRef.current && autoScrollTargetRef.current) {
        if (currentSection === autoScrollTargetRef.current) {
          setActiveLink(sectionToLink[currentSection] ?? "Home");
          isAutoScrollingRef.current = false;
          autoScrollTargetRef.current = null;
        }

        return;
      }

      setActiveLink(sectionToLink[currentSection] ?? "Home");
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveLink);
  }, [pathname]);

  const handleHomeClick = () => {
    setActiveLink("Home");
    isAutoScrollingRef.current = false;
    autoScrollTargetRef.current = null;

    if (pathname === "/") {
      scrollToTop();
      return;
    }

    router.push("/");
  };

  const handleSectionClick = (name: string, target: string) => {
    setActiveLink(name);
    isAutoScrollingRef.current = true;
    autoScrollTargetRef.current = target;

    if (pathname !== "/") {
      setScrollTarget(target);
      router.push("/");
      return;
    }

    scrollToElement(target);
  };

  return (
    <header data-sticky-header="true" className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 pt-4 pb-4 backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-1 z-50">
            <span className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {personalData.full_name}
            </span>
          </Link>

          <nav className="hidden md:flex relative items-center rounded-full border border-border/60 bg-background/95 p-1 shadow-sm">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() =>
                  link.type === "route" ? handleHomeClick() : handleSectionClick(link.name, link.target)
                }
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors z-10 ${
                  activeLink === link.name
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeLink === link.name && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-foreground rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{link.name}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => handleSectionClick("Contact", "contact")}
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Contact me
            </button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger 
                render={
                  <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background shadow-sm" />
                }
              >
                <Menu className="h-4 w-4 text-foreground" />
                <span className="sr-only">Toggle Menu</span>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-[400px] flex flex-col p-6 border-l-0 [&>button]:rounded-full [&>button]:border [&>button]:border-border/60 [&>button]:w-10 [&>button]:h-10 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:right-6 [&>button]:top-6 [&>button]:opacity-100 [&>button_svg]:w-4 [&>button_svg]:h-4"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                <div className="flex items-center justify-between mt-2 mb-10">
                  <Link href="/" className="flex items-center gap-1" onClick={() => setIsOpen(false)}>
                    <span className="text-xl font-semibold tracking-tight text-foreground">
                      {personalData.full_name}
                    </span>
                  </Link>
                </div>
                
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      type="button"
                      onClick={() => {
                        setIsOpen(false);

                        if (link.type === "route") {
                          handleHomeClick();
                          return;
                        }

                        setActiveLink(link.name);
                        handleSectionClick(link.name, link.target);
                      }}
                      className={`text-lg font-medium transition-colors ${
                        activeLink === link.name
                          ? "text-foreground font-semibold"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
                <div className="mt-auto mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      handleSectionClick("Contact", "contact");
                    }}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground text-base font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Contact me
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
