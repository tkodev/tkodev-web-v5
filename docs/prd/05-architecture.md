# Architecture

How the app is shaped: stack, information architecture, repo structure, data layer, theming. What we're building lives in [02-brief.md](02-brief.md); tokens in [06-design.md](06-design.md); component anatomy in the Figma design system.

## Stack

| Layer | Choice |
| --- | --- |
| Package manager | **pnpm** 11, Node ≥ 24 |
| Language | TypeScript, strict |
| Framework | Next.js **16**, **App Router** |
| Styling | **Tailwind v4** (CSS-first `@theme`) |
| Variants | **CVA** (`class-variance-authority`) + `cn()` = `twMerge(clsx(...))` |
| Primitives | **shadcn** (new-york style, Radix underneath), themed to the v5 tokens |
| Theming | Two themes, hardcoded to dark ([06-design.md](06-design.md) §Color); no `next-themes` |
| Motion | CSS animations first; **framer motion** (`motion`) for choreography CSS can't express (loading sequence, nav overlay) |
| State | **zustand** — global stores only (§State and motion) |
| Icons | `lucide-react` (sole icon library) |
| Linting | **ESLint** flat config via [`@tkodev/eslint-config-next`](https://github.com/tkodev/eslint-config-next) (`github:tkodev/eslint-config-next`) — no Biome, no Prettier |
| Testing | **Vitest** — `pnpm test` |
| Fonts | `next/font/local` — Alliance No.2, Geist, Geist Mono |
| Dates | `date-fns` / `date-fns-tz` |

## Information architecture

v5 is a multi-page site under one persistent shell.

### Route map

| Route | Page | Nav label |
| --- | --- | --- |
| `/` | Home | — (wordmark/avatar) |
| `/works` | Works index | Works |
| `/works/[workId]` | Work detail (one flagship gets the elevated treatment) | — |
| `/experience` | Experience | Experience |
| `/about` | About | About |
| `/contact` | Contact | Contact |
| — (overlay, not route) | Loading / boot sequence | — |
| — (overlay, not route) | Nav overlay | §Navigation below |

Experiments are a works-index category (`experiment` medium), not a route. Figma frame links per page live in [04-solution.md](04-solution.md) §Figma frames.

### Navigation

- **Header nav**: **Works · Experience · About · Contact**; the current page's item is marked active.
- **Nav overlay** — full-screen menu of the nav routes; the primary nav on mobile, available on all viewports; behaviour owned by [04-solution.md](04-solution.md) §Nav overlay.
- **Boot / loading screen** — entry overlay preceding the requested page; behaviour owned by [04-solution.md](04-solution.md) §Boot sequence.

## Repo structure

The folder layout follows the Next.js folder-structure standard

```text
.
├── AGENTS.md            # agent orientation (CLAUDE.md symlinks here)
├── README.md            # human orientation
├── src/                 # nextjs application code
├── public/              # nextjs static assets
└── docs/
    ├── prd/             # the numbered product docs, read in order
    └── standards/       # coding rules, split by topic
```

How the v5 pieces land in the standard folders: `app/` mirrors the route map above; `stores/` and `providers/` hold the state layer described in §State and motion; `public/` assets are sourced from career-notes.

## Data layer

**Source of truth:** the structured career data package at `ops/notes/tkodev/career-notes/profiles/structured/` — `types.ts`, `client.ts`, `jobs.ts`, `projects.ts`, `profile.ts`, `date.ts`. This repo **vendors a copy** into `types/` + `constants/` (the package is in a git-ignored notes area and can't be a workspace dependency of a deployable repo). Sync is one-way, notes → site; content edits happen in career-notes first, then get copied over. Never fork the schema silently — schema changes go back upstream.

Site copy is sourced from the career-notes repo (`profiles/website/`, `about/`) and its structured data package — never invented.

The data model:

| Export | Shape | Notes |
| --- | --- | --- |
| `clientEntries` / `clientIds` | `Record<ClientId, ClientEntry>` + curated ordered array | name, href, base/light/dark logo srcs |
| `jobEntries` | `JobEntry[]`, newest first | real `Date`s via `fromZonedTime(iso, appTimeZone)`; no `endDate` = current |
| `projectEntries` / `projectIds` | `Record<ProjectId, ProjectEntry>` + ordered array | see below |
| `profileEntries` | `Record<ProfileId, ProfileEntry>` | Tony + collaborators |

`ProjectEntry` is the central type: required `basic` (title, intro, desc, roles, tools, skills, display-string dates) plus optional `extended` (win, impact, badges, stats, people), `sections` (ordered heading+body+media narrative blocks), `showcase` (media gallery), `testimonial` (quote, author, title, source). Home consumes `basic` + `extended` for project cards and `testimonial` for the quote cards; work details consume `sections`/`showcase`.

## Theming architecture

`themes/theme.css` is the single CSS entry imported by `app/layout.tsx`: `@import 'tailwindcss'`, imports `colors.css` + `helpers.css`, defines the two theme blocks (values from [06-design.md](06-design.md)), hardcodes `dark` on the root (`color-scheme: dark`), and declares the `@theme {}` block (colors, radius, gap, breakpoints, fonts, text styles, animations). Inverse sections apply `.light` locally; components stay token-only and invert for free. No `next-themes`, no theme variants, no mount-gating.

## State and motion

- The cinematic layer — boot sequence, nav-overlay open/close, section entrance reveals, marquee drift, micro-interactions — implemented per the Motion stack choice above.
- Two **zustand** stores: the site **lifecycle** (`loading → ready`, driving the boot sequence and entrance choreography) and the **nav overlay** (open/closed, driving header/footer swaps and focus trapping).

## Rendering model

- All pages are fully static — data is compile-time constants; dynamic routes prebuild over their id lists.
- One root `app/layout.tsx`: fonts on `<body>`, lifecycle provider, the persistent `layout` shell (anatomy owned by the components standard §Layout shell), metadata export, analytics.
