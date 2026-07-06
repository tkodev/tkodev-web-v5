# Workflow

How docs, code and designs stay honest with each other.

## Docs

1. **Docs and code change together.** Behaviour or design changes update the relevant doc and the code **in the same change**.
2. **Write discoveries back.** When implementation discovers a fact the docs missed (a token value, a variant, a breakpoint), write it back into the owning doc — don't leave it in a commit message or a comment.
3. **Docs describe intent and contract, not implementation detail.** Function-level detail belongs in the code.
4. **Each fact lives in exactly one place.** Every fact, rule, or decision has one owning doc; everywhere else references or summarizes it, never restates it. Before writing something down, check whether a doc already owns it — if it does, point there; if it half-owns it, move it, don't fork it. When two docs disagree, the owner wins and the other is stale.

## Designs

1. **Figma is the pixel source of truth.** Design questions resolve against the Figma nodes, not guesswork. Use structured design context (metadata/variables/code), not screenshots, when reading Figma.
2. **Verify against the design.** A component isn't done until it's been compared against its Figma node at desktop and mobile widths.

## General

1. When something is genuinely ambiguous after the docs, code and figma, ask — don't improvise the product.
