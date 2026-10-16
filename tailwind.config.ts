import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E0E",
        paper: "#F2EEE6",
        mute: "#A39E94",
        line: "#2A2927",
        card: "#161615",
        accent: { DEFAULT: "#FF5B2E", soft: "#FF8A66" },
        line2: "#3A3936", // stronger hairline: form fields, outline buttons
        faint: "#6E6A63", // placeholders, faded testimonial cards
        mat: "#1E1D1B", // neutral panel behind screenshots
        mirror: { DEFAULT: "#141210", line: "#2E2A24", text: "#C9C1B3", mute: "#A79E90", ink: "#EEE8DD" },
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1440px" },
      spacing: { gutter: "clamp(20px, 3.3vw, 48px)" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        rise: { from: { opacity: "0", transform: "translateY(60px)" }, to: { opacity: "1", transform: "none" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "none" } },
        heroCard: {
          from: { opacity: "0", transform: "translateY(40px) rotate(2deg)" },
          to: { opacity: "1", transform: "rotate(-4deg)" },
        },
        photoCard: {
          from: { opacity: "0", transform: "translateY(40px) rotate(6deg)" },
          to: { opacity: "1", transform: "rotate(3deg)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        rise: "rise 1s cubic-bezier(.2,.8,.2,1) both",
        "fade-up": "fadeUp .6s cubic-bezier(.2,.8,.2,1) both",
        "spin-slow": "spin 14s linear infinite",
        "hero-card": "heroCard 1.1s cubic-bezier(.2,.8,.2,1) .3s both",
        "photo-card": "photoCard 1.1s cubic-bezier(.2,.8,.2,1) .2s both",
      },
    },
  },
  plugins: [],
};

export default config;
