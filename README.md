# Portfolio Rework (System-first)

## Purpose
This rework variant is designed to achieve the same kind of result as the prototype (calm, consistent, “mature” UI) by building a **small UI system first** — instead of styling each section (Hero/Projects/Footer) independently.

Goals:
- **Consistency:** one spacing rhythm, one palette, one “feel” across the entire site
- **Easy global changes:** adjust the look by changing a handful of tokens
- **Low maintenance:** sections compose the system; they do not invent their own styling rules

---

## Core Rules (Non-negotiables)
1. **All CSS is wired through `app/globals.css`** (no CSS imports inside components).
2. **Tokens own design decisions** (colors, typography, spacing scale, radii).
3. **Primitives own layout/patterns** (container, section, grid, card, tag, text utilities).
4. **Sections are composition** (Hero/Projects/Footer assemble primitives; minimal “unique styling”).
5. **Content is data** (profile + projects live outside the UI code).

---

## Project Tree (Current / Baseline)
This is the minimal, stable system-first baseline.

```txt
.
├── app/
│   ├── globals.css       # only CSS entrypoint (imports reset/tokens/primitives)
│   ├── layout.tsx        # global shell + metadata (neutral, no section styling)
│   └── page.tsx          # composes sections (render order)
│
├── styles/
│   ├── reset.css         # technical baseline (predictable browser behavior)
│   ├── tokens.css        # design values (palette/type/spacing/radius)
│   └── primitives.css    # reusable UI building blocks (container/grid/card/tag/text)
│
├── components/
│   ├── ui/               # thin React wrappers mapping to primitives
│   │   └── Container.tsx # wrapper for `.container`
│   └── sections/         # page sections (composition)
│       └── Projects.tsx  # first section (proves the system works)
│
├── content/
│   └── projects.ts       # project data (title/desc/tags/link)
│
└── public/
    ├── icons/            # static icons (github/linkedin)
    └── images/           # static images (portrait/avatar)

---

.
├── app/
│   ├── globals.css        # imports: reset → tokens → primitives
│   ├── layout.tsx         # metadata, html/body, global shell
│   ├── page.tsx           # <Header/><Hero/><Projects/><Footer/>
│   ├── not-found.tsx      # optional: clean 404
│   ├── sitemap.ts         # optional: SEO-friendly sitemap
│   └── robots.ts          # optional: robots configuration
│
├── styles/
│   ├── reset.css          # technical baseline only (no “design feel”)
│   ├── tokens.css         # single source of truth: palette/type/spacing/radii
│   ├── primitives.css     # container/section/stack/grid/card/tag/text/link
│   └── utilities.css      # optional: tiny one-offs (rare, still global)
│
├── components/
│   ├── ui/
│   │   ├── Container.tsx  # `.container` wrapper
│   │   ├── Card.tsx       # consistent surface wrapper (maps to `.card`)
│   │   ├── Tag.tsx        # tech tag primitive
│   │   └── Button.tsx     # calm CTA primitive (or just use <a>)
│   │
│   └── sections/
│       ├── Header.tsx     # top nav (logo/name + anchor links)
│       ├── Hero.tsx       # intro (text + portrait)
│       ├── Projects.tsx   # project grid (cards + tags + links)
│       └── Footer.tsx     # contact/social links
│
├── content/
│   ├── profile.ts         # name/title/intro + social links
│   └── projects.ts        # project list
│
├── public/
│   ├── icons/
│   │   ├── github.svg
│   │   └── linkedin.svg
│   └── images/
│       ├── avatar.png     # portrait used in Hero
│       └── og.png         # optional: OpenGraph preview image
│
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
