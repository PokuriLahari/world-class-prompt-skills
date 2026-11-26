---
name: url-reverse-engineer
description: Use when a user shares a website URL, template link, or screenshot and wants to reverse-engineer its design tokens (W3C DTCG 2025.10), layout architecture, and exact 3D/scroll animation craft into a faithful build prompt for their own brand.
---

# URL Reverse Engineer — Evidence-Based Craft & Motion Extraction

## Core Mandate
Reproduce the **exact level of visual craft, layout rhythm, and animation physics** of a reference URL for the user's own brand—without plagiarizing proprietary copy, logos, or copyrighted assets.

## User-Origin Workflow
1. **Step 1 — Inspect & Clarify:** Ask the user:
   - What is the reference URL (and optional screenshots/videos if behind auth)?
   - What is **your** brand/product that will replace the reference content?
   - Target fidelity: **(A) Same structure + exact motion physics**, **(B) Same motion & craft with a fresh OKLCH palette/typography**, or **(C) Specific sections/animations only**.
2. **Step 2 — Run Automated Extraction (When Shell/Playwright Is Available):**
   Run `node ../../scripts/extract-dtcg.mjs <URL> ./tokens.dtcg.json` to extract live W3C DTCG 2025.10 design tokens, typography, section geometry, and detected animation libraries.
3. **Step 3 — 4-Layer Evidence Audit:** Present the extracted blueprint clearly separated into **Observed (verified from DOM/CSS/assets)** vs. **Inferred (estimated from screenshots/behavior)** and ask the user to confirm before generating the final prompt.
4. **Step 4 — Emit Master Build Prompt:** Combine the approved DTCG tokens, `DESIGN.md` contract, and `cinematic-3d-web` motion spec into a copy-ready prompt for the user's chosen AI tool.

## Progressive Disclosure Reference
- For the **4-layer extraction rubric and observed-vs-inferred protocol**, read `references/reverse-engineering-rubric.md`.
