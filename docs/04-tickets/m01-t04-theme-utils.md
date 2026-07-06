---
id: m01-t04
milestone: m01
kind: leaf
status: todo
owns:
  - src/utils/
depends: [m01-t01]
---

## Goal

The single styling import point for components.

## Acceptance criteria

- [ ] `cn()` as `twMerge(clsx(...))`
- [ ] re-exports `cva` and `VariantProps` (components standard)
- [ ] colocated unit test

## Verification

`pnpm lint:check && pnpm type:check && pnpm test`
