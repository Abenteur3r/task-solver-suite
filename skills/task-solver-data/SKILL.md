---
name: task-solver-data
description: "Analyze datasets, write SQL, explain metrics, or assess statistical experiments. Establish grain, population, denominator, uncertainty, and reproducible results; use ML for predictive modeling."
license: MIT
metadata:
  version: "3.0.0"
---

# Data analysis and statistics

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Read for a metric, exploratory analysis, experiment result, comparison, trend, statistical estimate, or data-quality investigation. Predictive model selection uses [zero-leakage ML](../task-solver-ml/SKILL.md); spreadsheet, notebook, chart, or report mechanics belong to the user's selected format-specific skill.

## Fit the analysis to the decision

A simple count or calculation needs a defined denominator, correct computation, and a check; it does not require hypothesis testing. Use existing queries, data definitions, and project tooling. This reference adds analytical validity, not a mandatory library or output format.

Output the answer, its data/assumptions, a reproducible calculation or artifact, uncertainty where relevant, and the practical interpretation. Save a standalone artifact when requested or useful to reproduce substantial work; avoid creating a report for a one-number question.

## 1. Define the quantity before calculating it

State the estimand: the population quantity or comparison the user wants to learn. Record the unit of observation, population, period, inclusion/exclusion rules, and measurement units.

| Definition | Resolve explicitly |
| --- | --- |
| Grain | One row per event, person, account, order, or time interval? |
| Population | All eligible entities, active entities, exposed users, or a selected sample? |
| Rate | Exact numerator and denominator; unique entities or repeated events? |
| Time | Event time versus processing time; timezone and interval boundaries? |
| Comparison | Absolute change, relative change, percentage points, or adjusted difference? |
| Decision | What magnitude would change the next action? |

Example: “conversion” could mean orders per visit or buyers per eligible user. Those answer different questions even if both can be calculated from the same tables. Preserve the requested definition or label a provisional assumption.

**Done:** the result's population, units, denominator, and time boundary are unambiguous.

## 2. Audit the data path

Inspect schema/data dictionary, source date/version, refresh cadence, relevant sample rows, missingness, key uniqueness, and expected totals. Use read-only access for analysis; copying sensitive records into an external tool needs an appropriate destination and scope.

Before each join, identify expected cardinality and key normalization. Compare row counts, unique keys, unmatched keys, and conserved totals before and after. A legitimate one-to-many join still duplicates measures from the one side; aggregate at the intended grain before summing them.

Check null semantics in the actual engine. pandas can match null join keys to each other, unlike usual SQL equality joins. Its `validate` option can check one-to-one or many-to-one cardinality; allowing many-to-many does not validate uniqueness. [pandas merge documentation](https://pandas.pydata.org/docs/reference/api/pandas.merge.html)

Separate missing, zero, not applicable, unknown, and not yet observed. Compare missingness across groups/time, record exclusions, and examine whether complete-case analysis changes the population. Use imputation only with a defensible assumption and sensitivity check.

Interpret timestamps in their source timezone before converting. Make daylight-saving ambiguity, late-arriving events, inclusive/exclusive boundaries, and incomplete current periods explicit. A calendar day and a fixed 24-hour interval can answer different questions.

**Done:** the transformation preserves the intended grain and population, with exclusions and unresolved data defects recorded.

## 3. Compute and reconcile

Use the simplest query or calculation that answers the question. Make filter order, deduplication, units, and weighting visible in the saved query/notebook or a concise explanation.

For a pooled rate, divide summed numerators by summed denominators. Averaging subgroup rates equally estimates an average subgroup rate, which can be different. For example, 1/2 and 9/90 pool to 10/92, not the equally weighted mean of 50% and 10%.

Weight averages by the unit implied by the estimand. Keep survey, exposure, frequency, and analytic weights distinct; a weight column's name alone does not establish its interpretation.

For SQL windows, specify partition, ordering, tie-breaks, and frame where they affect results. Window functions retain rows rather than collapsing groups; filtering before the window changes the rows it sees. Check rolling and cumulative outputs on a tiny hand-worked sequence. [PostgreSQL window guidance](https://www.postgresql.org/docs/current/tutorial-window.html)

Reconcile an aggregate to source totals or an independent formulation. Inspect extreme values and representative contributing records. For charts, label units, denominators, time coverage, and missing periods; avoid implying continuity or precision the data does not support.

**Done:** an independent spot check or reconciliation supports the result, and the output can be traced back to its input definition.

## 4. Statistical branch: match inference to design

Use this branch when the request needs uncertainty, an experimental comparison, or a claim beyond the observed records. Start with the sampling/assignment mechanism, not a favored statistical test.

| Design | Main concern |
| --- | --- |
| Randomized experiment | Assignment/exposure integrity, attrition, analysis unit, planned outcomes |
| Observational comparison | Confounding, selection, reverse causation, and limits of causal interpretation |
| Repeated measurements | Pairing or clustering at the independent entity |
| Time series | Autocorrelation, seasonality, changing coverage, and period comparability |
| Many outcomes/subgroups | Multiplicity and whether analysis was planned or exploratory |

Report effect size and an appropriate interval with assumptions and sample counts. Resampling or standard errors must respect the independent unit; resampling visits independently can understate uncertainty when users contribute many visits.

Repeatedly checking a fixed-horizon test and stopping on a favorable result changes its error behavior. Use a valid sequential design if monitoring for a stopping decision, or preserve the planned analysis point. Address multiple comparisons and disclose exploratory selection.

A p-value is not the probability that a hypothesis is true and does not measure practical importance. Interpret evidence alongside effect magnitude, uncertainty, design quality, and the decision threshold. [ASA statement](https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf)

**Done:** the inferential claim is supported by the study design and states assumptions, uncertainty, and practical consequences.

## 5. Deliver or recover

Return the answer with units and population first, then the evidence and important limitation. Preserve source/query version, parameters, exclusions, and calculation steps in the requested artifact.

If a join, definition, or missing-data assumption fails, invalidate affected results, correct that boundary, and rerun downstream calculations. Do not keep an attractive headline from an incompatible earlier definition.

**Exit:** the result is reproducible, reconciled, and accurately described as descriptive, associative, experimental, or causal under stated assumptions. Data access or coverage gaps remain explicit rather than silently filled with invented values.
