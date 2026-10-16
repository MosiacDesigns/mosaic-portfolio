import { ButtonLink } from "@/components/ui/Button";
import { Greeting } from "@/components/ui/Bits";

export default function NotFound() {
  return (
    <section className="shell pb-32 pt-[clamp(40px,6vw,96px)]">
      <Greeting>(404 — PAGE NOT FOUND)</Greeting>
      <h1 className="display text-[clamp(64px,14vw,210px)] !leading-[0.84]">
        Lost<span className="text-accent">?</span>
      </h1>
      <p className="mt-8 max-w-[520px] text-xl leading-normal">That page doesn’t exist — or it moved during the redesign.</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/work" variant="outline">
          See the work
        </ButtonLink>
      </div>
    </section>
  );
}
