---
name: cinematic-3d-web
description: Use when prompting or building award-winning 3D, WebGPU/TSL, Gaussian Splatting, Rapier WASM physics, Web Audio 3D, or Lenis and GSAP 3.13 scroll-choreographed websites, including Playwright MCP visual self-healing verification.
---

# Cinematic 3D Web & Scroll Choreography

## Tool Selection Matrix (Match the Tool to the Visual Job)
Present these options to the user before locking the stack:

| Effect Needed | Mandated Stack |
|---|---|
| Sticky/snapped/scroll-direction UI states | Pure CSS `@container scroll-state()` & `animation-timeline: view()` (zero JS) |
| Route & shared-element morphs | Native **View Transitions API** |
| Pinned, scrubbed editorial storytelling | **GSAP 3.13+** (100% free `ScrollTrigger`, `SplitText`, `MorphSVG`, `DrawSVG`, `MotionPath`) + **Lenis** |
| Apple-style product spins / teardowns | Preloaded **Canvas Image Sequence** (60–150 AVIF/WebP frames) |
| Interactive 3D, shaders & GPU particles | **Three.js r186+ `WebGPURenderer`** (WebGL2 fallback) + **TSL** (Three.js Shading Language) or **R3F + Drei** |
| DOM-synced 3D meshes / keyframe cameras | `14islands/r3f-scroll-rig`, **Theatre.js**, or **Rive State Machines** |
| Photorealistic real-world captures | **3D Gaussian Splatting** on WebGPU (`sparkjsdev/radix`) |
| Tactile physics & audio-reactive scenes | **Rapier WASM** (`@react-three/rapier`) + **Web Audio** (`AudioWorklet` + `AnalyserNode`) |

## Non-Negotiable Engineering Invariants (Bake Into Every Prompt)
1. **Single Clock (Zero Jitter):** Drive Lenis, GSAP ScrollTrigger, and the Three.js render loop inside one `gsap.ticker` callback (`lenis.raf(time * 1000)` with `gsap.ticker.lagSmoothing(0)`). Never run competing `requestAnimationFrame` loops.
2. **Ref-Driven `useFrame`:** Never store scroll progress, mouse coords, or animation ticks in React `useState`. Mutate `useRef` state directly inside `useFrame`.
3. **GPU & Mobile Guardrails:**
   - Animate **only** `transform` and `opacity` on DOM elements.
   - Cap DPR at `Math.min(window.devicePixelRatio, 2)`.
   - Pause rendering when off-screen (`IntersectionObserver`) or tab-hidden (`document.visibilityState`).
   - Compress meshes with **Draco / Meshopt** and textures with **KTX2**.
4. **Accessibility:** Wrap all pinned/scrubbed timelines in `gsap.matchMedia()` so `(prefers-reduced-motion: reduce)` renders clean resting states.
5. **Closed-Loop Visual QA:** Always finish with a **Playwright MCP** browser verification pass across desktop and mobile viewports.

## Progressive Disclosure References
- For exact **Single-Clock, WebGPU TSL, Gaussian Splatting, and AudioWorklet code patterns**, read `references/webgpu-tsl-motion.md`.
- For the **Playwright MCP visual self-healing prompt block**, read `references/playwright-mcp-self-healing.md`.
