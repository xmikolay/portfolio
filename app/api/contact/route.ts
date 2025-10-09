import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name, message } = await req.json();
    console.log("New contact submission:", { email, name, message });

    // 👉 Optionally send this via Resend, Nodemailer, etc.
    // For now, just log it.

    return NextResponse.json({ ok: true });
  } catch (err) {
    return new NextResponse("Error", { status: 500 });
  }
}