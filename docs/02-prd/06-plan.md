# Plan

The plan: the working loop's plan-implementation output
([process](../01-standards/process.md) §Milestones), the final stage of the PRD
pipeline. This doc owns the milestone graph; each milestone's concrete scope,
definition of done, and live per-task status is its own doc's concern
([`docs/03-milestones/`](../03-milestones/)). Only m01 is cut in full; m02 is
sketched.

## The milestone graph

| Id | Milestone | Kind | Depends on | Status | Scope |
| --- | --- | --- | --- | --- | --- |
| m01 | [Foundations](../03-milestones/m01-foundations.md) | System | none | in-review | Scaffold, tooling, tokens, fonts, data, shell, `/design` specimen |
| m02 | [Proving surface](../03-milestones/m02-proving-surface.md) | Surface | m01 | todo | Boot sequence + home hero, composed over real data |
| m03 | Nav overlay | Surface | m01 | todo | Full-screen menu rebuilt in the annotation language |
| m04 | Home | Surface | m02 | todo | Home evidence sections: selected works, statement, overview, testimonials, contact block |
| m05 | Works index | Surface | m02 | todo | Tile-wall hero, featured cards, archive ledger/reel |
| m06 | Work detail | Surface | m02 | todo | The dossier template over project entries |
| m07 | About | Surface | m02 | todo | Statement, method, the details |
| m08 | Experience | Surface | m02 | blocked: not designed | The service record |
| m10 | Flagship choreography | Surface | m06 | blocked: choreography is direction | Beyond MPD scroll choreography on the dossier route |
| m11 | Polish | Sweep | m03 to m10 | todo | Coherence pass: cuts, decode reveals, scan wipes, grain unification |
| m12 | Launch | Sweep | m11 | todo | SEO verified, analytics live, performance budgets met, domain cutover |

m03 depends only on foundations (it consumes shell and token conventions, not
the cinematic system) and runs alongside m02. m04 to m07 run in parallel once
m02's gate passes (sibling branches, disjoint file ownership). m08 opens when
its frames land in Figma; m10 when the choreography is designed. Contact is not
its own milestone: it ships as the recurring transmission section closing each
surface ([03-solution.md](03-solution.md) §The transmission section).
