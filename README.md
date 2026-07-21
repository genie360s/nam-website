# nam_and_associates
Is a 360 DSP and Legal Boutique Firm

## GitHub automation

- Dependabot opens dependency and GitHub Actions update PRs against `dev` only via `.github/dependabot.yml`.
- CI runs on PRs and pushes to `dev` and `main` and validates install, test, build, and security audit.
- PRs to `main` opened by human users automatically enable auto-merge and will merge only after required checks pass.

## Required repository settings

Set branch protection on `main` in GitHub settings:

- Require a pull request before merging.
- Require status checks to pass before merging.
- Mark `CI / test-build` as a required status check.
- Allow auto-merge.

Without branch protection, GitHub can merge before checks are enforced.
