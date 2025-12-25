# Project Layout – Architecture Overview

This document describes the foundational layout architecture for the portfolio.
The goal is structural clarity, consistency, and long-term maintainability.
No visual styling decisions are embedded here.

---

## Root
```
.
├── app/
│   ├── favicon.ico
│   ├── layout.tsx          # Applikationsram (Header, Footer, <main>)
│   └── page.tsx            # Sidans sektion-ordning
│
├── components/
│   ├── layout/             # Layout-primitiver (struktur, ej innehåll)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   │
│   ├── sections/           # Sidsektioner (innehåll)
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Tech.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   │
│   ├── ui/                 # Återanvändbara UI-komponenter
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   └── Avatar.tsx
│   │
│   └── icons/              # SVG / ikon-komponenter
│       ├── GitHubIcon.tsx
│       └── LinkedInIcon.tsx
│
├── data/                   # Statisk data (ingen presentation)
│   └── projects.ts
│
├── styles/                 # Visuellt system (separerat från JSX)
│   ├── tokens.css          # Färger, spacing, typografi (CSS variables)
│   ├── theme.css           # Theme overrides (dark/light, senare)
│   ├── global.css         # Extra global styling (valfri)
│   │
│   └── ui/                 # UI-specifik styling
│       ├── card.css
│       └── button.css
│
├── docs/                   # Dokumentation
│   ├── ARCHITECTURE.md     # Layout-blueprint (det dokument vi just skrev)
│   ├── SECTION_API.md      # (framtida) Section-variants, density
│   └── prototypes/         # Designreferenser / mockups
│       ├── 1.png
│       ├── 2.png
│       └── ...
│
├── public/
│   ├── fonts/
│   │   └── space-grotesk/
│   ├── images/
│   │   └── avatar.png
│   └── icons/
│       ├── github.svg
│       └── linkedin.svg
│
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
```
---

## app/

### layout.tsx
**Purpose:** Application shell  
**Responsibilities:**
- Defines the global HTML/body structure
- Renders persistent layout elements (Header, Footer)
- Wraps all pages

**Rules:**
- No page-specific layout logic
- No spacing or visual decisions
- No section components rendered here

---

### page.tsx
**Purpose:** Page composition  
**Responsibilities:**
- Defines the vertical order of sections
- Acts as a declarative outline of the page

**Rules:**
- No styling
- No layout primitives (no Container/Section logic)
- Only imports section components

---

### globals.css
**Purpose:** Global baseline styles  
**Responsibilities:**
- Box sizing
- Default body background and text color
- Font-family definition

**Rules:**
- No gradients, shadows, or effects
- No layout spacing logic
- Only global resets and tokens

---

## components/layout/

### Container.tsx
**Purpose:** Horizontal layout control  
**Responsibilities:**
- max-width
- horizontal padding
- content centering

**Mental model:**
> Defines the readable width of the site.

**Rules:**
- All visible content must be wrapped in a Container
- No vertical spacing handled here

---

### Section.tsx
**Purpose:** Vertical rhythm and separation  
**Responsibilities:**
- Vertical padding
- Section-level background (optional, later)
- Visual separation between major content blocks

**Mental model:**
> Each Section represents a “scene” on the page.

**Rules:**
- Every major page block must be a Section
- Section contains exactly one Container

---

### Header.tsx
**Purpose:** Global navigation  
**Responsibilities:**
- Logo / identity
- Navigation links
- Persistent positioning

**Rules:**
- No page-specific logic
- No assumptions about page content

---

### Footer.tsx
**Purpose:** Global footer  
**Responsibilities:**
- Copyright
- Secondary navigation / social links

---

## components/sections/

Each section follows the same internal structure.

### General pattern
```tsx
<Section>
  <Container>
    {/* section-specific content */}
  </Container>
</Section>
