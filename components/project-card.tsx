"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group rounded-2xl border bg-card p-4 shadow-sm"
      id={project.id}
    >
      {/* Optional cover image */}
      {project.cover && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.tagline}</p>

        <ul className="list-disc pl-5 text-sm text-muted-foreground">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2 text-xs">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border px-2 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-3">
          {project.repo && (
            <Button asChild size="sm" variant="outline">
              <a href={project.repo} target="_blank">Code</a>
            </Button>
          )}
          {project.live && (
            <Button asChild size="sm">
              <a href={project.live} target="_blank">Live</a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}