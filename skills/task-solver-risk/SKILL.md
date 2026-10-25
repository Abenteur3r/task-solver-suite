---
name: task-solver-risk
description: "Run a focused premortem or design fail-safes when a concrete failure could invalidate a consequential plan or delivery. Connect failure mechanisms to prevention, detection, and recovery."
license: MIT
metadata:
  version: "3.0.0"
---

# Premortem, risk, and fail-safes

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Use before a costly experiment, critical integration, consequential release, or deadline-sensitive delivery. Output a short risk register and a tested recovery route within the authorized execution scope. For a plan-only request, provide the proposed recovery and validation procedure, labeled unexecuted. Scale the exercise to the actual impact and available time; competition examples below adapt to a project's own acceptance criteria. Ordinary low-impact edits do not require this exercise.

## Imagine the concrete failure

Assume the project delivery or operation has failed. List plausible mechanisms, then distinguish observed problems from speculation. For each material mechanism, name the earliest detectable signal, owner, prevention, fallback, and latest safe decision time.

| Failure mechanism | Early signal | Prevent or detect | Fallback |
| --- | --- | --- | --- |
| Validation leaked target or group information | Implausible gain, overlapping entities, time boundary violation | Audit feature provenance and split before model selection | Rebuild clean baseline; label previous scores invalid |
| Final inference exceeds runtime or memory | Replay approaches cap on representative full input | Measure total pipeline in the constrained environment | Smaller validated model or fewer permitted features |
| External API is unavailable or rate-limited | Timeout/error rate, quota, retry budget consumed | Bound calls and test the failure route | Transparent cache, permitted local substitute, or recorded demo |
| Required integration only works in developer session | Fresh account cannot complete the journey | Rehearse judge-level access early | Fix access or choose an allowed alternative before freeze |
| Demo produces unsupported output | Answer lacks evidence or contradicts expected case | Evaluate difficult and unanswerable cases | Abstain, show evidence, or ask for missing input |
| Submission has wrong IDs, columns, or shape | Local schema comparison fails | Compare against the official contract, not a hand-typed guess | Previously validated artifact |
| Deadline missed during packaging/upload | Candidate not frozen by internal cutoff | Allocate replay, transfer, and recovery time explicitly | Deliver the best valid candidate before the external deadline |
| Claims overstate evidence | Metric lacks dataset, baseline, or sample size | Audit pitch claims against artifacts | Narrow the claim and state the limitation |

Use impact and likelihood as rough priorities, and include detectability: a severe failure with no early signal deserves attention even if probability is uncertain. A multiplied ordinal risk score is a sorting aid, not a calibrated probability.

## Exercise the highest-risk boundary

Select a few adversarial but representative cases. For ML, include duplicated entities, missing classes/labels, column permutation, unseen categories, empty chunks, and constrained runtime where relevant. For GenAI, include irrelevant retrieval, instructions embedded in a document, an unavailable tool, and an out-of-scope request. For UI, include refresh, repeated click, poor network, and expired access.

Pick cases that test actual assumptions in this entry. Run them and record the result, rather than turning a long checklist into a claim of coverage. Fix the first broken boundary; recheck the affected core journey after each change.

## Design a recovery ladder

1. **Primary:** Frozen working build and measured normal behavior.
2. **Degraded:** A useful reduced capability with clear limitations and bounded completion time.
3. **Evidence fallback:** An allowed recording or fixture, visibly labeled with its provenance and recording date/version.
4. **Honest failure:** A concise explanation of the failed dependency and what was actually verified.

The fallback must fit the project's requirements and any applicable event rules. Use an evidence fallback only when presentation evidence is a relevant deliverable. A recording is presentation evidence, not a substitute for a required executable artifact. Cached answers are not live generation; a synthetic test user is not a customer; simulated transactions are not confirmed transactions.

Define activation conditions in observable terms: an error code, exhausted deadline, unavailable service, or failed access test. Budget retries across the whole operation; repeated layers must not multiply calls unexpectedly. Actions with external effects need idempotency or a status check before retrying after an ambiguous result.

## Freeze an identifiable candidate

Save source/build identifier, configuration, data/split identifiers, dependency versions or lockfile, seed where relevant, model/prompt/index versions, and the exact delivery artifact. Keep secrets out of the handoff. Version records support reproduction; a seed alone cannot guarantee identical results across hardware and nondeterministic kernels.

Maintain a known-good candidate while fixing release blockers. After freeze, accept a change only when it addresses a failed acceptance criterion and can be rechecked within the remaining time. Roll back if it cannot.

## Rehearse delivery as it will happen

For ML execution, run the complete inference/export path in the actual or closest available constrained environment. Validate IDs, shape, values, metric semantics, and runtime. For a product, start from its intended entry point and a fresh session, then perform the core journey and an induced dependency failure within the authorized test scope. Rehearse a talk only when presentation delivery is requested or required.

For an authorized remote submission, distinguish upload success, processing, acceptance, and eventual scoring. Check the returned state and receipt. After an ambiguous timeout, inspect the existing submission before retrying so a duplicate does not consume quota. For an artifact-only request, report readiness without claiming remote acceptance.

## Completion check

Every critical risk has an owner, signal, and decision time. For executed work, the highest-risk failure has been exercised, the final artifact is identifiable, and the chosen fallback has actually run. For plan-only work, name the proposed checks, expected evidence, and failure actions without claiming they ran. Record remaining risks and their practical effect; a known limitation can be acceptable, while an unacknowledged failed requirement cannot count as a pass.
