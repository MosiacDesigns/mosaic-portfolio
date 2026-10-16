// Shared by the contact form (client) and the API route (server).

export const serviceOptions = [
  "Website or web app",
  "MVP or custom software",
  "AI features & automation",
  "Web3 & blockchain",
  "Agency partnership (white-label)",
  "Something else",
] as const;

export const budgetOptions = ["Under $2.5k", "$2.5k–5k", "$5k–10k", "$10k–25k", "$25k+", "Not sure yet"] as const;
export const timelineOptions = ["As soon as possible", "1–3 months", "3–6 months", "Flexible"] as const;

export type Enquiry = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  budget: string;
  timeline: string;
  website?: string; // honeypot — real people never fill this in
};

export type EnquiryErrors = Partial<Record<"name" | "email" | "service" | "message", string>>;

export function validateEnquiry(e: Partial<Enquiry>): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!e.name?.trim()) errors.name = "Please tell us your name.";
  if (!e.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim())) errors.email = "Enter a valid email address.";
  if (!e.service || !(serviceOptions as readonly string[]).includes(e.service)) errors.service = "Pick the closest option.";
  if (!e.message?.trim()) errors.message = "A sentence or two is plenty.";
  else if (e.message.length > 5000) errors.message = "Please keep it under 5,000 characters.";
  return errors;
}
