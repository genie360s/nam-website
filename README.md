# NAM and Associates Website

Corporate website for NAM and Associates, a 360 DSP and legal boutique firm.

This repository contains a Next.js application with Tailwind CSS styling and a contact email API route powered by Nodemailer.

## Project goals

- Present firm services, expertise, legal offerings, and content pages.
- Provide a contact flow that sends emails to the firm.
- Enforce CI, security checks, and safe dependency updates.

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Nodemailer
- GitHub Actions + Dependabot

## Repository layout

The application lives inside the `nam` directory.

```text
.
├── .github/
│   ├── dependabot.yml
│   └── workflows/
├── nam/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── LICENSE
└── README.md
```

## Local development

### Prerequisites

- Node.js 22 LTS (recommended for CI parity)
- npm 10+

### Install and run

```bash
cd nam
npm ci
npm run dev
```

The app starts on the default Next.js development port.

## Environment variables

Create `nam/.env.local`:

```env
EMAIL_USER=your-smtp-username
EMAIL_PASS=your-smtp-password
```

These are required by the contact API route in `nam/src/app/api/send-email/route.js`.

## Available scripts

Run from `nam/`:

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run typecheck`: TypeScript checks without emitting files
- `npm run lint`: ESLint checks with zero warnings allowed
- `npm run test`: Typecheck + lint (project quality gate)

## Contact API behavior

- Endpoint: `POST /api/send-email`
- Expects JSON body with `fullName`, `email`, and `message`
- Uses SMTP transport with credentials from environment variables
- Sends to the configured recipient currently set in route code

## CI, security, and update automation

### CI workflow

`/.github/workflows/ci.yml` runs on pushes and pull requests for `dev` and `main`.

Checks included:

- Dependency install (`npm ci`)
- Quality gate (`npm run test`)
- Production build (`npm run build`)
- Security audit (`npm audit --audit-level=high`)

### Dependabot policy

`/.github/dependabot.yml` is configured so Dependabot opens PRs to `dev` only:

- npm dependency updates target `dev`
- GitHub Actions updates target `dev`

### Auto-merge behavior

- Dependabot PRs to `dev` can be auto-approved and auto-merged when they are safe update types.
- Human-created PRs to `main` have auto-merge enabled, but merge only occurs after required checks pass.

## Required GitHub repository settings

To fully enforce quality gates, configure branch protection for `main`:

- Require pull request before merge
- Require status checks before merge
- Require `CI / test-build`
- Allow auto-merge

Without these settings, workflows run but are not strictly enforced as merge requirements.

## Deployment notes

- Build artifact is generated with `npm run build`.
- Deploy to your preferred platform after CI passes.
- If deploying with environment variables, set `EMAIL_USER` and `EMAIL_PASS` in the platform secrets/settings.

## Troubleshooting

- If lint fails after dependency changes, run `npm ci` again to sync lockfile state.
- If email sending fails, verify SMTP credentials and provider access restrictions.
- If CI passes locally but fails remotely, confirm Node version parity (22).

## License

Licensed under Apache License 2.0. See `LICENSE`.
