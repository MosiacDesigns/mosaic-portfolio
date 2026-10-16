"use client";

import { useEffect, useRef } from "react";

const ACCENT = "rgb(255, 91, 46)"; // tailwind accent #FF5B2E

/** Find the first non-transparent background behind the pointer. */
function backgroundAt(el: Element | null): string | null {
  for (let node = el; node && node !== document.documentElement; node = node.parentElement) {
    const bg = getComputedStyle(node).backgroundColor;
    if (bg && bg !== "transparent" && !bg.endsWith(", 0)")) return bg;
  }
  return null;
}

/**
 * Brand cursor: an orange arrow that follows the mouse. It turns black (ink) over orange backgrounds,
 * grows slightly over links and buttons, and steps aside over text fields (native I-beam there).
 * Only on devices with a precise pointer that can hover — never on touch screens.
 * Force a colour on any element with data-cursor="dark" or data-cursor="accent".
 */
export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    const el = ref.current!;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    let x = -100;
    let y = -100;
    let frame = 0;

    const update = () => {
      frame = 0;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const under = document.elementFromPoint(x, y);
      const forced = under?.closest<HTMLElement>("[data-cursor]")?.dataset.cursor;
      const onAccent = forced ? forced === "dark" : backgroundAt(under) === ACCENT;
      const overText = !!under?.closest("input, textarea, select, [contenteditable='true']");
      const overLink = !!under?.closest("a, button, [role='button'], label, summary");
      el.dataset.tone = onAccent ? "dark" : "accent";
      el.dataset.state = overText ? "hidden" : overLink ? "link" : "default";
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      el.dataset.visible = "true";
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onLeave = () => (el.dataset.visible = "false");
    const onDown = () => (el.dataset.pressed = "true");
    const onUp = () => (el.dataset.pressed = "false");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="mosaic-cursor" data-visible="false" data-tone="accent" data-state="default">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <path d="M3.4 2.3 25 10.2c1.2.45 1.2 2.15 0 2.6l-9.2 3.4c-.5.18-.88.56-1.06 1.06l-3.4 9.2c-.45 1.2-2.15 1.2-2.6 0L1.8 4.2c-.4-1.1.6-2.1 1.6-1.9Z" />
      </svg>
    </div>
  );
}
