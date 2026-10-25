# Hackathon triage and scoring

Use at kickoff, after a rule change, or when the remaining scope no longer fits the deadline. Output a filled [scope triage](../assets/templates/hackathon_scope_triage_template.md) with a decision, evidence, and cutoffs.

## 1. Build a rule and scoring contract

Read the event's current official rules, evaluation page, submission instructions, and rubric. Record the URLs or supplied files and the date checked. A past event's rules are background, not authority for this event.

| Question | Record | Decision it changes |
| --- | --- | --- |
| What is scored? | Metric, direction, aggregation, tie-breaks; or rubric criteria and published weights | Model selection or demo priorities |
| What is mandatory? | Output schema, repository visibility, video length, presentation format, required sponsor integration | Minimum valid entry |
| What is allowed? | Data, pretrained models, generated labels, AI assistance, reuse, team eligibility, collaboration and licensing | Feasible inputs and implementation |
| What are the limits? | Runtime, RAM/VRAM, internet, compute, API spend, file size, submission quota | Architecture and experiment budget |
| When is it due? | Submission cutoff, timezone, team/entry deadlines, judging time | Freeze and delivery schedule |
| Who can access it? | Judge account needs, public URLs, supported device, credentials policy | Delivery and rehearsal |

Distinguish a rule from a recommendation. If a missing rule could invalidate an action, clarify it before that action; meanwhile prepare a compliant baseline using confirmed inputs. Never treat the public leaderboard as the complete scoring contract.

## 2. Define the smallest useful entry

Write: **For [user or evaluation population], [entry] performs [one task], improving [measured outcome] under [constraint].**

For predictive ML, name the unit predicted, prediction time, outcome horizon, and exact scoring function. For products, name one user, one triggering input, and one useful observable result. For a hybrid, keep these contracts separate so an attractive interface cannot hide an invalid model evaluation.

Mark each proposed item:

- **Required:** Eligibility, valid output, or a complete core journey depends on it.
- **Differentiating:** Directly improves a scored criterion and can be demonstrated or measured.
- **Optional:** Useful but has weaker evidence, uncertain scope, or no direct scoring connection.

Keep one working route through the product before adding a second persona, modality, integration, or agent. A required sponsor integration belongs on that route; prove it works early.

## 3. Allocate effort to evidence

Use a decision table with expected benefit, evidence confidence, estimated completion and verification time, dependency risk, and reversibility. Estimates support a decision; they do not establish a predicted judging score.

Where official weights exist, an optional ranking aid is:

`priority = sum(weight × estimated criterion improvement × confidence) / total hours`

Use a common criterion scale, include verification time, and apply hard constraints before ranking. Related features may overlap in benefit; avoid counting the same improvement twice. When weights are unpublished, rank likely priorities qualitatively and label them as assumptions. When two choices are close, prefer the one with stronger evidence and a cheaper rollback.

Example: a second model may improve local AUC but exceed the inference limit. A calibration or preprocessing change that fits the limit can be a better next experiment. In a product event, a reliable example with source evidence may score better than a new modality that only works on a rehearsed input; validate this against the actual rubric.

## 4. Timebox prior-art research when it can change the plan

Start with the event's baseline and one or two credible alternatives. Inspect the owning project's documentation, paper, code, and license; a catalog entry or paper abstract alone does not establish suitability. Record the task, dataset, split, metric, resource use, and available artifacts behind a performance claim. Compare like with like, and label differences that prevent a fair comparison.

Choose a reading budget and a decision it must inform: baseline choice, novelty claim, implementation feasibility, or a specific error hypothesis. Stop when the evidence supports that decision or the budget expires. Prefer an available reproducible baseline over an attractive result whose data, weights, runtime, or usage terms do not fit the event. A literature search does not justify a universal state-of-the-art claim without a defined benchmark and comparable evidence.

## 5. Choose a thinking tool for the uncertainty

| Decision problem | Tool | Concrete output |
| --- | --- | --- |
| Requirements contain assumptions disguised as constraints | First principles | Facts, assumptions, actual resource limits, smallest test |
| A promising plan may fail late | Inversion / premortem | Failure mechanism, early signal, owner, fallback |
| A change helps one requirement and hurts another | TRIZ separation | Two measurable requirements and a testable way to separate them |
| The cause/effect relationship is unclear | Cynefin-inspired classification | Known procedure, bounded analysis, or cheap reversible probe |
| New evidence arrives during a sprint | OODA | Observation, revised interpretation, one decision, one bounded action |
| A claim sounds strong but lacks support | Logic audit | Claim, evidence, inference, counterexample, narrowed claim |

These are decision aids, not mandatory ceremonies. For example, a known schema mismatch needs a direct fix; an uncertain model architecture needs a bounded experiment. When the environment is failing, stabilize the delivery path before interpreting noisy results.

## 6. Schedule backwards from delivery

Reserve time for the slowest final replay, artifact transfer, review, and one recovery attempt. An illustrative 24-hour plan is 2 hours to frame, 4 to baseline, 9 to improve, 5 to harden, and 4 to finalize the pitch/delivery. Adjust to the real event; record actual timestamps rather than relying on percentages.

- Baseline checkpoint: a complete local output or core journey before roughly the first third is spent.
- Experiment cutoff: enough time remains to reproduce and verify the best candidate.
- Feature freeze: only fixes to failed acceptance criteria after this point.
- Delivery cutoff: before the official deadline, allowing upload or portal failure recovery.

Stop an experiment when it exhausts its budget, violates a hard constraint, produces an invalid comparison, or cannot change the final decision before freeze. Preserve its logs and mark it inconclusive where appropriate.

## Completion check

The team can state the official scoring, the smallest valid entry, the main untested assumption, the next bounded experiment, the cut list, and the freeze/delivery times. Every required deliverable has an owner and a verification method. If any of these are missing, resolve the specific gap before expanding scope.
