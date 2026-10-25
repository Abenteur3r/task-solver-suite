# Hackathon scope triage

Copy into the project and fill the brackets. Mark unknowns as unknown, with an owner or next check. Keep official requirements separate from team estimates.

## Event contract

| Field | Value / evidence |
| --- | --- |
| Event and entry | [name; entry identifier] |
| Brief, rules, rubric, submission instructions | [URLs/files and date checked] |
| Official deadline and timezone | [date, time, timezone; local conversion if useful] |
| Team/eligibility deadlines | [requirements or not applicable] |
| Track | [A predictive ML / B product or GenAI / hybrid] |
| Scoring | [metric and direction, aggregation; or criteria and published weights] |
| Required deliverables and integration | [files, repository, URL, video, slides, sponsor proof] |
| Data/model/reuse/AI assistance rules | [confirmed permissions and unresolved questions] |
| Resource limits | [runtime, memory, network, compute, token/API spend, quota] |
| Judge or evaluator access | [account, device/environment, public/private access] |

## Target and evidence

**Value claim:** For [user/evaluation population], [entry] performs [one task], improving [outcome] under [constraint].

**Prediction contract, if applicable:** [unit, prediction time, target horizon, label delay, independent entity, split rationale].

**Core product journey, if applicable:** [input → operation → useful result → next action].

| Requirement or claim | Official fact / observation / assumption | Evidence | Remaining check |
| --- | --- | --- | --- |
| [claim] | [type] | [source or measurement] | [test, owner, time] |

## Acceptance criteria

| Criterion | Baseline | Target / hard limit | Measurement or verification | Owner |
| --- | --- | --- | --- | --- |
| Valid required artifact / complete core journey | [status] | [contract] | [schema check or journey steps] | [owner] |
| Predictive quality / task success | [measured value or unknown] | [target with metric] | [split/eval set and sample size] | [owner] |
| Runtime / latency / cost | [measurement or unknown] | [limit and units] | [environment, cold/warm, concurrency] | [owner] |
| Failure and recovery | [status] | [acceptable behavior] | [induced failure] | [owner] |

## Scope decision

| Candidate work | Required / differentiating / optional | Rubric or metric benefit | Evidence/confidence | Build + verify time | Dependency risk | Keep / cut |
| --- | --- | --- | --- | --- | --- | --- |
| [work] | [class] | [expected benefit, labeled estimate] | [evidence] | [hours] | [risk] | [decision] |

**Chosen scope:** [one coherent entry].

**Cut list:** [explicit exclusions and reconsideration trigger, if any].

**Highest-risk assumption:** [assumption; smallest useful test; budget; decision it changes].

## Schedule and owners

| Milestone | Exact time and timezone | Evidence required | Owner |
| --- | --- | --- | --- |
| Framing complete | [timestamp] | [contract and scope] | [owner] |
| End-to-end baseline | [timestamp] | [working artifact and measured result] | [owner] |
| Experiment cutoff / feature freeze | [timestamp] | [selected valid candidate] | [owner] |
| Clean replay and rehearsal | [timestamp] | [acceptance results and fallback] | [owner] |
| Internal delivery cutoff | [timestamp before official deadline] | [package/links ready or authorized receipt] | [owner] |

## Risks and current decision

| Failure mechanism | Impact / likelihood | Early signal | Prevention | Fallback | Owner / decision time |
| --- | --- | --- | --- | --- | --- |
| [failure] | [qualitative] | [observable signal] | [action] | [tested recovery] | [owner/time] |

**Next action:** [one bounded action and completion condition].

**Current stage:** [1–5 and evidence supporting it].

**Delivery authorization:** [prepare only / already authorized action and destination / unresolved].

**Decision log:** [timestamp; new evidence; decision; scope/schedule effect].
