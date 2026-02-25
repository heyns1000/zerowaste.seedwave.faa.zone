# CLAUDE.md — zerowaste.seedwave.faa.zone

This file provides guidance for AI assistants (Claude and others) working in this repository.

---

## Repository Overview

**Project**: zerowaste.seedwave.faa.zone
**Status**: Newly initialized — no source files committed yet.
**Branch convention**: Feature branches follow the pattern `claude/<description>-<session-id>`

This repository is a blank slate. When source code is added, update the relevant sections below to reflect the actual stack, conventions, and workflows.

---

## Repository State

As of the initial commit, this repository contains only this `CLAUDE.md` file. There are no source files, configuration files, or other assets.

When the project is bootstrapped:
- Update the **Technology Stack** section with the actual languages and frameworks chosen.
- Update **Directory Structure** to reflect the real layout.
- Update **Development Workflows** with the actual commands to install, build, test, and lint.

---

## Technology Stack

> To be determined once the project is initialized.

Expected candidates based on the project domain (web application):
- **Frontend**: Static site generator (e.g., Next.js, Astro, Hugo) or plain HTML/CSS
- **Backend**: Node.js / Python / Go (update when chosen)
- **Package manager**: npm / yarn / pnpm / pip (update when chosen)
- **Deployment**: Static hosting or containerized service

---

## Directory Structure

> To be populated once source files are added.

Anticipated structure (update to match reality):

```
zerowaste.seedwave.faa.zone/
├── CLAUDE.md          # This file
├── README.md          # Human-facing project overview (add when ready)
├── src/               # Application source code
├── public/            # Static assets
├── tests/             # Test files
├── .github/
│   └── workflows/     # CI/CD pipelines
└── ...
```

---

## Development Workflows

> Commands below are placeholders. Replace with actual commands once the project is set up.

### Setup

```bash
# Clone and enter the repository
git clone <repo-url>
cd zerowaste.seedwave.faa.zone

# Install dependencies (update command to match the stack)
npm install          # Node.js
# or
pip install -r requirements.txt  # Python
```

### Running Locally

```bash
# Start development server (update to match actual command)
npm run dev
# or
python manage.py runserver
```

### Building

```bash
# Production build (update to match actual command)
npm run build
```

### Testing

```bash
# Run all tests (update to match actual command)
npm test
# or
pytest
```

### Linting / Formatting

```bash
# Lint (update to match actual command)
npm run lint
# or
flake8 .
```

---

## Git Conventions

### Branch Naming

- Feature branches: `feature/<short-description>`
- Bug fix branches: `fix/<short-description>`
- Claude-managed branches: `claude/<description>-<session-id>`
- Always branch off of `main` (or the designated base branch)

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

[optional body]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`

**Examples**:
```
feat(ui): add zero-waste calculator component
fix(api): handle null response from inventory endpoint
docs: update CLAUDE.md with project structure
chore: add eslint configuration
```

### Pull Requests

- Keep PRs focused and small where possible.
- Include a summary of changes and a test plan in the PR description.
- Reference related issues with `Closes #<issue-number>` when applicable.

---

## Code Style Conventions

> Update this section with actual linting/formatting rules once tooling is configured.

### General Principles

- **Clarity over cleverness** — write code that is easy to read and understand.
- **Minimal changes** — make only the changes needed for the task at hand.
- **No over-engineering** — avoid abstractions, helpers, or utilities that serve only a single use case.
- **No unnecessary comments** — only comment logic that is not self-evident.

### Naming Conventions

- Follow the idiomatic naming convention for the chosen language/framework.
- Be descriptive and consistent throughout the codebase.

---

## Environment Variables

> To be documented once the project is initialized.

Store secrets and configuration in environment variables, never hardcoded in source files.

- Use `.env.example` (committed) to document required variables without values.
- Use `.env` (gitignored) for local development values.

---

## CI/CD

> To be configured once the project is initialized.

Planned pipeline stages:
1. **Lint** — enforce code style
2. **Test** — run the full test suite
3. **Build** — verify the production build succeeds
4. **Deploy** — deploy to hosting (on merge to `main`)

---

## Security Notes

- Do not commit secrets, credentials, API keys, or tokens.
- Do not commit `.env` files.
- Keep dependencies up to date and audit them regularly.
- Validate all user input at system boundaries.

---

## Notes for AI Assistants

- **Read before editing**: Always read a file before modifying it.
- **Minimal scope**: Only make changes directly requested or clearly necessary.
- **Branch discipline**: Develop on the designated `claude/` branch; never push to `main` without explicit permission.
- **Confirm before destructive actions**: Force pushes, branch deletions, dropping data — always confirm with the user first.
- **Update this file**: When the project gains real content, update the sections above to reflect the actual state of the codebase.
