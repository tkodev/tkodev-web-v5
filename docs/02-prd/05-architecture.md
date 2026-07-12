# Architecture

How the app is shaped: stack, information architecture, repo structure, data layer, theming. What we're building lives in [01-brief.md](01-brief.md); tokens in [04-design.md](04-design.md); component anatomy in the Figma design system.

## Stack

| Layer | Choice |
| --- | --- |
| Package manager | **pnpm** 11, Node ≥ 24 |
| Language | TypeScript, strict |
| Framework | Next.js **16**, **App Router** |
| Styling | **Tailwind v4** (CSS-first `@theme`) |
| Variants | **CVA** (`class-variance-authority`) + `cn()` = `twMerge(clsx(...))` |
| Primitives | **shadcn** (new-york style, Radix underneath), themed to the v5 tokens |
| Theming | Two themes, hardcoded to dark ([04-design.md](04-design.md) §Color) |
| Motion | CSS animations first; **framer motion** (`motion`) for choreography CSS can't express (loading sequence, nav overlay) |
| State | **zustand**: global stores only (§State and motion) |
| Icons | `lucide-react` (sole icon library) |
| Linting | **ESLint 9** flat config via [`@tkodev/eslint-config-next`](https://github.com/tkodev/eslint-config-next) (`github:tkodev/eslint-config-next`); no Biome, no standalone Prettier (the shared config runs it as a lint rule) |
| Testing | **Vitest**: `pnpm test` |
| Fonts | `next/font/local`: Alliance No.2, Geist, Geist Mono |
| Dates | `date-fns` / `date-fns-tz` |

## Information architecture

v5 is a multi-page site under one persistent shell.

### Route map

| Route | Page | Nav label | Index |
| --- | --- | --- | --- |
| `/` | Home | — (wordmark/avatar) | `0` |
| `/works` | Works index | Works | `1` |
| `/works/[workId]` | Work detail (one flagship gets the elevated treatment) | — | `1A` |
| `/experience` | Experience | Experience | `2` |
| `/about` | About | About | `3` |
| `/design` | Design system specimen (living styleguide, unlinked from nav) | — | — |
| — (overlay, not route) | Loading / boot sequence | — | — |
| — (overlay, not route) | Nav overlay | §Navigation below | — |

Experiments are a works-index category (`experiment` medium), not a route. Figma frame links per page live in [03-solution.md](03-solution.md) §Figma frames.

**Section indices count from the surface's index**, in the annotation grammar's `N.M / LABEL //` form: the hero takes `.0` and each section below it increments, so home runs `0.0 / Intro //` then `0.1 / Works //`. A surface holds its number whether or not it is built, so `/experience` owns `2` in advance and nothing renumbers when it lands. A sub-document of a surface takes a letter suffix rather than a third level: work detail is `1A`, its stories and visuals running `1A.N` down the dossier, so no index collides with a section of the `/works` index above it.

### Navigation

- **Header nav**: **Works · Experience · About**; the current page's item is marked active. Contact is not a route: it lives as the recurring transmission section at the foot of every page ([03-solution.md](03-solution.md) §The transmission section).
- **Nav overlay**: full-screen menu of the nav routes; the primary nav on mobile, available on all viewports; behaviour owned by [03-solution.md](03-solution.md) §Nav overlay.
- **Boot / loading screen**: entry overlay preceding the requested page; behaviour owned by [03-solution.md](03-solution.md) §Boot sequence.

## Repo structure

The folder layout follows the Next.js folder-structure standard

```text
.
├── AGENTS.md            # agent orientation (CLAUDE.md symlinks here)
├── README.md            # human orientation
├── src/                 # nextjs application code
├── public/              # nextjs static assets
└── docs/
    ├── 01-standards/    # rules, split by topic
    └── 02-prd/          # the numbered product docs, read in order
```

How the v5 pieces land in the standard folders: `app/` mirrors the route map above; `stores/` and `providers/` hold the state layer described in §State and motion; `public/` assets are sourced from career-notes.

## Data layer

**Source of truth:** `src/types/` + `src/constants/` (`client.ts`, `jobs.ts`, `projects.ts`, `profile.ts`, `date.ts`, and their types). This repo owns its career data directly: content is authored and edited here, with no vendoring and no one-way sync. The structured career data package at `ops/notes/tkodev/career-notes/profiles/structured/` seeded the initial types and constants; it is an origin, not an upstream to write back to.

**Read order:** implementation reads `src/constants/` first; career-notes is consulted only when `constants/` lacks the fact, in its own order: `profiles/structured/`, then `profiles/linkedin/` and `profiles/website/`. The fact then lands in `constants/`, which owns it from that point on.

Site copy is real career fact, authored in `constants/` and grounded in the career-notes record (`profiles/website/`, `about/`), never invented.

The data model:

| Export | Shape | Notes |
| --- | --- | --- |
| `clientEntries` / `clientIds` | `Record<ClientId, ClientEntry>` + curated ordered array | name, href, base/light/dark logo srcs |
| `jobEntries` | `JobEntry[]`, newest first | real `Date`s; no `endDate` = current |
| `projectEntries` / `projectIds` | `Record<ProjectId, ProjectEntry>` + ordered array | see below |
| `profileEntries` | `Record<ProfileId, ProfileEntry>` | Tony + collaborators |

`ProjectEntry` is the central type: required `basic` (title, intro, desc, roles, tools, skills, display-string dates) plus optional `extended` (win, impact, badges, stats, people), `sections` (ordered heading+body+media narrative blocks), `showcase` (media gallery), `testimonial` (quote, author, title, source). Home consumes `basic` + `extended` for project cards and `testimonial` for the quote cards; work details consume `sections`/`showcase`.

## Theming architecture

`themes/theme.css` is the single CSS entry imported by `app/layout.tsx`: `@import 'tailwindcss'`, imports `helpers.css`, defines the two theme blocks inline (values from [04-design.md](04-design.md)), hardcodes `dark` on the root (`color-scheme: dark`), and declares the `@theme {}` block (colors, radius, gap, breakpoints, fonts, text styles, animations). Inverse sections apply `.light` locally; components stay token-only and invert for free. No `next-themes`, no theme variants, no mount-gating.

The `dark:` variant is redeclared in the same file, as `@custom-variant dark (&:not(.light):not(.light *))`. Tailwind v4 compiles `dark:` to a `prefers-color-scheme` media query by default: a second theme switch this site never sets, so any `dark:` utility left on that default keys off the visitor's OS rather than the theme, and fails to invert inside a `.light` scope. Redeclaring binds the variant to the same `.light` boundary the token blocks use. A theme provider would not fix this, since the variant, not a class on the root, is what selects the branch.

## State and motion

- The cinematic layer (boot sequence, nav-overlay open/close, section entrance reveals, marquee drift, micro-interactions) is implemented per the Motion stack choice above.
- Two **zustand** stores: the site **lifecycle** (`loading → ready`, driving the boot sequence and entrance choreography) and the **nav overlay** (open/closed, driving header/footer swaps and focus trapping).

## Rendering model

- All pages are fully static; data is compile-time constants.
- One root `app/layout.tsx`: fonts on `<body>`, lifecycle provider, the persistent `layout` shell (anatomy owned by the components standard §Layout shell), metadata export, analytics.
