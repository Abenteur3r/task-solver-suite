# ML modalities and lifecycle

Read only when representation, modality-specific evaluation, training behavior, or deployment lifecycle changes the ML decision. [Zero-leakage ML](../SKILL.md) owns the shared split, fold-fitting, experiment comparison, and submission protocol; do not reload this reference for an ordinary parameter change.

## Fit the route to the modeling problem

Use the user's selected domain skill for formats and mechanics, such as DICOM geometry or a competition notebook runtime. No framework is required by this reference. Read the relevant branch rather than implementing every listed modality.

Output a representation/evaluation decision, a targeted diagnostic or experiment, its measured result, and a versioned model bundle when requested. Production deployment and monitoring are conditional on actual deployment scope.

## 1. Inspect a real example and the task contract

Inspect raw input, decoded/normalized input, target construction, grouping, timestamps, and one model-ready batch. Record shapes, units, label masks, sequence lengths, and the scored output unit.

Match the baseline to the task rather than choosing the largest architecture first. A constant, seasonal, nearest-neighbor, linear, or simple domain baseline can expose a broken representation cheaply. Apply identical information-availability and entity-history constraints to every candidate, including baselines: in strict zero-shot evaluation, a seasonal baseline must use a permitted peer/global fallback rather than the held-out entity's own target history.

| Modality/task | Representation decision and first diagnostic |
| --- | --- |
| Tabular | Distinguish numeric magnitude, category, identifier, and missingness; compare a simple baseline and inspect unseen-category behavior |
| Forecasting/time series | Define forecast origin/horizon, known future covariates, label delays, and irregular sampling; inspect lag availability at each origin |
| Vision/video | Verify orientation, color/intensity scale, spatial resolution, crop/box/mask coordinates, and frame order; visually inspect transformed samples |
| Audio | Check sample rate, channel convention, amplitude scale, duration, alignment, and segmentation; listen to representative decoded segments |
| Text | Inspect tokenization, language, truncation, label alignment, and duplicate/source relationships; measure how much useful text is lost |
| Recommendations/ranking | Define candidate set, eligibility, exposure, negatives, ranking unit, and cold-start population; test a popularity or simple retrieval baseline |
| Graphs | Identify node/edge/graph target and inductive versus transductive setting; inspect what topology/features are visible at evaluation |
| Unsupervised/anomaly | Define useful grouping or anomaly cost without inventing labels; inspect stability, representative clusters, and false-alert burden |
| Reinforcement learning | Inspect environment version, observations/actions, reward, termination, constraints, and simulator validity; test a simple policy |
| Multimodal | Align entity/time keys, units, missing modalities, and pairing; compare each modality alone before fusion |

RAG answer grounding and tool-agent architecture belong to [GenAI](../../task-solver-genai/SKILL.md). Use this reference for a learned text/embedding representation only when that is the actual modeling decision.

**Done:** a real input survives the representation pipeline and its relationship to the prediction target is understood.

## 2. Apply the task-specific evaluation boundary

For forecasting, recreate what was knowable at each forecast origin, including delayed labels and revised data. Evaluate the required horizon and compare to a seasonal/persistence baseline. A forward splitter orders samples; it does not by itself enforce feature publication times. Check its spacing and gap assumptions. [TimeSeriesSplit documentation](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html)

When combining future-time and new-entity evaluation, define seen/unseen relative to the fitted model at each forecast origin. Membership in a training pool alone does not make a newly opened store seen if it has contributed no available training observations at that origin. Development-unseen entities are excluded from model fitting and learned feature statistics, but their validation labels may guide tuning; describe that score as development evidence. Final-unseen entities must remain outside fitting and model selection. Keep these roles distinct rather than claiming selection independence for a development cohort whose metrics selected the model.

For image/audio/text tasks, group shared sources, recordings, subjects, and derived segments according to the intended generalization question. Verify that augmentation preserves the label; geometric transformations must update structured targets consistently.

For recommendation, distinguish retrieval coverage from ranking quality on retrieved candidates. Measure against the eligible catalog and clearly state sampled-negative evaluation. Unobserved interaction is not necessarily dislike; exposure and position can confound logged feedback. Test new-user/new-item slices separately. [Retrieval/ranking distinction](https://www.tensorflow.org/recommenders/examples/basic_retrieval)

For graphs, transductive access to unlabeled topology may be valid only when the task permits it. Held-out link targets, their reverse edges, and future edges must not accidentally enter message passing. A node-label mask alone cannot establish link-split integrity. [Graph link-split documentation](https://pytorch-geometric.readthedocs.io/en/latest/generated/torch_geometric.transforms.RandomLinkSplit.html)

For clustering, numeric cluster IDs have no inherent class meaning. Internal geometry scores test assumptions, not business usefulness; inspect stability and representative cases, and use independent labels only if available for evaluation. [Clustering evaluation](https://scikit-learn.org/stable/modules/clustering.html#clustering-performance-evaluation)

For RL, evaluate multiple held-out seeds/scenarios and report reward alongside task success and constraint violations. Distinguish terminal states from externally truncated episodes because bootstrapping behavior differs. [Gymnasium time-limit guidance](https://gymnasium.farama.org/tutorials/gymnasium_basics/handling_time_limits/)

**Done:** the metric tests the deployment/evaluation population and the modality's information boundary, not an easier proxy accidentally created by preprocessing.

## 3. Diagnose before scaling training

Check a tiny batch end to end: finite inputs/loss, labels/masks, expected output shape, gradient flow, and optimizer updates. Where appropriate, verify that the model can fit a deliberately tiny clean subset; success diagnoses capacity/pipeline behavior, not generalization.

| Observation | Next discriminating check |
| --- | --- |
| Loss unchanged | Label mapping, masks, frozen parameters, gradients, optimizer wiring |
| Excellent train, poor evaluation | Representation mismatch, source shift, capacity, augmentation, leakage audit |
| Unstable or nonfinite training | Input ranges, precision, loss scale, learning rate, invalid targets |
| One modality dominates | Single-modality baselines, alignment, missingness, scale, contribution ablation |
| Poor throughput | Decode/I/O versus compute, padding/batching, memory pressure, profiler evidence |

Budget wall time, accelerator memory, storage, and verification before a run. Estimate from a representative step/epoch, save resumable state when needed, and stop experiments that cannot affect the final decision in time.

Record data/representation/model versions, configuration, seeds, environment, and checkpoints. Seeding alone does not guarantee reproducibility across software versions, platforms, or nondeterministic operations. [PyTorch reproducibility guidance](https://docs.pytorch.org/docs/2.14/notes/randomness.html)

**Done:** a retained change has comparable evidence and its training/inference cost fits the actual budget.

## 4. Lifecycle branch: only for deployed models

Package preprocessing, weights, feature/label schemas, tokenizer or vocabulary, calibration/post-processing, and version metadata together. Compare training and serving transforms on identical raw fixtures, including missing/unseen inputs and batch-size changes.

Measure latency, memory, throughput, and failure behavior in the intended serving environment. Export, quantization, or runtime changes require output/metric parity within a stated tolerance, not just successful loading.

Retain a compatible previous bundle and define rollout/rollback signals with [operations](../../task-solver-operations/SKILL.md). Monitor input/schema failures, missingness, resource use, and delayed outcome quality when labels arrive. Drift is a diagnostic signal, not proof of performance loss; define the investigation or retraining decision it should trigger.

**Exit:** provide the selected representation, evaluation boundary, experiment evidence, and remaining limitations. If deployed, include the exact bundle, parity results, monitoring owner, and recovery path; if not, stop at the requested model or analysis artifact.
