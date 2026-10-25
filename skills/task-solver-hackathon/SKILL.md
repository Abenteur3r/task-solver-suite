---
name: task-solver-hackathon
description: "Coordinate a competition sprint governed by event rules, scoring, deliverables, and a deadline. Select relevant stages; use focused technical or pitch skills for narrower requests."
license: MIT
metadata:
  version: "3.0.0"
---

# Five-stage hackathon sprint

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Load when an event imposes competition rules, scoring, deliverables, and a deadline. For an ordinary product or project, use its acceptance criteria and [project planning](../task-solver-planning/SKILL.md). For a focused request, run only the relevant stage; a pitch request does not authorize rebuilding the product.

## Choose the evaluated track

| Track | What determines success | Technical branch |
| --- | --- | --- |
| A: predictive ML | Held-out predictions and the organizer's metric | [Predictive ML](../task-solver-ml/SKILL.md) |
| B: product / GenAI | Usable workflow, required integrations, and judged evidence | [UI/prototyping](../task-solver-ui/SKILL.md); add [GenAI](../task-solver-genai/SKILL.md) if generation, retrieval, or tools are involved |
| Hybrid | Both predictive quality and a working product | Give the prediction and user journey separate acceptance tests; read each technical branch only at its work phase |

Read the actual event rules and the existing project's state. Record the deadline/timezone, eligibility, allowed inputs/tools, resource limits, submission quota, required artifacts, and scoring. Do not substitute another event's familiar rules.

## 1. Frame and score the scope

Read [triage and scoring](references/01-hackathon-triage-and-scoring.md). Identify the user or prediction target, official metric/rubric, minimum valid entry, and main untested assumption. Label unpublished rubric priorities as estimates. Use the [scope template](assets/templates/hackathon_scope_triage_template.md) when starting or materially changing the sprint.

Keep required work, evidence-backed differentiators, and optional polish distinct. Schedule backward from delivery, reserving replay, rehearsal, upload, and recovery time. Resolve an eligibility uncertainty before the affected action while continuing independent preparation.

**Exit:** Chosen track, one useful outcome, measurable acceptance, explicit cut list, owner/dependencies, and freeze/delivery times.

## 2. Establish an end-to-end baseline

For A, define prediction-time information, the independent unit, a defensible split, exact metric, inexpensive model, and a schema-valid local output. For B, run a representative journey through the real critical integration, with an evaluation sample and latency/cost budgets. A hybrid needs both at minimum scope.

Keep the artifact and configuration as a recovery point. If the baseline cannot complete, reduce scope or fix the broken boundary before adding complexity.

**Exit:** A reproducible, measured baseline and complete local delivery path. Distinguish a mocked layout from a functioning required integration.

## 3. Improve through bounded experiments

Use the [hypothesis backlog](assets/templates/ml_hypothesis_backlog_template.md) for repeated experiments. Record expected benefit, evidence, budget, fixed comparison protocol, and accept/reject rule. A failed experiment can be useful if it resolves an important hypothesis.

Compare improvements on the same valid protocol and include inference/demo costs. Use [TRIZ](../task-solver-triz/SKILL.md) only when one improvement violates another requirement. Use [risk/fail-safes](../task-solver-risk/SKILL.md) when a concrete failure could invalidate the entry.

Freeze new features at the agreed cutoff. Stop any experiment that cannot finish and be checked before delivery. Preserve the best valid candidate, not merely the latest run.

**Exit:** Retained improvements have comparable evidence, rejected work has a reason, and the remaining verification fits the deadline.

## 4. Harden and freeze

Run the selected technical branch's acceptance checks and exercise the most important failure route. Reproduce the exact output/build from saved artifacts and configuration. Verify evaluator resource limits, output schema, links/access, required integrations, and known-good recovery.

After freeze, accept only fixes to failed acceptance conditions that can be rechecked in time. If a final change fails, return to a verified candidate. Report incomplete checks and their effect rather than calling an untested item a pass.

**Exit:** Identifiable candidate, clean replay or rehearsal, validated artifacts, and a tested recovery route.

## 5. Deliver and defend

Use [pitching/demo](../task-solver-pitch/SKILL.md) for requested or required presentation work. Select the [pitch template](assets/templates/pitch_deck_and_demo_script_template.md) or [judge Q&A template](assets/templates/judge_qa_defense_template.md) only when its corresponding deliverable is requested or required. Tie claims to measured results, observed benefits, or labeled assumptions. A metric-only competition needs its required artifact and reproducibility handoff, not an unsolicited deck.

Carry out submission/publication within the user's authorization and the event's rules. After an ambiguous remote result, inspect status before retrying. Distinguish local readiness, successful upload, platform acceptance, and eventual score.

**Exit:** Requested deliverables are ready and their validation status is recorded. If submission was requested, verify its receipt/status or identify the remaining blocker. A required pitch is rehearsed within the time limit and can use its honest, permitted fallback.
