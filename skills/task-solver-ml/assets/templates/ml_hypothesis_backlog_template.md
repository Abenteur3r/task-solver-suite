# ML hypothesis and experiment backlog

Copy into the project. Fill one run card per meaningful experiment and retain failed or inconclusive runs. For product/GenAI experiments, substitute the task evaluation set for folds and model/prompt/index versions for the ML artifact fields.

## Fixed comparison protocol

| Field | Value |
| --- | --- |
| Objective and official metric | [metric, maximize/minimize, aggregation, masks, class order] |
| Data manifest | [version/hash, source permission, IDs, row count] |
| Prediction availability | [prediction time, label horizon/delay, allowed features] |
| Split artifact | [path/hash, groups/time, fold/role mapping, overlap checks] |
| Development versus final evaluation | [which data may influence selection; untouched set if available] |
| Baseline | [run ID, artifact, score, runtime/memory/cost] |
| Resource and leaderboard budget | [total resources, maximum run budget, submissions remaining] |
| Freeze / last safe start | [timestamps and timezone] |

## Ranked backlog

| ID | Error source / hypothesis | Intervention | Expected affected slice | Evidence / confidence | Budget incl. verification | Accept/reject rule | Priority / state |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [H01] | [falsifiable claim] | [one change] | [slice and denominator] | [observation] | [minutes, compute, spend] | [criterion before run] | [queued/running/accepted/rejected/inconclusive/invalid] |

## Run card

**Hypothesis / run ID / timestamp:** [values].

**Change from baseline:** [one factor or explicit bundle with reason].

**Data, split, code, environment, configuration:** [identifiers; seeds; package versions; hardware].

**Leakage and contamination checks:** [feature availability; fold-only fitting; group/time boundaries; target encoding/calibration/selection data; result of each applicable check].

**Command or reproduction steps:** [entry point, arguments, configuration, artifact locations; no secrets].

**Stop rule:** [runtime/spend/failure threshold and last safe completion time].

| Measure | Baseline | Candidate | Delta / interpretation |
| --- | --- | --- | --- |
| Official development metric | [value] | [value] | [paired comparison] |
| Per-fold / per-class / slice metrics | [values and denominators] | [values and denominators] | [where it helped/hurt] |
| Untouched evaluation, if actually used | [value or not evaluated] | [value or not evaluated] | [selection independence] |
| Runtime / memory / cost | [value + units] | [value + units] | [within constraint?] |
| Repeated-run variability, if measured | [value/method] | [value/method] | [uncertainty] |

**Prediction artifacts:** [OOF/development/final/test paths, ID alignment, column mapping, masks, hashes].

**Observed failure or surprise:** [what happened, evidence, invalid comparisons to retire].

**Decision:** [accept/reject/inconclusive/invalid and why].

**Next discriminating test:** [bounded action, or none].

## Comparison and selection log

| Run | Comparable protocol ID | Development result | Runtime / cost | Public LB observation | Decision and evidence |
| --- | --- | --- | --- | --- | --- |
| [run] | [protocol] | [metric] | [measures] | [score/date or not submitted] | [decision] |

Label public leaderboard results separately. Record the reason before each query. A changed split or metric starts a new comparison series and requires a rerun baseline.

## Final candidate

**Chosen run / ensemble recipe:** [IDs, alignment, weights, selection data].

**Why selected:** [evidence that respects evaluation and resource limits].

**Generalization claim:** [tuned CV / untouched holdout / nested evaluation; limitations].

**Inference recipe:** [full-data refit or fold models, preprocessing, post-processing, parity checks].

**Saved output checks:** [read-back schema, expected IDs, finite/ranged values, class mapping, full or sampled replay, measured limits].

**Delivery state:** [prepared file + hash; or authorized remote receipt/status].
