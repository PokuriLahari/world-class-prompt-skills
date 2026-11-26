# Evals, Calibrated Judges & DSPy GEPA Optimization

## 1. Golden Dataset Priority
Build eval datasets in this exact order—never rely solely on LLM-generated happy paths:
1. **Real production failures** (regressions already observed).
2. **Deliberate edge cases** (ambiguous, adversarial, missing-data, refusal cases).
3. **Representative happy paths.**

## 2. Tiered Scoring
- **Tier 1 (Deterministic Code First):** JSON schema validity, regex, exact labels, latency/token budgets, valid tool names, and field-level extraction accuracy (schema validity != semantic accuracy).
- **Tier 2 (LLM-as-a-Judge):** Reserve for subjective prose traits.
  - Use **binary (pass/fail)** or **3-point** scales—never 1–10.
  - Score **one dimension per judge call** with concrete pass/fail anchors.
  - Calibrate against 50–100 human-labeled samples using **Cohen's kappa** (not raw accuracy).
  - Test order-swap consistency to neutralize position, verbosity, and self-preference bias.

## 3. DSPy GEPA (Reflective Prompt Evolution)
When manual prompt editing plateaus or you switch models:
- Define typed **Signatures** and composable **Modules**.
- Return `Prediction(score, feedback)` from your metric so GEPA gets natural-language error diagnostics as its optimization gradient.
- Pair a fast `task_model` (~90–95% of calls) with a strong `reflection_lm` (~5–10% of calls).
- Enable Pareto frontier merging (`use_merge=True`) and `skip_perfect_score=True` under a strict call budget (`auto="light" | "medium" | "heavy"`).
