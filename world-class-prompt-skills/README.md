# world-class-prompt-skills

A cross-agent, open-standard skill pack for **world-class prompt engineering**, **anti-AI-slop design**, **3D/WebGPU scroll choreography**, and **evidence-based website reverse-engineering**.

Built on the Agent Skills (`SKILL.md`) specification with three-stage progressive disclosure so coding agents load only the exact tokens each task requires.

## Included Skills (`skills/`)

| Skill | Purpose |
|---|---|
| `prompt-architect` | Outcome-first prompting, effort calibration, KV-cache prefix stability, CaMeL/Spotlighting security, MCP tool schemas, DSPy GEPA, and Promptfoo CI/red-team gating. |
| `anti-slop-design` | User-origin Q&A workflow, OKLCH 60/30/10 color math, Adversarial Brand Test, and root `DESIGN.md` design contracts. |
| `cinematic-3d-web` | Single-clock Lenis + GSAP 3.13 (free plugins) + ref-driven R3F/Three.js r186+ WebGPU/TSL + Gaussian Splatting + Rapier WASM + Playwright MCP visual self-healing. |
| `url-reverse-engineer` | 4-layer extraction of any reference website or template URL into W3C DTCG 2025.10 tokens and exact motion choreography prompts. |

## Global Installation

### Option 1 — Universal CLI (`skills.sh`)
```bash
npx skills add <your-github-username>/world-class-prompt-skills/skills --all -g
```

### Option 2 — Included Symlink Installer (Claude Code, Cursor, Codex, Gemini CLI, Copilot)
```bash
git clone https://github.com/<your-github-username>/world-class-prompt-skills.git
cd world-class-prompt-skills
chmod +x install.sh
./install.sh
```

### Option 3 — Claude Code Plugin Marketplace
```plaintext
/plugin marketplace add <your-github-username>/world-class-prompt-skills
```

### Option 4 — Gemini CLI
```bash
gemini skills install https://github.com/<your-github-username>/world-class-prompt-skills.git
```

### Optional Toolkit Setup (Playwright DTCG Extractor & Promptfoo)
```bash
cd scripts && npm install
npx playwright install chromium
node extract-dtcg.mjs https://example.com ./extracted-tokens.json
```
