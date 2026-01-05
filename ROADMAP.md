# ROADMAP — Portfolio Rework 2.0 (Clean Architecture)

## Syfte
Bygga om koden till en strikt, logisk och lättunderhållen struktur utan att tappa det visuella resultatet.
Målet är att varje ändring ska kännas förutsägbar: “jag vet var den hör hemma”.

---

## Icke-förhandlingsbara regler (policys)
### 1) Single Source of Truth
- **Container**: all centrerad layout + sidpadding görs via `<Container />` (ingen manuell `.container` i markup).
- **Section spacing**: all vertikal rytm görs via ett **Section-system** (ingen global `.section`-padding och inga kompensationsmargins).
- **Buttons**: en implementation (primitive).
- **Cards**: en implementation (primitive).

### 2) Layering (var saker hör hemma)
- **Foundation** (`styles/`): tokens/theme/global = bas. Inte layout-system.
- **Primitives** (`components/primitives/`): byggstenar (Container/Section/Button/Card).
- **Shell** (`components/shell/`): sidram (Header/Footer).
- **Sections** (`components/sections/`): sidblock (Hero/Projects/Contact).
- **Data** (`data/`): innehåll/modell (projects.ts).

### 3) Merge i etapper
Varje etapp ska:
- vara liten nog att reviewa
- inte ändra UI märkbart
- kunna mergas till `main` direkt

---

## Definition of Done (Rework 2.0)
Rework är klar när detta är sant:
- `global.css` innehåller **ingen** `.container` eller `.section`
- inga JSX/TSX använder `className="container"` manuellt
- section-spacing styrs av Section-system (tight/normal/loose)
- Hero använder Button-primitive (ingen hero-cta-implementation i hero.css)
- Projects använder Card-primitive (ingen card-shell i projects.css)
- theme.css är rollbaserad (inga header/footer/cta-tokens centralt)
- mappstruktur speglar layering (primitives/shell/sections)

---

## Nuvarande problem vi löser (kärnknutar)
1) Layout-policy ligger i `global.css` (`.container`, `.section`) → tvingar fram lokala hacks.
2) Shell och sections använder olika patterns → inkonsekvent och mentalt dyrt.
3) Primitives byggs inne i sections (Button/Card) → duplication och växande röra.
4) Theme läcker komponentdetaljer → theme blir “komponentregister” istället för roller.

---

## Target struktur (målbild efter rework)
app/
  layout.tsx
  page.tsx

styles/
  tokens.css
  theme.css
  global.css

components/
  primitives/
    Container/
    Section/
    Button/
    Card/
  shell/
    Header/
    Footer/
  sections/
    Hero/
    Projects/
    Contact/
  icons/

data/
  projects.ts

---

# Etapper (mergebara)

## Etapp 0 — Setup & regression-säkring
**Branch:** `chore/rework-setup`
- [ ] Ta screenshots: Hero, Projects, Footer (desktop + mobil)
- [ ] Bestäm: Section-lösning = **Section-primitive** (rekommenderat)
- [ ] Bestäm: CSS-strategi:
  - Global = reset/base
  - Primitives kan använda CSS Modules (valfritt)
- [ ] Skapa rutin: varje etapp = 1–2 commits max

**DoD:**
- [ ] UI oförändrat
- [ ] Allt bygger

---

## Etapp 1 — Correctness: Anchors & IDs
**Branch:** `chore/anchors`
- [ ] Endast Contact-sektionen har `id="contact"`
- [ ] Footer får `id="footer"` eller inget id
- [ ] `id="top"` finns exakt en gång

**DoD:**
- [ ] Nav scrollar rätt varje gång
- [ ] Inga duplicerade IDs i DOM
- [ ] UI oförändrat

---

## Etapp 2 — Container: gör den till en riktig primitive
**Branch:** `refactor/container-primitive`

### Steg
- [ ] Header och Footer använder `<Container />` (ingen manuell `.container`)
- [ ] Flytta `.container`-CSS från `global.css` till Container-primtiven
- [ ] Byt klassnamn till intern variant (t.ex. `.l-container`) för att undvika manuell användning
- [ ] Ta bort `.container` från `global.css`

**Kontroller:**
- [ ] Sök: `className="container"` → 0 träffar
- [ ] `global.css` innehåller ingen `.container`
- [ ] UI identiskt

---

## Etapp 3 — Section System: vertikal rytm utan hacks (största trasselknuten)
**Branch:** `refactor/section-system`

### Steg
- [ ] Skapa Section-primitive med density:
  - `tight | normal | loose`
- [ ] Migrera:
  - Hero → `loose`
  - Projects → `normal`
  - Contact → `tight` eller `normal`
- [ ] Ta bort global `.section { padding-block: 126px }` från `global.css`
- [ ] Ta bort kompensationslayout (t.ex. Projects `margin-bottom: 200px`)

**DoD:**
- [ ] `global.css` innehåller ingen `.section`
- [ ] Inga kompensationsmargins för layout-rytm
- [ ] UI identiskt (eller tydligare, men inte “annorlunda”)

---

## Etapp 4 — Button Primitive: en CTA-implementation
**Branch:** `refactor/button-primitive`
- [ ] Skapa Button-primitive (länk/knapp)
- [ ] Flytta hero-cta styling från Hero till Button
- [ ] Hero använder Button
- [ ] Contact använder Button (när den byggs ut)

**DoD:**
- [ ] `.hero-cta` finns inte som implementation längre
- [ ] Hover/focus/padding konsekvent
- [ ] UI identiskt

---

## Etapp 5 — Card Primitive: en card-implementation
**Branch:** `refactor/card-primitive`
- [ ] Skapa Card-primitive (shell: border/radius/bg/hover/focus)
- [ ] Flytta project-card shell från `.project` till Card
- [ ] Projects CSS blir “content-only”
- [ ] Contact-panel använder Card (om relevant)

**DoD:**
- [ ] Card-look styrs från ett ställe
- [ ] Projects CSS är enklare och tydligare
- [ ] UI identiskt

---

## Etapp 6 — Foundation cleanup: theme/tokens/global blir “dumma och rena”
**Branch:** `refactor/foundation-cleanup`

### Steg
- [ ] theme.css = roller only:
  - bg, surface-1/2, text, text-muted/strong, border, accent, focus
- [ ] Flytta bort komponenttokens ur theme:
  - `--header-*`, `--footer-*`, `--cta-*`
- [ ] global.css = reset + base only (ingen layout-policy)
- [ ] Tokens hålls minimala och konsekventa (undvik “mellanmjölk-läge”)

**DoD:**
- [ ] theme.css kan läsas på 30 sekunder
- [ ] global.css är kort och okomplicerad
- [ ] UI identiskt

---

## Etapp 7 — Mappstruktur: spegla arkitekturen (görs först när primitives sitter)
**Branch:** `refactor/folder-structure`

### Steg
- [ ] Flytta `components/layout/Container.tsx` → `components/primitives/Container/`
- [ ] Flytta Header/Footer → `components/shell/`
- [ ] Uppdatera imports (ingen funktionsändring)
- [ ] (Valfritt) Skapa folder per shell-komponent:
  - `Header/Header.tsx + header.css`
  - `Footer/Footer.tsx + footer.css`

**DoD:**
- [ ] Imports uppdaterade
- [ ] Ingen UI-ändring
- [ ] Trädet matchar layering-modellen

---

## Etapp 8 — Consistency pass (slutpolish, aldrig tidigare)
**Branch:** `chore/consistency-pass`
- [ ] En focus-policy (global + primitives, inga ad hoc varianter)
- [ ] Standardisera micro-values:
  - antingen via tokens
  - eller via primitives (preferred)
- [ ] Rensa dubletter, döda kommenterade “todo tokens”
- [ ] Dead code / unused CSS

**DoD:**
- [ ] Inga överraskningar i CSS
- [ ] Allt känns “systematiskt”

---

# Regression Checklist (görs innan varje merge)
- [ ] Desktop: Hero/Projects/Contact/Footer ser identiskt ut
- [ ] Mobile: Footer layout och nav känns korrekt
- [ ] Anchors: `#top`, `#projects`, `#contact` fungerar
- [ ] Keyboard: Tab fungerar, focus syns tydligt

---

# Git-rutin (rekommenderad)
För varje etapp:
1) Skapa branch från `main`
2) Gör etappen (håll scope tight)
3) Merge till `main`
4) Nästa etapp startar från uppdaterad `main`

Commitregel:
- En etapp = 1–2 commits max
- Prefix:
  - `chore:` (städ/struktur utan funktionell ändring)
  - `refactor:` (arkitektur/omflytt utan UI-ändring)
