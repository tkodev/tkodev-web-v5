# Plan

The plan: the working loop's plan-implementation output
([process](../01-standards/process.md) §Milestones), the final stage of the PRD
pipeline. The milestone list below is the whole plan: each milestone's scope,
with its status carried by the checkbox (`[ ]` todo, `[~]` in progress,
`[x]` done). Milestones run in listed order. Tasks are cut at each milestone's
plan step ([process](../01-standards/process.md) §The delivery cycle) and tracked
as branches and PRs, not listed here.

## The milestones

- [x] **m01 — Foundations**
  - Scaffold, tooling, tokens, fonts, data, shell, `/design` specimen
- [x] **m02 — Home**
  - Hero, selected works, statement, overview, testimonials, contact block
- [x] **m03 — Works**
  - Tile-wall hero, featured cards, archive ledger/reel
- [x] **m04 — Work detail**
  - The dossier template over project entries
- [x] **m05 — About**
  - Statement, method, process, the details
- [x] **m06 — Experience**
  - The service record: hero readouts, the employment ledger (employers grouped, roles as
    accordion rows), the speaking log, the education log, contact block
- [ ] **m07 — Boot sequence**
  - Boot sequence (loading screen)
- [x] **m08 — Nav overlay**
  - Full-screen menu rebuilt in the annotation language, not yet designed
- [x] **m09 — Grain / Background Canvas**
  - Background canvas + global grain in the persistent shell, no Figma frame (direction-level).
  - **Canvas: animated topographic contour field.** Value-noise driven marching-squares
    isolines in `atoms/contour.tsx`, mounted in the underlay behind all content: monochrome
    (`--foreground`), bolder index contours every third line, slow drift, edge-density mask so
    centres breathe, DPR-aware and frame-capped, paused while the tab is hidden, a single
    static frame under `prefers-reduced-motion`. Its tuning parameters live as component
    constants (motion is not yet tokenized: [04-design.md](04-design.md) §Motion).
  - **Grain: global film-grain layer** in `atoms/grain.tsx`, composited over the whole
    surface from generated `feTurbulence` SVG (no texture download), consuming the
    `--brand-grain-opacity` / `--brand-grain-period` tokens and the `grain-shift` keyframe.
  - Rejected canvas directions (kept for the record): dot-matrix 3D terrain, assembling dot
    field, ascii silhouette, isometric scan dot cloud.
- [ ] **m10 — Flagship choreography**
  - Scroll choreography on the all routes
- [ ] **m11 — Polish**
  - Coherence pass: cuts, decode reveals, scan wipes, grain unification, easter eggs, all pages have ograph and page/metadata
- [ ] **m12 — Launch**
  - SEO verified, analytics live, performance budgets met, domain cutover
