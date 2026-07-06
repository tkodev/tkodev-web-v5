# Process

How work happens — the sources of truth, how they stay honest with each other,
and how work is planned, parallelized, and reviewed. How change is recorded is
[git.md](git.md)'s concern.

## The working loop

Front-loaded on distillation and direction before any build:

> Gather inspiration → distill the essence → set direction → design → thin slice → feedback → iterate → harden → polish.

The brief and observations ([01-brief.md](../prd/01-brief.md),
[02-observations.md](../prd/02-observations.md)) are the path toward the design —
gathering, distillation, and direction-setting, worked through the priority frame
the observations doc opens with. The **Figma file is the designed solution** that
path produces, transcribed into [04-design.md](../prd/04-design.md). Once
direction settles, delivery: **plan → thin slice → harden → make it shine**. The
thin slice is one page built end-to-end through the riskiest layer (the cinematic
system over real data); hardening extends the proven system across pages; polish
is the signature pass.

## Division of truth

Three authorities, each owning a different kind of truth:

- **The repo holds law** — the PRD, the standards, the ticket template:
  versioned, canonical for intent and contract.
- **Figma holds pixels** — design questions resolve against the Figma nodes, not
  guesswork. Use structured design context (metadata/variables/code), not
  screenshots, when reading Figma.
- **GitHub holds state** — issues (tickets), milestones (gates), the project
  board, PRs: the live work state. Agents pull it with `gh`; it is never mirrored
  into the repo. Tickets are work state, not contract — a fact that matters
  beyond its ticket moves to the owning doc.

## Keeping it honest

1. **Docs and code change together.** Behaviour or design changes update the
   relevant doc and the code **in the same change**.
2. **Write discoveries back.** When implementation discovers a fact the docs
   missed (a token value, a variant, a breakpoint), write it back into the owning
   doc — don't leave it in a commit message or a comment.
3. **Docs describe intent and contract, not implementation detail.**
   Function-level detail belongs in the code.
4. **Each fact lives in exactly one place.** Every fact, rule, or decision has
   one owning doc; everywhere else references or summarizes it, never restates
   it. Before writing something down, check whether a doc already owns it — if it
   does, point there; if it half-owns it, move it, don't fork it. When two docs
   disagree, the owner wins and the other is stale.
5. **Verify against the design.** A component isn't done until it's been compared
   against its Figma node at desktop and mobile widths.
6. **Ask when genuinely ambiguous** — after the docs, the code, and the Figma,
   don't improvise the product.

## Milestones — the human gates

A milestone is a **GitHub Milestone**: a reviewable increment with its definition
of done in the milestone description. The arc follows the working loop:
foundations → thin slice → harden → polish.

- **Parallelism is earned.** While conventions are still being set (foundations,
  thin slice), work runs mostly serial; once the thin slice proves the system,
  hardening fans out wide; polish returns to serial, taste-driven work.
- **Gate review is outcomes, not diffs**: the milestone branch's deployed preview
  compared against the Figma frames at desktop and mobile widths, plus the
  milestone's closed ticket list. Code between gates is agent-reviewed (§Review).

## Tickets — the agent work units

A ticket is a **GitHub Issue** created from the ticket template
([.github/ISSUE_TEMPLATE/ticket.yml](../../.github/ISSUE_TEMPLATE/ticket.yml)):
one unit of work an agent can complete unattended — goal, owned files,
dependencies, acceptance criteria, verification commands, Figma node when visual.

- **Scope by file ownership.** A ticket lists the file globs it owns; two tickets
  may run in parallel only if their owned sets don't overlap.
- **Trunk, then fan out.** Work touching shared files (theme, layout shell,
  constants, utils) is a *trunk* ticket, serialized at the start of its milestone;
  *leaf* tickets (components, pages) fan out afterwards in parallel worktrees.
- **Pull state at task start.** An agent picking up a ticket fetches it and its
  milestone's open tickets (`gh issue list --milestone <name>`) before writing
  code.

## Branches and PRs

- One branch per milestone (`feat/m02-harden`), cut from `main`.
- One branch per ticket (`feat/m02-t04-works-ledger`), PR'd into the milestone
  branch with `closes #<ticket>` in the body.
- The milestone branch PRs into `main` at the gate; merge `main` forward into any
  milestone branch that runs long.

## Review

Split by kind, not by priority:

- **Agents review correctness** — every ticket PR: standards conformance, types,
  tests, the ticket's acceptance criteria.
- **Humans review outcomes** — at gates only: the running preview, motion feel,
  the honest-readout rule. Between gates a human reads code only on escalation.

## The board

The GitHub Project board is a **projection for humans**, kept current by built-in
automations (issue added → todo, PR linked → in progress, merged/closed → done).
Agents interact through `gh issue` / `gh pr` only and never write to the Projects
API.
