---
name: task-solver-ui
description: "Design or implement a usable interface or working prototype centered on a complete user journey. Address interaction states, integration, accessibility, and observable usability."
license: MIT
metadata:
  version: "3.0.0"
---

# Rapid prototyping and UI

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Use for a usable interface, product prototype, demonstrable ML tool, or full-stack sprint. Output a working core journey, measured responsiveness, and an operable build. An available UI/site skill can supply platform-specific implementation mechanics. Add [GenAI architecture](../task-solver-genai/SKILL.md) only when a generation, retrieval, or model-selected action boundary needs design or verification.

## Prove one vertical slice

Describe the journey as **input → useful work → understandable result → next action**. Choose representative input before styling. Integrate the riskiest real dependency first: an external model, wallet, database permission, sponsor API, or on-device runtime. A static mock can test layout but does not validate that dependency.

Build in this order when starting from nothing:

1. Accept one realistic input with a visible example and format/size validation.
2. Run the minimum useful computation or service request.
3. Present a result the target user can assess, including its source or confidence limitation where relevant.
4. Handle waiting, empty input/result, invalid input, and dependency failure.
5. Make the journey reproducible from a clean launch, then improve the highest-impact presentation details.

**Gate:** A person other than the implementer can finish the journey from the initial screen. If they cannot, simplify the flow before adding another feature.

## Select a stack from the constraint

| Situation | Prefer | Reason to choose something else |
| --- | --- | --- |
| Existing working application | Its existing stack and components | A measured blocker makes the core journey infeasible |
| Python data app with plots and controls | A small data-app framework, such as [Streamlit](https://docs.streamlit.io/) | Custom navigation, strict browser UX, or complex client state dominates |
| Model demonstration with known input/output widgets | An inference-demo framework, such as [Gradio](https://www.gradio.app/docs) | The workflow needs more application structure than model interaction |
| Multi-page web flow, custom interaction, or integrated backend | A familiar web stack, such as an existing [Next.js](https://nextjs.org/docs) project | Setup and hosting consume more time than the scored benefit |
| No backend required | Static HTML/CSS/JavaScript using local data | A required private credential or persistent shared state needs a server |

These are examples, not suite dependencies. Confirm the chosen framework's current behavior, hosting constraints, and APIs from its official documentation before implementation. Keep secrets on the server; a browser bundle cannot protect a private API key.

For a blockchain event, prove the required contract call on the event-appropriate network, handle wallet rejection, and distinguish transaction submission from confirmation. Simulated or recorded transactions must be labeled. Use test funds for rehearsal unless the event and user explicitly require otherwise.

## Keep the interface legible under judging conditions

Place the task, input, action, and result in a clear reading order. Show an example near the input. Use semantic controls, accessible names, keyboard focus, readable contrast, and layouts that survive the expected viewport. Critical states must be understandable without relying on color alone.

| State | What the user sees | Engineering behavior |
| --- | --- | --- |
| Ready | One primary action and an example | Validate required input before work starts |
| Working | Honest progress or a loading state | Disable duplicate effects; allow cancellation where supported |
| Success | Result, units/source, meaningful next action | Retain enough context to understand which input produced it |
| Empty | Why nothing was found and a useful next input | Return a valid empty result, not an invented success |
| Failure | Actionable message and retry or fallback | Record diagnostic detail privately; keep secrets out of UI logs |
| Fallback | Clear indication of cached, fixture, or recorded behavior | Preserve provenance and avoid presenting it as live output |

Keep implementation details out of the main journey unless users need them to decide. Put model or infrastructure diagnostics in a separate details area when useful. Streaming can improve perceived responsiveness; measure final completion time as well.

## Make speed measurable

Set a budget for the full interaction and, where relevant, time to first visible output. Measure cold startup and warmed requests with representative payloads. Separate network time, model time, and rendering time only far enough to locate the bottleneck. Small sample timings are observations, not a reliable population p95.

Reduce payloads, repeated work, and unnecessary calls before changing the architecture. Cache only where input identity, user access, model/version, and freshness can be respected. A cache hit from one demo input does not establish performance on unseen inputs.

If the interaction is too slow, consider a smaller bounded request, asynchronous progress, a precomputed public dataset view, or a lightweight first answer followed by optional detail. Each choice must preserve the promised user outcome and identify stale or partial results.

## Debug within a timebox

Capture the failing input, expected behavior, actual behavior, and smallest repeatable path. Identify the first broken boundary; inspect its inputs and outputs. Form one cause hypothesis, test it cheaply, and change the shared cause. Re-run the failure and one adjacent valid path. Keep the working artifact available while debugging.

When the timebox expires, choose explicitly among narrowing the input contract, removing the failing optional feature, or activating the prepared fallback. Silent exception swallowing creates a misleading demo and makes the next diagnosis harder.

## Freeze and verify

Run the core journey from a clean session using both a representative input and one unseen but valid input. Test invalid/oversized input, timeout, refresh, double-click, keyboard navigation, and the expected screen size. For a shared or deployed interface, verify the actual URL with the intended audience's access level; use judge-level access when competing. A local prototype needs its local entry point verified, without requiring publication.

Keep start instructions, required environment variable names without values, a dependency lockfile when the project uses one, and a known-good build identifier. Retain a truthful fallback where needed; make a recording only when useful for a requested or required presentation and permitted by its rules. Acceptance means the real journey works within its budgets and the failure route is usable.
