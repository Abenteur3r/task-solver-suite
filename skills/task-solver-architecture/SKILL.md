---
name: task-solver-architecture
description: "Design or assess software interfaces, components, APIs, and system boundaries. Resolve contracts, dependencies, state ownership, and failure behavior."
license: MIT
metadata:
  version: "3.0.0"
---

# Architecture and interfaces

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Read when selecting a module boundary, changing an API/data contract, coordinating producers and consumers, introducing persistence, or planning a compatibility migration. A local implementation detail with no boundary consequence does not need an architecture exercise.

## Fit the design to the decision

Use the user's selected design/domain skill for its deeper vocabulary and the project's established conventions. Produce only the decision artifact needed: a brief contract, diagram, example payload, or existing ADR update. Small changes can state the decision directly in the implementation handoff.

Output the chosen boundary, invariants, affected consumers, failure semantics, migration sequence where needed, and a way to verify the design.

## 1. Inspect the system that exists

Read entry points, public exports, schemas, database migrations, API definitions, queues/events, and representative callers. Follow one actual operation from request to durable result and back.

Identify who owns each state and which component enforces each invariant. Capture constraints from deployment topology, supported clients, latency, transaction needs, and team ownership rather than assuming a new service is needed.

| Question | Concrete artifact |
| --- | --- |
| Who calls this boundary? | Consumer list and representative calls |
| What information crosses it? | Typed input/output and example payload |
| What must always hold? | Domain invariants and enforcement location |
| Who owns durable truth? | Storage owner and update authority |
| What can fail independently? | Failure and retry contract |
| What versions coexist? | Compatibility/deployment matrix |

**Done:** the boundary's current responsibilities and actual consumers are visible. Unknown external consumers become a compatibility risk to resolve before breaking the interface.

## 2. Compare only plausible alternatives

Compare the current design, the smallest viable change, and another option only when it resolves a real limitation. Use concrete call examples to expose complexity hidden by a diagram.

Prefer cohesive modules that hide implementation choices behind a small useful interface. Keep domain concepts and invariants together; avoid forcing every caller to coordinate a protocol the module could enforce itself.

| Need | Usually sufficient | Additional mechanism justified by |
| --- | --- | --- |
| Reuse inside one process | Module/function boundary | Independent lifecycle or deployment |
| Several steps sharing an invariant | One operation/transaction | Separate ownership or unavoidable remote effects |
| Slow work outside request lifetime | Existing job mechanism | Durable retries and user-visible status |
| Read performance | Measured query/index improvement | Demonstrated contention or scale limits |
| Compatibility transition | Additive contract and staged migration | Consumers that cannot adopt together |

Record the chosen option, reason, rejected alternative, and condition that would justify revisiting. Do not add an abstraction solely for hypothetical future implementations.

**Done:** a caller can use the interface without understanding hidden sequencing, and the option satisfies the actual constraints.

## 3. Specify semantics, not only shapes

Define identifiers, units, precision, ordering, null versus absent fields, defaults, timestamps/timezones, pagination, validation, and error categories where relevant. Specify ownership and permission checks separately from schema validity.

For state changes, describe preconditions, atomic scope, concurrency behavior, durable completion, and uncertain outcomes. Use version checks or another established concurrency mechanism where lost updates matter.

For HTTP, choose methods/statuses consistent with their semantics. An idempotent request has the same intended effect when repeated; its response may differ. A method name does not make an incorrectly implemented operation safe to retry. [HTTP semantics](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2)

If using idempotency keys, define key scope, payload matching, retention, concurrent duplicate handling, and how callers recover the original result. A database transaction and a remote side effect do not automatically form one atomic operation. Use the project's durable job/outbox/reconciliation pattern when that gap matters.

Example: “Create export” returns a stable job ID, while “read export status” distinguishes queued, running, failed, and complete. Request acceptance is not artifact completion.

**Done:** normal, invalid, concurrent, duplicate, and partial-failure examples have defined outcomes.

## 4. Plan compatibility and data transition

Inventory existing readers and writers, retained records, caches, events, and generated clients. Compatibility includes semantics: an optional new field can still break a strict decoder or a consumer's assumptions.

For a staged change, use the project's compatible expansion path: introduce the new representation, deploy compatible readers/writers, backfill with checkpoints, verify agreement, switch authority, and remove the old path only when consumers and recovery needs permit it.

Define backfill selection, units, conflict policy, resumability, validation, and the treatment of writes arriving during migration. Test old and new application versions against the intermediate schema.

Separate application rollback from data recovery. A down migration may destroy new information; a backup restore may discard later valid writes. Name the chosen recovery procedure and its implications before an irreversible transition. Execute an actual rollout through [operations](../task-solver-operations/SKILL.md) when requested.

**Done:** every intermediate state has a compatible reader/writer path and a documented failure action.

## 5. Validate and hand off

Exercise contracts at the real boundary: producer to consumer, client to API, or operation to persisted state. Include one conflicting update or duplicate request when those behaviors are part of the design.

Use a focused prototype for an uncertain interface or performance claim; label what it demonstrates and what remains untested. Existing repository contract tests and schemas take precedence over a new parallel specification.

Review whether the design actually reduces caller knowledge and contains failure. Update only the documentation, bindings, and examples needed by affected users.

**Exit:** the decision is implementable, compatibility obligations are explicit, and the verification evidence supports its claims. A diagram alone does not establish correctness or scalability.
