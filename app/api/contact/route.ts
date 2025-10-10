import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime (not edge)

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const { email, name = "", message, _gotcha } = await req.json();

    // honeypot to catch bots quietly
    if (_gotcha) return NextResponse.json({ ok: true });

    if (!email || !message || !isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.CONTACT_TO;
    const from =
      process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";

    if (!to) {
      console.error("Missing CONTACT_TO env var");
      return NextResponse.json(
        { ok: false, error: "Server not configured" },
        { status: 500 }
      );
    }

    const subject = `New portfolio message from ${name || "Someone"} (${email})`;
    const text =
      `From: ${name || "(no name)"} <${email}>\n\n` +
      `Message:\n${message}\n`;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email, // lets you click “Reply” straight to the sender
      tags: [{ name: "source", value: "portfolio" }],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error", { status: 500 });
  }
}
