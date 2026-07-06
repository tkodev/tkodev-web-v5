# Docs and git

How change is recorded.

## Workflow

1. **Work on the branch specified for the task.** Never push directly to `main` — always work on a feature branch.
2. **Create new commits rather than amending.** Never force-push or skip hooks without explicit permission.
3. **Do not open a pull request unless explicitly asked.** Base new PRs on the latest `main`.

## Conventional Commits

4. All commit subjects follow [Conventional Commits](https://www.conventionalcommits.org/):

   ```text
   <type>(<optional scope>): <imperative summary>
   ```

   - **Allowed types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
   - **Scopes** match the affected area — `home`, `works`, `about`, `templates`, `tokens`, `constants`, `prd`, `docs`, etc. Omit when global.
   - **Subject:** ≤ 72 characters, lowercase, no trailing period.
   - **Body:** explain the *why* when the diff alone doesn't.
   - **Breaking changes:** `!` suffix and a `BREAKING CHANGE:` footer for route moves, renames, or behavior changes.

## Branch naming

5. Branches follow the same type vocabulary as commits:

   ```text
   <type>/<short-kebab-summary>
   ```

   Examples: `feat/works-filter`, `fix/career-dates`, `docs/prd-experiments`.

   - ≤ 40 characters, lowercase, hyphen-separated.
   - Reference the affected area, not a ticket number.

## Attribution

6. **No AI/agent attribution** in commits, PRs, or issues — no `Co-Authored-By: Claude/Codex`, no "Generated with Claude Code" markers, no `claude.ai/code` session links.
