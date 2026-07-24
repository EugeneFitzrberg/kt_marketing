# CLAUDE.md

This file guides Claude Code when working in this repository.

## What this repo is

`kt_marketing` is a **standalone marketing/sales website** (React SPA, no backend, no shared code)
advertising two software products built by the same team, whose actual source lives in sibling
repos on this machine:

- `/Users/eugene/Documents/Documents/GitHub/kurort_trans_web` — **the CRM product** ("Курорт-Транс").
  An internal admin/operator/driver/manager panel for a passenger-transport company (intercity
  buses, transfers, excursions). This is the product being sold to *new business clients* who run
  a transport/tourism company and need back-office software.
- `/Users/eugene/Documents/Documents/GitHub/kt_passengers` — **a white-label passenger-facing
  booking website**, built for one specific existing client ("КТ Пассажиры") on top of the CRM's
  backend. This repo is *not* the product being sold as-is — it is the reference implementation
  that proves the concept: "we can build your customers a branded booking site like this one,
  wired to your own logo/colors/domain, on top of the same CRM backend."

There is no database and no proxy logic in this repo — it's a pure presentational site.

## How to use the two source repos when updating marketing copy

**kurort_trans_web (the CRM) — describe it in full, concrete detail.** This is the actual product
being sold. It's fine (encouraged) to be specific and technical here: name real features, real
screens, real ops/reliability characteristics. Good source files when refreshing copy:
- `CLAUDE.md` and `README.md` at repo root — architecture, deployment (Docker Swarm, GHCR, CI/CD),
  monitoring stack (Grafana/Prometheus dashboards), zero-downtime rolling updates.
- `client/src/components/*.js` (top-level page files) — one file per admin/operator screen
  (Statistics, TripManagement, Routes, Transport, Drivers, Passengers, BlackList, AutoFlights,
  Booking, MessagesLog, StaffActionsLog, Administrators, Operators) plus subfolders `excursion/`,
  `drivers/`, `trips/`, `transport/`, `transport_utils/`, `auto_flights/`, `routes/`, `dialogs/`
  for granular capabilities (route/tariff editor, seat inventory, schedules).
- `routes/main/middleware_functions/*.js` — backend business-capability inventory, one file per
  domain.
- `utils/senders/*` and `routes/client/driver_telebot.js` — the multi-channel notification system:
  Telegram, SMS (SMSAero), WhatsApp, Max/Green API, PWA web push, WebSocket live updates. This is a
  strong differentiator (most competing systems only do SMS) — keep it prominent in copy.
- Role model (`administrator`, `operator` with granular `accessRights`, `driver`, `manager`) is a
  selling point for "control who can see/do what."

**kt_passengers (the passenger site) — describe the *concept*, not this exact instance.** Do not
market it as "here is our product, take it or leave it" and do not lean on this specific client's
branding, logo, or exact visual identity as if it were a template. Instead extract the *general
capability* it demonstrates and pitch it as something built bespoke for each new client:
- Branded booking wizard (search → pick seats/date → passenger details → pay → e-ticket), transfer
  booking, group-tour booking, excursions catalog with photos — all of this is what gets restyled
  and rebranded per client (their logo, their colors, their domain, their background imagery).
- Online payment (YooKassa) + PDF e-tickets (`@react-pdf/renderer`), personal cabinet (trip
  history, repeat requests), PWA installability + push notifications, SEO plumbing (sitemap,
  per-page meta/SEO blocks, legal/cookie pages) — these are the reusable *capabilities* to sell,
  framed as "included in every branded site we build," not as features unique to one client.
- It's fine to reference "КТ Пассажиры" once as a real, live case study/example (e.g., "so far
  built for one regional carrier"), but the page's main pitch must read as a generic offer:
  *"we'll build this for your brand"* — not a resume of one client's site.
- If asked to add real screenshots/logos from `kt_passengers/client/src/resources`, ask first —
  those assets belong to that client, not to this marketing site, unless the user (who owns both
  repos) explicitly says it's fine to reuse them here.

When either source repo changes meaningfully (new feature shipped), re-read the relevant files
above before touching this repo's copy, rather than trusting stale summaries in this file.

## `src/components/demo/*` — ported (not fabricated) form logic

Two widgets on the product pages are real interactive demos, not static mockups — their state,
validation rules and (for the blacklist checker) API-call shape are ported from the actual source
repos, only the data source and visual styling were swapped for a dependency-free Tailwind look:
- `LiveSearchForm.jsx` (used on `/passenger-site`) — ported from `kt_passengers/client/src/components/PassengerRecord.js`
  and `FindBlocks.js` / `CustomNumberInputPC.js` (city filter-as-you-type, seat-count clamp to 1,
  no-past-dates rule). Feeds itself a small hardcoded `locations` object instead of hitting
  `/passenger/get-available-locations`.
- `LiveBlacklistCheck.jsx` (used on `/crm`) — ported from `kurort_trans_web/client/src/components/BlackList.js`'s
  `OperatorBlackList` (masked-phone lookup, the same three result states). Looks up a tiny
  hardcoded `DEMO_DB` instead of calling `/kernel/get-passenger-info` (no backend exists here).
  Keeps the real dependencies used in production for this piece: `react-input-mask`, `moment`.
- `LiveAccessMatrix.jsx` (used on `/crm`) — ported from `kurort_trans_web/client/src/components/Operators.js`'s
  `AccessRightsSection` + `OperatorCard.handleRightsChange` (the real 6 right keys/labels —
  transport/drivers/schedule/passengers/blacklist/excursions — and the real immutable toggle
  logic). "Сохранить" just flips a local flag instead of `POST /kernel/save-operator-info`.

If asked to port another real form/screen from either repo, follow the same pattern: keep the
actual state/validation/logic, swap only the live `fetch` for local mock data and the MUI/Bootstrap
classNames for Tailwind — don't pull in the original's full UI-kit stack (MUI v6/v7, Bootstrap,
Radix, global admin CSS) just for one widget, it's heavy and prone to visual/version mismatches.

## Site structure / tech

- Vite + React (JS, not TS) + React Router + Tailwind CSS (utility classes; theme tokens in
  `tailwind.config.js`) + `lucide-react` for icons. No Google Fonts / external CDN font loading —
  sibling repos deliberately dropped Google-hosted assets for reliability in the target market, so
  this site sticks to the system font stack.
- Pages: Home (`/`), CRM product page (`/crm`), white-label passenger-site product page
  (`/passenger-site`). Contacts/CTA live in `Footer.jsx` (`id="contacts"`, rendered on every page)
  rather than as their own route.
- No backend, no auth, no env vars beyond what Vite needs for a static build (`npm run build` →
  static `dist/`, deployable to any static host).
- **Routing is `HashRouter`, not `BrowserRouter`** (see `src/main.jsx`) — chosen so the site works
  unmodified on GitHub Pages, which has no server-side rewrite for SPA deep links. URLs look like
  `/#/crm`. In-page anchor links (footer "Контакты"/"Кейсы", header/CTA "Обсудить проект" buttons)
  use `src/components/AnchorLink.jsx`, not plain `href="/#id"` — under HashRouter the URL hash is
  the router's own state, so a raw hash href would hijack routing instead of scrolling. If adding a
  new in-page anchor link, use `<AnchorLink to="sectionId">`, not a plain `<a href="#...">`.

## Commands

```bash
npm install
npm run dev      # Vite dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally (serves at the same /kt_marketing/ base as prod)
```

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages automatically on every
push to `main` (via the official `actions/configure-pages` + `actions/upload-pages-artifact` +
`actions/deploy-pages` — no `gh-pages` branch, no extra npm package).

- **One-time manual step after the first push**: in the GitHub repo, Settings → Pages → Build and
  deployment → Source → set to **"GitHub Actions"** (not "Deploy from a branch"). Without this the
  workflow runs but nothing gets served.
- `vite.config.js` has `base: '/kt_marketing/'` hardcoded — this must match the actual GitHub repo
  name exactly (`https://<user>.github.io/<repo-name>/`). If the repo is ever renamed, or if it
  becomes a user/org root page (`<user>.github.io` with no sub-path), update `base` accordingly
  (root page → `base: '/'`).
