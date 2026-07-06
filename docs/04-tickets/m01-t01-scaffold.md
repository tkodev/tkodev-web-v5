---
id: m01-t01
milestone: m01
kind: trunk
status: todo
owns:
  - package.json
  - pnpm-lock.yaml
  - tsconfig.json
  - eslint.config.*
  - vitest.config.*
  - next.config.*
  - components.json
  - src/app/
depends: []
---

## Goal

Scaffold the app: Next.js 16 App Router on pnpm with strict TypeScript,
ESLint, and Vitest; every README script runs clean on the empty app.

## Acceptance criteria

- [ ] Next.js 16 App Router, pnpm, Node ≥ 24
- [ ] TypeScript strict, no `any` escapes
- [ ] ESLint flat config via `@tkodev/eslint-config-next`; no Biome, no Prettier
- [ ] Vitest wired with a passing placeholder test
- [ ] All README scripts run clean

## Verification

`pnpm lint:check && pnpm type:check && pnpm test && pnpm build`
