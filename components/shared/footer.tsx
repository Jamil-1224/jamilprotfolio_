"use client";

import Link from "next/link";
import { Container } from "./container";
import { scrollToElement } from "@/lib/scroll";
import { personalData } from "@/lib/data/personal-data";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-[#111217] text-zinc-300 pt-16 pb-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 mb-16">
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-semibold tracking-tight text-white">
                {personalData.full_name}
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed text-zinc-300">
              {personalData.post_description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 lg:gap-24">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Navigate</h3>
              <Link href="/" className="text-sm font-medium hover:text-white transition-colors">Home</Link>
              <button type="button" onClick={() => scrollToElement("skill")} className="text-left text-sm font-medium hover:text-white transition-colors">Skills</button>
              <button type="button" onClick={() => scrollToElement("experience")} className="text-left text-sm font-medium hover:text-white transition-colors">Experience</button>
              <button type="button" onClick={() => scrollToElement("projects")} className="text-left text-sm font-medium hover:text-white transition-colors">Projects</button>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Socials</h3>
              <a href={personalData.social_usernames.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a href={personalData.social_usernames.linkedIn} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a href={personalData.social_usernames.facebook} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
                <FacebookIcon className="h-4 w-4" /> Facebook
              </a>
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1 mt-2 md:mt-0">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Contact</h3>
              <a href={`mailto:${personalData.email}`} className="text-sm font-medium hover:text-white transition-colors break-all">{personalData.email}</a>
              <a href={`tel:${personalData.phone.replace(/\s+/g, "")}`} className="text-sm font-medium hover:text-white transition-colors">{personalData.phone}</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/80 text-center">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} {personalData.full_name}. Built with precision.
          </p>
        </div>
      </Container>
    </footer>
  );
}
