"use client";

import Image from "next/image";
import { ArrowRight, Code2, GraduationCap, MapPin, MessageCircle, Trophy } from "lucide-react";
import { scrollToElement } from "@/lib/scroll";
import { personalData, getProfileImagePath } from "@/lib/data/personal-data";

function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const quickFacts = [
  { label: "Role", value: personalData.post },
  { label: "Focus", value: personalData.interests.slice(0, 2).join(" · ") },
  { label: "Location", value: "Saidpur, Rajshahi" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-36 relative overflow-hidden rounded-[2rem] border border-border/60 bg-[linear-gradient(135deg,rgba(17,18,23,0.98),rgba(25,28,38,0.92))] px-6 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:px-8 lg:px-10 lg:py-14"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(123,160,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open for teaching, mentoring, and problem solving
          </div>

          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/55">
              {personalData.full_name}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {personalData.headings.join(" · ")}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              {personalData.post_description}
            </p>
            <div className="flex flex-wrap gap-2">
              {personalData.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-white/70"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToElement("contact")}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToElement("experience")}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              View Experience
            </button>

            <div className="flex items-center gap-2 ml-2">
              <a
                href={personalData.social_usernames.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={personalData.social_usernames.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={personalData.social_usernames.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Facebook Profile"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">{fact.label}</p>
                <p className="mt-2 text-sm font-medium text-white">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 p-5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#111827] p-5 transition-all duration-300 hover:border-white/20">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-white/45">Profile</span>
                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Available for mentoring
                </span>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
                <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border border-white/12 bg-[#111827] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <Image
                    src={getProfileImagePath(personalData.image)}
                    alt={personalData.full_name}
                    width={176}
                    height={176}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>

                <div className="mt-6 space-y-3 text-sm text-white/78">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                    <span>BAUST University, CSE ({personalData.post})</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                    <span>Teaching C++, Python, and Java to junior learners</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                    <span>Problem solving with Codeforces and beecrowd</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                    <span>
                      {personalData.education.level} - {personalData.education.institution} - {personalData.education.result}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                    <span>Saidpur, Rajshahi, Bangladesh</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 transition-colors hover:bg-white/10"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Email
                  </a>
                  <a
                    href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 transition-colors hover:bg-white/10"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}