import type { Metadata } from "next";
import WorkList from "@/components/work/WorkList";
import { ClosingCta, Greeting } from "@/components/ui/Bits";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products, platforms and websites by Mosaic Designs — Trader’s Mirror, OGGames, Virinchi Software, Kaarigar Connect, Fortify and more, each with the story behind it.",
};

export default function WorkPage() {
  return (
    <>
      <section className="shell pt-[clamp(40px,6vw,96px)]">
        <Greeting>(SELECTED WORK)</Greeting>
        <h1 className="display animate-rise text-[clamp(64px,16vw,230px)] !leading-[0.82] tracking-[-0.04em]">
          The work<span className="text-accent">.</span>
        </h1>
      </section>
      <div className="mt-[clamp(32px,4vw,56px)]">
        <WorkList />
      </div>
      <ClosingCta kicker="Seen something close to what you need?" title="Let’s talk" secondary={{ label: "See services", href: "/services" }} />
    </>
  );
}
