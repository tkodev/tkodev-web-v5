# m01: Foundations

System milestone: the trunk everything depends on. **Gate**: the `/design`
specimen reviewed against the tkodev-design-v5 token nodes at desktop and
mobile widths, with tooling green end to end.

## Tasks

t01 and t02 are trunk and merge serially first; the leaves fan out in
parallel worktrees.

### t01: scaffold (trunk)

- **Status**: done. **Owns**: `package.json`, lockfile, `tsconfig.json`,
  eslint/vitest/next/postcss configs, `components.json`, `src/app/` skeleton.
- Next.js 16 App Router on pnpm, Node ≥ 24; TypeScript strict; ESLint 9 via
  `@tkodev/eslint-config-next`; Vitest wired, green with no tests.
- **Verify**: `pnpm lint:check && pnpm type:check && pnpm test && pnpm build`

### t02: theme tokens (trunk)

- **Status**: done. **Owns**: `src/themes/`. **Depends**: t01.
- `theme.css` single entry per the theming architecture: dark hardcoded,
  `.light` scoped inverse, every 04-design value in `@theme`.
- **Verify**: `pnpm lint:check && pnpm type:check && pnpm build`

### t03: fonts (leaf)

- **Status**: done. **Owns**: `src/fonts/`. **Depends**: t01.
- Alliance No.2 400/700, Geist, Geist Mono via `next/font/local`; CSS
  variables per 04-design §Fonts on `<body>`; no invisible-text flash or
  swap shift; licensed files ship with the site only.
- **Verify**: `pnpm build`; fonts render on the specimen

### t04: theme utils (leaf)

- **Status**: done. **Owns**: `src/utils/`. **Depends**: t01.
- `cn()` as `twMerge(clsx(...))`, re-exporting `cva` and `VariantProps` as
  the single import point.
- **Verify**: `pnpm lint:check && pnpm type:check`

### t05: vendored career data (leaf)

- **Status**: done. **Owns**: `src/types/`, `src/constants/`. **Depends**: t01.
- One-way copy from career-notes `profiles/structured`, schema unforked;
  dates via `fromZonedTime` per the data standard.
- **Verify**: `pnpm type:check`

### t06: layout shell (leaf)

- **Status**: done. **Owns**: `src/components/templates/`,
  `src/app/layout.tsx`. **Depends**: t02, t04.
- Shell anatomy per components standard §Layout shell; `section` template
  with the three container widths (values pending their token contract);
  semantic landmarks.
- **Verify**: `pnpm build`; landmarks present in rendered HTML

### t07: base atoms (leaf)

- **Status**: done. **Owns**: `src/components/atoms/`. **Depends**: t02, t04.
- shadcn imports (button, badge, accordion, separator) reformatted to the
  house shape, re-themed to the v5 tokens; named exports only.
- **Verify**: `pnpm lint:check && pnpm type:check`

### t08: /design specimen (leaf)

- **Status**: in-review. **Owns**: `src/app/design/`. **Depends**: t02, t03,
  t05, t06, t07. **Figma**: the tkodev-design-v5 token pages (04-design).
- Renders every token, ramp, and primitive; unlinked from nav; the
  milestone's gate artifact.
- **Verify**: visual comparison against the token nodes at desktop and mobile

### t09: CI (leaf)

- **Status**: in-review. **Owns**: `.github/workflows/`. **Depends**: t01.
- Lint, type, test, and build on every PR; Vercel preview posts on PRs
  (project link is a one-time manual step for Tony).
- **Verify**: a green check run plus a preview URL on a PR
