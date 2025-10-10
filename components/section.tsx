import { JSX, ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

export function Section({
  id,
  title,
  description,
  children,
  level = 2,
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
        <header className="mb-4 space-y-1">
          <Heading className="text-3xl font-bold tracking-tight md:text-4xl">
            {title} 
          </Heading>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          <Separator className="mt-4 opacity-60" />
        </header>
        {children}
      </div>
    </section>
  );
}
