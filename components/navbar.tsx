"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";

const SECTIONS = ["summary", "hobbies", "projects", "contact", "cv"];

export function Navbar() {
  const [active, setActive] = useState<string>("summary");
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">MM</Link>
        <nav className="flex items-center gap-5 text-sm">
          {SECTIONS.map(id => (
            <Link key={id} href={`#${id}`} className={active===id ? "font-medium underline" : "hover:underline"}>
              {id[0].toUpperCase()+id.slice(1)}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}