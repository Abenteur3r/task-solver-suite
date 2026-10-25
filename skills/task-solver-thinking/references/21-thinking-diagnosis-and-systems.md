# Thinking cards: diagnosis and systems

Read the selected card only. Establish the observed behavior, relevant boundary, and evidence available. Keep hypotheses visibly distinct from verified causes. Return a diagnosis or discriminating test; a convincing diagram alone cannot establish causation.

## 01. First Principles

Use when inherited assumptions exclude workable designs. List the required outcome, physical or contractual limits, measured quantities, and conventions separately. Reconstruct the smallest mechanism that could deliver the outcome using available resources. Challenge one convention with a cheap test before redesigning everything.

**Artifact and test:** A constraint ledger and candidate design. Check units, conservation or capacity limits, and the weakest new assumption. Example: separate bytes that must be transferred from an assumed requirement to resend the whole dataset. Skip this method when the established procedure already meets the goal; “fundamental” does not mean independently verified.

## 02. Five Whys

Use for one bounded incident. Start with a timestamped symptom, then ask what condition made it possible. Support each link with logs, reproduction, or a named evidence gap. Branch when more than one condition was necessary. Stop at an actionable mechanism, not at an arbitrary fifth answer or a person's supposed character.

**Artifact and test:** A causal chain with evidence per link and one intervention. Reproduce the incident, remove or control the proposed cause, and check an adjacent normal case. If the chain becomes guesswork, return the next observation needed instead of declaring a root cause.

## 03. Ishikawa Diagram

Use when a defined effect has several plausible cause families. Choose categories that fit the system, such as inputs, transformations, environment, interfaces, and measurement. Add specific candidate mechanisms under each. Rank them by evidence and the cost of distinguishing them; categories are prompts, not proof that every category matters.

**Artifact and test:** A cause map and a small test queue. Example: a throughput drop might come from larger payloads, retries, CPU contention, or changed measurement. Test the candidate whose result would eliminate the most live explanations. Stop listing causes once the next discriminating test is clear.

## 04. Iceberg Model

Use for repeated incidents that survive local repairs. Describe the event, then verify the longer-term pattern. Inspect structures that could generate it: incentives, handoffs, queues, defaults, and information delays. Identify any belief sustaining that structure as a hypothesis rather than attributing motives.

**Artifact and test:** Event → observed pattern → candidate structure → testable belief. For recurrent late approvals, inspect approval batching and ownership before blaming diligence. Change one structural condition on a bounded case and observe recurrence. Without repeated evidence, report an event-level diagnosis and leave the deeper layers unconfirmed.

## 05. Connection Circles

Use to map possible interaction among a small set of changing variables. Name measurable variables, draw directional links, and annotate how increasing one could change another, all else equal. Mark delay and evidence on important links. Trace closed paths; retain uncertainty instead of filling every possible connection.

**Artifact and test:** A sparse causal map and one intervention prediction. For example, a longer queue may cause retries that further increase arrivals. Check temporal order, competing causes, and whether throttling retries changes arrivals as predicted. Use a concept map instead when links mean “is part of” or “is an example of.”

## 06. Balancing Feedback Loop

Use when a system corrects a gap or resists intervention. Identify the desired state, measured state, error signal, corrective action, and delay. Trace whether the correction actually reduces the gap. Examine saturation and measurement error; aggressive correction combined with delay may oscillate.

**Artifact and test:** A loop sketch with an expected response over time. Example: autoscaling responds to load after instances finish starting. Test a small workload change and compare observed settling time and overshoot with the prediction. A balancing loop can stabilize an undesirable state; “balancing” is not a value judgment.

## 07. Reinforcing Feedback Loop

Use when a change amplifies its own drivers. Trace the complete return path from an initial increase back to a further increase; distinguish evidence for each link from an appealing growth story. Identify delays, finite resources, and any balancing mechanism that eventually dominates.

**Artifact and test:** A reinforcing loop, limiting factor, and proposed interruption or support point. Example: defects create emergency work that displaces preventive maintenance, permitting more defects. Test whether protected maintenance time changes the predicted intermediate variable. Do not infer exponential growth indefinitely or treat correlated growth as a closed causal loop.

## 08. Cynefin Framework

Use as a sense-making aid when the kind of response is uncertain. A stable, understood relation supports an established procedure; a discoverable relation may need expertise and analysis; emergent behavior calls for bounded reversible probes. During uncontrolled disruption, stabilize the situation before diagnosing it. If classification is unclear, split the task into smaller contexts rather than forcing one label on everything.

**Artifact and test:** A provisional context assessment, matching response, and signal for changing approach. For a novel team workflow, try a limited cohort and observe behavior instead of assuming an engineering-style prediction. Domain labels guide inquiry; they do not prove how the system works.

The procedures above are compact applications, not certified training. Source context is recorded in the [source ledger](sources.md).
