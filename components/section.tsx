"use client";

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
    <section id={id} className="py-10 md:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-5xl px-4">
        <header className="mb-3 md:mb-4 space-y-1 overflow-visible">
          <Heading className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {title}
          </Heading>
          {description && (
            <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
          )}
          <Separator className="!w-full !h-px mt-3 md:mt-4 mb-4 md:mb-6 opacity-60" />
        </header>
        {children}
      </div>
    </section>
  );
}