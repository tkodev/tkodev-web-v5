# Process

How work happens: the sources of truth, how they stay honest with each other,
and how work is planned, parallelized, and reviewed. This doc is the methodology
layer and stays project-agnostic; the PRD, the GitHub milestones, and the
tickets derive their structure from it. How change is recorded is
[git.md](git.md)'s concern.

## The working loop

Front-loaded on distillation and direction before any build:

> Gather inspiration → distill the essence → set direction → design → thin slice → feedback → iterate → harden → polish.

The brief and observations stages of the PRD (§The PRD) are the path toward the
design: gathering, distillation, and direction-setting. The **design file is the
designed solution** that path produces, transcribed into the design contract.
Once direction settles, delivery runs as milestones (§Milestones), each through
the same cycle (§The delivery cycle).

## The PRD

`docs/prd/` is the numbered product pipeline, read in order; each stage derives
from the ones before it:

| Stage | Owns |
| --- | --- |
| `01-brief.md` | The distilled intent: what it is, who it's for, the aesthetic, references |
| `02-observations.md` | Research and risks, each paired with the direction taken |
| `03-solution.md` | The settled design at concept level: concept, surfaces, systems |
| `04-design.md` | The design-token contract, transcribed from the design file |
| `05-architecture.md` | Stack, information architecture, repo structure, data layer |

- **Observations follow the priority frame**, the order problems get worked in:
  1. **The Problem**: one or two sentences.
  2. **The Hardest Failure Mode**: what breaks worst; design around it first.
  3. **Key Design Decisions**: the load-bearing choices everything else hangs
     off.
  4. **What to Prototype First**: the riskiest slice to validate early; this
     call names the thin slice built first.
- **Directions are research, not contract.** An observation's direction lands
  only when the design file (and its transcription in the design contract)
  adopts it; where they conflict, the design contract wins.

## Division of truth

Three authorities, each owning a different kind of truth:

- **The repo holds law**: the PRD, the standards, the ticket template;
  versioned, canonical for intent and contract.
- **Figma holds pixels**: design questions resolve against the Figma nodes, not
  guesswork. Use structured design context (metadata/variables/code), not
  screenshots, when reading Figma.
- **GitHub holds state**: issues (tickets), milestones (gates), the project
  board, PRs; the live work state. Agents pull it with `gh`; it is never
  mirrored into the repo. Tickets are work state, not contract; a fact that
  matters beyond its ticket moves to the owning doc.

## Keeping it honest

1. **Docs and code change together.** Behaviour or design changes update the
   relevant doc and the code **in the same change**.
2. **Write discoveries back.** When implementation discovers a fact the docs
   missed (a token value, a variant, a breakpoint), write it back into the
   owning doc, not a commit message or a comment.
3. **Docs describe intent and contract, not implementation detail.**
   Function-level detail belongs in the code.
4. **Each fact lives in exactly one place.** Every fact, rule, or decision has
   one owning doc; everywhere else references or summarizes it, never restates
   it. Before writing something down, check whether a doc already owns it: if
   it does, point there; if it half-owns it, move it, don't fork it. When two
   docs disagree, the owner wins and the other is stale.
5. **Verify against the design.** A component isn't done until it's been
   compared against its Figma node at desktop and mobile widths.
6. **Ask when genuinely ambiguous.** After the docs, the code, and the Figma,
   don't improvise the product.

## The delivery cycle

Every milestone runs the same three phases. The human steers at the two cheap
points (the plan and the gate); agents and machines carry the middle.

1. **Plan.** Scope comes from the PRD and the design frames: cut tickets by
   file ownership, map dependencies, mark trunk vs leaf. The human approves the
   ticket set before execution; steering a plan costs minutes, steering merged
   code costs days.
2. **Execute.** Trunk tickets merge serially first; leaf tickets fan out in
   parallel worktrees. Every ticket PR must pass the machine checks and an
   agent review before merge (§Review).
3. **Gate.** The human reviews outcomes on the milestone branch's deployed
   preview against the design frames at desktop and mobile widths, plus the
   closed ticket list. Outcomes, not diffs; a human reads code only on
   escalation.

## Milestones: the human gates

A milestone is a reviewable increment behind a human gate, instantiated as a
**GitHub Milestone** whose description binds it to concrete scope and a
definition of done. Milestones form a dependency graph, not a fixed sequence;
three kinds set what may run in parallel:

| Kind | The work | Parallelism |
| --- | --- | --- |
| **System** | Creates or proves shared conventions: scaffold, tokens, the shell, the thin slice | Serial; nothing may consume unproven conventions |
| **Surface** | Delivers one surface on conventions already proven | Parallel with other surface milestones, as sibling branches with independent gates |
| **Sweep** | One cross-cutting pass over everything: coherence, polish, audits, launch | Serial, after the surfaces it sweeps |

- **The readiness rule.** A milestone may open when everything it consumes is
  merged and its inputs are settled: design frames in the design file, content
  in the data source. An unready surface (undesigned, content missing) is a
  waiting node, never a blocker for its siblings.
- **The canonical arc.** Foundations (system) → the thin slice (system; the
  riskiest slice named by the observations stage, one surface end-to-end) →
  the remaining surfaces in parallel → polish and launch sweeps. Parallelism
  is earned: it begins only once the thin slice proves the conventions.
- **Launch is a sweep** with a checklist gate: metadata and SEO verified,
  analytics live, performance budgets met, domain cut over.

## Tickets: the agent work units

A ticket is a **GitHub Issue** created from the ticket template
(`.github/ISSUE_TEMPLATE/ticket.yml`): one unit of work an agent can complete
unattended, carrying goal, owned files, dependencies, acceptance criteria,
verification commands, and the Figma node when visual.

- **Scope by file ownership.** A ticket lists the file globs it owns; two
  tickets may run in parallel only if their owned sets don't overlap.
- **Trunk, then fan out.** Work touching shared files (theme, layout shell,
  constants, utils) is a *trunk* ticket, serialized at the start of its
  milestone; *leaf* tickets (components, pages) fan out afterwards in parallel
  worktrees.
- **Shared discoveries become trunk work.** When parallel work uncovers a
  shared need (a primitive two surfaces want), it becomes its own trunk
  ticket; never two parallel copies of the same convention.
- **Pull state at task start.** An agent picking up a ticket fetches it and
  its milestone's open tickets (`gh issue list --milestone <name>`) before
  writing code.

## Branches and PRs

- One branch per milestone (`feat/m02-works`), cut from `main`.
- One branch per ticket (`feat/m02-t04-works-ledger`), PR'd into the milestone
  branch with `closes #<ticket>` in the body.
- The milestone branch PRs into `main` at the gate; merge `main` forward into
  any milestone branch that runs long.

## Review

Three tiers, split by kind, not by priority:

- **Machines check mechanics.** Lint, types, tests, build, and a green preview
  deploy gate every PR; a human never spends attention on what CI can catch.
- **Agents review correctness.** Every ticket PR, against the standards and
  the ticket's acceptance criteria.
- **Humans review taste.** At plan and gate only (§The delivery cycle): the
  qualities no check can score; fidelity to the design, motion feel, whether
  the thing is good.

## The board

The GitHub Project board is a **projection for humans**, kept current by
built-in automations (issue added → todo, PR linked → in progress,
merged/closed → done). Agents interact through `gh issue` / `gh pr` only and
never write to the Projects API.
