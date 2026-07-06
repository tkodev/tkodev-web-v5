---
id: m01-t03
milestone: m01
kind: leaf
status: todo
owns:
  - src/fonts/
  - public/fonts/
depends: [m01-t01]
---

## Goal

Load the three brand fonts with zero layout shift and expose their CSS
variables.

## Acceptance criteria

- [ ] Alliance No.2, Geist, Geist Mono via `next/font/local`
- [ ] CSS variables per 04-design §Fonts, applied on `<body>`
- [ ] no invisible-text flash, no layout shift on swap
- [ ] licensed files ship with the site only (data standard)

## Verification

`pnpm build`; fonts render on the `/design` specimen
