"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("Sending...");
    try {
      // send to Next.js API route
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "Message sent ✅" : "Something went wrong ❌");
      if (res.ok) form.reset();
    } catch {
      setStatus("Error sending message ❌");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-3 max-w-md">
      <Input type="email" name="email" placeholder="Your email" required />
      <Input type="text" name="name" placeholder="Your name (optional)" />
      <Textarea name="message" placeholder="Your message" rows={4} required />
      <Button type="submit" className="w-full">Send</Button>
      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </form>
  );
}