---
name: task-solver-operations
description: "Plan or execute service deployment, migration, operational automation, or recovery. Address compatibility, retries, idempotency, observability, and rollback within the requested scope."
license: MIT
metadata:
  version: "3.0.0"
---

# Operations and automation

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Read for a deployment, migration, scheduled job, recurring monitor, infrastructure/configuration change, or operational recovery. A request for a local code fix does not itself require a rollout. Use [debugging](../task-solver-debugging/SKILL.md) for an unexplained incident before choosing a corrective change.

## Fit execution to the authorized task

Use the user's selected operations skill, available purpose-built connector, and actual project runbook. Inspect existing jobs, deployment definitions, and account context before creating replacements. Do not invent universal cloud commands, roles, environments, or scheduling syntax.

Read-only inspection and preparation normally proceed directly. Carry out already-authorized changes without repeated approval. If an external or irreversible action genuinely lacks authorization, finish the concrete plan/artifact and checks first, then identify the exact action, target, and consequence requiring a decision.

Output the changed artifact or operational result, identifiers/status, verification, and recovery information. A prepared plan is not an executed deployment.

## 1. Establish target and current state

Inspect configuration, current revision, environment/account/region, service/database identity, scheduler, dependencies, and relevant recent events. Verify the target from tool state rather than relying only on its display name.

| Operation | Inspect before changing |
| --- | --- |
| Deploy | Build artifact, current release, config/secrets references, health checks, rollout mechanism |
| Data migration | Schema/version, affected rows, concurrent writers, locks, disk/time budget |
| Infrastructure change | Actual resource IDs, desired diff, state ownership, dependencies |
| Automation | Existing matching job, trigger/timezone, permissions, overlap/retry behavior |
| Recovery | Failure scope, last good state, recent writes, available backups and receipts |

Record the expected state change and an observable success condition. Choose a bounded rollout or dry run supported by the existing tooling; verify what the dry run actually validates and whether it has side effects.

**Done:** the exact target, delta, verification signal, and authorized scope are known.

## 2. Prepare a recovery that matches the mutation

Preserve the current artifact/configuration and identify how to restore service if the candidate fails. Separate executable rollback from data rollback: reverting application code may not undo a schema change or external operation.

For data-changing work, choose an appropriate snapshot/export/backup and test restoration into an isolated target when feasible. Record its scope, timestamp, retention/access, and the writes that a restore would lose. A backup file's existence is not proof it can be restored.

Database-specific coverage matters: PostgreSQL's per-database dump does not include cluster-wide roles or tablespaces. Check the actual engine's backup semantics and recovery requirements. [PostgreSQL dump documentation](https://www.postgresql.org/docs/current/backup-dump.html)

Define rollback triggers, decision owner, and last safe point. If recovery needs a forward fix or manual reconciliation, say so before execution rather than claiming reversibility.

**Done:** the failure action is applicable to both application and data state, with known recovery limits.

## 3. Execute the relevant branch

### Deployment

Build or select an identifiable artifact, run required checks, and apply the existing rollout method. Keep configuration compatible with both old and new instances during overlap. Monitor rollout state and a real critical operation, not only process startup.

A platform rollback has a defined scope. For example, Kubernetes Deployment rollback restores the Pod template; it does not restore a database or every related resource. [Kubernetes deployment guidance](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment)

### Migration

Rehearse representative data, including invalid/legacy values. Use transactions only where the actual engine and operation support them. Bound batches and lock time; retain a progress checkpoint so interrupted work can resume safely.

Coordinate readers/writers through the compatible states described in [architecture](../task-solver-architecture/SKILL.md). Verify counts, keys, invariants, and reconciliation totals rather than row count alone. Treat a destructive final cleanup as a distinct step after consumers and recovery requirements permit it.

### Automation or monitor

Specify trigger, timezone, input scope, output destination, run limit, retry budget, concurrency/overlap policy, and duplicate-effect protection. Update an existing matching job when appropriate rather than creating duplicates.

For monitoring, define the meaningful state transition and user's notification preference. Keep unchanged/non-actionable runs quiet unless periodic status was requested. Save enough state to avoid repeating the same notification and provide a way to stop or update the job.

**Done:** the intended operation is applied once or its intermediate state is explicitly recorded; uncertain outcomes are reconciled before another attempt.

## 4. Handle retries and partial failure

Use stable operation IDs or service-supported idempotency mechanisms for repeated effects. A timeout does not prove failure. Inspect the existing operation, receipt, job state, or durable record before retrying.

Bound retries across the whole stack and the overall deadline. Separate transient failures from invalid input, denied access, and exhausted capacity that require a different response. Retrying a non-idempotent HTTP request requires evidence that repetition is safe or that the original effect did not occur. [HTTP retry semantics](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2)

On a failed batch, report completed, failed, and uncertain items by stable ID. Avoid replaying successful items merely because the aggregate task failed.

**Done:** retries cannot silently multiply external effects, and interrupted work has a reconciliation path.

## 5. Verify the durable outcome

Check the deployed revision/configuration, data invariants, or saved schedule via the authoritative service. Perform a representative end-to-end operation at the intended access level. Record the check's scope and observation period.

For an automation, inspect the saved schedule and next run; test one bounded invocation when feasible and authorized. Schedule creation is not proof that a future run will succeed. Do not leave a redundant test schedule enabled.

Stop or roll back when the defined failure threshold is reached. Preserve logs and identifiers needed for diagnosis, excluding secrets. Verify recovery rather than merely issuing a rollback command.

**Exit:** distinguish prepared, applied, running, verified, rolled back, and unresolved states. Return the actual target, artifact/version or job ID, evidence, and any follow-up required for incomplete recovery.
