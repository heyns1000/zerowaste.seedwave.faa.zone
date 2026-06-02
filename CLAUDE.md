# CLAUDE.md — zerowaste.seedwave.faa.zone

This file provides guidance for AI assistants (Claude and others) working in this repository.

**Last Updated:** 2026-06-02
**Branch:** `claude/claude-md-docs-1rko8`

---

## Project Overview

**Project:** Block Box™ — Zero-Waste EPS Cornice Packaging System
**Domain:** zerowaste.seedwave.faa.zone
**Inventor:** Heyns, Pretoria, Gauteng, South Africa
**Status:** Patent Pending — Provisional filing target: March 11–18, 2026
**Priority Date:** February 25, 2026 (working prototype completed)

This is the marketing and licensing website for the **Block Box™** patent — a revolutionary
integrated packaging system for EPS (Expanded Polystyrene) cornice profiles where the product
material itself becomes the shipping container.

---

## What Block Box™ Is

Block Box™ uses CNC hot wire cutting to embed multiple cornice profiles inside a solid EPS block,
separated by thin "tear-away bridges." The block ships as its own container (no cardboard, no
plastic wrap, no void fill), and end users manually separate individual profiles by tearing along
the bridges — no tools required.

**Core innovation:** The EPS block and the cornice profiles are the same homogeneous material
(mono-material). There is no packaging waste because everything IS the product.

**Key metrics:**
- 94% packaging waste reduction
- 40–60% shipping cost reduction
- 100% mono-material recyclable (EPS code #6)
- 18 patent claims covering apparatus, method, and dual-market applications
- $5B global addressable market (commercial + retail)

**Ecosystem position:** Block Box™ is node 21 of 21 brands in the Zerowaste ecosystem
(see `docs/zerowaste-unified-repository.json`). The other 20 are digital infrastructure brands
(CleanTrack™, GreenLoop™, etc.); Block Box™ is the sole physical-product patent node.

---

## Technology Stack

**Frontend:** Plain HTML5 / CSS3 / Vanilla JavaScript
**Build tooling:** None — static files, no build step required
**Fonts:** Google Fonts (Inter, Space Grotesk) via CDN
**Deployment:** Static hosting (any web server or CDN)

---

## Directory Structure

```
zerowaste.seedwave.faa.zone/
├── CLAUDE.md                              # This file — AI assistant guide
├── index.html                             # Single-page site (all sections)
├── css/
│   └── style.css                          # All styles — CSS custom properties, responsive
├── js/
│   └── main.js                            # Nav scroll, mobile menu, counter animation, form UX
└── docs/
    └── zerowaste-unified-repository.json  # Unified ecosystem data export (21 brands, Base44 + Block Box™)
```

No build step. No package.json. No dependencies. Open `index.html` directly in a browser.

---

## Site Structure (index.html sections)

| Section ID        | Content |
|-------------------|---------|
| `#hero`           | Full-viewport hero — headline, stats bar (18 claims / 94% / 60% / $5B), CTAs |
| `#problem`        | Industry problem — traditional ($87/unit) vs Block Box™ ($22/unit) comparison table |
| `#solution`       | Innovation overview — 6-benefit grid (mono-material, bridges, zero packaging, etc.) |
| `#how-it-works`   | 3-step process (CNC cutting → shipping → dispensing) with animated reveal |
| `#markets`        | Dual-market platform — commercial ($2.5B) and retail ($2.5B) side-by-side |
| *(retail section)*| Claim 15 retail point-of-sale method — 4-step flow + 4 outcome stats |
| `#impact`         | Environmental metrics with counter animation (94%, 50%, 100%, 6×) |
| `#patent`         | 18 claims summary grouped by type + 5-milestone filing timeline |
| `#licensing`      | 3 license card types (manufacturing, dual [featured], retail) |
| `#contact`        | NDA-gated enquiry form (name, company, email, country, license type, message) |
| footer            | Brand links, patent pending notice, confidentiality notice |

**Navigation links:** Innovation → How It Works → Markets → Impact → Patent → License Enquiry (CTA)

---

## Design System

### Color Palette (CSS custom properties in `css/style.css` `:root`)

| Variable          | Value      | Usage |
|-------------------|------------|-------|
| `--navy`          | `#0a1628`  | Primary dark background (hero, how-it-works, contact) |
| `--navy-mid`      | `#0f1f38`  | Mid-tone navy accent |
| `--navy-light`    | `#1e3a5f`  | Lighter navy for borders on dark surfaces |
| `--forest`        | `#052e16`  | Impact / environmental section background |
| `--green`         | `#16a34a`  | Primary accent — CTAs, tags, checkmarks, borders |
| `--green-bright`  | `#22c55e`  | Bright green (mobile nav CTA link) |
| `--green-glow`    | `#4ade80`  | Light green for dark backgrounds (step chips, metrics) |
| `--green-pale`    | `#dcfce7`  | Light green fills (tag background, benefit hover) |
| `--green-border`  | `#bbf7d0`  | Light green border (compare good column, market retail) |
| `--amber`         | `#d97706`  | Patent status label color |
| `--amber-bright`  | `#f59e0b`  | Amber pulse dot, active timeline, claim 13–18 badge |
| `--red`           | `#dc2626`  | Compare "bad" column icon and list markers |
| `--red-pale`      | `#fee2e2`  | Compare "bad" column background fill |
| `--red-border`    | `#fecdd3`  | Compare "bad" column border |
| `--white`         | `#ffffff`  | Pure white |
| `--off-white`     | `#f8fafc`  | Gray section background, license card base |
| `--border`        | `#e2e8f0`  | Default light border |
| `--text`          | `#1e293b`  | Primary body text |
| `--text-light`    | `#64748b`  | Secondary / muted text |
| `--text-muted`    | `#94a3b8`  | Very muted — labels, captions |

### Other CSS Custom Properties

```css
--font-body:    'Inter', system-ui, -apple-system, sans-serif
--font-display: 'Space Grotesk', 'Inter', sans-serif
--nav-h: 68px          /* used by JS for smooth-scroll offset too */
--r-sm: 6px  --r-md: 12px  --r-lg: 20px  --r-xl: 28px  --r-pill: 9999px
--shadow-sm / --shadow-md / --shadow-lg
--ease: 0.2s ease
```

### Typography

- Display/headings: `Space Grotesk` (Google Fonts, weights 400–800)
- Body: `Inter` (Google Fonts, weights 300–900)
- Section title: `clamp(2rem, 4vw, 3rem)`, weight 800
- Hero headline: `clamp(3.5rem, 10vw, 8rem)`, weight 900

### Layout

- Container: `max-width: 1160px`, `padding: 0 2rem`
- Section padding: `7rem 0` (desktop), `5rem 0` (≤768px)

### Section Backgrounds

| Class             | Background        |
|-------------------|-------------------|
| `.section--white` | `--white`         |
| `.section--gray`  | `--off-white`     |
| `.section--dark`  | `--navy`          |
| `.section--forest`| `--forest`        |

---

## Responsive Breakpoints

| Breakpoint   | Changes |
|--------------|---------|
| `≤1024px`    | Benefits → 2-col; Metrics → 2-col; Patent grid → 1-col; Retail outcome → 2-col; Impact scale → 2-col |
| `≤768px`     | Desktop nav hidden, burger shown; sections 5rem padding; hero stats 2×2 grid; compare/benefits/markets → 1-col; steps → 1-col; retail arrows rotate 90°; license cards → 1-col; forms → 1-col; footer stacks |
| `≤480px`     | Metrics and retail outcome → 1-col |

---

## JavaScript Behaviour (js/main.js)

All code runs in an IIFE (`(function(){ 'use strict'; })()`). No dependencies.

1. **Sticky nav** — adds `.is-scrolled` to `#nav` after 40px scroll (blur backdrop, shadow)
2. **Mobile burger** — toggles `.is-open` on `#mobileNav` and `#burgerBtn`; closes on any `.mnav-link` click; updates `aria-expanded`
3. **Smooth scroll** — all `a[href^="#"]` scroll with `--nav-h` CSS variable offset (68px)
4. **Step reveal** — `IntersectionObserver` (threshold 0.15) adds `.is-visible` to `.step` elements with 160ms staggered delay; unobserves after trigger
5. **Counter animation** — `IntersectionObserver` (threshold 0.5) triggers cubic ease-out counter for `.metric .count[data-target]` elements; `data-target` attribute holds the final integer; runs over 2000ms
6. **Contact form** — client-side validation (red border on invalid `[required]` fields); success state on `#submitBtn`; auto-reset after 6 seconds; no backend submission

---

## Docs Directory

### `docs/zerowaste-unified-repository.json`

A JSON export of the full Zero Waste ecosystem data (schema version `ZW-REPO-SCHEMA-2026`), exported 2026-02-26.

**Top-level keys:**

| Key                     | Description |
|-------------------------|-------------|
| `repo_metadata`         | Schema version, export dates, totals (21 brands, 84 subnodes, 52,702 active nodes) |
| `zerowaste_ecosystem`   | All 21 brands: 20 system brands + `block_box_node` |
| `world_transactions`    | 24h transaction snapshot by brand and geographic region |
| `sector_insights`       | Deployment zones, security ratings, top brands by nodes, ecosystem health |
| `vault_network`         | 21 vault IDs, sync status |

**Block Box™ node** (`block_box_node`) contains the most detail:
- `patent_status` — all 18 claims, filing timeline, prior art result
- `technical_specifications` — bridge widths, EPS densities, cutting precision, etc.
- `economic_metrics` — cost comparisons, market sizes, projected licensing revenue
- `environmental_metrics` — waste reduction, CO₂ savings, global adoption projections
- `dual_market` — commercial and retail segment specs

This file is **reference data** — it is not loaded or consumed by `index.html`. It documents the ecosystem position of Block Box™ and provides the authoritative source for all numeric claims on the website.

---

## Development Workflows

### Viewing the site locally

```bash
# Any of these work — no build step needed:
open index.html                        # macOS
xdg-open index.html                    # Linux
python3 -m http.server 8080            # Python local server
npx serve .                            # Node serve (if available)
```

### Editing styles

Edit `css/style.css` directly. All custom properties are in `:root` at the top of the file.

### Editing content

All site content is in `index.html`. Section IDs and class names are documented above.

### No linting/build required

No tooling. Edit files and refresh the browser.

---

## Git Conventions

### Branch Naming

- Claude-managed branches: `claude/<description>-<session-id>`
- **Active branch:** `claude/claude-md-docs-1rko8`
- Never push to `main` without explicit permission from the inventor

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(site): add licensing section with three card types
fix(css): correct mobile nav overflow on small screens
docs: update CLAUDE.md with new section structure
chore: tidy CSS custom property naming
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `chore`

---

## Content Accuracy — Critical

This website describes a **patent-pending invention**. When editing content, preserve accuracy:

- **Priority date:** February 25, 2026 (must not be changed without inventor confirmation)
- **Claim count:** 18 claims (Claims 1–12 original, Claims 13–18 dual-market expansion)
- **Metrics:** 94% waste reduction, 50% carbon savings, 40–60% shipping savings — sourced from patent documentation
- **Market size:** $5B total ($2.5B commercial + $2.5B retail)
- **Bridge specs:** 12–20mm width, 2–5kg separation force, no tools required
- **Cost comparison:** Traditional $87/unit → Block Box™ $22/unit (75% reduction)
- **EPS densities:** 12–36 DV range, optimal 20–24 DV
- **Stacking load:** 500kg while shipping

Do NOT change numeric claims or patent-related statements without confirming with the inventor.

---

## Security & Confidentiality

- **Do not commit** `.env` files, credentials, API keys, or secrets
- The site includes a confidentiality notice in the contact section — this is intentional; do not remove it
- `<meta name="robots" content="noindex, nofollow">` is intentional — the site should not be indexed until the inventor decides otherwise
- Do not add analytics, tracking scripts, or third-party embeds without explicit instruction
- The footer `"Confidential — Not for public distribution"` label is intentional

---

## Planned Future Work

The following is not yet implemented but may be requested:

- Contact form backend (email notification on submission)
- `/licensing` detail page with full terms
- Technical specifications page (bridge formulas, density table, G-code examples)
- `README.md` for public-facing project overview
- Translations (potential: French, German, Turkish, Mandarin — key licensing markets)
- `robots.txt` and `sitemap.xml` when ready to go public

---

## Notes for AI Assistants

- **Read before editing.** Always read a file before modifying it.
- **Preserve content accuracy.** Patent claims, metrics, and dates are legally significant.
- **Minimal scope.** Only make changes directly requested or clearly necessary.
- **No frameworks.** The project is intentionally dependency-free. Do not add npm, bundlers, or frameworks unless explicitly asked.
- **Branch discipline.** Develop on `claude/claude-md-docs-1rko8`; never push to `main`.
- **Confirm before destructive actions.** Any change to patent-related content warrants a confirmation.
- **Don't modify `docs/zerowaste-unified-repository.json`** without explicit instruction — it is the authoritative source of record for the ecosystem.
- **Update this file** if you add new sections, change the tech stack, or add new scripts.
