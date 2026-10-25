---
name: task-solver-quantitative
description: "Solve mathematical, scientific, numerical, or optimization problems. Establish domains, units, feasibility, precision, and independent checks; use data analysis for empirical datasets and experiments."
license: MIT
metadata:
  version: "3.0.0"
---

# Quantitative problem solving

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Use for mathematics, quantitative modeling, numerical calculations, optimization, or checking a numerical claim. A small arithmetic question needs a direct calculation, not a full modeling ceremony. Use the domain-sensitive route when the calculation will determine a consequential medical, legal, financial, or physical action; arithmetic correctness alone does not establish suitability.

## Translate the question into a model

Identify the requested unknown, supplied quantities, units, domain, constraints, and interpretation of the result. Distinguish a mathematical exercise from an estimate about the world. In the latter, separate observed inputs from assumptions and identify the measurement period and population.

Define symbols before manipulating them. Preserve distinctions such as count versus rate, stock versus flow, percentage points versus percent change, and nominal versus adjusted values. Confirm conventions when they matter: inclusive endpoints, indexing origin, angle units, timezone, logarithm base, or probability conditioning. Ask only about ambiguity that can change the answer; otherwise state a reasonable interpretation.

## Check feasibility before solving

Inspect whether the constraints can coexist and whether the problem has enough information. Use bounds, signs, conservation, monotonicity, or simple counterexamples to rule out impossible requests early. For optimization, identify the feasible set and whether a solution is attained, merely approached, unbounded, or nonunique.

Check the domain before transformations. Division can discard zero cases, squaring can introduce extraneous roots, taking logarithms requires appropriate arguments, and a change of variables may alter boundary conditions. Preserve these restrictions through the derivation. If a theorem is used, verify its assumptions rather than citing its name as a universal shortcut.

## Choose exact or numerical work deliberately

Prefer exact arithmetic or symbolic expressions when they are manageable and clarify the result. Use numerical computation when scale, nonlinear behavior, data, or the requested precision makes it appropriate. Choose tools that are actually available; a hand derivation is sufficient for a small task and a solver is not evidence of correctness by itself.

For numerical work, record the equation or objective, input values, units, algorithm where relevant, stopping criterion, and tolerance. Distinguish solver convergence from correctness of the model and global optimality. Multiple initial conditions or a structural bound may be necessary when local solutions can differ. Avoid rounding intermediate values enough to change the final result.

For estimates, show the relationship among factors and use ranges that reflect uncertainty. Do not turn a rough assumption into a precise decimal merely because a calculator permits it. Preserve correlations between inputs when they materially affect uncertainty. A scenario range is not automatically a confidence interval or probability distribution.

## Verify through a different route

Choose checks capable of exposing a mistake rather than repeating the same computation. Substitute a proposed solution into the original equation, confirm dimensional consistency, inspect limiting cases, compare with a simple bound, or solve a small instance independently. Check signs, magnitude, and conservation where applicable.

For probability, verify normalization, event definitions, independence assumptions, and whether conditioning changed the population. For statistics, retain sample sizes, missing-data handling, selection effects, and the distinction between association and causal inference. For optimization, verify every constraint against the returned candidate and report the objective on the original scale.

Use exact test cases when possible: zero input, one element, equal alternatives, a known symmetric case, or an analytically solvable limit. A random sample of successful numerical cases cannot prove a universal claim. Conversely, one valid counterexample can refute such a claim; show that it actually meets the stated premises.

## Explain the result at the needed depth

Lead with the answer and units, followed by enough derivation to make the conclusion inspectable. Explain the material assumptions and why the chosen method applies. Give a rounded practical value alongside an exact expression when useful. Separate the model's answer from a recommended real-world action.

If the data are insufficient, identify the missing degree of freedom and provide a conditional formula or useful bound. If the solver fails, distinguish infeasibility, numerical difficulty, and an unverified candidate. Do not replace an unresolved result with a plausible-looking number.

## Completion

The answer satisfies the original domain and constraints, uses appropriate precision, and passes a meaningful independent check. Record any residual numerical tolerance, uncertainty, or nonuniqueness that affects interpretation. For a reusable calculation, deliver the formula or runnable artifact with its inputs so the user can reproduce the result.
