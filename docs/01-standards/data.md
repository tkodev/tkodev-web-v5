# Data and content

Where content lives, how it's typed, and how state is managed.

1. **All content in `constants/`.** No inline copy or data in components; no external content APIs. Copy is grounded in real career facts, never invented.
2. **`constants/` is the source of truth.** It owns the site's career data outright: content is authored and edited here directly, with no vendoring, one-way sync, or write-back obligation. The career-notes package (`ops/notes/tkodev/career-notes/profiles/`) seeded the initial types and constants and stays a reference for facts not yet captured here; consult it when `constants/` lacks a fact, but the fact lands in `constants/`, which then holds it (the data model is the architecture's concern).
3. **State discipline.** zustand only for genuinely global state (the architecture owns which stores exist); everything ephemeral stays in local `useState`/URL params. No speculative stores.
4. **Dates:** job dates via `fromZonedTime(iso, appTimeZone)`, never bare `new Date()`; project display dates are pre-formatted strings.
5. **Media:** every entry carries real dimensions and real `alt` text; `src` paths are site-absolute under `public/`.
6. **Licensed assets stay put.** Licensed fonts and photography ship with the site but are never published to other repos or registries.
