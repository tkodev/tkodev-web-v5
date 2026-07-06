# m01: Foundations

System milestone: the trunk everything depends on. **Gate**: the `/design`
specimen reviewed against the tkodev-design-v5 token nodes at desktop and
mobile widths, with tooling green end to end.

Tickets below map 1:1 onto the ticket template (kind, owned files,
dependencies, acceptance, verification). t01 and t02 are trunk and merge
serially first; the leaves fan out.

## m01-t01: scaffold (trunk)

- **Owns**: `package.json`, `pnpm-lock.yaml`, `tsconfig.json`,
  `eslint.config.*`, `vitest.config.*`, `next.config.*`, `components.json`,
  `src/app/` skeleton
- **Depends**: none
- **Acceptance**: Next.js 16 App Router on pnpm, Node ≥ 24; TypeScript
  strict; ESLint via `@tkodev/eslint-config-next`; Vitest wired; every README
  script runs clean on the empty app.
- **Verify**: `pnpm lint:check && pnpm type:check && pnpm test && pnpm build`

## m01-t02: theme tokens (trunk)

- **Owns**: `src/themes/`
- **Depends**: t01
- **Figma**: the token pages listed in [04-design](../02-prd/04-design.md)
- **Acceptance**: `theme.css` per the theming architecture (single entry,
  dark hardcoded on the root, `.light` as scoped inverse class, `@theme`
  block); every 04-design value present as a custom property.
- **Verify**: `pnpm lint:check && pnpm type:check && pnpm build`

## m01-t03: fonts (leaf)

- **Owns**: `src/fonts/`, `public/fonts/`
- **Depends**: t01
- **Acceptance**: Alliance No.2, Geist, Geist Mono via `next/font/local` with
  the CSS variables from 04-design §Fonts; no invisible-text flash, no layout
  shift on swap; licensed files stay in this repo only.
- **Verify**: `pnpm build`; fonts render on the specimen

## m01-t04: theme utils (leaf)

- **Owns**: `src/utils/`
- **Depends**: t01
- **Acceptance**: `cn()` as `twMerge(clsx(...))`, re-exporting `cva` and
  `VariantProps` as the single import point per the components standard.
- **Verify**: `pnpm test` (colocated unit test)

## m01-t05: vendored career data (leaf)

- **Owns**: `src/types/`, `src/constants/`
- **Depends**: t01
- **Acceptance**: the structured package vendored one-way from career-notes,
  schema unforked; job dates via `fromZonedTime` per the data standard.
- **Verify**: `pnpm type:check && pnpm test` (entry-shape unit test)

## m01-t06: layout shell (leaf)

- **Owns**: `src/components/templates/`, `src/app/layout.tsx`
- **Depends**: t02, t04
- **Acceptance**: the shell anatomy from the components standard §Layout
  shell (underlays, header, main, footer, overlays); the `section` template
  with its three widths; semantic landmarks per the accessibility standard.
- **Verify**: `pnpm build`; landmarks present in rendered HTML

## m01-t07: base atoms (leaf)

- **Owns**: `src/components/atoms/`
- **Depends**: t02, t04
- **Acceptance**: the initial shadcn imports the specimen needs (button,
  badge, accordion, separator), reformatted to the house shape and re-themed
  to the v5 tokens per the components standard.
- **Verify**: `pnpm lint:check && pnpm type:check && pnpm test`

## m01-t08: /design specimen (leaf)

- **Owns**: `src/app/design/`
- **Depends**: t02, t03, t05, t06, t07
- **Figma**: the tkodev-design-v5 token pages (04-design)
- **Acceptance**: renders every token, ramp, and primitive: heading,
  expressive, and body scales, inline styles, the full color set, radius and
  gap steps, fonts, and the base atoms; unlinked from nav; this page is the
  milestone's gate artifact.
- **Verify**: visual comparison against the token nodes at desktop and mobile

## m01-t09: CI (leaf)

- **Owns**: `.github/workflows/`
- **Depends**: t01
- **Acceptance**: lint, type, test, and build run on every PR; Vercel preview
  posts on PRs (project link is a manual one-time step, noted for Tony).
- **Verify**: a green check run plus a preview URL on a test PR
