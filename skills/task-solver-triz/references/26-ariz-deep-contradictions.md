# Deep contradiction analysis: an ARIZ-inspired adaptation

Use for a persistent, consequential contradiction after a short separation pass has failed, or when the user explicitly requests deep TRIZ work. This nine-stage process is a practical adaptation informed by ARIZ-85-V. It is **not the complete formal algorithm, a faithful translation of every step, or a certification of correct ARIZ practice**. It applies to nonphysical systems by analogy where stated.

Set an analysis budget and a stopping condition. Keep the working baseline available. Known feasible fixes, missing requirements, and urgent containment generally need direct action rather than this process. Produce a decision record and tests, not hidden deliberation or an exhaustive diary.

## 1. Define the minimum problem

Write the useful function, current failure, baseline measurements, and required improvements. Identify what can change and what must remain. Separate physical or formal limits, binding external requirements, preferences, and assumptions. Express a technical contradiction as: improving A through change X worsens B under condition C.

**Exit:** A bounded problem with two measurable requirements, an observed or explicitly hypothetical conflict, and a decision owner. If no conflict is established, first measure it; do not manufacture one to justify the method.

## 2. Model the interacting elements

Reduce the situation to the elements creating the useful and harmful interactions. Mark the operational zone where the conflict occurs and the operational time when it matters. Examine contrasting states: what succeeds when X is present, absent, stronger, or weaker? Include the surrounding system so a local improvement cannot hide displaced harm.

**Exit:** A small interaction sketch and the specific place/time/state to change. For a data pipeline, these may be a producer, reader and shared version during an update; they are functional analogies, not physical substances or fields.

## 3. State the ideal result and sharper contradiction

Describe the desired function with minimal added burden and no new harm. Treat this ideal final result as a search direction, not a guarantee or a literal zero-cost requirement. Ask whether the same element must have opposing properties to satisfy the two needs. In a physical system this may be conductive and nonconductive; in software, describe the opposing functional states without claiming a physical proof.

Specify why each state is required, where, and when. If the formulation is incoherent, revisit the model rather than inventing an exotic solution.

**Exit:** An ideal-result statement and a precise opposing-state requirement, or an explicit reason that the problem remains a technical trade-off.

## 4. Audit and recombine available resources

Inventory useful materials, energy, geometry, time, space, information, existing capabilities, byproducts, and surrounding resources. For each, state availability, ownership or permission, capacity, incremental cost, and reliability. Derive a candidate by recombining existing resources before adding another subsystem.

Try a simplified local model: represent what the smallest actors or units would need to do differently, then translate that image into a real mechanism. A metaphor is only useful if it suggests an implementable change.

**Exit:** A resource table and one candidate mechanism with unresolved assumptions. Idle capacity is not free if using it breaks another requirement.

## 5. Search separation mechanisms and relevant effects

Apply the separation that matches the opposing-state requirement:

| Separation | Diagnostic question | Candidate form |
| --- | --- | --- |
| Time | Do the states matter at different moments? | Prepare, switch, then restore |
| Space | Do different regions need different properties? | Localize the expensive or harmful behavior |
| Condition | Can a reliable observable condition select the state? | Bounded adaptive behavior |
| System level | Can parts and the whole satisfy different needs? | Distribute functions while preserving the total outcome |

If these do not produce a mechanism, inspect a few relevant [inventive principles](25-triz-inventive-principles.md). For physical problems, search by the needed function and operating range for a known physical, chemical, or geometric effect. For software, search for a verified algorithmic or architectural mechanism. Use available authoritative references or measured local knowledge; online lookup is optional, not required to run this process.

Record an effect's input conditions, output, scale, units, evidence, and side effects. If evidence is unavailable, label the mechanism unverified and specify the experiment or expertise needed. Analogy and a familiar theorem name do not establish feasibility.

**Exit:** A small candidate set whose mechanisms could meet both requirements, with a test for each.

## 6. Reframe or replace the task when blocked

Revisit the necessity assumptions: must this element perform the function, must it operate continuously, or can the system avoid needing it? Try a different system boundary, resource, representation, or alternative architecture while preserving the user's real outcome. Record any requirement that would change; an assumption can be challenged, while a binding requirement cannot be silently relaxed.

Stop unproductive recycling. If a hard limit appears decisive, verify that its assumptions match the actual problem. If that cannot be established, report an unresolved constraint rather than claiming impossibility.

**Exit:** A materially new candidate, a justified request to change a requirement, or a bounded unresolved result.

## 7. Test the resolution and secondary effects

Choose the smallest credible experiment that exercises both conflicting requirements under representative conditions. Define acceptance before execution. Compare the candidate with the baseline; include transition behavior, boundary cases, resource consumption and failure recovery. Inspect whether the conflict moved into maintenance, another stakeholder, or another part of the system.

**Exit:** Measured results where testing was possible, otherwise a ready test plan with explicit gaps. Classify the outcome as a demonstrated resolution within tested conditions, a managed trade-off, a failed candidate, or an unverified proposal. A simulation supports only the behavior it represents.

## 8. Transfer the useful result

Describe the causal mechanism independently of the original labels. Identify other cases sharing its necessary conditions, then test one representative transfer before proposing broad adoption. Simplify unnecessary machinery introduced during exploration. Preserve the implementation and verification artifacts needed to reproduce the result.

**Exit:** An implementation or handoff within authorized scope, its applicability boundary, and a reuse candidate if relevant. A useful idea is not automatically a patentable invention or a production-ready system.

## 9. Review the solution path and close

Compare the final problem with the initial wording. Record which assumption changed, which resource mattered, which attempts failed, and which evidence changed the decision. Separate a reusable mechanism from an accidental feature of the example. Name remaining uncertainty and the signal that would justify reopening the analysis.

**Exit:** A concise decision, supporting evidence, limits, next action, and stop/review condition. End when a tested candidate meets the contract, a verified limit determines the choice, or the analysis budget is exhausted. In the last case, retain the best verified option and state the highest-value unresolved test; do not manufacture an inventive resolution.

## Compact example: freshness versus stable reads

Suppose readers need a stable index while updates must become visible promptly. The conflicting functional states are “unchanging during this read” and “replaceable for new reads.” A candidate separates time and system level: build an immutable version, switch the pointer for new requests, and retain old versions until current readers finish. Test stale-read age, update delay, active-reader consistency, peak memory and failed-switch recovery. This resolves the stated conflict only if duplicate storage and update lag fit the measured constraints.

This example is an original software analogy. Historical and implementation sources are recorded in the [source ledger](sources.md).
