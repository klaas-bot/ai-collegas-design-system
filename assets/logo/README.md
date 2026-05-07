# Logo

**Versie 2.0** — mono-oranje. Gradient-versies zijn legacy.

## Bestanden

| Bestand | Gebruik |
|---|---|
| `logo-default.svg` | Standaard — voor lichte achtergronden (`.NL` in zwart). Mono-oranje, Inter, viewBox 182×34. |
| `logo-on-dark.svg` | Voor donkere achtergronden (`.NL` in wit). Mono-oranje, Inter, viewBox 182×34. |
| `logo-default.png` | Bitmap-fallback voor e-mail/social — 936×304, `.NL` zwart |
| `logo-mark.png` | Compacte variant zonder `.NL` — voor favicons, square avatars, narrow placements (936×304) |
| `legacy/*` | Oude gradient-logo's (1.0). **Niet gebruiken voor nieuwe productie.** Behouden voor referentie en archiefcontent. |

## Anatomie (2.0)

```
[ AI ]   [ Collega's ]   [ .NL ]
oranje    wit op oranje   zwart of wit
```

- *Canvas SVG:* viewBox `0 0 182 34` — kleine, schaalbare vector
- *Canvas PNG:* 936×304 (3:1) — voor schaling tot kleine formaten
- *Typografie:* Inter (Google Fonts), bold 700
- *AI:* font-size 30px-equivalent, letter-spacing -0.025em, fill `#f97316`
- *Collega's pill:* width 104, height 28, rx 14, fill `#f97316`, witte tekst font-size 18px
- *.NL:* font-size 24px-equivalent, letter-spacing -0.025em, fill `#0a0a0a` (default) of `#ffffff` (on-dark)

## Kleuren (2.0)

- *AI + pill:* solid `#f97316` (mono-oranje, geen gradient)
- *Collega's tekst:* `#ffffff`
- *.NL:* `#0a0a0a` (default) of `#ffffff` (on-dark)

## Wat mag je aanpassen

- Kleur van `.NL` (zwart/wit) afhankelijk van achtergrond
- Schaal — alle elementen schalen evenredig mee
- Kleur van AI + pill — alleen `#f97316` (default), `#ffffff` (knock-out op gekleurde achtergrond), of `#0a0a0a` (mono-zwart fallback voor print/fax)

## Wat NIET aanpassen

- Geen gradient meer in het logo (was 1.0, is verlaten)
- Geen andere kleur dan oranje/wit/zwart
- Geen andere font dan Inter
- Geen letter-spacing of size-verhoudingen (gebruik scale, niet individuele tweaks)

## Nog te leveren

- [ ] `logo-mono-black.svg` — volledig zwart (één-kleur print/fax)
- [ ] `logo-mono-white.svg` — volledig wit (één-kleur op donker)
- [ ] PNG-exports in 256, 512, 1024 voor social
- [ ] Favicon-set (16, 32, 64, 192) afgeleid van `logo-mark.png`
