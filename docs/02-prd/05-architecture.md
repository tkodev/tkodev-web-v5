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
| Icons | `lucide-react` (sole icon library) |
| Linting | **ESLint 9** flat config via [`@tkodev/eslint-config-next`](https://github.com/tkodev/eslint-config-next) (`github:tkodev/eslint-config-next`), extended with `eslint-plugin-jsx-a11y` (strict) so the accessibility floor is a lint error rather than a review note; no Biome, no standalone Prettier (the shared config runs it as a lint rule) |
| Testing | **Vitest**: `pnpm test` |
| Fonts | `next/font/local`: Alliance No.2, Geist, Geist Mono |
| Dates | `date-fns` / `date-fns-tz` |

## Information architecture

v5 is a multi-page site under one persistent shell.

### Route map

| Route | Page | Nav label | Index |
| --- | --- | --- | --- |
| `/` | Home | — (wordmark/avatar) | `H` |
| `/works` | Works index | Works | `W` |
| `/works/[workId]` | Work detail (one flagship gets the elevated treatment) | — | `WD` |
| `/experience` | Experience | Experience | `E` |
| `/about` | About | About | `A` |
| `/design` | Design system specimen (living styleguide, unlinked from nav) | — | `D` |
| — (overlay, not route) | Loading / boot sequence | — | — |
| — (overlay, not route) | Nav overlay | §Navigation below | — |

Experiments are a works-index category (`experiment` medium), not a route. Figma frame links per page live in [03-solution.md](03-solution.md) §Figma frames.

**Section indices count from the surface's letter**, in the annotation grammar's `X.N / LABEL //` form: each surface owns a letter (`H` home, `W` works, `E` experience, `A` about, `D` design), the hero takes `.0`, and each section below it increments, so home runs `H.0 / Intro //` then `H.1 / Works //`. A surface holds its letter whether or not it is built, so `/experience` owns `E` in advance and nothing renumbers when it lands. A sub-document of a surface takes its own compound letter rather than a third level: work detail is `WD`, its stories and visuals running `WD.N` down the dossier, so its indices never collide with the `W` sections of the `/works` index above it.

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

How the v5 pieces land in the standard folders: `app/` mirrors the route map above; `providers/` holds the context providers wired in the root layout; `public/` assets are sourced from career-notes.

## Data layer

**Source of truth:** `src/types/` + `src/constants/` (`client.ts`, `jobs.ts`, `projects.ts`, `profile.ts`, `date.ts`, and their types). This repo owns its career data directly. The linkedin career data package at `ops/notes/tkodev/career-notes/profiles/linkedin/` seeded the initial types and constants. career-notes' `profiles/linkedin/` is consulted only when `constants/` lacks the fact.

The data model:

| Export | Shape | Notes |
| --- | --- | --- |
| `clientEntries` / `clientIds` | `Record<ClientId, ClientEntry>` + curated ordered array | name, href, base/light/dark logo srcs |
| `jobEntries` | `JobEntry[]`, newest first | real `Date`s; no `endDate` = current |
| `projectEntries` / `projectIds` | `Record<ProjectId, ProjectEntry>` + ordered array | see below |
| `profileEntries` | `Record<ProfileId, ProfileEntry>` | Tony + collaborators |

`ProjectEntry` is the central type: required `basic` (title, intro, desc, roles, tools, skills, display-string dates) plus optional `extended` (win, impact, badges, stats, people), `sections` (ordered heading+body+media narrative blocks), `showcase` (media gallery), `testimonial` (quote, author, title, source). Home consumes `basic` + `extended` for project cards and `testimonial` for the quote cards; work details consume `sections`/`showcase`.

## Theming architecture

`themes/theme.css` is the single CSS entry imported by `app/layout.tsx`: it pulls in Tailwind and `helpers.css`, defines both theme blocks (values from [04-design.md](04-design.md)), hardcodes `dark` on the root, and declares the `@theme {}` block. Inverse sections apply `.light` locally and components invert for free. The `dark:` variant is rebound to that `.light` boundary (`@custom-variant dark (&:not(.light):not(.light *))`) so it follows the theme, not the visitor's OS.

## Motion

- The futuristic layer (boot sequence, nav-overlay open/close, section entrance reveals, marquee drift, micro-interactions) is implemented per the Motion stack choice above; the settled motion grammar is [03-solution.md](03-solution.md) §The motion system's concern.
- **Motion tokens** live in `constants/motion.ts` (durations, easings mirroring the `--brand-ease-*` CSS tokens, reveal distance/blur, and the framer `revealItem` variant), the one source components import so no motion magic numbers scatter.
- **Scroll choreography** is two client atoms: `Reveal` (fade + rise on scroll-in, `asChild`-capable so it merges onto its child rather than adding a wrapper) applied per section and per list item, and `Counter` (rolls a readout to its true value on scroll-in, via `react-countup`). Both read framer's `useReducedMotion` and degrade to a static, readable state.
- **Hero boot-in** is CSS, not framer: `Tiles`/`Tile` carry `animate-boot-in` (staggered, `motion-reduce:animate-none`), each tile gated on its image's `load` event so it never boots in empty; the reticle animates the same way.

## Background canvas

A WebGL2 fragment shader renders an animated topographic contour field in the underlay behind all content (`components/atoms/contour.tsx`): domain-warped gradient-noise terrain drawn as `fwidth`-antialiased iso-lines, monochrome (`--foreground`), with bolder index contours, slow drift, an edge-density mask so the centre breathes, and a tilt-shift blur. It is DPR-aware and frame-capped, pauses while the tab is hidden or the window is unfocused, and renders a single static frame under `prefers-reduced-motion`. Tuning constants are injected into the shader; motion is not yet tokenized ([04-design.md](04-design.md) §Motion).

Rejected directions (kept for the record): dot-matrix 3D terrain, an assembling dot field, an ascii silhouette, an isometric scan dot cloud.

## Rendering model

- All pages are fully static; data is compile-time constants.
- One root `app/layout.tsx`: fonts on `<body>`, lifecycle provider, the persistent `layout` shell (anatomy owned by the components standard §Layout shell), metadata export, analytics.
