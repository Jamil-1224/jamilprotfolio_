import { BookOpen, Mail, Sparkles } from "lucide-react";
import { Hero } from "./hero";
import { SkillSection } from "./skill_section";
import { ScrollToTarget } from "./scroll-to-target";
import { personalData } from "@/lib/data/personal-data";
import { ContactForm } from "./contact/contact-form";
import { ContactInfoCard } from "./contact/contact-info-card";
import { ContactSocialLink } from "./contact/contact-social-link";

export function HomeView() {
  return (
    <div className="space-y-8 py-6 sm:py-8 lg:py-10">
      <ScrollToTarget />
      <Hero />

      <SkillSection />

      <section
        id="experience"
        className="scroll-mt-36 grid gap-6 rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:shadow-lg lg:grid-cols-[0.95fr_1.05fr] lg:p-8"
      >
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            <Sparkles className="h-4 w-4" /> Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Teaching, tutoring, and learning by solving real problems.
          </h2>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            I teach foundational programming in weekly workshops at BAUST Computer Club and also
            tutor students privately. The goal is always the same: make difficult ideas feel
            approachable and useful.
          </p>
        </div>

        <div className="grid gap-4">
          <article className="rounded-3xl border border-border/60 bg-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:bg-muted/40 hover:shadow-md">
            <p className="text-sm font-medium text-muted-foreground">Machine Learning Intern</p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">FlyRank</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Recently joined FlyRank as a machine learning intern.
            </p>
          </article>

          <article className="rounded-3xl border border-border/60 bg-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:bg-muted/40 hover:shadow-md">
            <p className="text-sm font-medium text-muted-foreground">Coding Instructor</p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">BAUST Computer Club</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Teach foundational programming in C++, Python, and Java to junior students through
              weekly workshops.
            </p>
          </article>

          <article className="rounded-3xl border border-border/60 bg-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:bg-muted/40 hover:shadow-md">
            <p className="text-sm font-medium text-muted-foreground">Private Tutoring</p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">One-on-one support</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Help students understand programming basics, practice exercises, and build a
              stronger problem-solving mindset.
            </p>
          </article>
        </div>
      </section>

      <section id="education" className="scroll-mt-36 rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:shadow-lg lg:p-8">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            <BookOpen className="h-4 w-4" /> Education
          </p>
          <div className="rounded-3xl border border-border/60 bg-muted/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:bg-muted/35 hover:shadow-md">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {personalData.universityEducation.level}
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              {personalData.universityEducation.institution} · 2023 onward
            </p>
            <p className="mt-1 text-sm font-medium text-foreground/80">
              Current CGPA: {personalData.universityEducation.currentCgpa}
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-muted/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:bg-muted/35 hover:shadow-md">
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {personalData.education.level}
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              {personalData.education.institution}
            </p>
            <p className="mt-1 text-sm font-medium text-foreground/80">
              {personalData.education.result}
            </p>
          </div>
        </div>
      </section>

      <section id="blog" className="scroll-mt-36 grid gap-6 rounded-[2rem] border border-border/60 bg-[#111217] p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-lg lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-white/55">
            <Sparkles className="h-4 w-4" /> Highlights
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Competitive programming keeps me sharp.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-md">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Practice</p>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Solving problems regularly on Codeforces and beecrowd.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-md">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Teaching</p>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Translating difficult concepts into beginner-friendly explanations.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-md sm:col-span-2">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Mindset</p>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Patient, adaptable, and focused on collaboration, learning, and steady improvement.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-36 grid gap-6 rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:shadow-lg lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
              <Mail className="h-4 w-4" /> Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Reach out for mentoring, tutoring, or collaboration.
            </h2>
          </div>
          <ContactInfoCard />
          <ContactSocialLink />
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </section>

    </div>
  );
}