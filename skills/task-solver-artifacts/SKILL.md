---
name: task-solver-artifacts
description: "Create or edit documents, spreadsheets, slides, or PDFs where file structure, formulas, editability, or rendering matters. Prefer available format-specific skills; use writing for ordinary prose."
license: MIT
metadata:
  version: "3.0.0"
---

# Documents, spreadsheets, slides, and PDFs

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Use when the requested output is an editable document, workbook, presentation, PDF, or a change to an existing artifact. For ordinary prose in chat or a plain text correction, use the writing route without starting an artifact workflow. Preserve the user's chosen format and destination.

## Choose the actual available workflow

Discover and use the relevant document, spreadsheet, presentation, PDF, or live-application skill and tools available in the current environment. Follow that workflow's file handling and verification requirements. Use a connected live session for an explicitly live workbook or document task; use file-authoring tools for standalone files. Do not assume a library, compiler, application, template service, or connector exists because a familiar command can be imagined.

If the preferred capability is unavailable, inspect viable local or connected alternatives. State the specific limitation only when it affects the requested result. A substitute format should preserve the user's intended use; ask before replacing a required editable deliverable with an image or a flattened PDF.

## Establish the artifact contract

Record the audience, purpose, source material, required format, destination, and constraints such as page size, slide ratio, print layout, locale, or template. Inspect an existing artifact before editing it, including its structure, styles, formulas, hidden content, comments, or speaker notes where relevant. Preserve unrelated content and identify the smallest change that satisfies the request.

Distinguish supplied facts, calculated results, and illustrative placeholders. Source tables may be authoritative for values while an example slide is authoritative only for visual style. Do not copy plausible numbers from a model answer, sample chart, or design reference into a factual deliverable. Resolve ambiguous units or dates before calculations that depend on them.

## Author for the intended use

For documents, use semantic headings, consistent styles, meaningful lists, and tables that survive pagination. Keep cross-references, citations, footnotes, and numbering coherent. For slides, give each slide a clear message and sufficient evidence; align text size and chart density with the actual presentation setting. Speaker notes can hold detail that would overwhelm the screen.

For workbooks, separate inputs, calculations, and outputs so a user can follow the model. Preserve formulas where continuing recalculation matters. Record units and assumptions near the relevant cells, use the correct date and decimal conventions, and avoid formulas that silently depend on a changed row order. Check ranges, absolute references, missing values, and error handling at important boundaries.

For PDFs, identify whether the task needs visual reading, text extraction, annotation, form filling, or generation. Scanned pages may require OCR; extraction can misread columns and symbols. Inspect page images when layout or meaning depends on spatial relationships. Preserve fillable fields when the user needs an interactive form.

## Make content accessible

Use descriptive headings, readable contrast, meaningful links, informative alternative text, and table headers where the format supports them. Do not communicate essential distinctions through color alone. Check reading order and the clarity of captions or chart labels. The [W3C accessibility tutorials](https://www.w3.org/WAI/tutorials/) provide primary guidance for common structures; their examples are guidance, not proof that a particular exported file conforms to a standard.

## Verify both meaning and rendering

Recalculate workbooks with an available engine that supports the used formulas. Inspect resulting values and errors; cached values or formula strings alone do not establish correctness. Independently check a few consequential calculations and boundary cases. Reopen the saved artifact or inspect it through the target-compatible tool to detect serialization or compatibility failures.

Render documents, slides, and PDFs when layout matters. Inspect every changed page or slide and enough surrounding content to catch reflow, truncation, overlaps, broken tables, unreadable charts, and missing glyphs. A successful text extraction does not prove a layout pass. A screenshot does not verify hidden formulas, notes, comments, or editability.

## Completion

Deliver the actual saved artifact with a usable link, the requested editable version when applicable, and a concise account of verification. State any unsupported formula, unavailable renderer, incomplete visual check, or compatibility limit that materially affects use. Do not claim a render, recalculation, or successful open that was not performed. Keep the result identifiable so the reviewed file is the file handed over.
