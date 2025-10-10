"use client";

import Image from "next/image";
import Link from "next/link";
import { Glass } from "@/components/glass";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-10">
      <div className="mx-auto w-full max-w-5xl px-4">
        <Glass variant="strong" className="p-6 md:p-8 mx-auto w-full shadow-lg ring-1 ring-border/40 glow">
          <div className="grid items-center gap-6 md:grid-cols-[220px_1fr]">
            {/* Avatar */}
            <div className="mx-auto md:mx-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-3xl ring-1 ring-border">
                <Image
                  src="/avatar.jpg" /* put your photo in /public */
                  alt="Mikolaj"
                  fill
                  className="object-cover"
                  sizes="192px"
                  priority
                />
              </div>
            </div>

            {/* Text + actions */}
            <div className="space-y-5">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                  Mikolaj Makoszewski
                </h1>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-primary">
                  Full-Stack Developer • C# / Next.js
                </p>
              </div>

              <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
                I build practical, well-documented apps for web and desktop. Strong UI sense,
                readable code, and clean deployment. Explore selected work and my CV below.
              </p>

              {/* Socials */}
              <div className="flex gap-3">
                <Link
                  href="#contact"
                  className="rounded-full border border-white/15 p-2 hover:bg-white/5"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mikolaj-makoszewski/"
                  target="_blank"
                  className="rounded-full border border-white/15 p-2 hover:bg-white/5"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/xmikolay"
                  target="_blank"
                  className="rounded-full border border-white/15 p-2 hover:bg-white/5"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11 text-base rounded-full text-base ring-1 ring-white/10 hover:ring-white/50">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11 text-base rounded-full text-base border-white/15 hover:bg-white/5">
                  <Link href="#cv">View my CV</Link>
                </Button>
              </div>
            </div>
          </div>
        </Glass>
      </div>
    </section>
  );
}