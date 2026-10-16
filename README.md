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

## Contact form

`POST /api/contact` validates the enquiry and emails it through [Resend](https://resend.com) (no extra package needed).
Copy `.env.example` to `.env.local` (or set these in Vercel → Project → Settings → Environment Variables):

```
RESEND_API_KEY=re_...
CONTACT_TO=admin@mosaicdesigns.tech
CONTACT_FROM="Mosaic Designs <hello@mosaicdesigns.tech>"   # domain must be verified in Resend
```

Until these are set the form shows a clear error with the email address as a fallback, so no enquiry is silently lost.
It includes a hidden honeypot field against spam bots.

## Deploy (Vercel)

1. Push this branch and open a pull request — Vercel builds a preview automatically.
2. Add the three environment variables above.
3. Merge to deploy. `/portfolio` permanently redirects to `/work`.

## Before launch

- [ ] Fill in `src/app/privacy/page.tsx` (registered business details, provider, retention) and have it reviewed.
- [ ] Set the three Resend environment variables in Vercel so enquiries are delivered.
- [ ] Add captions for the Build Squad video: `public/video/buildsquad-testimonial.en.vtt`, then set `captions` in `src/content/testimonials.ts`.
- [ ] Confirm `replyTime` in `src/content/site.ts` (currently “1 business day”).
- [ ] Replace placeholder project stories and team bios (search for `placeholder: true` / `bioPlaceholder`).
- [ ] Clients have approved the wording of their testimonials.
- [ ] Add the LinkedIn company page to `site.socials` if/when it exists.
- Fonts are self-hosted via `@fontsource` (no requests to Google).
