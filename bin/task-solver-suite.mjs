#!/usr/bin/env node
import { cp, lstat, mkdir, mkdtemp, readdir, realpath, rename, rmdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const bundledRoot = join(packageRoot, 'skills');
const help = `Usage:
  task-solver-suite [help | --help | -h]
  task-solver-suite list
  task-solver-suite install [--skill NAME ...] [--dir PATH] [--replace]

install defaults to every bundled skill in ~/.agents/skills.
--skill accepts a full name (task-solver-ml) or suffix (ml); repeat to select more.
--dir selects the destination parent directory, without appending another skills/.
Existing targets are refused unless --replace is given. Replacements are backed
up to a unique timestamped sibling of the destination directory.
Default/help/list never install anything. No network access is used.
Do not modify the selected target directories while installation is running.`;

async function statOrNull(path) {
  try { return await lstat(path); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

async function canonical(path) {
  const missing = [];
  let current = resolve(path);
  for (;;) {
    try { return join(await realpath(current), ...missing.reverse()); }
    catch (error) {
      if (error.code !== 'ENOENT' || dirname(current) === current) throw error;
      missing.push(basename(current));
      current = dirname(current);
    }
  }
}

function contains(parent, child) {
  const path = relative(parent, child);
  return path === '' || (!isAbsolute(path) && path !== '..' && !path.startsWith(`..${sep}`));
}

async function catalog() {
  const names = [];
  for (const entry of await readdir(bundledRoot, { withFileTypes: true })) {
    if (!/^task-solver-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.name)) continue;
    if (!entry.isDirectory() || !(await statOrNull(join(bundledRoot, entry.name, 'SKILL.md')))?.isFile()) {
      throw new Error(`Invalid bundled skill: ${entry.name}`);
    }
    names.push(entry.name);
  }
  if (!names.length) throw new Error('No bundled skills found.');
  return names.sort();
}

function parse(args) {
  const command = args.shift() ?? 'help';
  const options = { command, skills: [], dir: join(homedir(), '.agents', 'skills'), replace: false, help: false };
  if (['help', '--help', '-h'].includes(command)) {
    if (args.length) throw new Error(`Unexpected argument: ${args[0]}`);
    return { ...options, help: true };
  }
  if (!['list', 'install'].includes(command)) throw new Error(`Unknown command: ${command}`);
  let hasDir = false;
  while (args.length) {
    const flag = args.shift();
    if (['--help', '-h'].includes(flag)) { options.help = true; continue; }
    if (command !== 'install') throw new Error(`Unexpected argument: ${flag}`);
    if (flag === '--replace') { options.replace = true; continue; }
    if (!['--skill', '--dir'].includes(flag)) throw new Error(`Unknown argument: ${flag}`);
    const value = args.shift();
    if (!value || value.startsWith('-')) throw new Error(`Missing value for ${flag}`);
    if (flag === '--skill') options.skills.push(value);
    else {
      if (hasDir) throw new Error('--dir may be supplied only once.');
      options.dir = value;
      hasDir = true;
    }
  }
  return options;
}

function sameDirectory(actual, expected) {
  return actual?.isDirectory() && !actual.isSymbolicLink()
    && actual.dev === expected.dev && actual.ino === expected.ino && actual.birthtimeMs === expected.birthtimeMs;
}

async function install(names, options) {
  const destination = await canonical(options.dir);
  const source = await realpath(bundledRoot);
  if (contains(source, destination) || contains(destination, source)) {
    throw new Error('The destination and bundled skills source must not overlap.');
  }
  const parent = dirname(destination);
  if (parent === destination) throw new Error('A filesystem root cannot be the skill destination.');
  const destinationStat = await statOrNull(destination);
  if (destinationStat && !destinationStat.isDirectory()) throw new Error(`Not a directory: ${destination}`);

  const plans = [];
  for (const name of names) {
    const target = join(destination, name);
    const existing = await statOrNull(target);
    if (existing) {
      if (existing.isSymbolicLink() || !existing.isDirectory()) throw new Error(`Refusing non-directory or linked target: ${target}`);
      if (!options.replace) throw new Error(`Target exists: ${target}. Use --replace to back it up and replace it.`);
      if (!(await statOrNull(join(target, 'SKILL.md')))?.isFile()) throw new Error(`Refusing to replace a directory without a regular SKILL.md: ${target}`);
    }
    plans.push({ name, target, existing });
  }

  await mkdir(parent, { recursive: true });
  const stage = await mkdtemp(join(parent, '.task-solver-suite-stage-'));
  let backup;
  const installed = [];
  try {
    for (const { name } of plans) {
      await cp(join(bundledRoot, name), join(stage, name), {
        recursive: true, force: false, errorOnExist: true,
        filter: async (path) => {
          const entry = await lstat(path);
          if (entry.isSymbolicLink() || (!entry.isDirectory() && !entry.isFile())) {
            throw new Error(`Refusing linked or special source entry: ${path}`);
          }
          return true;
        },
      });
    }
    await mkdir(destination, { recursive: true });
    for (const { name, target, existing } of plans) {
      const current = await statOrNull(target);
      if (existing ? !sameDirectory(current, existing) : current !== null) {
        throw new Error(`Target changed after preflight; refusing to overwrite: ${target}`);
      }
      let saved;
      if (existing) {
        if (!backup) {
          const stamp = new Date().toISOString().replace(/[:.]/g, '-');
          backup = await mkdtemp(join(parent, `.${basename(destination)}-backup-${stamp}-`));
          console.log(`Backup directory: ${backup}`);
        }
        saved = join(backup, name);
        await rename(target, saved);
      }
      try {
        if (await statOrNull(target)) throw new Error(`Target appeared during installation: ${target}`);
        await rename(join(stage, name), target);
      } catch (error) {
        if (saved) {
          try {
            if (await statOrNull(target)) throw new Error('Target is occupied; the backup was left intact.');
            await rename(saved, target);
            console.error(`Restored previous skill: ${target}`);
          } catch (restoreError) {
            console.error(`Previous skill preserved at ${saved}; restore failed: ${restoreError.message}`);
          }
        }
        throw error;
      }
      installed.push(name);
      console.log(`Installed ${name} -> ${target}`);
    }
  } catch (error) {
    throw new Error(`${error.message}\nInstalled before failure: ${installed.join(', ') || 'none'}.\nStaging retained: ${stage}${backup ? `\nBackup directory: ${backup}` : ''}`);
  }
  try { await rmdir(stage); }
  catch { console.error(`Installation completed; empty staging directory retained: ${stage}`); }
  console.log(`Installed ${installed.length} skill(s) into ${destination}.`);
}

async function main() {
  const options = parse(process.argv.slice(2));
  if (options.help && !options.skills.length) { console.log(help); return; }
  const available = await catalog();
  const names = options.skills.length ? [...new Set(options.skills.map((value) => {
    const name = value.startsWith('task-solver-') ? value : `task-solver-${value}`;
    if (!available.includes(name)) throw new Error(`Unknown skill: ${value}. Use list to see bundled names.`);
    return name;
  }))] : available;
  if (options.help) console.log(help);
  else if (options.command === 'list') console.log(available.join('\n'));
  else await install(names, options);
}

main().catch((error) => {
  console.error(`task-solver-suite: ${error.message}`);
  process.exitCode = 1;
});
