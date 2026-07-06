---
id: m01-t06
milestone: m01
kind: leaf
status: done
owns:
  - src/components/templates/
  - src/app/layout.tsx
depends: [m01-t02, m01-t04]
---

# m01-t06: layout shell

## Goal

The persistent shell every page renders through.

## Acceptance criteria

- [ ] shell anatomy per components standard §Layout shell: underlays, header, main, footer, overlays
- [ ] `section` template with the three container widths
- [ ] semantic landmarks per the accessibility standard

## Verification

`pnpm build`; landmarks present in rendered HTML
