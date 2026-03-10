"use client";

import Link from "next/link";
import { ExternalLink, GitBranch, Circle, CheckCircle2 } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";
import { Section } from "@/components/section";
import { Glass } from "@/components/glass";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/lib/projects";

function StatusBadge({ status }: { status: Project["status"] }) {
  const inProgress = status === "In Progress";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border ${
        inProgress
          ? "border-amber-500/30 bg-amber-500/10 text-amber-500"
          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-500"
      }`}
    >
      {inProgress ? (
        <Circle className="h-2.5 w-2.5 animate-pulse fill-current" />
      ) : (
        <CheckCircle2 className="h-2.5 w-2.5 fill-current" />
      )}
      {status}
    </span>
  );
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border/50 bg-muted/60 px-2.5 py-0.5 text-xs text-muted-foreground">
      {label}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.repo && (
        <Button asChild size="sm" variant="outline" className="h-8 rounded-full text-xs">
          <a href={project.repo} target="_blank" rel="noreferrer">
            <GitBranch className="mr-1 h-3 w-3" />
            Code
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      )}
      {project.live && (
        <Button asChild size="sm" className="h-8 rounded-full text-xs">
          <a href={project.live} target="_blank" rel="noreferrer">
            Live
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.005 }}
      whileTap={{ scale: 0.998 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group col-span-full"
    >
      <Glass
        variant="strong"
        className="relative overflow-hidden p-6 md:p-8 shadow-lg ring-1 ring-border/40 glow transition-all duration-300 group-hover:shadow-xl group-hover:ring-border/60"
      >
        {/* Background accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)/0.6), transparent 70%)",
          }}
        />

        {/* Featured label */}
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-primary ring-1 ring-primary/20">
            ✦ Featured
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_auto]">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                {project.title}
              </h3>
            </div>
            <p className="max-w-prose text-sm md:text-base leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between gap-4">
            <span className="rounded-full border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
              {project.period}
            </span>
            <ProjectLinks project={project} />
          </div>
        </div>
      </Glass>
    </motion.div>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group"
    >
      <Glass
        variant="strong"
        className="flex h-full flex-col gap-3 p-5 shadow-sm ring-1 ring-border/40 glow transition-all duration-300 group-hover:shadow-lg group-hover:ring-border/60"
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-snug text-sm md:text-base">{project.title}</h3>
          <span className="shrink-0 rounded-full border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {project.period}
          </span>
        </div>

        <StatusBadge status={project.status} />

        <p className="flex-1 text-xs md:text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <TechPill key={t} label={t} />
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full border border-border/50 bg-muted/60 px-2.5 py-0.5 text-xs text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <ProjectLinks project={project} />
      </Glass>
    </motion.div>
  );
}

export function RecentWork() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="recent-work"
      title="Recent Work"
      description="What I've been building lately."
    >
      <MotionConfig reducedMotion="user">
        <div className="grid gap-6 md:grid-cols-2">
          {featured && (
            <Reveal>
              <FeaturedCard project={featured} />
            </Reveal>
          )}

          {rest.map((project, i) => (
            <Reveal key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
              >
                <SmallCard project={project} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </MotionConfig>
    </Section>
  );
}