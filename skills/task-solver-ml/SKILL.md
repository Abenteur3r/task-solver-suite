---
name: task-solver-ml
description: "Train, validate, compare, or prepare inference for predictive models. Handle leakage, representations, prediction horizons, reproducibility, and serving parity; excludes generation and pitch-only work."
license: MIT
metadata:
  version: "3.0.0"
---

# Predictive ML: zero-leakage evaluation

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Read for predictive modeling in research, products, and competitions: tabular, image, text, time series, or multimodal. Use the project's evaluation contract, data policy, and runtime limits; include the actual event rules when competing. Here, **zero leakage** is a required engineering objective, not a guarantee established by a high validation score. Add [modality/lifecycle guidance](references/15-ml-modalities-and-lifecycle.md) only when representation, prediction horizon, serving parity, or deployment lifecycle is unresolved.

## 1. Triage: specify what a prediction may know

Record the prediction unit, target definition, prediction timestamp, label availability delay, independent entity, and permitted data sources. For every feature family, answer: could this value actually be obtained when this prediction must be made? Remove post-outcome measurements and joins that reveal the target.

Create a small data manifest: input version or hash, row count, ID type, label order, missing-label convention, grouping keys, timestamp timezone, and external-data permission. Check joins for unexpected row multiplication. Keep IDs as identifiers; conversion to numbers can destroy leading zeros.

Choose the split before fitting transformations or choosing features:

| Evaluation setting | Split and required evidence |
| --- | --- |
| Independent, exchangeable rows | Random folds; stratify classification when feasible and compatible with the metric |
| New patients, users, devices, documents, or sites | Hold out the relevant groups; assert no group overlap in each fold |
| Future observations | Forward validation; training information and labels must be available before each validation prediction |
| Overlapping event/label windows | Purge intersecting training windows; choose a gap or embargo from the information horizon, not an arbitrary row count |
| New entities in a future period | Enforce both entity and chronological boundaries; document which population this estimates |
| Organizer-defined validation | Preserve the official split; add a diagnostic split only with a distinct stated purpose |

Group exact duplicates, near duplicates, augmented versions, and multiple slices of one source together where they would otherwise reveal the same example. Similarity thresholds and grouping rules are part of the split artifact. Audit any permitted train/test overlap separately; competition permission does not make a local estimate unbiased.

**Done:** persist `row_id -> fold/role`, split rationale, and overlap checks. If independence or timestamps remain unresolved, use a conservative split and mark its limitations before interpreting scores. Group isolation is required when estimating performance on unseen groups. [Cross-validation guidance](https://scikit-learn.org/stable/modules/cross_validation.html)

## 2. Baseline: make the metric and execution trustworthy

Reproduce the official metric locally on a tiny hand-checkable example. Record maximize/minimize direction, probability versus class expectations, positive class, class order, sample weights, averaging, clipping, and missing-label masks. A missing label is not a negative label unless the task defines it that way.

Train a trivial predictor and one inexpensive model. Save validation predictions by stable ID rather than dataframe position. Test inference on a tiny raw batch, then produce the required output or serving artifact early; for competitions, use the exact submission format. This exposes packaging failures before expensive experiments.

For each outer fold:

1. Select training and validation IDs from the saved split.
2. Fit imputers, scaling, vocabulary, dimensionality reduction, feature selection, and learned encoders on the training partition only. Apply the resulting objects unchanged to validation.
3. Perform augmentation and resampling within training. Make caches include the fold and preprocessing version so a globally fitted cache cannot slip into a fold.
4. For target encoding, cross-fit training-row encodings inside that training partition; encode outer validation using training labels only. The inner split must respect the same group/time constraints.
5. Choose early-stopping epochs, thresholds, calibration, and other learned decisions using an inner development split when the outer fold is intended as an untouched evaluation.
6. Emit held-out predictions, IDs, targets or masks, fold, model/config version, and runtime. Check every eligible row has the intended number of predictions.

Train-only preprocessing avoids leakage; a pipeline helps keep fit and transform boundaries together. [Common pitfalls](https://scikit-learn.org/stable/common_pitfalls.html)

Cross-fitting training encodings differs from fitting an encoder and transforming those same rows. Verify the chosen implementation's behavior; do not assume a method name enforces the required grouping or chronology. [TargetEncoder documentation](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.TargetEncoder.html)

Out-of-fold (OOF) predictions mean that a row was excluded from the fitting partition that produced its prediction. They are still development evidence when its labels influenced model selection, early stopping, or repeated tuning. Reserve an untouched holdout or an outer evaluation of the whole selection procedure for stronger generalization claims. If time/data cannot support that, label the result honestly as tuned CV.

In forward validation, initial training rows may have no valid OOF prediction. Preserve the eligibility mask; never fill these gaps with in-sample predictions. Repeated CV may yield several held-out predictions per row; record repeat IDs and the aggregation rule.

**Done:** baseline metric, fold scores, pooled score where appropriate, predictions, runtime, and a reproducible tiny inference output exist. Require a tiny submission only for a submission task. A failed metric example or split check blocks model comparison.

## 3. Iterate: buy evidence with each experiment

Use the [hypothesis backlog](assets/templates/ml_hypothesis_backlog_template.md). State the suspected error source, one intervention, expected affected slice, fixed comparison protocol, budget, and accept/reject rule before starting.

| Observed problem | First useful experiment |
| --- | --- |
| Weak performance on rare labels | Inspect label counts, masks and per-class errors before changing loss weights |
| Temporal degradation | Check availability timestamps and drift; compare a recent-window baseline |
| Tabular interactions missing | Try one domain ratio/aggregation available at prediction time, or an inexpensive nonlinear baseline |
| Image/text shortcuts | Inspect entity/source overlap and representative failures before increasing capacity |
| Inconsistent seeds/folds | Compare paired predictions and fold deltas; spend budget on replication before large searches |
| Strong CV, weak public leaderboard | Check schema, shift, leakage, metric implementation, and inference parity before tuning to the leaderboard |

Keep one fixed split for comparable development runs. Change it only when evidence shows the evaluation question was wrong; then rerun the baseline and retire incompatible comparisons.

Record per-fold and per-class/slice metrics with denominators, as well as the official aggregate. Weight additive losses according to the evaluation contract. A pooled AUC or F1 generally differs from the mean of fold AUCs or F1s; calculate the metric on aligned pooled predictions when that is the intended estimate. Cross-fold probability scales can also affect pooled ranking metrics, so retain fold results.

Use paired changes on identical held-out examples to assess an improvement. If estimating uncertainty, resample at the independent unit (for example, patient rather than slice); ordinary row bootstrap can misstate precision for clustered data. Treat small gains within observed variability as tentative.

For each run save: data and split versions, code revision or snapshot, configuration, seeds, package/environment versions, hardware, elapsed time, peak memory where available, predictions, and the decision. Document nondeterminism; a seed alone does not establish reproducibility.

When a public leaderboard is part of the task, keep a query budget and log every submission reason. Use it as a coarse consistency check. Repeatedly selecting on its scores consumes information from that set and can overfit it; hold back final choices that depend only on tiny public-score differences.

**Done:** each completed run changes a decision or closes a hypothesis. Stop when the remaining time cannot cover training, inference, verification, and the required delivery buffer; retain the last verified candidate.

## 4. Harden: combine models without contaminating the estimate

Start with a simple average only if distinct models make complementary held-out errors and fit the runtime budget. Align IDs, class columns, prediction scale, and eligibility masks before any blend. Probability averaging, logit averaging, and rank averaging are different operations; validate the chosen operation against the actual metric.

Example: model A outputs columns `[negative, positive]` and B outputs `[positive, negative]`. Reorder by explicit labels before averaging. A matching matrix shape does not establish matching semantics.

Learn blend weights, decision thresholds, or calibrators on development predictions and judge them on independent evaluation predictions. A blend optimized and scored on the same OOF labels has a tuned development score.

For stacking, train the meta-model from held-out base-model predictions, not their fitted training predictions. To evaluate the entire stack, create base and meta training data wholly within each outer training partition, then evaluate on that outer holdout. Naively cross-validating a meta-model on one globally built OOF matrix can still leak outer-fold labels through base models used for other rows. Prefer a simple blend if the required nesting is too expensive. [Stacking documentation](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingClassifier.html)

Choose full-data refit or fold-model inference deliberately. Refit preprocessing with the selected recipe on permitted training data; freeze label mapping and post-processing. If the serving recipe differs from validation (for example, more data or averaged folds), record the difference and run parity checks.

**Done:** the selected artifact improves the agreed development criterion, respects memory/time constraints, and has an honest account of which data influenced selection.

## 5. Deliver: verify the actual inference or submission artifact

Validate the actual saved output or serving response against its consumer contract. For competitions, use the official schema or sample submission for structure, not as an assumed row order unless the rules require it. Apply file/submission checks only when that is the required deliverable.

- Required columns, exact names/order, data types, row count, and encoding match the contract; no accidental index column.
- Every expected ID occurs with the required multiplicity; no missing or extra IDs. Compare keys, not only row counts.
- All predictions are finite and in the allowed range. Check sums only for mutually exclusive class probabilities; multilabel probabilities need not sum to one.
- Class mapping, target inverse transform, aggregation to the scored unit, and post-processing match validation.
- Input paths, attached model assets, dependency versions, accelerator assumptions, network restrictions, and inference limits match the evaluation environment.
- A clean process can load the selected artifact and generate output without training-only state. For offline judging, rerun with network access disabled.
- A small adversarial batch covers empty/invalid inputs, unseen categories, missing modalities where permitted, and the smallest/largest supported batch.

Perform the largest feasible representative replay and state what scale was tested. If full replay is infeasible, give the tested sample size, measured throughput, projected runtime, and uncertainty; do not claim a full pass.

Keep the last verified deliverable, its hash where applicable, model/config manifest, local score, runtime evidence, and a short limitations note. If publishing/submitting is authorized, record the platform receipt and status separately from successful local validation.

**Exit gate:** the deliverable passes its applicable contract and replay checks; the report distinguishes development CV, untouched evaluation, and public leaderboard results where used. A leakage finding invalidates affected comparisons: rebuild splits/features, rerun the baseline, and regenerate the deliverable before treating those scores as evidence.


For repeated experiments, use the [hypothesis backlog](assets/templates/ml_hypothesis_backlog_template.md) when a saved comparison record is useful.
