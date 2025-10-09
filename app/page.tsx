"use client";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { SkillGroup } from "@/components/skill-group";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactForm } from "@/components/contact-form";

export default function OnePage() {
  return (
    <div className="space-y-0">
      <Section id="summary" title="A bit about me...">
        <div className="space-y-8">
          <p className="text-muted-foreground">
            Hi, my name is <strong>Mikolaj</strong>, and I'm a 3rd year BSc (Hons) Computing student that focuses on <strong>full-stack web development</strong> and <strong>desktop applications</strong>.
            I'm passionate about building clean, efficient software that solves real problems and delivers great user experiences.
          </p>
          <p className="text-muted-foreground">
            My love for coding started in secondary school, where I learned the basics of programming using Python and Micro:bit.
            Since then, I've expanded my skills through <strong>personal projects and coursework</strong>, gaining experience with modern web frameworks like Next.js and Angular, 
            as well as desktop development with C# and WPF.
          </p>
        </div>
          
        <div className="grid gap-6 text-sm">
          <SkillGroup
            title="Languages"
            items={["C#", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Kotlin", "Python"]}
          />
          <SkillGroup
            title="Frameworks/Tools"
            items={["WPF/XAML", "Angular", "Next.js", "ASP.NET Core", "Node.js"]}
          />
          <SkillGroup
            title="Cloud"
            items={["AWS", "Azure", "Firebase"]}
          />
          <SkillGroup
            title="Databases"
            items={["SQL Server", "DynamoDB", "Firebase", "Supabase"]}
          />
          <SkillGroup
            title="Other"
            items={["Git/GitHub", "Linux", "Docker", "Visual Studio", "VS Code", "Android Studio"]}
          />
        </div>          
      </Section>

      {/* Hobbies */}
      <Section id="hobbies" title="Hobbies">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6 space-y-2">
            <h3 className="font-medium">Motorsport & Cars</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Chairperson of the college Motorsport Club.</strong> Providing our members with unforgettable Go-Karting trips,
              game events, and car meets. Bringing a community together around a <strong>shared passion</strong>.
            </p>

            <p className="text-sm text-muted-foreground">
              My <strong>strong passion for cars</strong> drives me to work on mine and others' vehicles, building as much experience as possible.
              Growing up around cars and motorsport has given me a <strong>deep appreciation</strong> for the engineering and skill involved.
            </p>

          </div>  
          <div className="rounded-2xl border p-6 space-y-2">
            <h3 className="font-medium">Tech & Gaming</h3>
            <p className="text-sm text-muted-foreground">
              I've been around tech <strong>ever since I was young</strong>, learning a lot about hardware and electronics from my dad.
              I have <strong>built, serviced and repaired</strong> multiple PCs, laptops and other devices over the years, for both myself and others.
            </p>

            <p className="text-sm text-muted-foreground">
              I have recently familiarised myself with the use of <strong>Linux (Fedora Workstation)</strong> as my daily OS by dual-booting it with Windows,
              and I enjoy tinkering with it to learn more about how Linux differs from other operating systems.
            </p>

            <p className="text-sm text-muted-foreground">
              I also enjoy long sessions of gaming as a <strong>reward</strong> after hard work, especially story-heavy FPS games like the Half-Life series, Stalker 2 and Fallout.
            </p>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>     

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="text-muted-foreground">
          Best way to reach me is via LinkedIn or GitHub.  
          Or, leave your email + message and I’ll get back to you.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild variant="outline" className="inline-flex items-center gap-2">
            <a href="https://www.linkedin.com/in/mikolaj-makoszewski/" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="inline-flex items-center gap-2">
            <a href="https://github.com/xmikolay" target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
          </Button>
        </div>

        {/* Small form */}
        <ContactForm />
      </Section>

      {/* CV (inline viewer + download) */}
      <Section id="cv" title="CV">
        <div className="rounded-2xl border p-4">
          <iframe
            src="/cvupdated.pdf#zoom=page-width"
            className="h-[75vh] w-full rounded-lg"
          />
        </div>
        <div className="pt-3">
          <Link href="/cvupdated.pdf" download className="underline">
            Download PDF
          </Link>
        </div>
      </Section>
    </div>
  );
}