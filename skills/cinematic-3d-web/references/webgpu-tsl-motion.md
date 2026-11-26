# WebGPU TSL, Single-Clock Sync & Specialized Frontiers

## 1. Single-Clock Wiring Pattern (Lenis + GSAP + Three.js)
```js
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
  if (isCanvasVisible && !document.hidden) {
    renderer.render(scene, camera);
  }
});
gsap.ticker.lagSmoothing(0);
```

## 2. Three.js r186+ WebGPU & TSL Rules

Initialize new THREE.WebGPURenderer({ antialias: true, powerPreference: 'high-performance' }) and await renderer.init(). It falls back automatically to WebGL 2 where WebGPU is unavailable.

Author custom materials and compute shaders in TSL (three/tsl) rather than raw GLSL strings so shaders compile cleanly to both WGSL and GLSL.

Drive TSL uniform nodes directly from GSAP ScrollTrigger (gsap.to(uProgress, { value: 1, ease: 'power2.inOut' })).

## 3. Specialized Interactive Guardrails

3D Gaussian Splatting (sparkjsdev/radix): Stream progressive splats with a lightweight poster/placeholder frame during load and cap viewport resolution on mobile.

Web Audio 3D: Initialize AudioContext strictly inside a user-gesture handler (click/pointerdown). Use AudioWorklet for DSP and pass AnalyserNode sub-bass/mid/high FFT energy into ref-backed shader uniforms.

Rapier WASM Physics: Step physics on fixed timesteps, sleep idle bodies, and keep hero colliders simplified (convex hulls/primitives).

Spatial Web: Use progressive enhancement with <model>, WebSpatial Z-axis elevation, and WebKit spatial: portal CSS media queries so 2D browsers remain fast and intact.
