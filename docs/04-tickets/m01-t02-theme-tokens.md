---
id: m01-t02
milestone: m01
kind: trunk
status: in-progress
owns:
  - src/themes/
depends: [m01-t01]
figma: token pages in docs/02-prd/04-design.md (text 6007:3488, color 6009:161, visual 6029:2117)
---

# m01-t02: theme tokens

## Goal

Land the token contract as CSS per the theming architecture: single
`theme.css` entry, dark hardcoded, scoped light inverse, full `@theme` block
from the design contract.

## Acceptance criteria

- [ ] `theme.css` is the single CSS entry imported by `app/layout.tsx`
- [ ] dark hardcoded on the root (`color-scheme: dark`); `.light` scoped class for inverse sections
- [ ] every 04-design value present as a custom property, including the alpha-white border
- [ ] no `tailwind.config.ts`; all extension in `@theme`

## Verification

`pnpm lint:check && pnpm type:check && pnpm build`
