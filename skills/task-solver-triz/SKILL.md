---
name: task-solver-triz
description: "Resolve conflicts where improving one requirement worsens another. Select separation, inventive principles, or deep contradiction analysis for the unresolved problem; also explain requested TRIZ methods."
license: MIT
metadata:
  version: "3.0.0"
---

# TRIZ for technical and project trade-offs

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Use when improving one requirement makes another worse. Output a short contradiction record with alternatives, a selected separation mechanism, and measured acceptance. This lightweight route applies beyond hackathons; deadline-driven examples below illustrate the decisions.

Use this lightweight route when the contradiction has not yet been analyzed. If supplied evidence already establishes failed separation attempts, continue directly with the relevant extension. For a missing mechanism, select relevant prompts from the [40 inventive principles](references/25-triz-inventive-principles.md). Use [deep contradiction analysis](references/26-ariz-deep-contradictions.md) when the mechanism or constraints need a structured reconstruction. These are original practical adaptations, not a claim of formal ARIZ certification or a copied contradiction matrix. Do not load both extensions by default.

## State the contradiction precisely

Record the system, its useful function, the resource constraint, and two measurable requirements:

> Increasing [design variable] improves [A], but worsens [B]. We require [A threshold] and [B threshold] under [conditions].

Example: increasing retrieved context improves answer coverage on a fixed evaluation set, but increases completion latency and per-request cost. Name the actual targets and evaluation cases. If the effect is only suspected, measure a small baseline before treating it as a contradiction.

For a physical contradiction, state the same property that must have opposite values under different conditions: the model must be large for difficult cases and small for routine cases. If the requirements are not simultaneously necessary, scope triage may remove the conflict more cheaply than an inventive design.

## Describe the ideal result and available resources

State the outcome as if the extra mechanism were unnecessary: a correct, grounded answer arrives within the budget using information already available. Inventory existing artifacts, idle resources, permitted public data, cached immutable results, user-provided constraints, and stages where work can happen earlier.

Use the ideal result to challenge assumptions, not to promise free compute, perfect accuracy, or a guaranteed solution. Conditions such as external-data restrictions and prediction-time availability remain hard constraints.

## Try separation before compromise

| Separation | Ask | Hackathon example | Test the hidden cost |
| --- | --- | --- | --- |
| In time | Can expensive work happen at a different phase? | Train/prepare an index offline; use cheap inference/retrieval online | Does allowed setup time, data freshness, and artifact size still fit? |
| In space | Can different components or regions carry different requirements? | Lightweight client with computation on an allowed server; retrieve only relevant document regions | Network latency, privacy, deployment rules, and missed context |
| By condition | Can the expensive behavior be limited to cases that need it? | Escalate uncertain queries to a larger model; use tools only for current external facts | Router errors, escalation rate, tail latency, and cost under hard cases |
| Between whole and parts / system level | Can parts and their combination have different properties? | Distill an ensemble into one inference model; share a core journey across multiple presentation views | Distillation quality, training budget, and whether reuse actually removes work |

Separate under meaningful conditions, not by quietly evaluating an easier task. A staged response must label partial output; a cache must respect access and freshness; an offline artifact must be permitted at submission time.

## Use a small inventive-principle shortlist

Use these prompts only if separation leaves the design unclear:

- **Segmentation:** Split a long document, workflow, or experiment into independently useful pieces.
- **Prior action:** Prepare permitted fixtures, features, indexes, and a fallback before the deadline-sensitive path.
- **Dynamization:** Adjust compute or retrieval depth to observed difficulty within a fixed maximum.
- **Intermediary:** Add a schema validator or narrow adapter where mismatched components create repeated failure.
- **Feedback:** Use evaluation errors or runtime measurements to choose the next change.
- **Copying:** Use a clearly labeled recording or synthetic fixture for a permitted fallback, keeping live claims separate.

These names borrow established TRIZ concepts; the applications here are original sprint examples. A principle suggests a hypothesis, not evidence that the change will work.

## Worked comparisons

### Accuracy versus inference time

Baseline: one model meets the runtime cap but misses the desired validation score. Candidate: a larger ensemble improves validation but fails the cap. Options: distill the ensemble; cache allowed static preprocessing; route a subset to the expensive model if the evaluation contract permits it; or retain the smaller model and improve its features.

Compare on identical held-out IDs and the full inference environment. Include preprocessing, model loading, and worst-case routing in runtime. Generate distillation targets only for student-training examples from permitted data. Keep evaluation examples out of both teacher and student fitting; in CV, build both inside each outer training partition. Stop if the remaining training time cannot produce and validate the student before freeze.

### Feature breadth versus 24 hours

Baseline: one full user journey works. Candidate: three partially built journeys cover more slides but none is reliable. Separate reusable parts from distinct user outcomes: keep the shared data/service core, finish one scored journey, and show the others as explicitly future work. Test whether the finished journey demonstrates the event's required integrations and differentiating value.

### Rich RAG versus latency and token cost

Baseline: large retrieval depth meets answer coverage but violates budget. Candidate: small initial retrieval plus a bounded expansion only when evidence is insufficient. Test answer quality, unsupported-answer rate, expansion rate, total cost, and completion latency on both easy and difficult cases. Include the price of the routing decision itself. Retain the simple baseline if the new controller adds more failure than value.

## Escape valve and decision record

Timebox this exercise to the importance of the decision; a short sprint often needs only two or three alternatives. If none satisfies both thresholds, expose the infeasibility: relax an optional requirement, reduce scope, seek a missing resource, or retain the best valid baseline. Do not rename a failed constraint as a solved contradiction.

Record: contradiction; thresholds; proposed separation; experiment; observed result; trade-off retained; decision; rollback. Completion requires a measured result or a clearly labeled untested choice with its next validation step.
