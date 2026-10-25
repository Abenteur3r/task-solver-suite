---
name: task-solver-research
description: "Investigate external facts, verify claims, or compare options using traceable sources. Reconcile conflicting evidence and distinguish conclusions from assumptions; excludes simple supplied-text summarization."
license: MIT
metadata:
  version: "3.0.0"
---

# Research and evidence

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Use when a decision depends on external facts, current information, disputed claims, unfamiliar technical behavior, or comparison of alternatives. For a supplied passage that only needs faithful summarization, use the writing route; a simple stable fact does not require a research project. Match depth to the decision and the cost of being wrong.

## Define the question that evidence must answer

State the decision, intended audience, scope, relevant date, and criteria for a useful answer. Separate factual questions from preferences. “Which option is best?” needs the user's constraints; “Does version X support Y?” needs evidence for that specific version. Record important assumptions and proceed with questions that do not depend on unresolved preferences.

Choose a stopping condition: enough evidence to distinguish options, resolve a disputed claim, or establish the remaining uncertainty. For substantial research, the [evidence template](assets/templates/research_evidence_template.md) can hold the record. Keep a short lookup inline when that serves the user better.

## Follow claims to their owner

Prefer the source responsible for the fact: official specifications and source code for software behavior, the original paper for a study, the dataset publisher for definitions, and the responsible authority for rules. Discover relevant connected sources before asking the user to repeat information already available. A summary, catalog, search snippet, or another agent's assertion is a lead to verify.

Open the actual source and inspect the supporting passage, table, code, or data. Record title, owner, URL or local path, publication or version date, access date where useful, and the claim it supports. An official source can still be outdated or have a commercial incentive; ownership helps identify authority, not establish universal impartiality.

Use current browsing or connected tools when freshness matters and they are available. If access fails, try a legitimate primary alternative such as a published release note or repository copy. State the exact access gap rather than quietly substituting memory or presenting a search excerpt as a full review.

## Make evidence comparable

Before comparing numbers, align definitions, population, period, units, versions, baseline, and measurement method. A laboratory benchmark and a production measurement may answer different questions. Preserve denominators and uncertainty. Distinguish a change in the underlying quantity from a change in how it was measured.

For each consequential claim, record whether it is directly observed, reported by a source, inferred from evidence, or assumed. A source supporting a component does not automatically support the complete conclusion. Track the weakest step in the inference and identify what observation could overturn it. If a metric is unavailable, use an explicit qualitative comparison rather than inventing a score.

## Resolve disagreement without hiding it

When sources conflict, first check whether they refer to the same object, date, jurisdiction, version, or outcome. Then inspect methodology, revisions, direct access to the underlying evidence, and independence. Two articles repeating one announcement are not two independent confirmations.

Explain the conflict that remains and its practical consequence. Prefer a conditional conclusion when the answer changes with a disputed assumption. For example, recommend one implementation if a documented feature is present in the installed version and another if it is absent. Identify the inexpensive check that settles the branch.

## Deliver a supported answer

Lead with the answer or decision the evidence supports. Cite each external material claim near the statement it supports; link to the actual document rather than a search page. Quote only text actually inspected, preserve meaning and qualification, and keep quotations within applicable limits. Never fabricate quotations, sources, authors, dates, sample sizes, or access to unavailable material.

Include relevant counterevidence and limits in proportion to their effect on the result. Recommendations should explain how evidence interacts with the user's criteria. Separate measured benefits from expectations and estimates. Give an actionable next check when uncertainty still controls the choice.

## Completion

The output answers the scoped question, identifies its evidence, reconciles material disagreements or leaves them explicit, and names any unresolved decision-changing fact. Verify citations and arithmetic before delivery. A source list without synthesis is incomplete; so is a confident conclusion whose key evidence was never inspected. Stop once further reading is unlikely to change the requested decision within the available budget.
