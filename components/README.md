# Components

Deze map bevat de component-library voor AI Collega's. Drie lagen:

## `ui/`
Onaangepaste shadcn/ui components — installeer via:
```bash
npx shadcn@latest add button card dialog input
```
Deze blijven 1-op-1 met shadcn — niet rechtstreeks aanpassen.

## `primitives/`
AI Collega's-specifieke aanpassingen op shadcn (kleuren, radii, gradient-varianten).
Voorbeeld: `Button` met `variant="gradient-pill"` als extra optie.

## `blocks/`
Herbruikbare AI Collega's-patronen — domeinspecifiek voor recruiters/HR:
- `VacatureKaart` — kandidaat-profiel met match-score
- `AtsTabel` — recruiter-overzicht
- `WerkfruitCTA` — call-to-action richting Werkfruit (workerplatform)
- `AgentBlok` — uitleg-card per AI-agent (Tom, Trend Monitor, etc.)
- `HeroGradient` — landingspage-hero met brand-gradient

## Status

Nog leeg — wordt gevuld zodra eerste website/landingspage wordt gebouwd.
