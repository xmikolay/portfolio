"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3 w-full">
      <div className="grid gap-3 md:grid-cols-2">
        <Input type="email" name="email" placeholder="Your email" required className="h-11 w-full" />
        <Input type="text" name="name" placeholder="Your name (optional)" className="h-11 w-full" />
      </div>
      <Textarea name="message" placeholder="Your message" rows={6} className="w-full" required />
      <Button type="submit" className="w-full h-11" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </Button>
      {status === "sent" && <p className="text-sm text-green-600">Message sent</p>}
      {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}
