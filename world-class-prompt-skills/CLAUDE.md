# CLAUDE.md

See `AGENTS.md` for the cross-agent routing contract.

## Claude-Specific Guardrails
- Keep deterministic rules (file permissions, lint/build checks, Playwright visual checks) in hooks/tooling rather than prose reminders.
- Calibrate reasoning effort (`low`–`max`) to task complexity instead of writing "think less" in prompts.
- Always run the **Adversarial Brand Test** in `skills/anti-slop-design/SKILL.md` before writing frontend code.
