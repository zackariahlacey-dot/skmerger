import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buyerAdminEmail,
  buyerConfirmEmail,
  sellerAdminEmail,
  sellerConfirmEmail,
  newMarketAdminEmail,
  newMarketConfirmEmail,
  type BuyerPayload,
  type SellerPayload,
  type NewMarketPayload,
} from "@/lib/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "skmergers@gmail.com";
const FROM = "Sheldon Kirk <noreply@skmergers.com>";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { type } = body as { type: "buyer" | "seller" | "newmarket" };

  if (!type) {
    return NextResponse.json({ error: "Missing inquiry type." }, { status: 400 });
  }

  try {
    if (type === "buyer") {
      const p = body as BuyerPayload;
      if (!p.name || !p.email || !p.states?.length) {
        return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
      }
      const statesList = p.states.filter((s) => s !== "Any State").join(", ") || "All States";
      await Promise.all([
        resend.emails.send({
          from: FROM,
          to: ADMIN_EMAIL,
          replyTo: p.email,
          subject: `New Buyer Lead — ${p.name} (${statesList})`,
          html: buyerAdminEmail(p),
        }),
        resend.emails.send({
          from: FROM,
          to: p.email,
          subject: "You're on Sheldon's buyer alert list — SK Mergers & Acquisitions",
          html: buyerConfirmEmail(p),
        }),
      ]);
    } else if (type === "seller") {
      const p = body as SellerPayload;
      if (!p.name || !p.email) {
        return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
      }
      await Promise.all([
        resend.emails.send({
          from: FROM,
          to: ADMIN_EMAIL,
          replyTo: p.email,
          subject: `New Seller Inquiry — ${p.name}${p.location ? ` (${p.location})` : ""}`,
          html: sellerAdminEmail(p),
        }),
        resend.emails.send({
          from: FROM,
          to: p.email,
          subject: "Sheldon will be in touch shortly — SK Mergers & Acquisitions",
          html: sellerConfirmEmail(p),
        }),
      ]);
    } else if (type === "newmarket") {
      const p = body as NewMarketPayload;
      if (!p.name || !p.email || !p.market) {
        return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
      }
      await Promise.all([
        resend.emails.send({
          from: FROM,
          to: ADMIN_EMAIL,
          replyTo: p.email,
          subject: `New Market Interest — ${p.name} (${p.market})`,
          html: newMarketAdminEmail(p),
        }),
        resend.emails.send({
          from: FROM,
          to: p.email,
          subject: "You're on the new market candidate list — SK Mergers & Acquisitions",
          html: newMarketConfirmEmail(p),
        }),
      ]);
    } else {
      return NextResponse.json({ error: "Unknown inquiry type." }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry/route] Resend error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
