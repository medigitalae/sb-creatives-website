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
