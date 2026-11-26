# Playwright MCP Visual Self-Healing Prompt Module

Append this verification block to any coding-agent prompt (Cursor, Claude Code, Codex) when building interactive websites:

```text
## Mandatory Visual Self-Healing Verification (Playwright MCP)
After starting the dev server, do NOT declare the task done until you execute this loop via Playwright MCP:
1. Open the live app at Desktop (1440x900) and Mobile (390x844).
2. Capture and inspect console errors, uncaught page errors, and failed network requests (404/500). Fix every error immediately.
3. Scroll programmatically through 0%, 25%, 50%, 75%, and 100% of document height, capturing screenshots at each stop.
4. Inspect each screenshot for:
   - Text overflow, horizontal scrollbars (`scrollWidth > innerWidth`), or clipped headlines.
   - Z-index collisions between fixed WebGL canvases, sticky headers, and interactive CTAs.
   - Contrast readability against dynamic backgrounds.
   - Clean fallback state under `emulateMedia({ reducedMotion: 'reduce' })`.
5. If any defect is found, patch the code, re-run the Playwright check, and repeat until all viewports pass with zero console errors.
```
