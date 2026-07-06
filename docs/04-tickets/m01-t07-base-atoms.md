---
id: m01-t07
milestone: m01
kind: leaf
status: todo
owns:
  - src/components/atoms/
depends: [m01-t02, m01-t04]
---

# m01-t07: base atoms

## Goal

The initial primitives the specimen needs, imported and re-themed.

## Acceptance criteria

- [ ] shadcn imports (button, badge, accordion, separator) land in `atoms/`
- [ ] reformatted to the house file shape; named exports only
- [ ] re-themed to the v5 tokens; no raw hex, no palette utilities

## Verification

`pnpm lint:check && pnpm type:check && pnpm test`
