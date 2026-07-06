---
id: m01-t05
milestone: m01
kind: leaf
status: todo
owns:
  - src/types/
  - src/constants/
depends: [m01-t01]
---

# m01-t05: vendored career data

## Goal

Vendor the structured career package into the site as compile-time constants.

## Acceptance criteria

- [ ] one-way copy from career-notes `profiles/structured`; schema unforked
- [ ] job dates via `fromZonedTime(iso, appTimeZone)`, never bare `new Date()`

## Verification

`pnpm type:check && pnpm test`
