# Judge Q&A defense

Copy into the project. Answer directly, then provide evidence, the boundary of the claim, and the next useful test. Keep the first answer short enough to say aloud; retain detail for follow-up.

**Entry / frozen version:** [name and version].

**Official rubric and expected Q&A duration:** [source and time].

**Evidence index:** [evaluation report, baseline, demo, source/attribution list, runtime/cost logs].

## Answer bank

| Likely question | Direct answer | Evidence | Limitation / uncertainty | Next test or mitigation |
| --- | --- | --- | --- | --- |
| Who needs this, and what evidence supports the problem? | [answer] | [user observation or source] | [what is still assumed] | [test] |
| What did your team build during the event? | [answer] | [commits/artifacts] | [reused/pre-existing components] | [next work] |
| How is this different from the simplest alternative? | [answer] | [fair comparison] | [scope of comparison] | [test] |
| Why this model or architecture? | [answer] | [baseline and constraint] | [trade-off] | [test] |
| How trustworthy is the evaluation? | [answer] | [split, masks, held-out cases, sample size] | [selection/tuning influence] | [test] |
| How did you prevent leakage or benchmark contamination? | [answer] | [specific boundary checks] | [unverified aspects] | [test] |
| What happens when it is wrong or a dependency fails? | [answer] | [failure rehearsal] | [fallback capability] | [mitigation] |
| What are latency and cost per useful result? | [answer] | [measured workload and units] | [cold start, scale, estimate limits] | [test] |
| How are private data and external actions controlled? | [answer] | [actual access/executor boundaries] | [prototype limits] | [test] |
| What is the business or practical value? | [answer] | [measured benefit or scenario calculation] | [adoption assumptions] | [test] |
| What remains before real deployment? | [answer] | [known gaps] | [scope] | [prioritized milestone] |
| What would you do with another week? | [answer] | [highest-risk unresolved assumption] | [resource limit] | [bounded plan] |

## Difficult-question rehearsal

**Question:** [skeptical question grounded in this entry].

**20–30 second answer:** [direct answer → evidence → limit → next test].

**Supporting detail if asked:** [artifact and precise result].

**Unknown-answer wording:** “We have verified [known part]. We have not measured [unknown part]. The next test is [specific check].”

**Claim to narrow or remove after rehearsal:** [claim, reason, updated wording].

## Consistency check

- [ ] Every number has units, a source, and a measurement context or estimate label.
- [ ] Local CV, untouched evaluation, public leaderboard, and user-study evidence are distinct.
- [ ] Claimed functionality exists in the shown build; roadmap items are labeled.
- [ ] Live, cached, recorded, and simulated outputs are identified accurately.
- [ ] Team contributions and reused assets are attributed accurately.
- [ ] Answers acknowledge observed failures and match the demonstrated fallback.
- [ ] Answers fit the time available and refer to evidence the presenter can locate.
