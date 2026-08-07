import { FolderCode, Target } from "lucide-react";
import { skillGroups } from "@/lib/data/skill";
import { projects } from "@/lib/data/projects";

export function SkillSection() {
	return (
		<>
			<section
				id="skill"
				className="scroll-mt-36 space-y-6 rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm lg:p-8"
			>
				<div className="space-y-3">
					<p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
						<Target className="h-4 w-4" /> Skills
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
						What I work with every day.
					</h2>
				</div>

				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{skillGroups.map((group) => {
						const Icon = group.icon;

						return (
							<article
								key={group.title}
								className="rounded-3xl border border-border/60 bg-muted/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:bg-muted/35 hover:shadow-md"
							>
								<div className="flex items-center gap-3">
									<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background">
										<Icon className="h-5 w-5" />
									</span>
									<h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
								</div>

								<div className="mt-4 flex flex-wrap gap-2">
									{group.items.map((item) => (
										<span
											key={item}
											className="rounded-full border border-border/70 bg-background px-3 py-1 text-sm text-muted-foreground"
										>
											{item}
										</span>
									))}
								</div>
							</article>
						);
					})}
				</div>
			</section>

			<section
				id="projects"
				className="scroll-mt-36 space-y-8 rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm lg:p-8"
			>
				<div className="space-y-3">
					<p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
						<FolderCode className="h-4 w-4" /> Projects
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
						Academic & Independent Work
					</h2>
					<p className="max-w-2xl text-base text-muted-foreground">
						A collection of web applications and algorithmic systems built during my studies and personal exploration.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => {
						const Icon = project.icon;
						return (
							<article
								key={project.title}
								className="flex flex-col rounded-3xl border border-border/60 bg-muted/25 p-6 transition-all duration-300 hover:bg-muted/40 hover:shadow-md"
							>
								<div className="flex items-center justify-between gap-4">
									<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-foreground text-background">
										<Icon className="h-5 w-5" />
									</span>
									<span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 bg-muted/60 px-3 py-1 rounded-full border border-border/40">
										{project.type}
									</span>
								</div>

								<div className="mt-4 flex-1">
									<p className="text-xs font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
										{project.role}
									</p>
									<h3 className="mt-1 text-xl font-semibold leading-snug text-foreground">
										{project.title}
									</h3>
									<ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
										{project.description.map((bullet, idx) => (
											<li key={idx} className="marker:text-muted-foreground/60">
												<span className="ml-1">{bullet}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full border border-border/50 bg-background px-2.5 py-0.5 text-xs text-muted-foreground"
										>
											{tag}
										</span>
									))}
								</div>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
}
