# AI Collega's Design System

Single source of truth voor visuele identiteit van AI Collega's (aicollegas.nl) — gebruikt voor website, landingspages, ads, slides, social en interne tooling.

Deze repo wordt gelezen door:
- **Claude Design** (claude.ai web) — automatische stijl-toepassing in alle workspace-projecten
- **Claude Code / Cursor / Copilot** — via `SKILL.md` als instructiebestand
- **Mensen** — via README + voorbeelden

## Versie

**2.0 — mei 2026.** Mono-oranje is het nieuwe default voor logo, ads en body-UI. Gradient blijft beschikbaar maar alleen voor optionele "wow"-momenten op web/hero. Inter is de officiële font in alle SVG-logo's.

Oude gradient-logo's staan in `assets/logo/legacy/` — niet meer gebruiken voor nieuwe productie.

## Structuur

```
tokens.json          → brand tokens (kleuren, typografie, spacing, radii)
tailwind.config.js   → Tailwind v4 met CSS-variabelen
globals.css          → CSS custom properties (consumeert tokens)
SKILL.md             → AI-leesbare instructies (single source of truth)
components/
  ui/                → shadcn/ui basis (kopieer-pak-aan)
  primitives/        → AI Collega's aanpassingen op shadcn
  blocks/            → recruiter/HR-patronen (HeroFotoOverlay, TeamCarrousel, ...)
examples/            → echte voorbeelden (landingpagina, e-mail, slide)
assets/
  logo/              → logo-default.svg, logo-on-dark.svg, logo-default.png, logo-mark.png
    legacy/          → oude gradient-logo's (niet meer gebruiken)
  banners/           → LinkedIn personal + company banners
  photos/            → fotoshoot HUB Apeldoorn (28 mei 2026, 131 foto's)
    groep/           → team samen / lunch / overleg aan tafel
    samenwerking/    → duo / groep aan laptop / planning-tafel
    werkplek/        → geconcentreerd werk / dual-monitor / kantoor
    portret/         → solo-portretten op kruk
    presentatie/     → whiteboard-sessies
```

## Brand basics (2.0)

**Primair** — mono-oranje (`#f97316`)
**Optioneel** — 3-stop gradient `#f97316 → #ef4444 → #ec4899` (alleen voor web/hero/wow)
**Tekst** — zwart op wit, accent in mono-oranje
**Typografie** — Inter (primary) + JetBrains Mono (stats/cijfers)
**Tone** — informeel, Nederlandstalig, MKB-gericht (recruiters & HR)
**Brand-claim** — "Jouw partner in AI Collega's."

## Gebruik

1. **Claude Design:** koppel deze repo via org-instellingen → published
2. **Lokaal:** `npm install` (zodra components aanwezig zijn) → `npx shadcn add <component>`
3. **AI prompts:** verwijs naar `SKILL.md` voor conventies

## Status

✅ v2.0 productie-ready — mei 2026.

## Eigenaar

AI Collega's, Apeldoorn — beheerd door Klaas (klaas-bot).
