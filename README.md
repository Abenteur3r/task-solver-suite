# Task Solver Suite

**23 independent Agent Skills: 22 focused domain skills and an optional coordinator.** Use a specialist directly for a single-domain task, or use the coordinator for work with interdependent deliverables across domains.

Version 3 follows the [skills-directory layout](https://github.com/CodeAlive-AI/ai-driven-development/tree/main/skills): every package under `skills/` has its own `SKILL.md`, discovery description, and workflow. The repository root is the collection, not an installable skill.

## How selective loading works

Codex initially exposes installed skills through their names and descriptions. It loads a selected skill's full `SKILL.md` when needed, then reads supporting references or uses assets relevant to that task. Implicit selection is enabled by default; an explicit invocation such as `$task-solver-ml` selects a particular skill. This is progressive disclosure, not an instruction to load the whole collection. See the official [skill-building documentation](https://learn.chatgpt.com/docs/build-skills).

Selection depends on the request, descriptions, and host behavior. It is not guaranteed to match perfectly. Names and descriptions still consume discovery context, and descriptions may be truncated when many skills are installed. Selected instructions and supporting material add further context. Install only the domains you need if you want a smaller discovery catalog. The official [customization overview](https://learn.chatgpt.com/docs/customization/overview) explains how skills fit alongside other customization.

The `task-solver-suite` coordinator is optional. Installing or invoking a domain skill does not require loading the coordinator first. Simple tasks can be handled directly without an extended workflow.

## Skills

| Skill | Scope |
| --- | --- |
| [task-solver-suite](skills/task-solver-suite/SKILL.md) | Coordinate cross-domain work or provide the explicit suite entry point |
| [task-solver-software](skills/task-solver-software/SKILL.md) | Implement or refactor software behavior |
| [task-solver-debugging](skills/task-solver-debugging/SKILL.md) | Diagnose failures, regressions, and performance problems |
| [task-solver-architecture](skills/task-solver-architecture/SKILL.md) | Design interfaces, components, and system boundaries |
| [task-solver-security](skills/task-solver-security/SKILL.md) | Review security, privacy, and trust boundaries |
| [task-solver-operations](skills/task-solver-operations/SKILL.md) | Plan deployments, migrations, automation, and recovery |
| [task-solver-blockchain](skills/task-solver-blockchain/SKILL.md) | Develop or assess contracts and transaction flows |
| [task-solver-data](skills/task-solver-data/SKILL.md) | Analyze datasets, SQL, metrics, and statistical experiments |
| [task-solver-ml](skills/task-solver-ml/SKILL.md) | Train and evaluate predictive models with leakage controls |
| [task-solver-genai](skills/task-solver-genai/SKILL.md) | Build and evaluate generation, retrieval, tools, and agents |
| [task-solver-research](skills/task-solver-research/SKILL.md) | Verify claims and compare traceable evidence |
| [task-solver-planning](skills/task-solver-planning/SKILL.md) | Choose product scope, priorities, and project milestones |
| [task-solver-ui](skills/task-solver-ui/SKILL.md) | Build interfaces and working prototypes |
| [task-solver-artifacts](skills/task-solver-artifacts/SKILL.md) | Create documents, spreadsheets, slides, and PDFs |
| [task-solver-quantitative](skills/task-solver-quantitative/SKILL.md) | Solve mathematical and quantitative problems |
| [task-solver-thinking](skills/task-solver-thinking/SKILL.md) | Select a method for difficult reasoning |
| [task-solver-triz](skills/task-solver-triz/SKILL.md) | Resolve conflicting technical or project requirements |
| [task-solver-writing](skills/task-solver-writing/SKILL.md) | Write, edit, summarize, translate, and localize |
| [task-solver-pitch](skills/task-solver-pitch/SKILL.md) | Prepare pitches, demos, and judge answers |
| [task-solver-hackathon](skills/task-solver-hackathon/SKILL.md) | Coordinate a competition sprint |
| [task-solver-learning](skills/task-solver-learning/SKILL.md) | Explain concepts, provide hints, and support practice |
| [task-solver-domain-decisions](skills/task-solver-domain-decisions/SKILL.md) | Scope consequential health, legal, financial, or physical decisions |
| [task-solver-risk](skills/task-solver-risk/SKILL.md) | Run focused premortems and design fail-safes |

## Install in Codex

Clone the repository:

~~~bash
git clone https://github.com/Abenteur3r/task-solver-suite.git
cd task-solver-suite
~~~

Copy individual directories **inside `skills/`** into your skill discovery directory. For a personal Codex installation, the resulting layout is:

~~~text
~/.agents/skills/
  task-solver-ml/
    SKILL.md
    references/
    assets/templates/
  task-solver-research/
    SKILL.md
  ...
~~~

### Windows: fresh installation

Run the following PowerShell from the cloned repository. It checks all destination names before copying and stops if any already exists.

~~~powershell
$collection = Join-Path (Get-Location) 'skills'
$skillParent = Join-Path $HOME '.agents\skills'
$packages = @(Get-ChildItem -LiteralPath $collection -Directory)
foreach ($package in $packages) {
    if (Test-Path -LiteralPath (Join-Path $skillParent $package.Name)) {
        throw "Existing skill: $($package.Name). Preserve or review it before updating."
    }
}
New-Item -ItemType Directory -Path $skillParent -Force | Out-Null
foreach ($package in $packages) {
    Copy-Item -LiteralPath $package.FullName -Destination (Join-Path $skillParent $package.Name) -Recurse
}
~~~

To install only selected skills, replace the `$packages = ...` line with the following and keep the same destination check and copy steps:

~~~powershell
$packages = @('task-solver-ml', 'task-solver-research') |
    ForEach-Object { Get-Item -LiteralPath (Join-Path $collection $_) -ErrorAction Stop }
~~~

### macOS/Linux: fresh installation

From the cloned repository:

~~~bash
suite_source="$PWD/skills"
install_parent="$HOME/.agents/skills"
for skill_dir in "$suite_source"/*; do
  if [ -e "$install_parent/$(basename "$skill_dir")" ]; then
    printf '%s\n' "Existing skill: $(basename "$skill_dir"); preserve it before updating."
    exit 1
  fi
done
mkdir -p "$install_parent"
for skill_dir in "$suite_source"/*; do
  cp -R "$skill_dir" "$install_parent/"
done
~~~

For an update, review or preserve existing packages before replacing them. During migration from v2, move the previous monolithic `task-solver-suite` package outside skill discovery directories before installing the new coordinator. Keep unrelated installed skills intact.

Codex detects skill changes automatically. If a newly installed skill does not appear, restart Codex. For another Agent Skills-compatible client, follow that client's documented discovery paths and invocation syntax; cross-client behavior of this packaging has not been tested.

## Use a focused skill

~~~text
$task-solver-debugging Diagnose this regression from the supplied logs and reproduction.

$task-solver-ml Design future-time and new-store validation for this forecast.

$task-solver-research Compare these sources under the stated constraints.

$task-solver-pitch Prepare a 90-second pitch from these existing measurements.

$task-solver-suite Coordinate the analysis, implementation, and decision memo.
~~~

An automatic match can select the same domain workflow without an explicit invocation. Prefer an available format or platform specialist when it already covers the requested work.

## Repository structure

~~~text
task-solver-suite/
  README.md
  LICENSE
  SOURCES.md
  VALIDATION.md
  archive/
    task-solver-suite-v2.zip
  skills/
    task-solver-suite/
      SKILL.md
      LICENSE
      assets/templates/
    task-solver-ml/
      SKILL.md
      LICENSE
      references/
      assets/templates/
    task-solver-thinking/
      SKILL.md
      LICENSE
      references/
      assets/templates/
    ...other independent skills...
~~~

Detailed references belong to their owning skill: thinking includes 31 method cards; TRIZ includes 40 inventive principles and deep contradiction analysis; ML includes modality and lifecycle guidance; hackathon includes triage and scoring. Templates live under `assets/templates/`. Some templates are included in multiple packages so each consuming skill carries its own assets.

Sibling links are optional handoffs. If a sibling is not installed, use an available specialist or the project's evidence for that part of the task.

## Migration and status

All 30 former modules are retained as domain entry points or supporting references. The seven original template types remain under their consuming skills. There is no monolithic `SKILL.md` entry point at the repository root.

The complete v2 package, including evaluation scripts, fixtures, and its historical report, is preserved in [archive/task-solver-suite-v2.zip](archive/task-solver-suite-v2.zip). Those scripts target the previous single-skill layout.

**Version 3 packaging is untested.** No tests, linters, structural validators, discovery probes, or model evaluations were run for the migration. Earlier v2 results do not validate the new packaging. See [VALIDATION.md](VALIDATION.md).

## Sources and license

[SOURCES.md](SOURCES.md) records provenance and design influences. Original repository content is available under the [MIT license](LICENSE), included in each skill package. Linked upstream projects retain their own terms; no upstream skill body or code was copied.
