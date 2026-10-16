import { NextResponse } from "next/server";
import { validateEnquiry, type Enquiry } from "@/lib/enquiry";

/**
 * POST /api/contact — receives the enquiry form and delivers it to one or both of:
 *
 * 1. Google Sheet (recommended, free) — a new row per enquiry, plus an optional email alert.
 *      SHEET_WEBHOOK_URL   the Apps Script web-app URL (…/exec)
 *      SHEET_SECRET        the same secret you set in the script's SECRET constant
 *    Setup: see integrations/google-sheet/README.md
 *
 * 2. Email via Resend (optional).
 *      RESEND_API_KEY, CONTACT_TO, CONTACT_FROM
 *
 * The visitor sees success if at least one configured channel accepted the enquiry.
 * If nothing is configured the route answers 503 and the form shows the email fallback,
 * so no enquiry is ever silently lost.
 */

const clean = (s: unknown = "") => String(s ?? "").trim().slice(0, 5000);

async function toSheet(e: Enquiry, page: string) {
  const { SHEET_WEBHOOK_URL, SHEET_SECRET } = process.env;
  if (!SHEET_WEBHOOK_URL || !SHEET_SECRET) return null; // not configured
  const res = await fetch(SHEET_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" }, // Apps Script reads the raw body
    body: JSON.stringify({
      secret: SHEET_SECRET,
      name: clean(e.name),
      email: clean(e.email),
      company: clean(e.company),
      service: clean(e.service),
      budget: clean(e.budget),
      timeline: clean(e.timeline),
      message: clean(e.message),
      page,
    }),
    redirect: "follow",
    cache: "no-store",
  });
  const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (!res.ok || !data?.ok) {
    console.error("Google Sheet error", res.status, data?.error ?? "");
    return false;
  }
  return true;
}

async function toEmail(e: Enquiry) {
  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) return null; // not configured
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
    return false;
  }
  return true;
}

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

  const e = body as Enquiry;
  const page = clean(req.headers.get("referer") ?? "");
  const results = await Promise.all([toSheet(e, page).catch(() => false), toEmail(e).catch(() => false)]);

  const configured = results.filter((r) => r !== null);
  if (!configured.length) {
    console.error("Contact form is not configured: set SHEET_WEBHOOK_URL + SHEET_SECRET (and/or the Resend variables).");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }
  if (!configured.some(Boolean)) return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
