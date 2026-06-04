---
name: ai-collegas-design-system
description: AI Collega's design system 2.0 — mono-first met optionele gradient. Gebruik deze conventies voor alle visuele content (web, landingspages, ads, slides, e-mails, social).
---

# AI Collega's — Design Skill (2.0)

Gebruik dit skill-bestand bij het maken van *elke* visuele output voor AI Collega's.

> **Wat is nieuw in 2.0 (mei 2026):**
> - Logo is *mono-oranje* — geen gradient meer in het logo zelf
> - Inter is de officiële font in alle SVG-logo's (was system-fonts)
> - Mono-oranje (`#f97316`) is nu de *default* brand-kleur; gradient blijft beschikbaar maar alleen voor optionele "wow"-momenten op web/landing
> - Nieuwe fotoshoot HUB Apeldoorn (28 mei 2026, 131 foto's) — categorieën `groep/`, `samenwerking/`, `werkplek/`, `portret/`, `presentatie/`
> - Nieuw: `assets/banners/` met LinkedIn-banners (personal + company)
> - Oude gradient-logo's staan in `assets/logo/legacy/` — niet meer gebruiken voor nieuwe productie

## Identiteit

- **Bedrijf:** AI Collega's (aicollegas.nl), Apeldoorn
- **Doelgroep:** Nederlandse MKB-bedrijven en freelancers, met name recruiters en HR-professionals
- **Toon:** informeel (je/jij), bondig, geen marketing-fluff, geen Engelstalige termen waar Nederlands kan
- **Positionering:** "Enige Nederlandse AI agent partij voor MKB" — alle concurrenten zijn internationale Engelstalige SaaS
- **Brand-claim:** "Jouw partner in AI Collega's." (zie banners)

## Productlijn

Drie diensten (live op aicollegas.nl/wat-we-doen/):

- **AI Agents** — `/wat-we-doen/ai-agents` — autonome AI-collega's die taken overnemen (bv. Tom voor Meta Ads)
- **AI Strategie** — `/wat-we-doen/ai-strategie` — advies + roadmap voor AI-implementatie binnen MKB
- **AI Partnership** — `/wat-we-doen/ai-partnership` — langetermijn partnership met begeleiding en doorontwikkeling

Daarnaast wordt op intern materiaal soms het kader **AI inspireren / AI lezen / AI integreren** gehanteerd. *Bij externe communicatie altijd de live productnaamgeving aanhouden* (Agents / Strategie / Partnership), tenzij David expliciet anders aangeeft.

**AI Collega's HUB** — branded fysieke + digitale ontmoetingsplek in Apeldoorn (zichtbaar in de hele `assets/photos/` set), gebruikt voor klant-onboarding, trainingen en kennisdeling.

## Cases / klanten

Live op aicollegas.nl/cases:
- **Up Events**
- **Treepar**
- **FamilyGrass**

Vaste social-proof rij ("Vertrouwd door") op LinkedIn-banner: Gemeente Amsterdam · nxtoffice · proud experts · herku · up · effectgroep. Andere klanten alleen na expliciete toestemming.

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

## Visuele basis (2.0)

### Kleuren (tokens in `tokens.json`)

**Primair (mono-first):**
- `--brand-orange: #f97316` — *de* brand-kleur, gebruikt voor logo, accenten, ads, badges, CTAs
- `--brand-orange-hover: #ea580c` — hover-state

**Optionele gradient (alleen voor web/hero/wow):**
- `--brand-red: #ef4444`
- `--brand-pink: #ec4899`
- `--gradient-brand-3: #f97316 → #ef4444 → #ec4899` — alleen voor signature hero-elementen op landingspages

### Wanneer mono, wanneer gradient

| Gebruik | Kleurkeuze |
|---|---|
| Logo (alle varianten) | **Mono `#f97316`** — nooit gradient |
| Meta-ads (alle social ad formats) | **Mono `#f97316`** op 1 woord |
| LinkedIn-banner accenten | **Mono `#f97316`** |
| Body-UI / kleine accenten / focus rings | **Mono `#f97316`** |
| Badge-dots, check-icons | **Mono `#f97316`** of `#000000` |
| Hero op landingspage | Mono *of* gradient — designerkeuze, gradient mag |
| Signature CTA op web | Mono pill *of* gradient pill — gradient OK voor hero-CTA |

**Vuistregel 2.0:** mono is default. Gradient alleen waar je echt "wow" wilt op web/landing — en dan spaarzaam (max 1 gradient-element per scherm).

### Neutralen

- Zwart `#0a0a0a` voor body-tekst en `.NL`-suffix op lichte achtergrond (in nieuwe SVG's)
- Wit `#ffffff` voor tekst op oranje pill en `.NL`-suffix op donkere achtergrond
- Grijs-schaal voor secundair (zie `tokens.json`)

### Typografie

- **Primary:** `Inter, 'Inter Fallback', system-ui, sans-serif` — alle headings, body, *en logo-SVG's*
- **Mono:** `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace` — voor *stats*, cijfers, stap-nummers, code
- Laden via Google Fonts: `Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700`
- **Fallback** voor e-mail/oudere clients: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Stats:** JetBrains Mono 700, tracking-tighter, voor cijfers in hero / process-steps

### Logo-anatomie (v2)

```
[ AI ]   [ Collega's ]   [ .NL ]
oranje    wit op oranje   zwart of wit
```

- **Default canvas SVG:** `viewBox 0 0 182 34` — kleine, schalende vector
- **Verhouding:** AI 30px-equivalent, Collega's pill 28px hoog op `rx=14`, .NL 24px-equivalent
- **PNG-bron-canvas:** 936×304 (3:1 voor schaling tot kleine formaten)
- **Letter-spacing:** `-0.025em` op AI en .NL voor strakke type
- **Apostrof-vorm:** "Collega's" — *altijd* met rechte apostrof

### Logo-bestanden

| Bestand | Wanneer |
|---|---|
| `assets/logo/logo-default.svg` | Lichte achtergrond, .NL zwart — *standaard keuze* |
| `assets/logo/logo-on-dark.svg` | Donkere achtergrond, .NL wit |
| `assets/logo/logo-default.png` | Wanneer SVG niet kan (e-mail-clients, social) — 936×304 |
| `assets/logo/logo-mark.png` | Compacte variant *zonder .NL* — universeel inzetbaar op licht én donker (oranje pill is leesbaar tegen beide). Ook voor favicons, square avatars, narrow placements. |
| `assets/logo/legacy/*` | Oude gradient-logo's — *niet meer gebruiken* in nieuwe productie |

### Spacing & radii

- Spacing: 4px base scale (4, 8, 16, 24, 32, 48, 64)
- Radii: `sm: 4px, md: 8px, lg: 16px, xl: 24px, pill: 9999px` — pills voor CTAs en oranje-elementen

## Components

Gebruik shadcn/ui als basis. Onze layers:
- `ui/` — onaangeraakt shadcn (knoppen, inputs, dialog, etc.)
- `primitives/` — onze styling-aanpassingen op shadcn (kleuren, radii)
- `blocks/` — herbruikbare AI Collega's-patronen:
  - `VacatureKaart` — kandidaat-profielcard met match-score
  - `AtsTabel` — recruiter-overzicht
  - `WerkfruitCTA` — call-to-action richting Werkfruit (workerplatform)
  - `AgentBlok` — uitleg-card per AI-agent
  - `HeroFotoOverlay` — landingspage-hero met foto-overlay (zie examples)
  - `TeamCarrousel` — team-grid

## Schrijf-conventies

- Nederlands, informeel maar zakelijk
- Geen Engelstalige knoppen ("Click here") — gebruik "Lees meer", "Plan kennismaking", "Kennismaken"
- Werkfruit en n8n zijn productnamen — niet vertalen
- AI Collega's met apostrof — niet "AI Collegas" of "AI-collega's"
- Banner-claim: *"Jouw partner in AI Collega's."* — punt achter de zin, "AI Collega's" in oranje

### Echte koppen van aicollegas.nl (toon-kalibratie)

Gebruik deze zinnen als voorbeeld voor lengte, ritme, woordkeuze:

> "Een nieuwe collega. Voor een fractie van de kosten."
> "Slimmer werken, minder fouten, meer tijd voor wat écht belangrijk is."
> "Vertrouwd door [N]+ organisaties"
> "AI Collega's in de praktijk"
> "Beschikbaarheid — Jouw AI Collega werkt altijd door"
> "Jouw partner in AI Collega's."

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
| Ads (Meta) | 1080×1080 (1:1), 1080×1350 (4:5), 1080×1920 (9:16) PNG | px |
| Slide | 1920×1080 PPTX/HTML | px |
| Social | 1080×1350 (Insta) of 1200×675 (LinkedIn) | px |
| LinkedIn personal banner | 4752×1188 (@3x bron — LinkedIn schaalt zelf naar 1584×396 live) | px |
| LinkedIn company banner | 1128×191 | px |

## Banners (`assets/banners/`)

Klaar voor gebruik:

| Bestand | Doel | Afmetingen |
|---|---|---|
| `linkedin-personal.png` | LinkedIn-banner persoonlijk profiel (team) | 4752×1188 (@3x) |
| `linkedin-company.png` | LinkedIn-banner bedrijfspagina | 1128×191 |

**Compositie:** donkere achtergrond, wit "Jouw partner in" + oranje "AI Collega's." links, "VERTROUWD DOOR"-rij met 6 klantlogo's rechts, oranje accent-streep aan de rechterrand. Subtiele cirkel-shapes op de achtergrond.

## Voorbeeld-prompts

> "Maak een hero voor de landingspage van Tom (Meta Ads agent)"
→ Mono-oranje "Tom" of (designerkeuze) gradient-tekst "Tom" — ondertitel "Jouw Meta Ads collega" + WerkfruitCTA-block

> "Schrijf een e-mail voor recruiters over close-rate analyse"
→ Wit, Inter, mono-oranje accent op één woord, max 300 woorden, geen marketing-praat

> "Maak een Meta-ad in 1:1, 4:5, 9:16"
→ Mono-oranje *(geen gradient)* op 1 woord in headline, foto uit `assets/photos/`, logo-default.svg linksboven

## Fotografie

De foto-set in `assets/photos/` is dé bron voor visuele content. Stijl is consistent en matcht het brand-licht.

### Wat de foto's gemeen hebben (gebruik dit voor nieuwe shoots)

- **Licht:** natuurlijk warm, oranje-gele spots, donkere accenten — geen flits, geen wit kantoor
- **Setting:** AI Collega's HUB Apeldoorn — donkere wanden, hout (lattenwand), leer, glas, plant-accenten
- **Mensen:** echte momenten (sparring, werken, overleg, presenteren). Geen gestaged glimlach. Geen handgeschudde clichés.
- **Compositie:** ruim — vaak ruimte voor tekst-overlay rechts of bovenaan

### Wanneer welke categorie

| Categorie | Map | Wanneer |
|---|---|---|
| Groep | `groep/` (39) | Hero homepage, "Over ons", cultuur — team samen aan tafel/lunch |
| Samenwerking | `samenwerking/` (35) | "Zo werken we", klant-onboarding, proces — duo's, groep aan laptop, planning-tafel |
| Werkplek | `werkplek/` (45) | Sfeer-secties, technologie-content, anonieme overlays — geconcentreerd werk, dual-monitor |
| Portret | `portret/` (8) | B2B-content, "professional"-context — solo-portretten op kruk |
| Presentatie | `presentatie/` (4) | Kennissessies, AI-trainingen, social-proof — whiteboard-sessies |

### Standaard rendering

- `border-radius: var(--radius-lg)` (16px) op elke foto
- `object-fit: cover` met expliciete aspect ratio
- Voor hero-overlays: `linear-gradient(180deg, transparent → rgba(0,0,0,0.85))` van boven naar onder

### Wat niet doen met foto's

- Geen filters die de warme tinten naar koel trekken
- Geen "knock-out" effects (mens uitknippen op witte achtergrond)
- Geen forced croppings die de natuurlijke compositie breken
- Geen oranje-overlay *óver* gezichten — alleen op decorelementen of donkere zones

## Wat niet doen

- Geen blauwe corporate-tinten (concurrenten doen dat al)
- Geen stockfoto's van mensen achter laptops — gebruik onze eigen set
- Geen Engelstalige headlines
- Geen gradient *in het logo* — logo is altijd mono in 2.0
- Geen complexe gradients in ad-creatives
- Geen gecondenseerde of serif-fonts
- Geen oude gradient-logo's uit `legacy/` voor nieuwe productie
