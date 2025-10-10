"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Section } from "@/components/section";
import { Paper } from "@/components/paper";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { SkillGroup } from "@/components/skill-group";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { Stats } from "fs";
import { StatsRow } from "@/components/stats-row";
import { Glass } from "@/components/glass";

export default function OnePage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-40 w-full max-w-3xl blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, hsl(var(--ring)/0.25), transparent 70%)",
        }}
      />

      <Hero />
      <div className="mt-6 mb-2">
        <StatsRow />
      </div>

      {/* SUMMARY */}
      <Section id="summary" title="A bit about me...">
        <div className="space-y-6">
          <Paper>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Hi, my name is <strong>Mikolaj</strong>, and I&apos;m a 3rd year
                BSc (Hons) Computing student focusing on{" "}
                <strong>full-stack web development</strong> and{" "}
                <strong>desktop applications</strong>. I&apos;m passionate about
                building clean, efficient software that solves real problems and
                delivers great user experiences.
              </p>
              <p>
                I started coding in secondary school with Python and Micro:bit.
                Since then I&apos;ve grown through{" "}
                <strong>personal projects and coursework</strong>, working with
                modern web frameworks like Next.js and Angular, and desktop
                development with C# and WPF.
              </p>
            </div>
          </Paper>

          <Paper className="space-y-5">
            <SkillGroup
              title="Languages"
              items={[
                "C#",
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "SQL",
                "Kotlin",
                "Python",
              ]}
            />
            <SkillGroup
              title="Frameworks/Tools"
              items={["WPF/XAML", "Angular", "Next.js", "ASP.NET Core", "Node.js"]}
            />
            <SkillGroup title="Cloud" items={["AWS", "Azure", "Firebase"]} />
            <SkillGroup
              title="Databases"
              items={["SQL Server", "DynamoDB", "Firebase", "Supabase"]}
            />
            <SkillGroup
              title="Other"
              items={[
                "Git/GitHub",
                "Linux",
                "Docker",
                "Visual Studio",
                "VS Code",
                "Android Studio",
              ]}
            />
          </Paper>
        </div>
      </Section>

      {/* HOBBIES */}
      <Section id="hobbies" title="Hobbies">
        <div className="grid gap-6 md:grid-cols-2">
          <Paper className="space-y-2">
            <h3 className="text-base font-medium">Motorsport &amp; Cars</h3>
            <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>
                <strong>Chairperson of the college Motorsport Club.</strong>{" "}
                Providing members with go-karting trips, game events, and car
                meets - building a community around a{" "}
                <strong>shared passion</strong>.
              </p>
              <p>
                A <strong>strong passion for cars</strong> drives me to work on
                mine and others&apos; vehicles, building experience and a deeper
                appreciation for the engineering and skill involved.
              </p>
            </div>
          </Paper>

          <Paper className="space-y-2">
            <h3 className="text-base font-medium">Tech &amp; Gaming</h3>
            <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>
                Around tech since I was young - learning hardware and electronics
                from my dad. I&apos;ve <strong>built, serviced and repaired</strong> multiple PCs,
                laptops and devices for myself and others.
              </p>
              <p>
                Recently switched to <strong>Linux (Fedora Workstation)</strong>{" "}
                via dual-boot and enjoy tinkering to learn the differences vs.
                other OSes.
              </p>
              <p>
                I also enjoy long gaming sessions as a <strong>reward</strong>{" "}
                after hard work—especially story-heavy FPS like Half-Life,
                STALKER 2 and Fallout.
              </p>
            </div>
          </Paper>
        </div>
      </Section>

      {/* PROJECTS */}
      
      <Section id="projects" title="Projects" description="Selected work with highlights.">
        
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        
      </Section>
      

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <Paper className="space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            Best way to reach me is via LinkedIn or GitHub. You can also leave
            your email + message and I&apos;ll get back to you.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="h-9 rounded-full text-base ring-1 ring-border/40 hover:ring-border">
              <a href="https://www.linkedin.com/in/mikolaj-makoszewski/" target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="h-9 rounded-full text-base ring-1 ring-border/40 hover:ring-border">
              <a href="https://github.com/xmikolay" target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub
              </a>
            </Button>
          </div>

          <ContactForm />
        </Paper>
      </Section>
    </div>
  );
}
