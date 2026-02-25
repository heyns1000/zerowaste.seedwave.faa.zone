# CLAUDE.md — zerowaste.seedwave.faa.zone

This file provides guidance for AI assistants (Claude and others) working in this repository.

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
├── CLAUDE.md          # This file — AI assistant guide
├── index.html         # Single-page site (all sections)
├── css/
│   └── style.css      # All styles — CSS custom properties, responsive
└── js/
    └── main.js        # Nav scroll, mobile menu, counter animation, form UX
```

No build step. No package.json. No dependencies. Open `index.html` directly in a browser.

---

## Site Structure (index.html sections)

| Section ID        | Content |
|-------------------|---------|
| `#hero`           | Full-viewport hero — headline, stats bar, CTAs |
| `#problem`        | Industry problem — traditional vs Block Box™ comparison table |
| `#solution`       | Innovation overview — 6-benefit grid |
| `#how-it-works`   | 3-step process with animated reveal |
| `#markets`        | Dual-market platform (commercial + retail) |
| (retail section)  | Claim 15 retail point-of-sale method — 4-step flow + outcome stats |
| `#impact`         | Environmental metrics with counter animation |
| `#patent`         | 18 claims summary, patent details, filing timeline |
| `#licensing`      | 3 license card types (manufacturing, dual, retail) |
| `#contact`        | NDA-gated enquiry form |
| footer            | Links, patent pending notice, confidentiality notice |

---

## Design System

**Color palette (CSS custom properties in `style.css`):**
- `--navy` (#0a1628) — primary dark background
- `--forest` (#052e16) — impact/environmental section
- `--green` (#16a34a) — primary accent (CTAs, tags, checkmarks)
- `--green-glow` (#4ade80) — bright green for dark backgrounds
- `--amber-bright` (#f59e0b) — patent status / active timeline item
- `--white` / `--off-white` / `--border` — light section surfaces

**Typography:**
- Display/headings: `Space Grotesk` (Google Fonts)
- Body: `Inter` (Google Fonts)
- Heading scale: `clamp(2rem, 4vw, 3rem)` for section titles

**Spacing:** `7rem 0` section padding (desktop), `5rem 0` (mobile ≤768px)

---

## JavaScript Behaviour (js/main.js)

1. **Sticky nav** — adds `.is-scrolled` class after 40px scroll (blur backdrop)
2. **Mobile burger** — toggles `.is-open` on `#mobileNav` and `#burgerBtn`
3. **Smooth scroll** — all `a[href^="#"]` scroll with nav height offset
4. **Step reveal** — `IntersectionObserver` adds `.is-visible` to `.step` elements
5. **Counter animation** — cubic ease-out counters for `.metric .count` elements when scrolled into view
6. **Contact form** — client-side validation (highlights invalid fields), success state, auto-reset after 6s

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

Edit `css/style.css` directly. CSS custom properties are defined in `:root` at the top of the file.

### Editing content

All site content is in `index.html`. Section IDs and class names are documented above.

### No linting/build required

The project has no tooling. Just edit files and refresh the browser.

---

## Git Conventions

### Branch Naming

- Claude-managed branches: `claude/<description>-<session-id>`
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

Do NOT change numeric claims or patent-related statements without confirming with the inventor.

---

## Security & Confidentiality

- **Do not commit** `.env` files, credentials, API keys, or secrets
- The site includes a confidentiality notice — this is intentional; do not remove it
- `<meta name="robots" content="noindex, nofollow">` is intentional — the site should not be indexed until the inventor decides otherwise
- Do not add analytics, tracking scripts, or third-party embeds without explicit instruction

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
- **Branch discipline.** Develop on the designated `claude/` branch; never push to `main`.
- **Confirm before destructive actions.** Any change to patent-related content warrants a confirmation.
- **Update this file** if you add new sections, change the tech stack, or add new scripts.
