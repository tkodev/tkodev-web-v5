# tkodev-web-v5

The v5 redesign of [tko.dev](https://tko.dev/) — Tony Ko's **cinematic personal portfolio**. Staff Software Engineer / Design Engineer positioning with the site itself as the work sample: dark, technical-editorial, motion-driven (loading sequence, full-screen nav overlay, choreographed reveals), built on an explicit Figma design-system contract.

**Status: docs-first, pre-implementation.** The `docs/` tree is written; implementation comes next.

## Tech stack

Next.js App Router on Tailwind v4, with shadcn/Radix primitives, CVA variants, Framer Motion choreography, zustand state, and Vitest — the authoritative stack table (versions included) is [docs/prd/05-architecture.md §Stack](docs/prd/05-architecture.md).

## Getting started

Once the app scaffold lands:

```bash
pnpm install      # install deps
pnpm dev          # local dev server
pnpm build        # production build
pnpm start        # production start
pnpm lint:check   # eslint checking
pnpm lint:fix     # eslint autofix
pnpm type:check   # typescript checking
pnpm test         # vitest
```

## Design and data sources

- **Design:** [tkodev-design-v5](https://www.figma.com/design/zUdcG1LrZ6lzQXqT01euMe/tkodev-design-v5) (tokens + component library) and [tkodev-web-v5](https://www.figma.com/design/XcvIouVcagv7vGRRLEy6Gj/tkodev-web-v5) (page designs).
- **Data:** the structured career package in the private [career-notes](https://github.com/tkodev/career-notes) repo (local: `ops/notes/tkodev/career-notes/profiles/structured`), vendored into `types/` + `constants/`.

## Docs

Docs drive the implementation. The PRD ([docs/prd/](docs/prd/)) is read in numbered order; the rules ([docs/standards/](docs/standards/)) are split by topic:

| Doc | What it owns |
| --- | --- |
| [docs/prd/01-brief.md](docs/prd/01-brief.md) | The distilled intent: what the site is, who it's for, aesthetic, references |
| [docs/prd/02-observations.md](docs/prd/02-observations.md) | Research, risks, and the direction taken on each |
| [docs/prd/03-solution.md](docs/prd/03-solution.md) | The settled design — concept, surfaces, cinematic system |
| [docs/prd/04-design.md](docs/prd/04-design.md) | Design tokens (typography, color, radius, gap, fonts) |
| [docs/prd/05-architecture.md](docs/prd/05-architecture.md) | Stack, information architecture, repo structure, data layer, theming |
| [docs/standards/](docs/standards/) | Rules by topic: [process](docs/standards/process.md), [writing](docs/standards/writing.md), [nextjs](docs/standards/nextjs.md), [components](docs/standards/components.md), [data](docs/standards/data.md), [performance](docs/standards/performance.md), [accessibility](docs/standards/accessibility.md), [seo](docs/standards/seo.md), [git](docs/standards/git.md) |

## Other

For AI-agent orientation, see [AGENTS.md](AGENTS.md) (CLAUDE.md symlinks to it).
