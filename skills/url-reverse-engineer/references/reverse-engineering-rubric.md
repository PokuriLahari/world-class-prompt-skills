# 4-Layer Reference URL Extraction Rubric

1. **Layer 1 — Information Architecture & Section Rhythm:**
   - Map every section in order (e.g., `HERO -> SHOWREEL -> STATEMENT -> INTERACTIVE 3D -> PROOF -> FOOTER`).
   - Record each section's viewport height (`100svh`, `300vh` pinned track), grid columns, and entry/exit transition.
2. **Layer 2 — W3C DTCG 2025.10 Design Tokens:**
   - Capture surface/ink/accent colors (converted to OKLCH), font families, fluid `clamp()` type scale, spacing ladder, border radii, and shadow/blur levels.
3. **Layer 3 — Motion Choreography & Stack Fingerprint:**
   - Detect libraries (`gsap`, `lenis`, `three`, `rive`, `framer-motion`, CSS `animation-timeline`).
   - Document exact triggers, pin durations (`end: '+=250%'`), scrub values (`scrub: 1`), easing curves, SplitText stagger intervals, and camera/shader transitions.
4. **Layer 4 — Honest Audit (Observed vs. Inferred):**
   - Explicitly flag anything blocked by auth, minified WebGL shaders, or anti-bot walls, and ask the user for a short screen recording or DevTools snippet rather than guessing silently.
