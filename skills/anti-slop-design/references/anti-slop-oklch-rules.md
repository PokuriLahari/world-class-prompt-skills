# Anti-Slop & OKLCH 60/30/10 Ruleset

## 1. Banned Generic AI Aesthetics (Unless Explicitly Requested)
Reject these default convergence traps:
1. Default Inter/Roboto + purple-to-blue gradients on plain white backgrounds.
2. Warm cream + generic serif + terracotta accent cliché.
3. Pitch-black background + single neon cyan/lime glow cliché.
4. Identical rounded-corner bento cards repeated across every section.
5. Generated-page typographic tells: ALL-CAPS eyebrow labels above every heading, italic/colored single-word headline highlights, `WORD — fragment` labels, and `→` arrows appended to every button.

## 2. OKLCH 60/30/10 Color Discipline
Specify all color tokens in perceptually uniform `oklch(L C H)` so contrast ratios remain mathematically predictable:
- **60% Primary Canvas:** Grounded neutral surface with intentional undertone (never raw `#000000` or sterile `#ffffff` without purpose).
- **30% Secondary Surface & Ink:** Elevated structural surfaces, crisp borders, and high-contrast primary typography (WCAG AA >= 4.5:1 body, >= 3:1 display).
- **10% Sharp Accent:** Reserved exclusively for primary actions, active states, and focal data—never smeared across decorative gradients.

## 3. Extreme Typographic Contrast & Microcopy
- Pair fonts with real structural tension (e.g., expressive display serif + crisp technical mono, or neo-grotesque + high-contrast editorial).
- Use dramatic weight jumps (`200/300` vs. `800/900`) and `3x+` scale jumps between hero display and body copy.
- Write active, concrete UI copy ("Export DTCG tokens" instead of "Submit"; purposeful empty states and actionable error recovery).
