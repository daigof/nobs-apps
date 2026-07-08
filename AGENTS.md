# nobs-apps Agent Guide

This repository contains the NoBS Apps Website published at `https://nobsapps.co/`.

## Verification

- Run `pnpm check` after every change in this repository.
- `pnpm check` runs `biome check .`; treat warnings as failures and fix them before finishing.
- Run `pnpm build` when changes affect generated output, routing, deployable assets, translations, metadata, or files copied into `dist/`.
- Do not edit `dist/` files directly. Change the source templates, translation data, assets, or build script, then regenerate `dist/` with `pnpm build`.
- After every change, run a Playwright verification against the local site before finishing. Prefer Codex Playwright MCP tools. For docs-only or metadata-only changes, a lightweight screenshot or page-load smoke check is enough when the local site can run. If Playwright or the local site cannot run, state why and what was checked instead.

## Static Site Notes

- Do not add npm scaffolding only for browser verification; this repo already has its own package setup.
- For local browser checks, build or serve the generated site locally and test it with Playwright. If the Playwright MCP tools are unavailable, use `pnpm dlx playwright ...` rather than adding new browser-test scaffolding.
- Generated CV assets live at the repository root and are copied into Cloudflare Pages output by `scripts/build.mjs`:
  - `Diego-Fortes-CV.html`
  - `Diego-Fortes-CV.pdf`
