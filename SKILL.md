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

Drie diensten (live op aicollegas.nl/wat-we-doen/):

- **AI Agents** — `/wat-we-doen/ai-agents` — autonome AI-collega's die taken overnemen (bv. Tom voor Meta Ads)
- **AI Strategie** — `/wat-we-doen/ai-strategie` — advies + roadmap voor AI-implementatie binnen MKB
- **AI Partnership** — `/wat-we-doen/ai-partnership` — langetermijn partnership met begeleiding en doorontwikkeling

Daarnaast op intern materiaal (zoals zichtbaar in `assets/photos/groep/meeting-wat-wij-doen.jpg`) wordt soms het kader **AI inspireren / AI lezen / AI integreren** gehanteerd. *Bij externe communicatie altijd de live productnaamgeving aanhouden* (Agents / Strategie / Partnership), tenzij David expliciet anders aangeeft.

**AI Collega's HUB** — branded fysieke + digitale ontmoetingsplek in Apeldoorn (zichtbaar op `assets/photos/groep/pitch-hub.jpg`), gebruikt voor klant-onboarding en kennisdeling.

## Cases / klanten

Live op aicollegas.nl/cases:
- **Up Events**
- **Treepar**
- **FamilyGrass**

Gebruik deze namen voor social proof, testimonial-blocks en case-studies. Andere klanten alleen na expliciete toestemming.

## Team

10 personen op aicollegas.nl/team:

| Naam | Rol |
|---|---|
| Jacco | Sales Lead |
| Maarten | AI Strategy Lead |
| Lars | AI Developer |
| David | AI Implementatiespecialist |
| Marlie | Online Marketeer |
| Niels | AI Product Lead |
| Aaron | Business Development Representative |
| Kean | AI Automations |
| Remon | AI Trainer |
| Manuela | Digital Transformations |

## Site-architectuur (huidige aicollegas.nl)

```
/                            ← homepage
/wat-we-doen/ai-agents
/wat-we-doen/ai-strategie
/wat-we-doen/ai-partnership
/cases                       ← klant-overzicht
/cases/up-events
/cases/treepar
/cases/familygrass
/team                        ← 10 teamleden
/vacatures
/contact                     ← "Kennismaken"
/privacy-policy
/algemene-voorwaarden
```

Hoofdmenu (live): *Wat we doen · Cases · Aanpak · Ons team · Vacatures · Kennismaken*

## Visuele basis

### Kleuren (tokens in `tokens.json`)

**Brand-gradient (signature):**
- `--brand-orange: #f97316`
- `--brand-red: #ef4444`
- `--brand-pink: #ec4899`

**Wanneer gradient, wanneer mono-oranje:**

| Gebruik | Kleurkeuze |
|---|---|
| Logo (de "Collega's"-pill) | Gradient `#f97316 → #ef4444 → #ec4899` |
| Hero-elementen op landingspages | Gradient |
| Signature CTA op web | Gradient pill-button |
| Body-UI / kleine accenten / focus rings | Mono `--orange-500` |
| **Meta-ads** (alle social ad formats) | **Mono `--orange-500` op 1 woord** — geen gradient |
| Badge-dots, check-icons | Mono oranje of `--neutral-950` |

Vuistregel: gradient = "wow"-momenten (hero, logo). Mono-oranje = body UI en alles wat klein/druk renders.

Neutralen:
- Zwart `#000000` voor body-tekst en .NL-suffix
- Wit `#ffffff` voor tekst op gradient-rects
- Grijs-schaal voor secundair (zie `tokens.json`)

### Typografie

- **Primary:** `Inter, 'Inter Fallback', system-ui, sans-serif` — alle headings + body
- **Mono:** `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace` — voor *stats*, cijfers, stap-nummers, code
- Laden via Google Fonts: `Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700`
- **Fallback** voor e-mail/oudere clients: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Logo-pattern:** "AI" (gradient, bold 80px) + "Collega's" (wit op gradient-rect, bold 60px) + ".NL" (zwart, bold 80px)
- **Stats:** JetBrains Mono 700, tracking-tighter, voor cijfers in hero / process-steps

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
- Geen Engelstalige knoppen ("Click here") — gebruik "Lees meer", "Plan kennismaking", "Kennismaken"
- Werkfruit en n8n zijn productnamen — niet vertalen
- AI Collega's met apostrof — niet "AI Collegas" of "AI-collega's"

### Echte koppen van aicollegas.nl (toon-kalibratie)

Gebruik deze zinnen als voorbeeld voor lengte, ritme, woordkeuze:

> "Een nieuwe collega. Voor een fractie van de kosten."
> "Slimmer werken, minder fouten, meer tijd voor wat écht belangrijk is."
> "Vertrouwd door [N]+ organisaties"
> "AI Collega's in de praktijk"
> "Beschikbaarheid — Jouw AI Collega werkt altijd door"

Patronen:
- **Korte hoofdzin + uitwerking** — eerst statement, dan voordeel
- **Concrete voordelen, geen abstracties** — "minder fouten" beats "verbeterde nauwkeurigheid"
- **"Jouw AI Collega"** als anthropomorfisering — werkt voor eindgebruiker
- **Komma's > aaneengeschakelde lijstjes** — "Slimmer werken, minder fouten, meer tijd"

CTA's die op de site werken: *Kennismaken*, *Plan een kennismaking*, *Bekijk cases*, *Lees meer*

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
