# Photos

Fotoshoot AI Collega's HUB Apeldoorn — **28 mei 2026**, 131 foto's. Vervangt de vorige curated set volledig.

Alle foto's zijn geoptimaliseerd: landschap max **2400px** lange zijde, portret max **1600px**, JPEG quality 80 (progressive). Origineel 17–40 MB per stuk → hier ~290 KB gemiddeld, web-ready.

## Naamgeving

Bestanden behouden hun originele frame-nummer (`DSCxxxxx.jpg`) binnen de categoriemap, bv. `samenwerking/DSC06823.jpg`. Zo blijven ze traceerbaar naar de RAW-originelen bij de fotograaf.

## Foto-richting

Eén consistente stijl die matcht met het brand-licht:

- **Licht:** natuurlijk warm, oranje-gele spots, donkere accenten — geen flits, geen wit kantoor
- **Setting:** AI Collega's HUB Apeldoorn — donkere wanden, hout (lattenwand), leer, glas, plant-accenten
- **Mensen:** echte momenten — sparring, werken, overleg, presenteren, lunch. Geen gestaged glimlach.
- **Compositie:** ruim — vaak ruimte voor tekst-overlay rechts of bovenaan

## Categorieën

| Map | Aantal | Inhoud | Wanneer gebruiken |
|---|---|---|---|
| `groep/` | 39 | Team samen aan tafel, lunch, overleg | Hero homepage, "Over ons", cultuur-content |
| `samenwerking/` | 35 | Duo's, groep aan laptop, sparring op de bank, planning-tafel | "Zo werken we", onboarding, proces-uitleg |
| `werkplek/` | 45 | Geconcentreerd werk, dual-monitor, over-the-shoulder code, kantoor wide | Sfeer-secties, technologie-content, anonieme overlays |
| `portret/` | 8 | Solo-portretten op kruk voor de lattenwand | B2B-content, "professional"-context, individuele uitlichting |
| `presentatie/` | 4 | Whiteboard-sessies | Kennissessies, AI-trainingen, social-proof |

## Aanraders per gebruik

| Gebruik | Bestand |
|---|---|
| **Hero / homepage** | `groep/DSC06317.jpg` |
| **Sparring op de bank** | `samenwerking/DSC06823.jpg` |
| **Informeel overleg** | `samenwerking/DSC06835.jpg` |
| **Implementatie / review** | `samenwerking/DSC06862.jpg` |
| **Kantoor wide (overlay-ruimte)** | `werkplek/DSC06703.jpg` |
| **Anonieme code-shot** | `werkplek/DSC06691.jpg` |

## Optimalisatie

Geprocessed met Pillow (LANCZOS, q80 progressive). Equivalent in `sips`:

```bash
# landschap
sips -Z 2400 -s formatOptions 80 -s format jpeg input.jpg --out output.jpg
# portret
sips -Z 1600 -s formatOptions 80 -s format jpeg input.jpg --out output.jpg
```

## Privacy

Alle herkenbare personen op deze foto's hebben toestemming gegeven voor gebruik in AI Collega's-uitingen.

## Nog te doen

- [ ] WebP-versies genereren wanneer `cwebp` beschikbaar is
- [ ] Beste 1–2 frames per categorie markeren als "hero pick"
- [ ] Alt-text per foto in `photo-meta.json` voor SEO/toegankelijkheid
