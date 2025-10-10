"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const SECTIONS = ["summary", "hobbies", "projects", "contact"];

export function Navbar() {
  const [active, setActive] = useState<string>("summary");
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [navH, setNavH] = useState(64); // fallback

  // Measure navbar pill height (handles font/spacing changes)
  useLayoutEffect(() => {
    if (wrapRef.current) setNavH(wrapRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + navH + 4; // offset so section is considered 'entered' when its top passes under the navbar
      let current = SECTIONS[0];

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;

        // Use offsetTop for reliable section tops (ignores margins/separators)
        const top = el.offsetTop;

        if (top <= scrollPos) {
          current = id; // keep advancing until we pass the current section top
        } else {
          break; // sections are in order; we can stop once we've passed the next one
        }
      }

      setActive(current);
    };

    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [navH]);

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      {/* Rounded pill glass navbar */}
      <div
        ref={wrapRef}
        className="flex items-center gap-6 rounded-full border border-border/60 bg-background/60 px-6 py-2 shadow-sm backdrop-blur-md ring-1 ring-border/40 transition-all"
      >
        <Link href="/" className="font-semibold text-sm md:text-base">MM</Link>

        <nav className="flex items-center gap-5 text-sm">
          {SECTIONS.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                active === id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
