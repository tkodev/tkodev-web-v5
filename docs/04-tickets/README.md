# Tickets

The agent work units ([process](../01-standards/process.md) §Tickets): one
file per ticket, named `<milestone>-<id>-<slug>.md`. Status lives in
frontmatter and flips in the same PR as the work, so this folder is the live
board and git history is the audit trail.

## Format

```markdown
---
id: m01-t01
milestone: m01
kind: trunk | leaf
status: todo | in-progress | in-review | done | blocked
owns:
  - <glob>
depends: [<ticket ids>]
figma: <node link, when the work is visual>
---

# <id>: <title>

## Goal

## Acceptance criteria

## Verification
```
