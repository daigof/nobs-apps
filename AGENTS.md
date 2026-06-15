# nobs-apps Agent Guide

This repository contains the NoBS Apps Website published at `https://nobsapps.co/`.

## Verification

- Run `pnpm check` after every change in this repository.
- `pnpm check` runs `biome check .`; treat warnings as failures and fix them before finishing.
- Run `pnpm build` when changes affect generated output, routing, deployable assets, translations, metadata, or files copied into `build/`.
- Do not edit `build/` files directly. Change the source templates, translation data, assets, or build script, then regenerate `build/` with `pnpm build`.

## Static Site Notes

- Do not add npm scaffolding only for browser verification; this repo already has its own package setup.
- Generated CV assets live at the repository root and are copied into Cloudflare Pages output by `scripts/build.mjs`:
  - `Diego-Fortes-CV.html`
  - `Diego-Fortes-CV.pdf`
