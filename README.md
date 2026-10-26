# Task Solver Suite

23 independent skills for Codex covering software, data, ML, research, planning, writing, and more. Browse the [skill collection](skills/) or list it with the CLI.

Codex selects relevant skills from their names and descriptions, then loads their instructions as needed. You can also invoke a skill explicitly. The optional `task-solver-suite` coordinator handles tasks spanning several domains.

## Install

Requires **Node.js 22+**. Available on [npm](https://www.npmjs.com/package/task-solver-suite).

```bash
# List available skills
npx task-solver-suite@latest list

# Install all 23 skills
npx task-solver-suite@latest install

# Install only selected skills
npx task-solver-suite@latest install --skill ml --skill research
```

Skills are installed into `~/.agents/skills`. Repeat `--skill` to select more; short names (`ml`) and full names (`task-solver-ml`) both work. Use `--dir PATH` to choose another destination.

To update existing skills, add `--replace`. Previous directories are backed up outside the skill discovery directory:

```bash
npx task-solver-suite@latest install --skill ml --skill research --replace
```

If new skills do not appear in Codex, restart it.

## Use

Describe your task normally for automatic selection, or name a skill:

```text
$task-solver-debugging Diagnose this regression from the logs.
$task-solver-ml Design validation for this forecasting model.
$task-solver-research Compare these options using primary sources.
$task-solver-suite Coordinate the research, implementation, and report.
```

Installing selected skills keeps the discovery catalog smaller. Automatic selection depends on the request and may be imperfect.

## Skills

| Skill | Purpose |
| --- | --- |
| [task-solver-suite](skills/task-solver-suite/SKILL.md) | Coordinate work across multiple domains |
| [task-solver-software](skills/task-solver-software/SKILL.md) | Implement and refactor software |
| [task-solver-debugging](skills/task-solver-debugging/SKILL.md) | Diagnose failures, regressions, and performance problems |
| [task-solver-architecture](skills/task-solver-architecture/SKILL.md) | Design APIs, components, and system boundaries |
| [task-solver-security](skills/task-solver-security/SKILL.md) | Review security, privacy, and access controls |
| [task-solver-operations](skills/task-solver-operations/SKILL.md) | Plan deployments, migrations, automation, and recovery |
| [task-solver-blockchain](skills/task-solver-blockchain/SKILL.md) | Develop and assess smart contracts and transactions |
| [task-solver-data](skills/task-solver-data/SKILL.md) | Analyze datasets, SQL, metrics, and experiments |
| [task-solver-ml](skills/task-solver-ml/SKILL.md) | Train, validate, and compare predictive models |
| [task-solver-genai](skills/task-solver-genai/SKILL.md) | Build and evaluate generative AI, retrieval, and agents |
| [task-solver-research](skills/task-solver-research/SKILL.md) | Verify claims and compare evidence from sources |
| [task-solver-planning](skills/task-solver-planning/SKILL.md) | Define scope, priorities, and project milestones |
| [task-solver-ui](skills/task-solver-ui/SKILL.md) | Design and implement interfaces and prototypes |
| [task-solver-artifacts](skills/task-solver-artifacts/SKILL.md) | Create documents, spreadsheets, slides, and PDFs |
| [task-solver-quantitative](skills/task-solver-quantitative/SKILL.md) | Solve mathematical, scientific, and optimization problems |
| [task-solver-thinking](skills/task-solver-thinking/SKILL.md) | Apply reasoning methods to difficult problems |
| [task-solver-triz](skills/task-solver-triz/SKILL.md) | Resolve conflicting requirements using TRIZ |
| [task-solver-writing](skills/task-solver-writing/SKILL.md) | Write, edit, summarize, translate, and localize text |
| [task-solver-pitch](skills/task-solver-pitch/SKILL.md) | Prepare pitches, demo scripts, and judge answers |
| [task-solver-hackathon](skills/task-solver-hackathon/SKILL.md) | Coordinate competition work around rules and deadlines |
| [task-solver-learning](skills/task-solver-learning/SKILL.md) | Explain concepts, provide hints, and design practice |
| [task-solver-domain-decisions](skills/task-solver-domain-decisions/SKILL.md) | Support consequential health, legal, financial, and safety decisions |
| [task-solver-risk](skills/task-solver-risk/SKILL.md) | Identify failure scenarios and plan prevention and recovery |

## Status and license

The installer and skill workflows remain untested. See [validation status](VALIDATION.md).

[MIT license](LICENSE) · [Sources](SOURCES.md)
