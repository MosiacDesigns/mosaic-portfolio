# Mosaic Designs — website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Static pages, one API route for the contact form.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also lints and type-checks)
npm start
```

## Where things live

| What | Where |
|---|---|
| Business details, nav, process (5 steps), hours, reply time, film | `src/content/site.ts` |
| Team (names, roles, years, photos, bios) | `src/content/team.ts` |
| Testimonials + Build Squad video | `src/content/testimonials.ts` |
| Projects and their story pages (`/work/<slug>`) | `src/content/projects.ts` |
| Services, engagement models, guide prices, FAQ | `src/content/services.ts` |
| About: facts, beliefs, toolkit | `src/content/about.ts` |
| Pages | `src/app/**/page.tsx` |
| Header / footer | `src/components/layout/` |
| Film card, tape band, CTA, process grid | `src/components/ui/` |
| Testimonial spotlight | `src/components/home/Testimonials.tsx` |
| Images · videos | `public/images/` (team photos in `team/`) · `public/video/` |
| Colours, fonts, animations | `tailwind.config.ts` |

**Add a project:** append an object to `projects` in `src/content/projects.ts` (with a `story`) and drop its screenshot in `public/images/`.
Its page appears at `/work/<slug>` automatically. Screenshots are always shown whole on a coloured mat (`mat`), never cropped.

### Placeholder content

Sample copy is marked `placeholder: true` (project story sections) or `bioPlaceholder: true` (team bios).
It shows with a dashed orange outline in `npm run dev`, and is **hidden in production builds** so it can never go live by accident.
To preview it in a production build set `NEXT_PUBLIC_SHOW_PLACEHOLDERS=1`. Replace it, then remove the flag.

## Videos

Both videos are self-hosted in `public/video/` and served by Vercel like any other static file (720p MP4 — H.264/AAC, 4.5 MB and 8.1 MB, `faststart` so playback begins before the download finishes — plus a WebM/VP9 fallback for browsers without H.264). Nothing loads until a visitor presses play, and playback starts from the click so it plays **with sound**.
To swap a video, replace the file (keep it under ~10 MB: `ffmpeg -i in.mp4 -vf scale=1280:-2 -c:v libx264 -crf 27 -preset slow -c:a aac -b:a 128k -movflags +faststart out.mp4`) and its poster image.

## Contact form

`POST /api/contact` validates the enquiry and delivers it to a **Google Sheet** (one row per enquiry, with a Status column for tracking leads and an optional email alert). Optionally it can also email it through Resend.

- **Google Sheet (free, recommended):** follow [`integrations/google-sheet/README.md`](integrations/google-sheet/README.md) (~10 minutes), then set `SHEET_WEBHOOK_URL` and `SHEET_SECRET`.
- **Email via Resend (optional):** set `RESEND_API_KEY`, `CONTACT_TO` and `CONTACT_FROM` (the sending domain must be verified in Resend).

Copy `.env.example` to `.env.local` locally, or set the variables in Vercel → Project → Settings → Environment Variables.
Until at least one is set, the form shows a clear error with the email address as a fallback, so no enquiry is silently lost.
It includes a hidden honeypot field against spam bots.

## Deploy (Vercel)

1. Push this branch and open a pull request — Vercel builds a preview automatically.
2. Add the contact-form environment variables above (`SHEET_WEBHOOK_URL`, `SHEET_SECRET`).
3. Merge to deploy. `/portfolio` permanently redirects to `/work`.

## Before launch

- [ ] Fill in `src/app/privacy/page.tsx` (registered business details, provider, retention) and have it reviewed.
- [ ] Connect the contact form to the Google Sheet (`integrations/google-sheet/README.md`) and send a test enquiry.
- [ ] Confirm `replyTime` in `src/content/site.ts` (currently “1 business day”).
- [ ] Replace placeholder project stories and team bios (search for `placeholder: true` / `bioPlaceholder`).
- [ ] Clients have approved the wording of their testimonials.
- [ ] Add the LinkedIn company page to `site.socials` if/when it exists.
- Fonts are self-hosted via `@fontsource` (no requests to Google).
