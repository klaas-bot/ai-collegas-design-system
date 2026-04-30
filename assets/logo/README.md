# Logo

## Bestanden

| Bestand | Gebruik |
|---|---|
| `logo-default.svg` | Standaard — voor lichte achtergronden (`.NL` in zwart) |
| `logo-on-dark.svg` | Voor donkere achtergronden (`.NL` in wit) |
| `logo-default-baseline-aligned.svg` | Variant met `dominant-baseline="central"` voor pixelperfecte vertical centering |

## Anatomie

```
[ AI ]   [ Collega's ]   [ .NL ]
gradient  wit op rect    zwart of wit
```

- *Canvas:* 1200×300
- *Typografie:* `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`, bold
- *AI / .NL:* 80px
- *Collega's:* 60px op pill (`rx=50`)

## Kleuren

- *AI gradient:* `#f97316 → #ef4444 → #ec4899` (3-stop)
- *Pill achtergrond:* `#f97316 → #ef4444` (2-stop)
- *.NL:* `#000000` (default) of `#ffffff` (on-dark)

## Nog te leveren

- [ ] `logo-mono-black.svg` — volledig zwart (één-kleur print/fax)
- [ ] `logo-mono-white.svg` — volledig wit (één-kleur op donker)
- [ ] `logo-mark.svg` — mark-only (alleen de pill, zonder "AI" en ".NL") voor favicons en social avatars
- [ ] PNG-exports in 256, 512, 1024 voor social
