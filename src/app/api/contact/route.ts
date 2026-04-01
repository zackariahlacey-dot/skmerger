import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactAdminEmail,
  contactConfirmEmail,
  type ContactPayload,
} from "@/lib/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "skmergers@gmail.com";
const FROM = "Sheldon Kirk <noreply@skmergers.com>";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, message } = body as ContactPayload;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `New Contact Inquiry from ${name}`,
        html: contactAdminEmail({ name, email, phone, message }),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "Sheldon Kirk received your message — SK Mergers & Acquisitions",
        html: contactConfirmEmail({ name, email, phone, message }),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact/route] Resend error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
