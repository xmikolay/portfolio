"use client";

import Image from "next/image";
import Link from "next/link";
import { Glass } from "@/components/glass";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";

export function Hero() {
  return (
    <section className="relative py-6 md:py-10">
      <div className="mx-auto w-full max-w-5xl px-4">
        <MotionConfig reducedMotion="user">
          <motion.div
            whileHover={{ y: -4, scale: 1.005 }}
            whileTap={{ scale: 0.997 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="group"
          >
            <Glass
              variant="strong"
              className="p-4 md:p-6 lg:p-8 mx-auto w-full shadow-lg ring-1 ring-border/40 glow transition-all duration-300 group-hover:shadow-xl group-hover:ring-border/60"
            >
              <div className="grid items-center gap-4 md:gap-6 md:grid-cols-[200px_1fr] lg:grid-cols-[220px_1fr]">
                {/* Avatar */}
                <div className="mx-auto md:mx-0">
                  <div className="relative h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 overflow-hidden rounded-2xl md:rounded-3xl ring-1 ring-border transition-transform duration-300 group-hover:scale-[1.015]">
                    <Image
                      src="/avatar.jpg"
                      alt="Mikolaj"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                      priority
                    />
                  </div>
                </div>

                {/* Text + actions */}
                <div className="space-y-3 md:space-y-4 lg:space-y-5">
                  <div>
                    <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                      Mikolaj Makoszewski
                    </h1>
                    <p className="mt-1 md:mt-2 text-xs sm:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary">
                      Full-Stack Developer • C# / Next.js
                    </p>
                  </div>

                  <p className="max-w-prose text-sm md:text-base leading-relaxed text-muted-foreground">
                    I build practical, well-documented apps for web and desktop. Strong UI sense,
                    readable code, and clean deployment. Explore selected work below, and feel free to contact me.
                  </p>

                  {/* Socials */}
                  <div className="flex gap-2 md:gap-3">
                    {[
                      { href: "#contact", label: "Email", Icon: Mail },
                      { href: "https://www.linkedin.com/in/mikolaj-makoszewski/", label: "LinkedIn", Icon: Linkedin, external: true },
                      { href: "https://github.com/xmikolay", label: "GitHub", Icon: Github, external: true },
                    ].map(({ href, label, Icon, external }) => (
                      <Link
                        key={label}
                        href={href}
                        target={external ? "_blank" : undefined}
                        aria-label={label}
                      >
                        <motion.div
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ type: "spring", stiffness: 350, damping: 20 }}
                          className="rounded-full border border-white/15 p-1.5 md:p-2 hover:bg-white/5 transition-colors inline-flex"
                        >
                          <Icon className="h-4 w-4 md:h-5 md:w-5" />
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-2 md:gap-3 sm:flex-row">
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        size="default"
                        className="h-9 md:h-11 text-sm md:text-base rounded-full ring-1 ring-white/10 hover:ring-white/50"
                      >
                        <Link href="#projects">View Projects</Link>
                      </Button>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        size="default"
                        variant="outline"
                        className="h-9 md:h-11 text-sm md:text-base rounded-full border-white/15 hover:bg-white/5"
                      >
                        <Link href="#contact">Contact Me</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Glass>
          </motion.div>
        </MotionConfig>
      </div>
    </section>
  );
}
