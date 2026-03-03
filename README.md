# GitHub MCP vs GitHub CLI — AI performance tests

This repository is used to test GitHub MCP (Model Context Protocol) vs the GitHub CLI (`gh`) for AI-enabled workflows and measure their relative cost in terms of context-window usage and operational overhead. Read [Article](https://medium.com/tech-ai-chat/avoid-mcp-when-other-options-are-available-89849a89b05b?sk=80eeca3b91f95ce08bf095ccd8d6ddd4) for detail

### GitHub CLI Issue and Pull Request Examples
- Issue [#1](https://github.com/elye/ai-test-gh/issues/1) — Using GitHub CLI
- Pull request [#2](https://github.com/elye/ai-test-gh/pull/2) — Using GitHub CLI

### GitHub MCP Issue and Pull Request Examples

- Issue [#3](https://github.com/elye/ai-test-gh/issues/3) — Using GitHub CLI
- Pull request [#4](https://github.com/elye/ai-test-gh/pull/4) — Using GitHub CLI

## Summary

- MCP attaches a persistent tool definition to the agent's context window, consuming context even when the tool isn't actively used.
- The author measured additional context overhead from MCP (examples: an increase from ~11% to ~16% of the context window in simple prompts; up to ~20% when specific MCP tool definitions are included).
- On-demand approaches (Agent Skills or invoking GitHub via the CLI) reduce context usage because the tool/command payloads are only added when executed.

## Key findings

- MCP: convenient but introduces constant context overhead and can be wasteful for agentic coding tasks where the context window is limited.
- GitHub CLI (on-demand): lower constant cost; in the author's experiment total context usage dropped to roughly ~15% when using CLI-driven prompts.
- Agent Skills + CLI: combine lazy-loading with fine-grained control and are generally more efficient for GitHub workflows.

## Recommendation

- Prefer lighter, on-demand solutions (Agent Skills + `gh`) for GitHub automation when possible.
- Enable MCP only when its direct integrations provide clear, necessary benefits that outweigh the constant context cost.

## How to run the simple static site locally

Open [index.html](index.html) in your browser, or serve locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

If you'd like, I can add a short test script that compares context-window usage across a few example prompts for MCP vs `gh` automation.



# Hello World Website

Simple static site. Open [index.html](index.html) in your browser, or serve locally.

Serve with Python 3:

```bash
python3 -m http.server 8000

# then open http://localhost:8000
```
