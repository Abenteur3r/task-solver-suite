---
name: task-solver-software
description: "Implement or refactor behavior in an existing codebase, preserving contracts and affected callers. Use focused debugging, architecture, or UI skills when those are the immediate task."
license: MIT
metadata:
  version: "3.0.0"
---

# Software implementation

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Read when implementing a feature, fixing a known defect, changing behavior, or making a bounded refactor in an existing codebase. For an unexplained failure, start with [debugging](../task-solver-debugging/SKILL.md). Use [architecture](../task-solver-architecture/SKILL.md) only when the change needs a new boundary or compatibility decision.

## Fit the process to the change

A text correction or obvious local edit needs inspection, the edit, and a relevant check. Skip formal plans, new abstractions, and extra test scaffolding for that case. An explicitly selected specialist skill and the repository's instructions govern language, framework, testing, and delivery mechanics; this reference supplies scope and completion criteria.

Output the working change, appropriate verification evidence, and any practical limitation. A design-only request ends with a concrete design, not unrequested implementation or deployment.

## 1. Locate the behavior and its contract

Read the requested outcome, relevant repository instructions, current diff, entry point, and nearby implementation. Inspect manifests, lockfiles, build/test scripts, and existing tests to establish the actual toolchain.

Use a concrete example: given this input and state, the caller should observe this result or error. Preserve existing behavior outside the requested change unless it must change to satisfy that contract.

Search for every affected symbol, configuration key, serialized field, and route. Trace both producers and consumers:

| Surface | Inspect when affected |
| --- | --- |
| Function or module | Callers, exports, error handling, resource cleanup |
| API or serialized data | Server, client, schema, generated bindings, compatibility |
| Configuration | Defaults, parsing, environment templates, deployment wiring |
| UI behavior | State transitions, accessibility, loading/error/empty states |
| Shared component | All uses and their differing assumptions |
| Build or dependency | Version constraints, lockfile, CI, runtime target |

Do not infer that a passing local example covers all callers. Record the minimum set of files and behaviors the change must reach. Preserve unrelated local work.

**Done:** the intended observable change and all known affected surfaces are identified. Clarify only an ambiguity that would materially change implementation.

## 2. Choose the smallest complete approach

Prefer an existing project helper or convention when it fits. Otherwise use the platform's normal primitive. Add a dependency or abstraction only when it removes substantial complexity or satisfies a concrete requirement.

| Decision | Default approach | Escalate when |
| --- | --- | --- |
| One behavior in one place | Local change | Several callers need the same invariant |
| Repeated boundary validation | One shared boundary | Contexts genuinely require different rules |
| Public interface change | Compatible extension or coordinated caller update | Existing consumers cannot migrate together |
| Expensive uncertainty | Small executable probe | A measured result supports the larger implementation |
| Existing defect plus cleanup | Repair the cause | Cleanup is necessary to make the repair correct |

Treat errors, cancellation, cleanup, and limits as part of the behavior. Moving code must preserve them. Avoid silently converting exceptions into success, dropping invalid records, or retrying operations whose effects may already have occurred.

**Done:** the approach covers the contract without an unrelated migration, rewrite, or new subsystem.

## 3. Implement through the actual boundaries

Make changes in the project's established layers. Keep one authoritative representation of a rule; update generated output using the established generator when applicable.

For untrusted input, validate at its receiving boundary. Keep domain rules where all relevant callers share them. UI validation improves feedback but does not replace server enforcement.

For asynchronous work, define what happens if the caller cancels, a newer request replaces an older one, a dependency times out, or completion arrives twice. Update state only for the operation it belongs to.

For data-changing code, identify the transaction boundary and partial-failure behavior. Route a genuine schema transition through [architecture](../task-solver-architecture/SKILL.md), and operational execution through [operations](../task-solver-operations/SKILL.md), only as needed.

**Done:** every identified caller, schema, fixture, export, and configuration affected by the new behavior is consistent. Old paths are removed only when their users have migrated.

## 4. Verify behavior at the right scale

Run repository-required checks and the smallest checks that exercise the change. A test should detect a plausible failure, not merely restate implementation details.

- For a defect, demonstrate the original failing case and an adjacent valid case.
- For a new branch, cover the outcome and its meaningful boundary or failure condition.
- For a shared interface, exercise a real producer/consumer path or contract check.
- For UI, inspect the rendered result and the relevant interaction; compilation alone cannot establish usability.
- For configuration, validate the actual loader and one representative environment where possible.

Use installed tooling and documented commands. A missing service or tool is a verification limit to report, not a reason to invent a pass. Distinguish newly introduced failures from pre-existing ones using available evidence.

Inspect the final staged, unstaged, and new-file changes. Git's diff views answer different comparisons; a single default diff does not show every untracked or staged change. [Git diff documentation](https://git-scm.com/docs/git-diff)

**Done:** required checks and relevant behavior checks pass, or the exact unverified boundary and consequence are stated. Repeat broad testing only for new changes or unresolved concerns.

## 5. Deliver and recover

Describe the changed behavior, the reason, and the evidence. Point to the relevant files and describe any compatibility or rollout requirement the user must act on.

Keep recovery proportional: a local edit may need only a clear diff; a persisted-format change needs an explicit recovery path. Revert only this task's changes if an experiment fails, preserving other work.

Publishing, merging, and deployment follow the existing request's authorization. Complete the reviewable implementation and checks before asking about a final external action whose authorization is genuinely missing.

**Exit:** the requested code works across its affected surfaces, the diff is focused, and the handoff states what was actually verified.
