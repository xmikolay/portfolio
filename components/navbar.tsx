"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const SECTIONS = ["summary", "hobbies", "projects", "contact"];

export function Navbar() {
  const [active, setActive] = useState<string>("summary");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [navH, setNavH] = useState(56);

  // Measure pill height
  useLayoutEffect(() => {
    if (wrapRef.current) setNavH(wrapRef.current.offsetHeight);
  }, []);

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + navH + 4;
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
        else break;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [navH]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Fixed navbar */}
      <div className="fixed inset-x-0 top-[max(8px,env(safe-area-inset-top))] z-50 flex justify-center pointer-events-none px-2">
        <div
          ref={wrapRef}
          className="
            pointer-events-auto
            flex items-center justify-between
            rounded-full border border-border/60 bg-background/70
            px-4 py-2 shadow-sm backdrop-blur-md ring-1 ring-border/40
            w-full max-w-[56rem]
          "
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="font-semibold text-sm md:text-base whitespace-nowrap flex-shrink-0"
          >
            MM
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {SECTIONS.map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                className={`whitespace-nowrap transition-colors ${
                  active === id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {id[0].toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Right side: Theme toggle + Hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <ThemeToggle />
            
            {/* Hamburger button (mobile only) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          fixed inset-x-0 top-[calc(max(8px,env(safe-area-inset-top))+64px)] z-50 
          flex justify-center pointer-events-none px-2 md:hidden
          transition-all duration-300 ease-out
          ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="
          pointer-events-auto
          w-full max-w-[56rem]
          rounded-2xl border border-border/60 bg-background/95
          shadow-lg backdrop-blur-md ring-1 ring-border/40
          p-4
        ">
          <nav className="flex flex-col gap-3">
            {SECTIONS.map((id, index) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={handleLinkClick}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                className={`
                  px-4 py-2 rounded-lg transition-all duration-200 text-sm
                  ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                  ${
                    active === id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }
                `}
              >
                {id[0].toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: navH + 16 }} />
    </>
  );
}