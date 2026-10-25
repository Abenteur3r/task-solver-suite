# TRIZ: forty inventive principles

Use after a concrete contradiction has survived the lightweight trade-off analysis, or when the user requests the full principle catalog. This is an original set of applied prompts organized by the conventional forty principle names and numbers. It is not a copied contradiction matrix, a historical translation, or evidence that a candidate will work.

For a reference-only request, present the requested principles without an experiment record. When applying principles to a concrete problem, write the useful function, the harmful effect, and two measurable requirements first. Select a few promising prompts rather than running all forty as a ritual. For every candidate, record its mechanism, available resources, new costs, and the smallest test of both requirements. Retain a plain baseline for comparison.

## Principles 1–10

| No. / principle | Applied prompt and example | Check or caveat |
| --- | --- | --- |
| 1. Segmentation | Could a large import become independently retryable chunks? Give each chunk a stable identity. | Measure overhead; preserve ordering and deduplication where required. |
| 2. Taking out | Can the expensive or sensitive part leave the common path? Fetch detailed attachments only when requested. | The reduced path must still deliver its promised result. |
| 3. Local quality | Should different regions behave differently? Apply stronger verification only to high-consequence fields. | Define the boundary from evidence; inspect missed high-risk cases. |
| 4. Asymmetry | Does a symmetric design waste effort? Give frequent reads a different route from rare writes. | Check changed failure modes and synchronization requirements. |
| 5. Merging | Can adjacent operations share a pass? Parse a document and capture provenance together. | Coupling may make independent updates or retries harder. |
| 6. Universality | Can an existing component perform another necessary function? Let the validation schema also generate input controls. | A shared abstraction must preserve both semantics. |
| 7. Nested doll | Can unused parts fit inside another structure? Package a compact preview within a larger artifact. | Nesting can increase access and update costs. |
| 8. Anti-weight | What existing opposing force can offset the burden? In hardware, a counterbalance can reduce actuator load. | Count added mass, energy and maintenance; metaphorical “offsets” need a mechanism. |
| 9. Preliminary anti-action | Can anticipated damage be countered before the load arrives? Reserve headroom before a predictable traffic burst. | Verify the prediction and cost of reserving resources. |
| 10. Preliminary action | Can repeatable work happen before the critical interval? Precompute permitted static features before inference. | Include preparation cost, versioning and invalidation. |

## Principles 11–20

| No. / principle | Applied prompt and example | Check or caveat |
| --- | --- | --- |
| 11. Beforehand cushioning | What prepared recovery reduces a known failure's impact? Keep a verified rollback artifact available. | Exercise recovery; possession alone does not establish recoverability. |
| 12. Equipotentiality | Can unnecessary movement between levels disappear? Keep a physical transfer at one working height; analogously, process data near storage. | Data locality is an analogy; measure transfer and access constraints. |
| 13. The other way round | Can responsibility or direction reverse? Pull only changed records instead of repeatedly pushing a full export. | Recheck completeness, ownership and failure recovery. |
| 14. Spheroidality or curvature | Can rolling or curved motion replace sliding? Explore a rounded guide where contact friction dominates. | This is a physical geometry prompt; benchmark wear and alignment. |
| 15. Dynamics | Can the structure adjust to conditions? Change batch size within measured memory limits. | Bound adaptation and test transitions, not only steady states. |
| 16. Partial or excessive action | Can a controlled approximation simplify the task? Retrieve extra candidates, then apply an exact filter. | Approximation must preserve the required recall and final semantics. |
| 17. Another dimension | Can spatial or representational layout remove interference? Separate an overview from a detail layer. | Added dimensions can increase navigation or storage complexity. |
| 18. Mechanical vibration | Could controlled oscillation improve a physical process? Test vibration for releasing material from a chute. | Verify resonance, fatigue and downstream effects; repeated software retries are not equivalent. |
| 19. Periodic action | Can work occur in purposeful intervals? Reconcile low-priority updates in bounded batches. | Derive cadence from acceptable staleness and burst capacity. |
| 20. Continuity of useful action | Can avoidable idle gaps disappear? Overlap loading the next batch with computation on the current one. | Measure bottlenecks and memory use; constant activity is not inherently useful. |

## Principles 21–30

| No. / principle | Applied prompt and example | Check or caveat |
| --- | --- | --- |
| 21. Skipping | Can a harmful intermediate state last less time? Make a prepared version switch brief instead of rebuilding under a lock. | A faster transition must remain atomic or recoverable. |
| 22. Blessing in disguise | Can an unavoidable byproduct become useful? Use rejected requests as labeled diagnostic cases when permitted. | Preserve privacy and avoid selection-biased evaluation. |
| 23. Feedback | Can measured output regulate the operation? Adjust admission rate from observed queue growth. | Test delay and oscillation; noisy feedback may worsen control. |
| 24. Intermediary | Can a temporary adapter bridge incompatible interfaces? Translate a legacy payload at one boundary. | Account for maintenance, information loss and eventual removal. |
| 25. Self-service | Can the component perform its own routine upkeep? Expire its versioned scratch files after completion. | Bound ownership so cleanup cannot remove user inputs. |
| 26. Copying | Can a faithful inexpensive representation replace a difficult original during analysis? Replay a permitted trace in a test environment. | Validate fidelity; a trace cannot establish behavior outside its coverage. |
| 27. Cheap short-lived objects | Can a disposable artifact replace a costly durable one? Use a temporary preview environment for a review. | Include creation, cleanup, access and aggregate resource cost. |
| 28. Mechanics substitution | Could a different sensing mechanism replace contact? Consider optical measurement instead of a mechanical probe. | Check precision, lighting, calibration and operating conditions. |
| 29. Pneumatics and hydraulics | Could fluid pressure replace a rigid transmission? Compare a pressure-driven fixture with a linkage. | Verify load, leakage, control and pressure limits with appropriate expertise. |
| 30. Flexible shells and thin films | Could a thin protective boundary replace a bulky enclosure? Explore a membrane around the sensitive region. | Test permeability, durability and attachment; a software wrapper is only an analogy. |

## Principles 31–40

| No. / principle | Applied prompt and example | Check or caveat |
| --- | --- | --- |
| 31. Porous materials | Could controlled openings provide both passage and protection? Compare filter structures by pore size. | Measure selectivity, clogging and strength; “porous permissions” is not a useful security analogy. |
| 32. Color changes | Can visibility reveal state without extra steps? Show freshness using text and a redundant visual indicator. | Color alone excludes users and can confuse meaning. |
| 33. Homogeneity | Can interacting elements use compatible properties? Standardize units and schemas at a shared data boundary. | Compatibility must not erase domain distinctions or necessary precision. |
| 34. Discarding and recovering | Can a component disappear or regenerate after its function? Release temporary buffers once downstream ownership is complete. | Verify lifetime, references and recovery behavior. |
| 35. Parameter changes | Would a different operating value remove the conflict? Test lower numeric precision on an unchanged evaluation set. | Measure quality loss, hardware support and conversion overhead. |
| 36. Phase transitions | Could a physical state change provide the needed behavior? Assess heat storage using a phase-change material. | Measure transition range and cycling limits; software modes are an analogy. |
| 37. Thermal expansion | Could temperature itself create the required movement? Explore passive actuation using differing expansion rates. | Verify response range, tolerances and fatigue rather than assuming free control. |
| 38. Strong oxidants | Could a more reactive processing environment improve a material operation? Compare a qualified process alternative. | This is a physical chemistry prompt requiring domain validation, not a software optimization recipe. |
| 39. Inert atmosphere | Could a less reactive environment protect the process? For software, an isolated sandbox is a limited analogy. | Test the actual physical environment or software boundary; the analogy proves neither. |
| 40. Composite materials | Can complementary constituents meet requirements one material cannot? Compare a layered structure with a uniform part. | Test interfaces, fabrication, maintenance and whole-system cost. |

## Close the candidate search

For each retained idea, write: **requirement A / requirement B / changed mechanism / resource consumed / predicted result / test / result**. Record whether the contradiction was removed, moved elsewhere, reduced through an explicit trade-off, or left unresolved. Labels such as “composite” or “dynamic” are not explanations.

If promising principles only rename the problem, return to the contradiction or use the [deep ARIZ-inspired process](26-ariz-deep-contradictions.md). A negative result can justify keeping the verified simpler design. See the [source ledger](sources.md) for terminology and source boundaries.
