# Photos

Curated foto-set van AI Collega's — kantoor, team, samenwerking. Alle foto's zijn geoptimaliseerd naar max 2400px (lange zijde) en JPEG-quality 80.

## Foto-richting

De fotografie volgt één duidelijke stijl die *exact matcht* met de brand-gradient:

- **Licht:** natuurlijk warm, oranje-gele spots, donkere accenten
- **Setting:** AI Collega's HQ Apeldoorn — donkere wanden, hout, leer, glas
- **Mensen:** echte momenten — sparring, werken, overleg. Geen gestaged glimlach.
- **Compositie:** ruim — vaak ruimte voor tekst-overlay rechts of bovenaan

## Wanneer welke foto

### `groep/`

| Bestand | Gebruik |
|---|---|
| `pitch-hub.jpg` | **Hero homepage** — toont AI Collega's HUB, hele team, brand-banner. Beste single shot van de set. |
| `meeting-wat-wij-doen.jpg` | **Over-ons / dienstverlening** — vergadertafel met productlijn op scherm (`AI inspireren / lezen / integreren`). Past op pagina's die positionering uitleggen. |

### `samenwerking/`

| Bestand | Gebruik |
|---|---|
| `sparring-bank.jpg` | **Team-sectie / proces-uitleg** — drie collega's met laptops op banken. Sterk voor "zo werken we"-blocks. |
| `duo-werkplek.jpg` | **Klant-pagina / consultancy** — duo achter scherm, één kijkt mee. Geeft "samen-met-jou"-gevoel. |
| `duo-dual-monitor.jpg` | **Technologie-pagina** — duo aan dual-monitor, focus op werk. |
| `bank-overleg.jpg` | **Onboarding / kennismaking** — informeel bank-overleg, comfortabel. Alternatief voor strakke werkplekshots. |

### `werkplek/`

| Bestand | Gebruik |
|---|---|
| `wide-kantoor.jpg` | **Achtergrond / sfeer** — wide shot van het kantoor met side-view aan dual-monitor. Veel ruimte voor tekst-overlay rechts. |
| `over-shoulder-code.jpg` | **Anonieme hero / tech-content** — over-the-shoulder code-shot, gezicht niet in beeld. Universeel inzetbaar zonder specifieke persoon. |

### `portret/`

| Bestand | Gebruik |
|---|---|
| `marlie-staand.jpg` | **"Professional"-context** — staand portret in pak met laptop. Geposeerder dan de rest, dus selectief inzetten (bv. recruiters-pagina, B2B-content). |

## Optimalisatie

Alle foto's zijn geprocessed met:
```bash
sips -Z 2400 -s formatOptions 80 -s format jpeg input.jpg --out output.jpg
```

Resultaat: 17-37MB origineel → 480KB-1.1MB hier. Web-ready.

## Privacy

Alle herkenbare personen op deze foto's hebben toestemming gegeven voor gebruik in AI Collega's-uitingen (per David, 2026-04-30).

## Nog te doen

- [ ] WebP-versies generen wanneer `cwebp` beschikbaar is
- [ ] `srcset` met @1x (1200px) en @2x (2400px) varianten splitsen
- [ ] Alt-text per foto in `photo-meta.json` voor SEO/toegankelijkheid
- [ ] Solo-portretten Lars / Niels / David / Jacco / Maarten / Esther toevoegen voor `TeamGrid`
