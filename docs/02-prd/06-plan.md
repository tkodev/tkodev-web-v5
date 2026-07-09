# Plan

The plan: the working loop's plan-implementation output
([process](../01-standards/process.md) §Milestones), the final stage of the PRD
pipeline. The milestone list below is the whole plan: each milestone's dependency
and scope, its status carried by the checkbox (`[ ]` todo, `[~]` in progress,
`[x]` done). Tasks are cut at each milestone's plan step
([process](../01-standards/process.md) §The delivery cycle) and tracked as
branches and PRs, not listed here.

## The milestones

- [~] **m01 — Foundations**
  - Depends on: none
  - Scope: Scaffold, tooling, tokens, fonts, data, shell, `/design` specimen
- [x] **m04 — Home**
  - Depends on: m02
  - Scope: Hero, selected works, statement, overview, testimonials, contact block
- [x] **m05 — Works**
  - Depends on: m02
  - Scope: Tile-wall hero, featured cards, archive ledger/reel
- [~] **m06 — Work detail**
  - Depends on: m02
  - Scope: The dossier template over project entries
    - All featured projects should have stories
    - All projects should make use of the project details provided in career-notes' linkedin/projects and linkedin/experience if possible, alternatively, the website/* entries
    - Manual work: For images that are portrait or taller, we should use a correct aspect ratio image that places the portrait image in the center
- [x] **m07 — About**
  - Depends on: m02
  - Scope: Statement, method, the details
- [ ] **m08 — Experience**
  - Depends on: m02
  - Scope: The service record, not yet designed
- [ ] **m03 — Nav overlay**
  - Depends on: m01
  - Scope: Full-screen menu rebuilt in the annotation language, not yet designed
- [ ] **m02 — Boot sequence**
  - Depends on: m01
  - Scope: Boot sequence
- [ ] **m10 — Flagship choreography**
  - Depends on: m06
  - Scope: Scroll choreography on the all routes
- [ ] **m11 — Polish**
  - Depends on: m03 to m10
  - Scope: Coherence pass: cuts, decode reveals, scan wipes, grain unification
- [ ] **m12 — Launch**
  - Depends on: m11
  - Scope: SEO verified, analytics live, performance budgets met, domain cutover
