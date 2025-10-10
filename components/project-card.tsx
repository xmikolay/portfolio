"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Glass } from "./glass";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group rounded-2xl border bg-card p-4 shadow-sm transition hover:shadow-md focus-within:shadow-md"
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      {/* Cover image (optional) */}
      {project.cover ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition will-change-transform group-hover:scale-[1.02]"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
        </div>
      ) : (
        <div className="grid aspect-video w-full place-items-center rounded-xl border text-xs text-muted-foreground">
          No cover provided
        </div>
      )}

      {/* Header: title + period chip */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 id={`${project.id}-title`} className="text-xl font-semibold leading-tight">
          {project.title}
        </h3>
        {project.period && (
          <span className="shrink-0 rounded-full border bg-muted px-2.5 py-0.5 text-xs">
            {project.period}
          </span>
        )}
      </div>

      {/* Tagline */}
      {project.tagline && (
        <p className="mt-1 text-base md:text-lg leading-relaxed text-muted-foreground">{project.tagline}</p>
      )}

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      {/* Tech pills */}
      {project.tech?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border bg-muted px-2.5 py-0.5 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.repo && (
          <Button
            asChild
            size="sm"
            variant="outline"
            className="transition hover:-translate-y-0.5"
          >
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open code for ${project.title}`}
            >
              Code <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
        )}
        {project.live && (
          <Button
            asChild
            size="sm"
            className="transition hover:-translate-y-0.5"
          >
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live demo for ${project.title}`}
            >
              Live <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
        )}
      </div>
    </motion.article>
  );
}
