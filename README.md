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

## Status and license

The installer and skill workflows remain untested. See [validation status](VALIDATION.md).

[MIT license](LICENSE) · [Sources](SOURCES.md)
