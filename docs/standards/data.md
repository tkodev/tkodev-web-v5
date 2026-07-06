# Data and content

Where content lives, how it's typed, and how state is managed.

1. **All content in `constants/`.** No inline copy or data in components; no external content APIs. Copy is sourced from the project's designated content sources — never invented.
2. **State discipline.** zustand only for genuinely global state (lifecycle, nav overlay); everything ephemeral stays in local `useState`/URL params. No speculative stores.
3. **Dates:** job dates via `fromZonedTime(iso, appTimeZone)` — never bare `new Date()`; project display dates are pre-formatted strings.
4. **Media:** every entry carries real dimensions and real `alt` text; `src` paths are site-absolute under `public/`.
5. **Licensed assets stay put.** Licensed fonts and photography ship with the site but are never published to other repos or registries.
