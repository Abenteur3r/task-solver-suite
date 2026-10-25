---
name: task-solver-genai
description: "Design, build, or evaluate applications using generation, retrieval, model-invoked tools, or agents. Define evidence, evaluation, execution budgets, permissions, and failure behavior."
license: MIT
metadata:
  version: "3.0.0"
---

# GenAI, agents, and RAG architecture

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Read when a product, prototype, or workflow uses generation, retrieval, or model-selected tools. Produce one measured end-to-end user outcome before adding orchestration. This playbook is provider-neutral; the project's libraries, accounts, permissions, requirements, and any applicable event rules determine implementation choices.

## 1. Triage: choose the smallest sufficient execution path

Write the user input, observable successful output, permitted data/actions, and failure behavior. Set acceptance criteria before selecting a model or framework.

| Required behavior | Initial architecture | Add complexity only when |
| --- | --- | --- |
| Exact lookup, arithmetic, filtering, or a known business rule | Ordinary code/database query | Language ambiguity is a demonstrated obstacle |
| Transform or summarize supplied content | One generation call with an output contract | A measured failure requires another step |
| Answer from an owned, changing corpus with citations | Retrieval, generation, citation checks | Retrieval diagnostics justify reranking or multiple retrieval passes |
| Perform a known sequence of API operations | Explicit workflow with typed tools | The next step genuinely depends on unpredictable intermediate results |
| Explore an open-ended task with tools | Bounded agent with recorded observations and stop conditions | Evaluation shows it outperforms the fixed workflow within budget |

Distinguish predetermined workflows from model-directed agents and account for their cost/latency tradeoffs. [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

Define the budget per completed request: end-to-end deadline, model calls, tool calls, input/output tokens, and spend. Name the fallback and specify whether it preserves the main task or offers a reduced result. A multi-agent architecture needs measured task decomposition benefits; multiple role names alone are not evidence.

**Done:** a short architecture decision names the simplest viable path, the bottleneck it addresses, and one test that could disprove the choice.

## 2. Baseline: build and measure one complete request

Implement a thin path from real input through the service to a useful displayed result. Log request ID, component durations, model/config version, token usage, tool outcomes, and response status. Exclude secrets and unnecessary user content from logs.

Validate generated structured outputs against the application's schema and domain rules before using them. Keep credentials server-side; user-visible source code and browser bundles are public. Use a deterministic mock response only to unblock UI integration, label it as mock, and run the acceptance test against the real path before claiming functionality.

Construct a small development set with expected outcomes and a separate final-check set. Cover typical requests, ambiguous inputs, unsupported requests, empty/large inputs, and the highest-cost failure cases. Deduplicate related cases across sets; a paraphrase of the same answer can leak a test case.

Measure useful completion rate, not only fluent answers. For example, a document assistant must answer the question using accessible sources and attach citations that actually support the factual claims. A tool assistant must reach the correct application state without unintended operations.

**Done:** one complete request works on real inputs; baseline quality, latency, and cost are saved with evaluation sample size and environment.

## 3. RAG branch: expose where grounding fails

RAG combines a generator with retrieved external information. Retrieval can supply updateable evidence; it does not by itself guarantee correctness or citation fidelity. [Original RAG paper](https://papers.nips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html)

Track the data path explicitly:

`allowed documents -> extraction -> chunks + provenance -> index -> authorized retrieval -> generation -> verified citations`

For each indexed item retain source ID, title or URL, version/date, section/page, text span, and access scope. Preserve enough location information for a human to inspect a citation. Version the corpus snapshot, extraction/chunking settings, embedding setup, and retrieval configuration together.

| Failure observed | Diagnostic and next experiment |
| --- | --- |
| Relevant evidence absent from the index | Inspect source permissions, ingestion errors, OCR/extraction, and update lag |
| Evidence indexed but not retrieved | Evaluate retrieval on labeled queries; try lexical search, better chunk boundaries, or a hybrid method |
| Relevant chunks retrieved but answer wrong | Inspect truncation, conflicting sources, prompt, and output constraints |
| Answer correct but citations unsupported | Compare each cited claim to its exact evidence span; reject invented source IDs |
| Answer comes from inaccessible documents | Fix server-side authorization and cache partitioning before further quality tuning |
| Long context increases latency or confusion | Reduce redundant chunks and measure evidence coverage before adding a larger context |

Choose chunk boundaries around meaningful units such as sections or records; preserve tables and qualifiers required to interpret them. Set chunk size, overlap, retrieval count, and reranking by measured failures. These are experiment variables, not universal constants.

Apply access control before inaccessible text enters the model context. Propagate permissions through retrieval, caches, citations, and downloads; a client-side filter does not enforce a data boundary. A cache key must include the relevant authorization scope and data/config version.

Keep benchmark answers and grading annotations out of the searchable corpus. Source documents needed to answer held-out questions may belong in the corpus when that matches the intended use; the hidden answers and tuning decisions do not. Maintain distinct development and final evaluation queries, including unanswerable questions and conflicting or stale sources.

Measure retrieval evidence coverage separately from answer correctness and citation support. For an unsupported answer, return a clear limitation or the best relevant source list rather than fabricate a confident response. Verify dates when sources conflict.

**Done:** a failed answer can be traced to ingestion, retrieval, generation, or citation handling, and access-boundary tests pass.

## 4. Tools and agents branch: make control explicit

Give each tool a narrow purpose, typed inputs, bounded outputs, and defined error states. Validate IDs, resource ownership, argument limits, and allowed destinations in the executor. Model output is a proposal; a schema-valid call is not proof of authorization.

Treat retrieved documents, websites, uploads, and tool outputs as untrusted data. They cannot grant capabilities or override the user's task. Keep authorization outside the model, use least-privilege credentials, and test indirect instruction attacks carried in retrieved content. Prompt wording or a filter alone cannot establish a reliable security boundary. [OWASP prompt injection guidance](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)

Enforce any approval required by the actual application policy for the exact operation and arguments; preserve authorization already granted within its scope. For a hackathon demo, prefer a sandbox or dry-run tool when real side effects are unnecessary to demonstrate value.

Keep explicit execution state: objective, trusted inputs, observations, remaining budget, pending operation, and terminal result. Define stop conditions for success, user cancellation, budget exhaustion, repeated equivalent actions, and unrecoverable failure. Do not let an agent repeatedly request the same failed operation without new evidence.

For side-effecting tools, attach an idempotency key where supported and reconcile uncertain outcomes before retrying. A timeout can occur after an operation succeeded; blind retries can duplicate it. Validate consequential output with the service's returned state or receipt.

**Done:** the workflow demonstrates correct tool selection, rejects unauthorized arguments, and terminates predictably on failure and budget exhaustion.

## 5. Harden: turn budgets into enforceable behavior

Allocate the total deadline among retrieval, generation, tools, and response delivery. Enforce an overall deadline as well as per-call timeouts; per-call limits alone permit an overlong chain. Track first useful output separately from full completion.

Retry only transient, safe-to-repeat failures within the remaining deadline and attempt budget. Respect provider retry hints, add bounded backoff/jitter, and avoid multiplying retries across SDK, service, and orchestration layers. After repeated provider failures, use a circuit breaker or a simple failure threshold and a documented recovery condition. [AWS retry guidance](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)

An illustrative budget for a short demo request is 10 seconds total, 2 model calls, 3 tool calls, and at most 1 retry if enough deadline remains. Replace these numbers with measured targets for the event; they are design examples, not service guarantees.

| Incident | Expected user-visible behavior |
| --- | --- |
| Retrieval finds no adequate evidence | Explain the evidence gap and show available sources or request a focused clarification |
| Provider timeout/rate limit | Stop at the deadline and offer the designated retry or reduced path |
| Tool result is ambiguous | Report pending/unknown status and reconcile before repeating a mutation |
| Primary service unavailable | Use a tested alternate path with equivalent data permissions, or show a clear reduced capability |
| Live demo cannot connect | Switch to a labeled recording or cached demonstration; distinguish it from a live execution |

Streaming can improve time to first useful output; it does not prove lower total latency or final correctness. Avoid presenting partial generated text as a completed validated result. Cache only when freshness, permissions, and retention requirements permit it.

For the final candidate, run the frozen final-check set once after selection. If its failures drive another tuning round, it becomes development data; reserve fresh cases for the next independent check. Report sample size, task success, failure types, cost per request, and latency distribution under stated concurrency and warm/cold conditions. Small samples make tail-percentile estimates unstable: include raw worst cases and repeat representative calls.

Use task-specific deterministic checks where possible, human assessment for qualities requiring judgment, and a calibrated model judge only as an additional signal. If using a model judge, inspect disagreements and keep its rubric/config fixed during a comparison.

**Exit gate:** the main user journey meets its stated acceptance targets; relevant outage, invalid-output, adversarial-source, and tool-failure cases reach tested terminal states. Hand off the runnable entry point, configuration requirements, evaluation evidence, architecture decision, and labeled fallback. Use the [pitch/demo playbook](../task-solver-pitch/SKILL.md) only when a presentation is requested or required.
