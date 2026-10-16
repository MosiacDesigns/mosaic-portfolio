# Refinement — October 2026

Summary of what changed in this round. The full decision log lives on the design canvas.

## Positioning & copy
- Lead offer: websites, web apps and MVPs for founders and product teams; AI is a capability inside that work; Web3 is a specialism; agencies get their own path.
- Copy speaks for a senior team of four (“we”). Nothing describes the studio as small or solo.
- Hero keeps “We design & build.”, with new audience sub-copy and the primary CTA “Start a project →”.

## Homepage
- The orange hero card now plays the brand film (click to play, lazy-loaded) and sits beside “& BUILD.” instead of over the headline.
- “Trusted by teams at” client line; one orange tape band (DM Mono). The outline marquee, “coming soon” band and statement band are removed.
- New “The team” section (photos, roles, years).
- Selected work: Trader’s Mirror featured as our own product, using a still from the film. 2×2 grid: OGGames, Virinchi, Fortify, Spine, each with a provenance chip.
- Testimonials: spotlight layout with dots, floating cards and the Build Squad video (Alex).
- Services list (4), agencies card, 5-step process from the film, new closing CTA.

## Services
- Four services with “Good fit if…” and “Led by”; agencies as an orange band.
- 5-step process; engagement models; one guide-price table (no prices on service headers).
- FAQ: who does the work, IP ownership, payments (advance + milestones; Wise or wire), UK & US hours.

## Work
- 7 projects (Véra Estates and Tranquil Oasis removed). Filters: Products / Websites / AI / Web3.
- Every project has a story page: overview → business → problem statement → what we did → value → technical notes → screens → client quote.
- Screenshots are never cropped (contain on a coloured mat). The drag gallery is removed.

## About & Contact
- About: “Senior team. Serious work.”, the film, team cards (greyscale photos, colour on hover), honest facts, updated beliefs, trimmed toolkit.
- Contact: “the team who’ll work on it”, UK & US hours, reply time, discovery call first, new service options.

## Global
- Header: hairline divider; new mobile menu with numbered links, Start a project / Book a call, email and hours.
- Footer: email-led CTA row, new tagline, hours, Services and Studio columns, Back to top.
- Design tokens added (`line2`, `faint`, `mat`, `mirror.*`), a `.section` spacing utility and the `.sample` style.

---

# Update — 16 October 2026 · Video playback & sound

- Both videos now start **from the click itself** (`video.play()` in the handler, unmuted, volume 1), so browsers allow sound. Before this, playback relied on `autoPlay` after a re-render, which some browsers treat as an autoplay without a user gesture and then block or mute.
- Alex’s testimonial audio was loudness-normalised: it was very quiet (−28 dB average, now −19 dB).
- Added WebM (VP9/Opus) versions next to the MP4s as a fallback for browsers without H.264.
- The player stays in the page with `preload="none"`, so nothing downloads until someone presses play. “Back to quotes” pauses Alex’s video.
- Captions TODO removed (not needed).
- Verified in Chromium with the autoplay policy set to “user gesture required”: both films and Alex’s video play unmuted with audio after one click.

---

# Update — 16 October 2026 · Brand cursor

- New orange arrow cursor across the site (`src/components/ui/CustomCursor.tsx`, styles at the end of `globals.css`).
- It switches to black (ink, with an orange outline) automatically wherever the background under the pointer is the brand orange: buttons, the tape band, the film frame, the agencies card and the orange cards. No per-element setup is needed; `data-cursor="dark"` or `data-cursor="accent"` on an element forces a colour.
- It grows slightly over links and buttons and shrinks on click. Over text fields it steps aside so the normal text cursor shows.
- Desktop only: it switches on only for a precise pointer that can hover (mouse or trackpad). Phones and tablets keep their normal behaviour, and the native cursor returns if JavaScript is off.
- Verified on dark backgrounds, orange buttons, the tape band, the agencies card and the contact form, and that it stays off on touch devices.

---

# Update — 16 October 2026 · Enquiries to Google Sheet, About heading

- **Contact form → Google Sheet.** Each enquiry adds a row to your Sheet (Received, Name, Email, Company, Service, Budget, Timeline, Message, Page, Status, Notes), with a Status dropdown (New → Replied → Call booked → Proposal sent → Won / Lost / Spam) and an optional email alert from your own Google account. Free, no database.
  - Script and step-by-step setup: `integrations/google-sheet/` (`Code.gs` + `README.md`). The website needs `SHEET_WEBHOOK_URL` and `SHEET_SECRET`.
  - Protected by a shared secret and the existing bot trap. Text such as “=…” is stored as plain text, never run as a spreadsheet formula.
  - Resend email still works as an optional second channel. The visitor sees success if at least one channel accepted the enquiry; if none is set up they get the email-address fallback.
  - Tested against a stand-in for the Apps Script endpoint, including Google’s redirect response: a real submission, a wrong secret (rejected), nothing configured (fallback) and a spam bot (silently ignored).
- **About heading:** “Senior team.” and “Serious work.” now always sit on one line each, scaling with the screen. Checked at 320–1585px wide with no overflow.
