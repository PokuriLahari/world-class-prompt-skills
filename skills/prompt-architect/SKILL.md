---
name: prompt-architect
description: Use when designing, auditing, or optimizing production system prompts, agent harnesses, MCP tool schemas, KV-cache layouts, security defenses (CaMeL/Spotlighting), DSPy GEPA pipelines, or Promptfoo CI eval and red-team suites.
---

# Prompt Architect — Production Prompt & Harness Engineering

## Core Operating Rules
1. **User-Origin Clarification First:** Before rewriting or generating a production prompt, ask 2–4 concise questions with concrete options covering: (a) target model/runtime, (b) hard constraints & refusal policy, (c) output schema contract, and (d) evaluation metric. Never assume unstated constraints.
2. **Outcome-First Over Micromanagement:** On frontier reasoning models (Claude Fable 5.2, GPT-5.5, Gemini), specify the end goal, constraints, and acceptance criteria rather than rigid step-by-step micro-instructions. Tune the API effort parameter instead of writing "think less" in prose.
3. **Deterministic vs. Non-Deterministic Split:** Put preferences and conventions in prompts; put zero-exception rules (file edit blocks, schema validation, permission gates, tests) in deterministic harnesses, schemas, or hooks.

## The 6-Stage Prompt Architecture Checklist
1. **Frame & Contract:** Define role, outcome, hard boundaries, output format, and an explicit **"when unsure" fallback policy** (what to do on missing data or ambiguity). Remove all contradicting directives.
2. **Prefix-Stable Context Ordering (KV-Cache):** Order tokens strictly from static to dynamic so cache prefixes remain byte-identical:
   1. Immutable system policy
   2. Tool definitions & schemas
   3. Shared reference documents / 3–5 few-shot examples (cache breakpoint)
   4. Conversation history & current user input
3. **Structural Delimiters:** Wrap distinct sections in shallow XML tags (`<instructions>`, `<context>`, `<examples>`). Place long source documents at the top and the active task at the bottom to prevent "Lost in the Middle" recall decay.
4. **Constrained Outputs:** Mandate native Structured Outputs (JSON Schema / Pydantic) or FSM grammar decoding (Outlines / Guidance) instead of prose warnings.
5. **Smell-Free MCP Tool Schemas:** State *when to use*, *when NOT to use*, narrow default bounds (dates/limits), separate read vs. write tools, and require human confirmation for destructive actions.
6. **Close the Loop:** Pair every prompt with executable verifiers (tests, linters, schema graders) and version prompts independently from code (Langfuse / Prompt Hub).

## Progressive Disclosure References
- For **DSPy GEPA, Promptfoo CI, and kappa-calibrated LLM judges**, read `references/evals-and-dspy.md`.
- For **CaMeL, Spotlighting, Lethal Trifecta, and KV-cache break-even math**, read `references/security-and-caching.md`.
- For a starter CI evaluation harness, copy `../../templates/promptfooconfig.yaml`.
