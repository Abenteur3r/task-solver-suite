---
name: task-solver-suite
description: "Coordinate multiple interdependent deliverables across domains, or serve as the explicitly requested task-solver-suite entry point. Route phases selectively; standalone specialists handle single-domain work."
license: MIT
metadata:
  version: "3.0.0"
---

# Task Solver Suite

Coordinate the requested outcome with the fewest necessary skills. Each sibling skill owns its domain procedure and can be selected directly.

## Establish scope

Identify the requested deliverable, existing work, constraints, and unresolved decisions. Use supplied context before asking for missing information. Preserve the difference between advice, a plan, a review, implementation, and execution.

Handle simple edits, translations, calculations, and supplied facts directly. For single-domain work, use the relevant specialist without loading this coordinator. An explicitly selected skill governs its workflow; avoid adding an equivalent procedure.

Respect the user's limits on execution and validation. Report unexecuted work accurately. Use the [task contract](assets/templates/task_contract_template.md) only when a persistent coordination record is useful.

## Select by the immediate deliverable

The table describes independent skills, not a checklist to preload. A pitch about an ML product uses the pitch skill unless modeling work is also requested. Use a linked sibling only when that dependency is needed and installed.

| Skill | Task |
| --- | --- |
| [task-solver-software](../task-solver-software/SKILL.md) | Software implementation |
| [task-solver-debugging](../task-solver-debugging/SKILL.md) | Debugging and performance |
| [task-solver-architecture](../task-solver-architecture/SKILL.md) | Architecture and interfaces |
| [task-solver-security](../task-solver-security/SKILL.md) | Security and privacy |
| [task-solver-operations](../task-solver-operations/SKILL.md) | Operations and automation |
| [task-solver-blockchain](../task-solver-blockchain/SKILL.md) | Blockchain and contracts |
| [task-solver-data](../task-solver-data/SKILL.md) | Data analysis and statistics |
| [task-solver-ml](../task-solver-ml/SKILL.md) | Predictive ML: zero-leakage evaluation |
| [task-solver-genai](../task-solver-genai/SKILL.md) | GenAI, agents, and RAG architecture |
| [task-solver-research](../task-solver-research/SKILL.md) | Research and evidence |
| [task-solver-planning](../task-solver-planning/SKILL.md) | Product and project planning |
| [task-solver-ui](../task-solver-ui/SKILL.md) | Rapid prototyping and UI |
| [task-solver-artifacts](../task-solver-artifacts/SKILL.md) | Documents, spreadsheets, slides, and PDFs |
| [task-solver-quantitative](../task-solver-quantitative/SKILL.md) | Quantitative problem solving |
| [task-solver-thinking](../task-solver-thinking/SKILL.md) | Select a thinking method |
| [task-solver-triz](../task-solver-triz/SKILL.md) | TRIZ for technical and project trade-offs |
| [task-solver-writing](../task-solver-writing/SKILL.md) | Writing, editing, summarization, and localization |
| [task-solver-pitch](../task-solver-pitch/SKILL.md) | Pitching, demo, and judging |
| [task-solver-hackathon](../task-solver-hackathon/SKILL.md) | Five-stage hackathon sprint |
| [task-solver-learning](../task-solver-learning/SKILL.md) | Learning and explanation |
| [task-solver-domain-decisions](../task-solver-domain-decisions/SKILL.md) | Decisions with health, legal, financial, or physical stakes |
| [task-solver-risk](../task-solver-risk/SKILL.md) | Premortem, risk, and fail-safes |

## Coordinate concrete handoffs

Start with the skill that owns the current deliverable. Add another only for a specific dependency, new blocker, or separately requested output. Pass the objective, relevant artifacts, established facts, constraints, and precise decision needed. Preserve completed work when changing domains.

Run independent work in parallel when useful and permitted; keep dependent decisions sequential. If a named sibling is unavailable, use an applicable available specialist or the project's artifacts and primary documentation. Do not claim an unavailable skill ran.

Stop loading once there is enough guidance to act. Deliver the usable result and permitted evidence, distinguish proposed work from executed work, and state material limitations. Explain routing when requested or when it clarifies a necessary handoff.
