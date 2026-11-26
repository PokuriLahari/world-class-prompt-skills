# DESIGN.md — Immutable Design & Motion Contract

## 1. Brand Essence & Adversarial Brand Test
- **Product:** <Replace>
- **Audience:** <Replace>
- **Signature Visual Hook (Why this cannot be mistaken for a generic template):** <Replace>

## 2. OKLCH 60/30/10 Color Tokens
- `--bg-canvas` (60%): `oklch(0.14 0.01 260)`
- `--bg-surface` (30%): `oklch(0.20 0.015 260)`
- `--ink-primary`: `oklch(0.96 0.005 260)`
- `--ink-muted`: `oklch(0.72 0.01 260)`
- `--accent-primary` (10%): `oklch(0.76 0.17 45)`

## 3. Typography & Scale Contrast
- **Display Font:** `<Distinctive Display Family>` (weight 800, tight tracking `-0.03em`)
- **Body Font:** `<Clean Editorial/Grotesk Family>` (weight 400, 16–18px)
- **Mono/Data Font:** `<Technical Mono Family>` (tabular-nums)
- **Hero-to-Body Ratio:** `>= 3.5x` via fluid `clamp()`

## 4. Hard Anti-Slop Bans
- NO Inter/Roboto defaults, NO purple-on-white gradients, NO generic rounded bento grids.
- NO ALL-CAPS eyebrow labels above every heading; NO `→` arrows on every button.

## 5. Motion & 3D Performance Contract
- **Clock:** Single `gsap.ticker` driving Lenis + ScrollTrigger + Three.js (`lagSmoothing(0)`).
- **GPU Cap:** `dpr <= 2`, pause off-screen via `IntersectionObserver`, Draco/Meshopt + KTX2.
- **A11y:** Full `gsap.matchMedia()` fallback for `prefers-reduced-motion: reduce`.
