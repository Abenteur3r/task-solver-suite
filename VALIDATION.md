# Validation status

Version 3.0.0 was restructured on 2026-10-26 into skills/<skill-name>/SKILL.md packages.

No tests, linters, structural validators, discovery/invocation probes, or model evaluations were run for this version, following the user's instruction. The new personal installation is a file installation; discovery and runtime behavior were not verified.

The earlier v2 checks and measurements apply only to the archived monolithic version. Its complete package and VALIDATION.md are retained in [the repository's v2 archive](https://github.com/Abenteur3r/task-solver-suite/blob/main/archive/task-solver-suite-v2.zip). The archive is excluded from the npm package. Do not report its 100/100 lint result, nineteen helper checks, routing results, or model benchmarks as validation of v3.

The migration preserves the previous workflows while changing discovery boundaries, resource locations, and optional sibling handoffs. These changes remain untested.

The npm manifest and installer were added on 2026-10-26. The installer, replacement/recovery paths, npm tarball contents, and publication were not exercised. No npm install, pack, publish, CLI smoke run, or automated test was performed for this addition. The configured package name does not establish registry availability or publishing rights.
