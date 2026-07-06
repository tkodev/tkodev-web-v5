# Plan

The initial implementation plan: the milestone graph produced by the working
loop's plan-implementation step ([process](../standards/process.md)). This
folder is a **staging draft**. Migration moves each milestone into a GitHub
Milestone (scope and definition of done in its description) and each ticket
into an Issue from the ticket template; after migration GitHub holds the live
state and this folder is deleted.

## The milestone graph

| Id | Milestone | Kind | Depends on | Ready | Scope |
| --- | --- | --- | --- | --- | --- |
| m01 | [Foundations](m01-foundations.md) | System | none | yes | Scaffold, tooling, tokens, fonts, data, shell, `/design` specimen |
| m02 | [Proving surface](m02-proving-surface.md) | Surface | m01 | yes | Boot sequence + home hero, composed over real data |
| m03 | Home | Surface | m02 | yes | Home evidence sections: selected works, statement, overview, testimonials, contact block |
| m04 | Works index | Surface | m02 | yes | Tile-wall hero, featured cards, archive ledger/reel |
| m05 | Work detail | Surface | m02 | yes | The dossier template over project entries |
| m06 | Nav overlay | Surface | m02 | yes | Full-screen menu rebuilt in the annotation language |
| m07 | About | Surface | m02 | yes | Statement, method, the details |
| m08 | Experience | Surface | m02 | no: not designed | The service record |
| m09 | Contact | Surface | m02 | no: not designed | The transmission block |
| m10 | Flagship choreography | Surface | m05 | no: choreography is direction | Beyond MPD scroll choreography on the dossier route |
| m11 | Polish | Sweep | m03 to m10 | after surfaces | Coherence pass: cuts, decode reveals, scan wipes, grain unification |
| m12 | Launch | Sweep | m11 | after polish | SEO verified, analytics live, performance budgets met, domain cutover |

m03 to m07 run in parallel once m02's gate passes (sibling branches, disjoint
file ownership). m08 and m09 open when their frames land in Figma; m10 when
the choreography is designed. Ticket cuts happen at each milestone's plan
step; only m01 is cut in full here, m02 is sketched.

## Migration checklist

1. `gh` authenticated as tkodev; Vercel project linked for PR previews.
2. One GitHub Milestone per row above; scope column + gate from the milestone
   doc becomes the description.
3. m01 tickets created as Issues from the template, assigned to the milestone.
4. Project board created with built-in automations; agents drive `gh issue` /
   `gh pr` only.
5. Delete this folder.
