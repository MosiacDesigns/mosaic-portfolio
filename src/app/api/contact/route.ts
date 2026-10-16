import { NextResponse } from "next/server";
import { validateEnquiry, type Enquiry } from "@/lib/enquiry";

/**
 * POST /api/contact — receives the enquiry form.
 *
 * Delivery uses Resend (https://resend.com) through its REST API, so no extra
 * dependency is needed. Set these environment variables (e.g. in Vercel):
 *   RESEND_API_KEY   your Resend API key
 *   CONTACT_TO       where enquiries go, e.g. admin@mosaicdesigns.tech
 *   CONTACT_FROM     a sender on a domain verified in Resend,
 *                    e.g. "Mosaic Designs <hello@mosaicdesigns.tech>"
 *
 * Without them the route answers 503 and the form shows the email fallback,
 * so no enquiry is ever silently lost.
 */
export async function POST(req: Request) {
  let body: Partial<Enquiry>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't retry.
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validateEnquiry(body);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    console.error("Contact form is not configured: set RESEND_API_KEY, CONTACT_TO and CONTACT_FROM.");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const e = body as Enquiry;
  const clean = (s = "") => s.toString().slice(0, 5000);
  const text = [
    `Name: ${clean(e.name)}`,
    `Email: ${clean(e.email)}`,
    `Company / website: ${clean(e.company) || "—"}`,
    `Service: ${clean(e.service)}`,
    `Budget: ${clean(e.budget) || "—"}`,
    `Timeline: ${clean(e.timeline) || "—"}`,
    "",
    clean(e.message),
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: clean(e.email),
      subject: `New enquiry: ${clean(e.service)} — ${clean(e.name)}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
