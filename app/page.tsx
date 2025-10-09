import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Hi, I’m Mikolay 👋
      </h1>
      <p className="text-muted-foreground max-w-prose">
        I build practical apps with <strong>Next.js, C#, and AWS</strong>.
        Explore my projects, view my CV, or get in touch.
      </p>
      <div className="flex gap-4">
        <Button asChild><Link href="/projects">View Projects</Link></Button>
        <Button asChild variant="outline"><Link href="/cv">Download CV</Link></Button>
      </div>
    </section>
  );
}