import type { Metadata } from "next";
import { Greeting } from "@/components/ui/Bits";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy", robots: { index: false } };

// DRAFT — have this reviewed before launch and fill in the registered business details.
export default function PrivacyPage() {
  const h2 = "mt-12 font-display text-2xl font-bold uppercase";
  return (
    <article className="shell max-w-[860px] pb-24 pt-[clamp(40px,6vw,96px)] text-[17px] leading-relaxed">
      <Greeting>(PRIVACY)</Greeting>
      <h1 className="display text-[clamp(48px,8vw,110px)]">Privacy notice</h1>
      <p className="mt-8 text-mute">Last updated: [DATE]</p>

      <h2 className={h2}>Who we are</h2>
      <p className="mt-4">
        {site.name} is operated by [REGISTERED BUSINESS NAME AND ADDRESS]. Contact: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2 className={h2}>What we collect</h2>
      <p className="mt-4">
        When you send an enquiry we receive the details you enter: your name, email address, company or website, the service you are
        interested in, your message and, if you choose, a budget range and timeline.
      </p>

      <h2 className={h2}>How we use it</h2>
      <p className="mt-4">
        Only to reply to your enquiry and discuss a possible project. We do not sell your details or add you to marketing lists. Enquiries are
        delivered by email through our email provider, [PROVIDER].
      </p>

      <h2 className={h2}>How long we keep it</h2>
      <p className="mt-4">[RETENTION PERIOD]. You can ask us to see, correct or delete your details at any time by emailing us.</p>

      <h2 className={h2}>Third-party services</h2>
      <p className="mt-4">Booking a call uses Calendly, which has its own privacy policy. This site does not use advertising cookies.</p>
    </article>
  );
}
