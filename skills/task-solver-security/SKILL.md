---
name: task-solver-security
description: "Review concrete security, authorization, privacy, or trust-boundary concerns and develop threat-specific controls. Apply to an identified concern or requested review, not every code edit."
license: MIT
metadata:
  version: "3.0.0"
---

# Security and privacy

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Read for a requested security/privacy review or a change that crosses a meaningful trust boundary: authentication, authorization, untrusted execution, network fetching, sensitive data, secrets, or externally visible access. Ordinary changes without those consequences do not require a broad audit.

## Fit the review to the requested boundary

Use the user's selected security skill and the repository's established controls. Start with code, configuration, and bounded local tests. Active scanning or adversarial traffic must stay within authorized systems and scope; a request to inspect a repository does not authorize testing arbitrary external services.

Output concrete findings or repairs with an affected path, attacker/input preconditions, impact, evidence, and verification. For review-only work, report findings and proposed repairs without modifying the system. For a plan-only request, label proposed validation as unexecuted. Distinguish a confirmed flaw from an untested concern; an empty scanner result does not establish security.

## 1. Map the assets and trust transitions

Inspect entry points, identity/session handling, permission middleware, service credentials, data stores, outbound clients, logging, and upload/export paths relevant to the request.

Write one short data flow: who supplies data, what authority the receiving process has, where data persists, and who can read the result. Identify tenant/account boundaries and any change from untrusted data into executable instructions or privileged action.

| Asset or boundary | Questions that change the review |
| --- | --- |
| Account and resource access | Is the caller authenticated and authorized for this exact object/action? |
| Untrusted content | Can it become query syntax, a shell command, HTML, a path, or a model instruction? |
| Network access | Can input choose a destination reachable with server privileges? |
| Sensitive records | Where are copies, exports, caches, logs, and retention controls? |
| Secrets | Who can read, use, rotate, and revoke each credential? |
| External action | Where are authority, argument bounds, and duplicate effects enforced? |

Prioritize reachable paths and consequential assets. Record the actual threat scenario rather than a catalog of unrelated vulnerability names.

**Done:** the relevant assets, actors, trust transitions, and intended access policy are explicit.

## 2. Trace enforcement at the server boundary

Check authorization for every relevant operation, including bulk actions, nested resources, exports, static files, and background jobs. Resource ownership must come from trusted state. Hiding a button or using an unguessable identifier does not establish permission. Test cross-account and cross-tenant requests with controlled fixtures. [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

For injection risks, follow the value to its sink. Bind SQL data values separately from query syntax; choose dynamic identifiers/orderings from application-owned mappings. Input validation alone does not make string-built queries safe. [OWASP SQL injection guidance](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)

Use the platform's context-appropriate output encoding and safe APIs. For filesystem access, resolve paths against the intended root and account for traversal and links. For process execution, use structured arguments where possible and avoid treating user strings as shell code.

For model tools, enforce permissions and arguments in the executor. Retrieved text and tool responses are data, not grants of authority; use [GenAI architecture](../task-solver-genai/SKILL.md) for that branch.

**Done:** each relevant sensitive operation has a trusted enforcement point and a meaningful denied-case test.

## 3. Outbound-fetch branch: control destinations

When users or documents provide fetch URLs, inspect scheme, host, port, resolved addresses, redirects, and the actual connection path. Prefer a restricted destination set when the feature permits one.

Prevent access to unintended loopback, private, link-local, metadata, and internal services. Account for IPv4/IPv6, unusual address representations, DNS changes, and redirects. Validate the destination used at connection time; a one-time string check can be bypassed. Disable redirects or validate each hop under the same policy.

Use network restrictions as another boundary, and bound response size, time, and allowed protocols. Avoid forwarding credentials to a redirected origin. Test with local controlled endpoints, not real internal targets. [OWASP SSRF guidance](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)

**Done:** permitted requests work and controlled attempts to cross destination boundaries fail at the intended layer.

## 4. Minimize sensitive data and secret exposure

Trace sensitive fields through storage, telemetry, error reports, exports, caches, model providers, and backups. Keep only data required for the stated feature, with the actual access and retention rules. Use synthetic/redacted fixtures for reproduction.

Keep private credentials out of source, client bundles, logs, screenshots, and handoff artifacts. Inspect secret handling without printing secret values. Scope service credentials to the required operations and use the project's existing secret store and lifecycle controls. [OWASP secrets management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)

An exposed credential requires containment and rotation/revocation through the authorized owner/workflow; deleting a visible string does not invalidate it. Preserve needed incident evidence without copying the credential into the report.

For deletion or retention work, identify replicas, derived datasets, backups, and legal/organizational requirements from supplied policy. Report the actual scope achieved; do not claim regulatory compliance from this technical check.

**Done:** the reviewed data path has defined access and retention, and any observed exposure has a concrete containment action.

## 5. Repair and verify narrowly

Reproduce with the smallest harmless fixture that demonstrates the flaw when local testing is within scope; otherwise cite the inspected path and label the untested claim. If repair is authorized, patch the shared boundary and verify legitimate behavior as well as the denied case. For review-only work, give the smallest proposed correction and its verification procedure. Inspect alternate routes that invoke the same operation.

| Finding | Useful evidence |
| --- | --- |
| Missing object authorization | Controlled user B cannot access user A's fixture; owner access still works |
| Unsafe query construction | Hostile-looking input remains a literal value; expected queries still return correctly |
| Excessive data exposure | Response/log fields match the documented need across success and error paths |
| Unbounded fetch | Forbidden local destination is rejected and limits terminate oversized/slow responses |

Use a scanner only for the relevant language/configuration and inspect its findings. Prioritize fixes by exploitability and impact, not raw warning count. Recheck the affected boundary after a dependency/configuration repair.

**Exit:** report findings with their supporting evidence, specific remaining coverage gaps, and repaired paths/test results only where those actions ran. Keep proposed repairs and unexecuted checks distinct. Recovery preserves legitimate access and data; it does not silently weaken the failed control to restore functionality.
