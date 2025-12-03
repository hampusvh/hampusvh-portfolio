# Designmanual & Blueprint – Next.js Portfolio  
## Av: Hampus von Horn

Denna designmanual är en riktning, principplattform och långsiktig blueprint för hur din portfolio ska struktureras, utvecklas och skalas upp i Next.js.  
Filen är avsedd att ligga i `docs/designmanual.md`.

---

# 1. Grundfilosofi

Projektet bygger på tre kärnprinciper:

1. **Tydlighet**  
   Koden ska vara läsbar, enkel att följa och självförklarande.

2. **Enkelhet före komplexitet**  
   Du bygger hellre ett smart system än mycket kod.

3. **Återanvändbara mönster**  
   Typografi, färger, spacing och layout styrs via tokens och roller.

---

# 2. Övergripande arkitektur

```
project-root/
  app/
  components/
    sections/
    ui/
  styles/
    tokens.css
    theme.css
    global.css
  public/
  docs/
```

## 2.1 app/
- Innehåller routing, sidor och layout.
- `layout.tsx` är globalt skal.
- `page.tsx` är startsidan (portfolion).

## 2.2 components/
**sections/**: större sidomoduler (Hero, Projects, Stack)  
**ui/**: små snabba byggdelar (Button, Card, Container)

## 2.3 styles/
- tokens.css → råvärden  
- theme.css → roller  
- global.css → reset, baslayout, ambient glow

---

# 3. Ditt designsystem

## 3.1 Typografi

En enkel och skalbar struktur med 3–4 nivåer:

| Token | Användning |  
|--------|------------|  
| `--font-size-xl` | Huvudrubrik (Hero) |  
| `--font-size-lg` | Sektionstitlar |  
| `--font-size-md` | Brödtext |  
| `--font-size-sm` | Små texter |  

Färger styrs via HSL i dina tokens.

## 3.2 Färger

Basen bygger på:

- Mörka bakgrunder  
- Ljus text  
- Accent i grönt/turkos (din signatur)  

Tokens:

```
--color-background-900
--color-background-800
--color-background-700

--color-text-strong
--color-text-main
--color-text-muted

--color-accent-primary
```

Theme remappar dessa till roller:

```
--bg-page
--bg-section
--text-strong
--text-main
--accent
```

## 3.3 Layout

Standardiserade klasser:

```
.section {
  padding-block: var(--space-section);
}

.section-inner {
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: 1.25rem;
}
```

---

# 4. Projektets byggfaser (framtidsblick)

## Fas 1 – Struktur & skelett
- Rensa boilerplate  
- Skapa mappar och layout  
- Lägg in tom HeroSection

## Fas 2 – Designsystemet
- Bygg tokens.css med färger, spacing och textskalor  
- Bygg theme.css med roller  
- Koppla global.css för ambient glow och body-beteende

## Fas 3 – Sektionerna
- Hero  
- Projects  
- Stack  
- Footer  

Fokus: markup först, stil senare.

## Fas 4 – UI-komponenter
- Button  
- Card  
- Container  

Dessa gör styling snabbare och mer konsekvent.

## Fas 5 – Polish
- transitions  
- micro-interactions  
- hover states  
- skuggor  
- förbättrad spacing  
- layoutjusteringar  
- ikoner

## Fas 6 – Utökning
- /projects  
- /about  
- metadata per sida  
- SEO  
- framer-motion animationer

---

# 5. Designprinciper

## 5.1 Minimalism
Ta bort allt som inte behövs.  
Små filer, tydlig struktur.

## 5.2 Konsistens
Samma skalor för spacing, text och färg.

## 5.3 Separation of concerns
- tokens = råvärden  
- theme = roller  
- global = layout och basstil  
- sektioner = markup  
- ui = återanvändbara byggdelar

## 5.4 Stabilitet före kreativitet
Först bygga funktion.  
Sedan göra snyggt.

---

# 6. Hur manualen används

- Läs när du påbörjar en ny sektion  
- Följ principerna när du bygger komponenter  
- Använd tokens/theme tidigt så design förblir konsekvent  
- Tänk: markup → struktur → design → polish  

Denna manual ska vara en kompass, inte en teknisk guide.

---

# Slutord

Portfolion är en chans att visa:

- struktur  
- tänk  
- design  
- disciplin  
- skärpa  

Detta dokument hjälper dig att hålla en tydlig riktning genom hela projektets livstid.
