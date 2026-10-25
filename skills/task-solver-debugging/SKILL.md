---
name: task-solver-debugging
description: "Diagnose failures, regressions, flaky behavior, or performance problems; establish the cause and a focused correction. Use for broken behavior rather than general feature development."
license: MIT
metadata:
  version: "3.0.0"
---

# Debugging and performance

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Read for an unexplained error, incorrect result, flaky behavior, regression, hang, or slow/resource-heavy operation. A known one-line correction can go directly through [implementation](../task-solver-software/SKILL.md). Security findings with an attacker-controlled path also use the relevant part of [security](../task-solver-security/SKILL.md).

## Fit the investigation to the symptom

Use the user's selected debugging skill and the project's existing diagnostics. This reference defines the evidence loop; it does not require a new logging framework, benchmark suite, or incident process for a small bug.

Output a reproducible case or bounded observation, supported cause, targeted fix, and before/after verification. Keep mitigation and confirmed root-cause repair distinct.

## 1. Capture the failure before changing it

Record expected versus actual behavior, exact input/state, version, environment, frequency, and the earliest known failing point. Obtain the relevant stack trace, request ID, test output, or performance sample without dumping secrets or unrelated data.

Check recent changes in code, configuration, dependencies, data, and external services. A temporal correlation suggests a hypothesis; it does not establish causation.

| Symptom | Initial evidence |
| --- | --- |
| Exception or wrong value | Small reproducer, failing input, first relevant stack frame |
| Intermittent failure | Rate, schedule/concurrency, seeds, shared state, request correlation |
| Hang | Thread/task state, pending I/O, locks, timeout ownership |
| Slow request | End-to-end timing and component breakdown under a defined workload |
| Memory growth | Retained objects/resources over repeated comparable work |
| Environment-only failure | Configuration, versions, permissions, paths, locale/timezone differences |

Reproduce with the smallest input that preserves the failure. If production cannot be reproduced, preserve its traces and mark the evidentiary limit; do not generate damaging load merely to force a symptom.

**Done:** there is a failing case or a bounded observation with enough context to test a cause.

## 2. Find the first broken boundary

Trace inputs and outputs through the relevant path. Identify the earliest point where observed state differs from the contract. Upstream corruption may make a downstream exception look like the cause.

Form one falsifiable hypothesis: “The stale response overwrites newer state because completion has no request identity.” State what evidence would confirm or reject it.

Test cheaply with a debugger, targeted trace, controlled input, or temporary instrumentation. If the hypothesis fails, retain the observation and change the hypothesis; avoid accumulating speculative fixes.

For flaky tests, inspect shared fixtures, ordering, concurrency, timing assumptions, and external dependencies. A retry can hide a defect; report failure rate and sample count rather than calling one successful rerun a fix.

Use the debugger already supported by the test runner. For example, pytest supports stopping at a failure and inspecting the failing state; its options are relevant only in a pytest project. [Pytest failure debugging](https://docs.pytest.org/en/stable/how-to/failures.html)

**Done:** a controlled observation links the proposed cause to the symptom. If only a mitigation is supported, label it accordingly.

## 3. Performance branch: measure the bottleneck

Define workload, input size, concurrency, cache state, environment, and the metric that matters: latency, throughput, memory, startup, or resource cost. Record a baseline before optimizing.

Separate waiting from CPU work, allocation from retained memory, and one slow request from queueing under load. Use the runtime's installed profiler or tracing facilities. Verify profiling overhead and sampling limits before treating a profile as a benchmark.

| Evidence | Candidate intervention | Check for displaced cost |
| --- | --- | --- |
| Repeated I/O | Batch or eliminate duplicate reads | Memory, staleness, partial failure |
| Expensive repeated computation | Reuse or cache valid results | Invalidations and authorization scope |
| Algorithmic growth | Better data structure or algorithm | Same semantics on edge cases |
| Lock contention | Shorter critical section or changed ownership | Races, ordering, starvation |
| Allocation pressure | Reduce unnecessary copies/lifetimes | Mutability and resource leaks |
| Queue saturation | Bound concurrency or apply backpressure | Throughput and rejection behavior |

Start with the largest measured contributor. An isolated microbenchmark is useful only if it predicts the user's workload. Profilers locate expensive behavior; their instrumentation affects execution, so compare final performance separately under matched conditions. [Python profiling documentation](https://docs.python.org/3/library/profile.html)

**Done:** the proposed optimization targets measured cost and has an explicit correctness and performance comparison.

## 4. Repair the cause and preserve behavior

Search all callers of the failing contract. Fix the shared source of the invalid state where appropriate, preserving error propagation, cleanup, and cancellation.

Add a regression test when it captures a meaningful bug and fits the project. Use deterministic synchronization for concurrency cases where possible. For timing-sensitive behavior, check the invariant or bounded condition rather than an arbitrary sleep.

Keep a small test input or reproduction procedure when automation is impractical. Remove temporary sensitive or high-volume instrumentation after collecting evidence, retaining useful diagnostics consistent with project practice.

**Done:** the repair explains the observed failure and reaches every affected path; a broad refactor is included only if necessary for correctness.

## 5. Verify, stop, and report

Re-run the original case, an adjacent valid case, and affected integration checks. For performance, compare repeated matched workloads, report sample count and variability, and check correctness alongside speed.

A faster median with worse tail latency may fail the actual requirement. A process that uses less memory by silently dropping work is incorrect. A small sample cannot support a precise population percentile.

Stop an investigation branch when its prediction fails or its evidence budget is exhausted. Preserve the best supported finding and the next discriminating test; do not report an unverified cause as resolved.

If a change regresses behavior, restore the task's last known-good state or use an already-authorized mitigation. Preserve other contributors' changes and diagnostic artifacts needed for follow-up.

**Exit:** report symptom, causal evidence, fix or mitigation, before/after checks, and remaining uncertainty. A passing rerun alone is insufficient evidence for an intermittent defect.
