# AI Collega's Design System

Single source of truth voor visuele identiteit van AI Collega's (aicollegas.nl) — gebruikt voor website, landingspages, ads, slides en interne tooling.

Deze repo wordt gelezen door:
- **Claude Design** (claude.ai web) — automatische stijl-toepassing in alle workspace-projecten
- **Claude Code / Cursor / Copilot** — via `SKILL.md` als instructiebestand
- **Mensen** — via README + voorbeelden

## Structuur

```
tokens.json          → brand tokens (kleuren, typografie, spacing, radii)
tailwind.config.js   → Tailwind v4 met CSS-variabelen
globals.css          → CSS custom properties (consumeert tokens)
components/
  ui/                → shadcn/ui basis (kopieer-pak-aan)
  primitives/        → AI Collega's aanpassingen op shadcn
  blocks/            → recruiter/HR-patronen (vacaturekaart, ATS-tabel, CTA)
examples/            → 2-3 echte voorbeelden (landingpagina, e-mail, slide)
SKILL.md             → AI-leesbare instructies
```

## Brand basics

**Kleuren** — gradient oranje → rood → roze (`#f97316 → #ef4444 → #ec4899`)
**Tekst** — zwart op wit, accent in gradient
**Typografie** — system-ui (San Francisco / Segoe UI / Roboto)
**Tone** — informeel, Nederlandstalig, MKB-gericht (recruiters & HR)

## Gebruik

1. **Claude Design:** koppel deze repo via org-instellingen → published
2. **Lokaal:** `npm install` (zodra components aanwezig zijn) → `npx shadcn add <component>`
3. **AI prompts:** verwijs naar `SKILL.md` voor conventies

## Status

🚧 In opbouw — week van 30 april 2026.

## Eigenaar

AI Collega's, Apeldoorn — beheerd door Klaas (klaas-bot).
