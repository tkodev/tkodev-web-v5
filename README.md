# tkodev-web-v5

The v5 redesign of [tko.dev](https://tko.dev/): Tony Ko's **futuristic personal portfolio**. Staff Software Engineer / Design Engineer positioning with the site itself as the work sample: dark, technical-editorial, motion-driven (loading sequence, full-screen nav overlay, choreographed reveals), built on an explicit Figma design-system contract.

**Status: docs-first, pre-implementation.** The `docs/` tree is written; implementation comes next.

## Tech stack

Next.js App Router on Tailwind v4, with shadcn/Radix primitives, CVA variants, Framer Motion choreography, and Vitest; the authoritative stack table (versions included) is [docs/prd/05-architecture.md §Stack](docs/prd/05-architecture.md).

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
- **Data:** owned directly in `types/` + `constants/`, seeded from the linkedin profile in the private [career-notes](https://github.com/tkodev/career-notes) repo (local: `ops/notes/tkodev/career-notes/profiles/linkedin`).

## Docs

Rules by topic (process, writing, nextjs, components, data, testing, performance, accessibility, seo, git) are vendored as skills under `.claude/skills/` and `.agents/skills/`, symlinked from the shared [software-skills](https://github.com/tkodev/software-skills) library and loaded automatically via skill discovery. The PRD ([docs/prd/](docs/prd/)) is a numbered pipeline ending in the plan (the live milestone list):

| Doc | What it owns |
| --- | --- |
| [docs/prd/01-brief.md](docs/prd/01-brief.md) | The distilled intent: what the site is, who it's for, aesthetic, references |
| [docs/prd/02-observations.md](docs/prd/02-observations.md) | Research, risks, and the direction taken on each |
| [docs/prd/03-solution.md](docs/prd/03-solution.md) | The settled design: concept, surfaces, motion system |
| [docs/prd/04-design.md](docs/prd/04-design.md) | Design tokens (typography, color, radius, gap, fonts) |
| [docs/prd/05-architecture.md](docs/prd/05-architecture.md) | Stack, information architecture, repo structure, data layer, theming |
| [docs/prd/06-plan.md](docs/prd/06-plan.md) | The plan: the live milestone list (dependencies, status, scope) |

## Other

For AI-agent orientation, see [AGENTS.md](AGENTS.md) (CLAUDE.md symlinks to it).
