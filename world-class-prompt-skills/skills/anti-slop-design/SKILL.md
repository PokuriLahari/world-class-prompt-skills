---
name: anti-slop-design
description: Use when planning websites, landing pages, apps, visual systems, typography, color palettes, or frontend prompts to eliminate generic AI-made aesthetics via a strict user-origin Q&A workflow, OKLCH 60/30/10 palettes, Adversarial Brand Test, and DESIGN.md contracts.
---

# Anti-Slop Design — User-Origin Taste Engineering

## Mandatory User-Origin Workflow (Never Decide Unilaterally)
Whenever a user asks for a website prompt or frontend build, execute these steps **in order**, pausing for the user's choice at every step:

1. **Step 1 — Starting Point & Target Tool:** Ask whether we are **(A) Designing from scratch** or **(B) Reverse-engineering a reference URL** (route to `url-reverse-engineer`), and which AI tool will consume the prompt (Cursor, Claude Code, v0, Lovable, Bolt.new, or raw code).
2. **Step 2 — Product, Audience & Narrative Arc:** Ask 2–3 focused questions with quick-pick options to define the product, target audience, primary CTA, and section sequence.
3. **Step 3 — Visual Direction Options:** Propose **3 distinct, non-generic aesthetic directions** (each with an OKLCH 60/30/10 palette, distinctive font pairing, layout geometry, and tonal voice). Wait for the user to pick or combine.
4. **Step 4 — Motion & 3D Intensity:** Present concrete motion tiers (CSS Scroll-State -> GSAP ScrollTrigger + Lenis -> Canvas Sequence -> Three.js WebGPU/TSL + Gaussian Splatting) with mobile performance trade-offs. Hand off to `cinematic-3d-web` once chosen.
5. **Step 5 — Two-Pass Plan -> Critique -> Prompt/Code:** Output a compact `DESIGN.md` blueprint first, run the **Adversarial Brand Test**, get user approval, and ONLY THEN emit the final master prompt or code.

## The Adversarial Brand Test (Mandatory Gate)
Before approving any blueprint or writing code, ask:
> *"If I strip the logo and brand name off this layout, could it belong to any generic AI SaaS template?"*

If the answer is **yes**, reject the plan immediately and redesign the grid rhythm, typographic scale contrast, and signature interaction before proceeding.

## Progressive Disclosure References
- For the **banned AI cliché list, OKLCH 60/30/10 math, and typographic contrast rules**, read `references/anti-slop-oklch-rules.md`.
- For the reusable design contract template, copy `../../templates/DESIGN.md`.
