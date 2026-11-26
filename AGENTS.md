# AGENTS.md — Global Operating Contract

This repository provides four modular Agent Skills under `skills/`. All AI agents operating with these skills MUST obey two non-negotiable invariants:

1. **User-Origin Decision Rule:** Never make unilateral aesthetic, architectural, or stack decisions when generating website prompts or blueprints. Present concise, concrete options and wait for the user's selection before generating final code or prompts.
2. **Progressive Disclosure:** Read only the `SKILL.md` matching the user's active task. Open files inside `references/` or `templates/` only when the task requires that layer.

## Skill Routing Table
- **Prompt auditing, system prompts, evals, MCP schemas, caching, security:** `skills/prompt-architect/SKILL.md`
- **Website concepts, brand identity, typography, palettes, anti-slop blueprints:** `skills/anti-slop-design/SKILL.md`
- **3D scenes, WebGPU/TSL shaders, scroll choreography, visual QA:** `skills/cinematic-3d-web/SKILL.md`
- **Cloning craft/motion from a live URL or template link:** `skills/url-reverse-engineer/SKILL.md`
