---
name: ai-collegas-design-system
description: AI Collega's design system — gebruik deze conventies voor alle visuele content (web, landingspages, ads, slides, e-mails)
---

# AI Collega's — Design Skill

Gebruik dit skill-bestand bij het maken van *elke* visuele output voor AI Collega's.

## Identiteit

- **Bedrijf:** AI Collega's (aicollegas.nl), Apeldoorn
- **Doelgroep:** Nederlandse MKB-bedrijven en freelancers, met name recruiters en HR-professionals
- **Toon:** informeel (je/jij), bondig, geen marketing-fluff, geen Engelstalige termen waar Nederlands kan
- **Positionering:** "Enige Nederlandse AI agent partij voor MKB" — alle concurrenten zijn internationale Engelstalige SaaS

## Productlijn

Drie pijlers (zichtbaar op kantoor-presentatie):
- **AI inspireren** — bewustwording, workshops, eerste contact
- **AI lezen** — content-, document- en data-analyse
- **AI integreren** — agents en workflows in productie

Daarnaast: **AI Collega's HUB** — fysieke + digitale plek voor klanten in Apeldoorn (zichtbaar op `assets/photos/groep/pitch-hub.jpg`).

## Visuele basis

### Kleuren (tokens in `tokens.json`)

Brand-gradient (signature):
- `--brand-orange: #f97316`
- `--brand-red: #ef4444`
- `--brand-pink: #ec4899`

Gebruik in: tekst-accent (AI), achtergrond rounded buttons, hero-elementen.
Niet voor: body-tekst, body-backgrounds.

Neutralen:
- Zwart `#000000` voor body-tekst en .NL-suffix
- Wit `#ffffff` voor tekst op gradient-rects
- Grijs-schaal voor secundair (zie `tokens.json`)

### Typografie

- **Font-stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Logo-pattern:** "AI" (gradient, bold 80px) + "Collega's" (wit op gradient-rect, bold 60px) + ".NL" (zwart, bold 80px)
- Geen custom webfonts — system-ui is de standaard

### Spacing & radii

- Spacing: 4px base scale (4, 8, 16, 24, 32, 48, 64)
- Radii: `sm: 4px, md: 8px, lg: 16px, xl: 50px (pill)` — pills voor CTAs en gradient-elementen

## Components

Gebruik shadcn/ui als basis. Onze layers:
- `ui/` — onaangeraakt shadcn (knoppen, inputs, dialog, etc.)
- `primitives/` — onze styling-aanpassingen op shadcn (kleuren, radii)
- `blocks/` — herbruikbare AI Collega's-patronen:
  - `VacatureKaart` — kandidaat-profielcard met match-score
  - `AtsTabel` — recruiter-overzicht
  - `WerkfruitCTA` — call-to-action richting Werkfruit (workerplatform)
  - `AgentBlok` — uitleg-card per AI-agent
  - `HeroGradient` — landingspage-hero met brand-gradient

## Schrijf-conventies

- Nederlands, informeel maar zakelijk
- Geen Engelstalige knoppen ("Click here") — gebruik "Lees meer", "Plan kennismaking"
- Werkfruit en n8n zijn productnamen — niet vertalen
- AI Collega's met apostrof — niet "AI Collegas" of "AI-collega's"

## Output-formats

| Doel | Formaat | Eenheden |
|---|---|---|
| Landingspage | HTML/React + Tailwind | rem voor type, px voor borders |
| E-mail | HTML inline-CSS | px overal (e-mail-clients) |
| Ads (Meta) | 1080×1080 of 1200×628 PNG | px |
| Slide | 1920×1080 PPTX/HTML | px |
| Social | 1080×1350 (Insta) of 1200×675 (LinkedIn) | px |

## Voorbeeld-prompts

> "Maak een hero voor de landingspage van Tom (Meta Ads agent)"
→ Gradient-tekst "Tom" + ondertitel "Jouw Meta Ads collega" + WerkfruitCTA-block

> "Schrijf een e-mail voor recruiters over close-rate analyse"
→ Wit, system-ui, oranje accent, max 300 woorden, geen marketing-praat

## Fotografie

De foto-set in `assets/photos/` is dé bron voor visuele content. Stijl is consistent en matcht het brand-licht.

### Wat de foto's gemeen hebben (gebruik dit voor nieuwe shoots)

- **Licht:** natuurlijk warm, oranje-gele spots, donkere accenten — geen flits, geen wit kantoor
- **Setting:** AI Collega's HQ Apeldoorn — donkere wanden, hout, leer, glas, plant-accenten
- **Mensen:** echte momenten (sparring, werken, overleg). Geen gestaged glimlach. Geen handgeschudde clichés.
- **Compositie:** ruim — vaak ruimte voor tekst-overlay rechts of bovenaan

### Wanneer welke categorie

| Categorie | Map | Wanneer |
|---|---|---|
| Groep / pitch | `groep/` | Hero homepage, "Over ons" — beste brand-statement |
| Samenwerking | `samenwerking/` | "Zo werken we", klant-onboarding, proces |
| Werkplek | `werkplek/` | Sfeer-secties, technologie-content, anonieme overlays |
| Portret | `portret/` | B2B-content, "professional"-context |

### Standaard rendering

- `border-radius: var(--radius-lg)` (16px) op elke foto
- `object-fit: cover` met expliciete aspect ratio
- Voor hero-overlays: `linear-gradient(180deg, transparent → rgba(0,0,0,0.85))` van boven naar onder

### Wat niet doen met foto's

- Geen filters die de warme tinten naar koel trekken
- Geen "knock-out" effects (mens uitknippen op witte achtergrond)
- Geen forced croppings die de natuurlijke compositie breken
- Geen brand-gradient *óver* gezichten — alleen op decorelementen of donkere zones

## Wat niet doen

- Geen blauwe corporate-tinten (concurrenten doen dat al)
- Geen stockfoto's van mensen achter laptops — gebruik onze eigen set
- Geen Engelstalige headlines
- Geen complexe gradients buiten de brand-3 kleuren
- Geen gecondenseerde of serif-fonts
