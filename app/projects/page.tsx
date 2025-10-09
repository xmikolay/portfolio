import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          Case-study style highlights of selected work.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}