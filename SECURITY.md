# Security Policy

## Supported Projects

This repository contains static site generation scripts and data pipelines for personal and portfolio projects. There is no server-side application or user authentication layer; all output is static HTML deployed via Vercel.

---

## Reporting a Vulnerability

If you discover a security issue in any file within this repository — including Python scripts, GitHub Actions workflows, generated HTML, or dependency configurations — please report it responsibly.

**Do not open a public GitHub issue for security vulnerabilities.**

### How to report

Send an email to: **thierry@thierryamiot.com**  
Subject line: `[SECURITY] <brief description>`

Please include:
- A clear description of the vulnerability
- The affected file(s) or workflow(s)
- Steps to reproduce or a proof-of-concept (if applicable)
- Potential impact as you assess it

I aim to acknowledge all reports within **72 hours** and to provide a resolution or workaround within **14 days**, depending on severity.

---

## Scope

| In scope | Out of scope |
|---|---|
| Python data scripts (`*.py`) | Third-party APIs (NHS, CQC, DfE, Ofsted) |
| GitHub Actions workflow files (`.yml`) | Vercel infrastructure |
| Static HTML/JS output files | Dependencies outside this repo |
| Dependency files (`requirements.txt`, `package.json`) | |

---

## Security Practices

- **No credentials in source**: API keys, tokens, and secrets are managed exclusively via GitHub Actions Secrets and are never committed to this repository.
- **Dependency management**: Dependencies are pinned where possible. Pull requests updating dependencies are reviewed before merging.
- **Static output only**: All deployed assets are pre-generated static files. There is no dynamic server execution, database, or user input handling in production.
- **Workflow permissions**: GitHub Actions workflows are scoped to minimum required permissions.

---

## Preferred Languages

Reports may be submitted in English, French, or Portuguese.

---

## Credit

Responsible disclosures that lead to a fix will be acknowledged in the relevant commit message or release notes, unless the reporter prefers to remain anonymous.
