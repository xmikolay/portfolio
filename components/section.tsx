import { JSX, ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

export function Section({
  id,
  title,
  description,
  children,
  level = 2, // heading level: defaults to <h2>
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  level?: 2 | 3 | 4;
}) {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <section id={id} className="py-12">
      <div className="mx-auto w-full max-w-5xl px-4">
        <header className="mb-6 space-y-2">
          <Heading className="text-2xl font-semibold tracking-tight">
            {title}
            <span className="ml-2 inline-block h-1 w-10 translate-y-1 rounded bg-primary/70" />
          </Heading>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          <Separator className="mt-4" />
        </header>
        {children}
      </div>
    </section>
  );
}
