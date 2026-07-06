# m02: Proving surface

Surface milestone, the proving surface: the boot sequence and the home hero
(the instrument panel) composed over real data. Its gate is what unlocks the
parallel surface milestones (m04 to m07). Scoped tighter than the full home
page on purpose; the evidence sections are m03.

**Gate**: the deployed preview against the boot frame
([`9:797`](https://www.figma.com/design/XcvIouVcagv7vGRRLEy6Gj/tkodev-web-v5?node-id=9-797))
and the home hero region of
([`9:2380`](https://www.figma.com/design/XcvIouVcagv7vGRRLEy6Gj/tkodev-web-v5?node-id=9-2380))
at desktop and mobile; every readout real (honest-readout rule); the
reduced-motion path complete (no boot, static instruments); boot skippable on
any input and never blocking a loaded page; LCP unaffected.

## Spike candidates

Cut at this milestone's plan step; throwaway by definition, answers written
back to the owning doc.

- Generated grain performance: SVG turbulence vs canvas, at full viewport
  with blend modes.
- Animated reticle/ring approach: SVG animation vs canvas-in-cell, including
  the mix-blend-exclusion core across browsers.
- Boot progress wiring: what real loading signal drives the readout.

## Draft ticket cut

Final cut and full bodies happen at the milestone's plan step:

- lifecycle store (zustand: `loading → ready`) and boot overlay sequence
- grain underlay layer
- ring/reticle vector composite
- home hero: instrument panel over `constants/` (identity, designation,
  corner annotations)
- reduced-motion and skip paths across all of the above
