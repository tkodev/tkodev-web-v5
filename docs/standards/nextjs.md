# Next.js

How the framework is used — App Router, rendering, and the built-in primitives.

## Foundations

Runtime, language, and what "done" requires.

1. **pnpm only.** Never npm or yarn. Node ≥ 24.
2. **TypeScript strict.** No `any` escape hatches; domain types live in `types/`.
3. **Unit tests are colocated** with what they test — added where they earn their place, run via `pnpm test`.

## Concepts

1. **App Router conventions.** One root layout; pages compose section components inside `<main>`; the `app/` route tree mirrors the site's information architecture.
2. **Server components by default.** `'use client'` only where state or browser APIs demand it (overlays, accordions, marquees, motion-driven sections) — and as low in the tree as possible.
3. **Static generation everywhere.** No runtime content fetching. Dynamic routes prebuild with `generateStaticParams` over their id lists and return `notFound()` for unknown ids.
4. **All media renders through `next/image`** with explicit width and height.
5. **Fonts load through `next/font/local`**, exposed as CSS variables and applied on `<body>`.
6. **Metadata via the Metadata API** — a full root export plus per-page overrides (never hand-rolled `<head>` tags).

## Folder structure

7. **Application code lives under `src/`**; `public/` stays at the repo root. The canonical layout:

   ```text
   .
   ├── public/           # static assets (fonts, images, favicons, files)
   └── src/
       ├── app/          # App Router routes: layout.tsx, page.tsx, <route>/page.tsx
       ├── components/   # atomic design: atoms/ · molecules/ · organisms/ · templates/
       ├── constants/    # typed compile-time content + site config
       ├── types/        # domain types
       ├── themes/       # CSS token files (theme.css entry, colors, helpers)
       ├── fonts/        # next/font/local loader modules
       ├── stores/       # zustand stores — global state only
       ├── providers/    # context providers wired in the root layout
       ├── hooks/        # shared React hooks
       └── utils/        # helpers (cn/cva re-exports, dates, strings)
   ```

   Folders are added only when they earn their place — no empty scaffolding for layers a project doesn't use yet.
