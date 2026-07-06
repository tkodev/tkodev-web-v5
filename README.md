# tkodev-web-v5

The v5 redesign of [tko.dev](https://tko.dev/): Tony Ko's **cinematic personal portfolio**. Staff Software Engineer / Design Engineer positioning with the site itself as the work sample: dark, technical-editorial, motion-driven (loading sequence, full-screen nav overlay, choreographed reveals), built on an explicit Figma design-system contract.

**Status: docs-first, pre-implementation.** The `docs/` tree is written; implementation comes next.

## Tech stack

Next.js App Router on Tailwind v4, with shadcn/Radix primitives, CVA variants, Framer Motion choreography, zustand state, and Vitest; the authoritative stack table (versions included) is [docs/02-prd/05-architecture.md §Stack](docs/02-prd/05-architecture.md).

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

Docs drive the implementation, read in numbered order: the rules ([docs/01-standards/](docs/01-standards/)) split by topic, then the PRD ([docs/02-prd/](docs/02-prd/)) as a numbered pipeline, then the staging milestone plan ([docs/03-milestones/](docs/03-milestones/)) until it migrates to GitHub:

| Doc | What it owns |
| --- | --- |
| [docs/01-standards/](docs/01-standards/) | Rules by topic: [process](docs/01-standards/process.md), [writing](docs/01-standards/writing.md), [nextjs](docs/01-standards/nextjs.md), [components](docs/01-standards/components.md), [data](docs/01-standards/data.md), [performance](docs/01-standards/performance.md), [accessibility](docs/01-standards/accessibility.md), [seo](docs/01-standards/seo.md), [git](docs/01-standards/git.md) |
| [docs/02-prd/01-brief.md](docs/02-prd/01-brief.md) | The distilled intent: what the site is, who it's for, aesthetic, references |
| [docs/02-prd/02-observations.md](docs/02-prd/02-observations.md) | Research, risks, and the direction taken on each |
| [docs/02-prd/03-solution.md](docs/02-prd/03-solution.md) | The settled design: concept, surfaces, cinematic system |
| [docs/02-prd/04-design.md](docs/02-prd/04-design.md) | Design tokens (typography, color, radius, gap, fonts) |
| [docs/02-prd/05-architecture.md](docs/02-prd/05-architecture.md) | Stack, information architecture, repo structure, data layer, theming |
| [docs/03-milestones/](docs/03-milestones/) | The staging milestone graph and ticket cuts, pre-GitHub |

## Other

For AI-agent orientation, see [AGENTS.md](AGENTS.md) (CLAUDE.md symlinks to it).
