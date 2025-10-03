"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">Mikolay</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/cv" className="hover:underline">CV</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
