#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILLS_SRC="$REPO_DIR/skills"

TARGETS=(
  "$HOME/.agents/skills"
  "$HOME/.claude/skills"
  "$HOME/.cursor/skills"
  "$HOME/.gemini/skills"
  "$HOME/.copilot/skills"
)

echo "Installing world-class-prompt-skills globally..."

for target in "${TARGETS[@]}"; do
  mkdir -p "$target"
  for skill_dir in "$SKILLS_SRC"/*; do
    [ -d "$skill_dir" ] || continue
    skill_name="$(basename "$skill_dir")"
    ln -sfn "$skill_dir" "$target/$skill_name"
  done
  echo "  -> Linked skills into $target"
done

echo "Done. All 4 skills are now linked globally across Claude Code, Cursor, Codex, Gemini CLI, and GitHub Copilot."
