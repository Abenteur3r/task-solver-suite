---
name: task-solver-planning
description: "Choose product scope, prioritize work, or plan projects with consequential uncertainty or dependencies. Connect user needs and evidence to feasible milestones, acceptance criteria, and next actions."
license: MIT
metadata:
  version: "3.0.0"
---

# Product and project planning

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Use for product scope, prioritization, project sequencing, roadmaps, or execution plans with material uncertainty or dependencies. For a small obvious task, provide the next action directly. A plan should organize authorized work toward a result; it does not create permission to contact people, spend money, publish, or change external systems.

## Establish the outcome and evidence

Identify the intended user or beneficiary, the situation triggering the need, the current alternative, and the observable improvement sought. Separate observed problems from assumed demand. Interviews, usage records, a working prototype, and stated interest provide different kinds of evidence; describe what each actually establishes.

For an existing product, inspect the current behavior and commitments before inventing a new solution. For a new idea, choose the smallest test that could distinguish a real need from a plausible story. Ask about missing constraints only when they change scope or the next action. Use a [task contract](assets/templates/task_contract_template.md) for substantial work when a persistent shared record would help.

## Choose scope by consequences

List mandatory outcomes, useful differentiators, and optional additions. Define a complete minimum journey or deliverable before adding more users, channels, features, or integrations. A feature earns its place by supporting an outcome, satisfying a requirement, or resolving a consequential uncertainty.

Compare candidate work using expected benefit, evidence confidence, total effort, dependency risk, reversibility, and opportunity cost. Include verification, rollout, support, and maintenance in effort. Treat estimates as estimates. If two items share a prerequisite or compete for the same limited resource, evaluate the combined plan rather than independent scores.

Prefer a bounded experiment when confidence is low and the implementation is costly. Prefer implementation when the need and approach are sufficiently supported. A discovery experiment should have a decision rule: what result would cause the team to proceed, revise, or stop? Avoid experiments that collect interesting information without changing a choice.

## Build a dependency-aware schedule

Work backward from the delivery constraint. Identify prerequisites, external lead times, unavailable resources, approval points that actually apply, and tasks that cannot proceed in parallel. The critical path is the dependency chain controlling completion, not merely the collection of largest tasks.

For every material milestone, state the observable artifact, owner or responsible role, acceptance test, dependencies, and latest useful completion time. Use ranges when duration is uncertain. Place contingency near the uncertain work and final delivery rather than assuming every estimate succeeds exactly. If dates are missing, use clearly provisional relative timing instead of inventing a calendar commitment.

Keep the schedule executable. Parallel work needs independent inputs, clear ownership, and integration time. Resolve shared interfaces before distributing implementation. Revisit the plan when a dependency slips, evidence invalidates a requirement, or available capacity changes; explain which downstream commitment is affected.

## Validate value and economics honestly

Define how the user benefit will be observed: successful task completion, reduced error, time saved, improved access, or another relevant outcome. A demo proves a bounded capability; it does not establish adoption or business value. Include representative users and realistic conditions when validation is authorized and feasible.

Show the arithmetic behind economic estimates. Separate eligible demand, assumed adoption, usage frequency, measured benefit, price, variable cost, fixed cost, and support burden. Avoid equating revenue with profit or total market size with obtainable customers. Use scenario ranges and identify the assumption that most changes the decision. If no evidence supports a number, leave it unknown rather than filling a persuasive slide.

## Review and hand off

Present the chosen scope, cut list, sequence, acceptance milestones, principal risks, and next concrete action. Record alternatives and the evidence behind consequential choices in a [decision record](assets/templates/decision_record_template.md) when useful. Keep routine choices brief.

For execution, update progress from completed artifacts and observed blockers. Distinguish “started,” “implemented,” “verified,” and “delivered.” A percentage without an acceptance basis is not evidence of readiness. When capacity is insufficient, show the smallest scope or date change that restores feasibility rather than silently assuming more people or time.

## Completion

The plan connects an evidenced or explicitly assumed need to a bounded deliverable, realistic dependencies, measurable milestones, and an owner for the next step. The reader can see what would change the plan and what evidence would justify stopping. If implementation was requested too, planning is an intermediate artifact; continue into the appropriate execution route.
