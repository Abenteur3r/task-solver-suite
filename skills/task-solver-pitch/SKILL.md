---
name: task-solver-pitch
description: "Prepare a pitch, demo script, presentation narrative, or judge defense using existing evidence and the actual event format. Focused presentation requests do not require rebuilding the product."
license: MIT
metadata:
  version: "3.0.0"
---

# Pitching, demo, and judging

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Use for a pitch, presentation, demo video, required write-up, or technical defense. Produce only the requested deliverable: narrative, deck, demo script/video, or evidence-backed Q&A. Add a demo, rehearsal, or Q&A only when requested or required by the delivery format. Use the intended audience and format, including the event's actual rubric and recording rules when competing; the timings below are examples.

Use the relevant parts of the [pitch/deck/demo template](assets/templates/pitch_deck_and_demo_script_template.md) for a pitch, deck, or demo; use the [judge Q&A template](assets/templates/judge_qa_defense_template.md) when Q&A is in scope. Copy a template into the project only when a saved deliverable is useful within the requested scope; for an inline pitch or Q&A, answer directly. Locate the project's existing completed scope contract, if available, and preserve its value proposition. The installed [scope template](assets/templates/hackathon_scope_triage_template.md) is blank; use it only when framing work is actually needed within the requested scope.

## Map each scored claim to visible evidence

| Common criterion | Judge-facing claim | Useful proof | Boundary to state |
| --- | --- | --- | --- |
| Problem/value | A specific user loses time or makes a costly error at this step | User observation, existing process, or cited baseline | Whether the problem is observed or a hypothesis |
| Innovation | This approach differs meaningfully from an available alternative | Focused comparison and one demonstrable capability | Which components are reused and what the team added |
| Technical quality | The system performs the task under realistic constraints | Held-out evaluation, failure handling, measured runtime | Dataset, sample size, evaluation conditions |
| Feasibility | The entry can run within its operating budget | Complete journey, cost estimate, dependency evidence | Prototype limitations and untested scale |
| Impact/business value | The improvement matters enough to adopt | Measured time/error reduction or an explicit scenario model | Assumptions, switching costs, and missing user validation |
| Presentation | The audience can understand and verify the benefit | Clear narrative and timed demo | Live versus recorded or simulated behavior |

These are common examples, not the official rubric. Preserve its actual wording and priorities when supplied. Sponsor requirements and integration proof may be mandatory even if their explicit score weight is small.

## Use a claim-evidence narrative

Lead with the user outcome, then explain the problem, show the working solution, and support the result. Use one idea per slide or screen. Architecture deserves time only where it explains a scored advantage, a constraint, or feasibility.

An illustrative three-minute pitch:

| Time | Purpose | Content |
| --- | --- | --- |
| 0:00–0:25 | Make the problem concrete | One user, one painful task, current baseline |
| 0:25–0:45 | State the promise | One sentence explaining what the entry changes |
| 0:45–1:45 | Demonstrate | Input, real work, result, user decision |
| 1:45–2:15 | Prove | Measured quality, speed/cost, comparison, and limitations |
| 2:15–2:40 | Explain differentiation | What the team built and why this design fits the constraint |
| 2:40–3:00 | Close | Value, next validation milestone, concise final claim |

A six-part deck can follow the same sequence: problem, solution, demo, evidence, differentiation/feasibility, next step. Merge or remove sections to satisfy the allotted time. Reserve Q&A separately if the event does.

## Translate metrics without changing their meaning

Use the pattern **baseline → result → meaning → limitation**. A validation ROC AUC change is evidence of ranking performance on that evaluation set; it is not automatically a percentage reduction in real-world errors. A latency improvement is meaningful only with comparable input, environment, and measurement boundaries.

Example: “On our held-out set of [N] cases with [split design], [metric] changed from [baseline] to [candidate]. This supports [narrow inference]. We have not yet measured [deployment outcome].”

For business value, show the calculation: eligible tasks × measured time saved × stated usage assumption. Label scenario estimates and do not present them as revenue or customer traction. Cite third-party claims to their original source and date. Avoid unsupported “first,” “best,” or “production-ready” claims about the prototype.

## Script the demo as observable actions

Choose one representative case with a clear before/after result. Record exact on-screen actions, expected output, narration, timing, and fallback trigger. Keep a second valid input ready to demonstrate that the journey is not hard-coded. Show a limitation or failure route if it supports reliability and fits the format.

For video, build a shot list with timestamps, screen content, narration, and overlays/captions. Use readable capture resolution and audio. If waits are edited out or sequences are sped up, label the edit so timing claims remain accurate. Verify runtime, file format, link access, and required attribution against the event rules.

For live delivery, clear unrelated windows and private data. Start from the same initial state used in rehearsal. Assign presenter and operator roles if a team is available. Rehearse the transition to a labeled recording or fixture after an induced failure; announcing a fallback is better than narrating an unexplained spinner.

## Prepare a defensible Q&A

Answer with **direct answer → evidence → limit → next test**, usually in one short paragraph. Prepare the questions most likely to change a judge's assessment:

- What did your team build, and what came from existing models, libraries, or templates?
- Why this model or architecture instead of a simpler baseline?
- How did you prevent leakage, contamination, or cherry-picking in evaluation?
- What fails, and what happens when the model, network, wallet, or API is unavailable?
- How much does a representative request cost, and what changes at scale?
- What user evidence supports the problem and the claimed benefit?
- What makes the approach different, and what evidence supports that comparison?
- How do you handle private data and external actions in the demonstrated workflow?
- What would you validate next with one more week?

If unknown, say which part is unknown and name the smallest useful test. Do not fill an evidence gap with a confident invented number. A well-bounded limitation can strengthen credibility when the core result is solid.

## Completion check

Each material claim has evidence or an explicit assumption label, and the output fits the requested audience, format, and length. When rehearsal or demo delivery is in scope, rehearse within the allotted time, including screen transitions; verify audience-level link access, label live/recorded/simulated parts, and test the relevant fallback and required integration. A script or plan-only handoff names the prepared version and proposed checks without claiming delivery or rehearsal occurred. Record a submitted version or receipt only after an authorized submission.
