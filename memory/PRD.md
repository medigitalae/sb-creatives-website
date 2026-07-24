# SB Creatives — Website PRD

## Problem Statement
Award-worthy, modern marketing site for SB Creatives Pvt. Ltd (creative, digital, retail & production agency, Kochi, India). Brand guide: Manrope/Inter, charcoal #36454F + cadet blue #5FC6CA teal palette, warm-white editorial base + midnight-slate dark sections. Contact: hello@sbcreatives.in.

## Architecture
- Frontend: React 19 + React Router, Tailwind, framer-motion (scroll reveals, kinetic hero), lenis (smooth scroll), react-fast-marquee, shadcn Select + sonner toast.
- Backend: FastAPI + MongoDB. Contact enquiries persisted to `contacts` collection.
- Endpoints: GET /api/, POST/GET /api/contact, POST/GET /api/status.

## Pages
- Home: kinetic masked hero, service marquee, asymmetric bento selected work, service list, manifesto preview, stats + dark CTA.
- Services: accordion deep-dive into 5 categories with full capability lists.
- Work: filterable project grid (parallax cards), real project imagery from ME Digital work.
- About: manifesto (4 numbered chapters), stats, capabilities, CTA.
- Contact: split-screen, form with service Select -> saves to DB (no email, per user).

## Implemented (2026-07-24)
- All 5 pages, navbar (active pill + mobile menu), footer, brand theming, logo/favicon.
- Contact form E2E verified (frontend submit -> DB persist -> success state + toast).
- Backend contact endpoints verified via curl.

## Backlog / Next
- P1: Admin view for contact submissions; email notifications (Resend).
- P2: Individual project case-study detail pages; blog/careers.
- P2: SEO meta per route, sitemap, OG images.

## Update (2026-07-24) — Full content build from client document
- Removed brand text from header (logo only); logo inverts to white on the dark home hero.
- Home hero rebuilt as dark theme (midnight) with animated moving gradients + panning grid lines, kinetic masked reveal.
- Expanded to full sitemap with dynamic routes:
  - /services + 5 detail pages (/services/:slug) with animated custom SVG illustrations, offerings, process.
  - /work + 10 case studies (/work/:slug) with parallax hero, brief/approach/delivered/outcome, next-project nav.
  - /insights + 4 long-form articles (/insights/:slug).
  - /about (intro, differences, principles, process, capabilities), /contact, /privacy-policy, /terms.
- Contact form expanded: name, company, email, phone, service, budget, timeline, project details, consent. Saves to DB (contacts). Server enforces consent (400 if missing).
- Content sourced verbatim from SB_Creatives_Website_Content_2026.docx; "Kochi" used only in address.
- Testing: iteration_2 — backend 100% (5/5), frontend 100% functional. Fixed cosmetic SVG animation warnings.

## Backlog / Next
- P1: Admin auth + dashboard to view enquiries (GET /api/contact is currently public — restrict before launch).
- P2: Replace stock imagery with approved client project photography; real gallery per case study.
- P2: Per-route SEO meta/OG, sitemap; wire email notifications (Resend) for new enquiries.

## Update (2026-07-24) — Cross-linking, galleries, hero/footer redesign
- Works <-> Services cross-linked: added RelatedWork component. Service detail pages show "Selected work in this service"; case study pages show "More in this service" (excludes current). Projects tagged with serviceSlug; getProjectsByService() helper.
- Removed year from all work displays (cards + case study).
- Added conditional case-study image gallery (data-testid=case-study-gallery); hidden when gallery array empty.
- Home hero redesigned: floating shapes, animated sparkles, rotating CircularText badge, mouse-parallax layers (posh/modern) on top of existing grid + moving gradients.
- Footer redesigned (funky): rotating badge with logo mark, animated underline links, "Back to top", giant outlined marquee wordmark.

## KNOWN BLOCKER — project imagery
- medigital.ae assets are behind Cloudflare bot protection + a hard CAPTCHA. Hotlinking fails for visitors and automated download is blocked (only PUMA speedcat-hero.webp was retrieved and is hosted at /frontend/public/works/).
- All other projects currently use STOCK placeholder images (some thematically off, e.g. Carrier shows a shoe). Galleries are empty.
- ACTION NEEDED: client to upload the real .webp project images (chat attachments support webp) so they can be hosted locally at /works/ and wired into image + gallery per project in src/content/projects.js.
