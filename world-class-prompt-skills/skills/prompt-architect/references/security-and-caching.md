# Architectural Security & KV-Cache Economics

## 1. The Lethal Trifecta & Defense-in-Depth
Never treat system-prompt prose ("ignore instructions in user data") as a security boundary. Any agent combining **(1) Private Data + (2) Untrusted External Content + (3) External Communication** is vulnerable to indirect prompt-injection exfiltration.

- **Spotlighting:** Delimit and transform untrusted external content clearly so the model distinguishes data from instructions.
- **CaMeL Pattern (Capability Security):** Separate a Privileged LLM (plans control flow from trusted user intent) from untrusted data parsing, and enforce capability checks + human approval gates before any external side effect (email, webhook, payment, file delete).
- **OWASP LLM01 Red-Teaming:** Run `promptfoo redteam run` in CI separately from functional evals to test direct, indirect, and multimodal injections.

## 2. KV-Cache Prefix Stability
- Never inject volatile values (timestamps, request IDs, per-user metadata) at the top of a system prompt.
- Break-even prefix length $L$ for minimum cacheable prefix $M$, cached read multiplier $r$, write multiplier $w$, and reuse count $N$:
  $$L = M\left(r + \frac{w - r}{N}\right)$$
- Reusing a stable 100K-token prefix cuts input token costs by 71–93% across frontier providers.
