---
name: task-solver-blockchain
description: "Develop or assess on-chain contracts and transaction flows, including invariants, network identity, units, permissions, and transaction outcomes. Excludes general cryptocurrency commentary."
license: MIT
metadata:
  version: "3.0.0"
---

# Blockchain and contracts

Apply only the sections needed for the requested result. Preserve the distinction between a plan, review, implementation, and execution, and respect the user's limits on testing or external actions.

Use an explicitly selected or available format/platform specialist for its exact workflow. Sibling-skill links are conditional handoffs: read them only for a concrete dependency and when that skill is available. A single-domain task does not require the suite coordinator.

Read for smart-contract implementation, on-chain integrations, wallet flows, contract tests, deployment preparation, or transaction diagnosis. Token-price forecasts, investment decisions, and unrelated web application work do not use this playbook.

## Fit the work to the chain and request

Use the user's selected blockchain skill and the repository's actual toolchain. This reference uses EVM examples; another chain requires its own primary specification for accounts, execution, signatures, units, and finality. Do not transfer EVM assumptions automatically.

Small UI corrections need only relevant checks. For transaction diagnosis, use sections 1 and 5; inspect contract logic from sections 2–3 only if evidence points there. Compilation and contract tests in section 4 apply to implementation changes or a relevant reproduction, not every pending-transaction inquiry. A contract or value-transfer change needs invariant and adversarial-case verification. Simulations, fork tests, testnet transactions, and mainnet transactions are distinct evidence and authority levels.

Output code/configuration and tested invariants for implementation work, or transaction identifiers, observed status, supported cause, and a proposed recovery for diagnosis. A plan-only request ends with proposed actions and validation labeled unexecuted. Include a deployment or transaction manifest where relevant. Source preparation or diagnosis does not authorize spending funds, granting token allowances, or sending a replacement transaction.

## 1. Establish the exact execution context

Inspect chain ID/network, RPC endpoint identity, transaction/asset identifiers, and caller or signer role. Add contract address, deployed code, ABI, and proxy/implementation relationship when the operation involves a contract. Compiler/settings, dependency lockfile, and deployment records are needed for implementation or deployment verification, not an ordinary transaction-status diagnosis.

| Boundary | Record explicitly |
| --- | --- |
| Network | Chain ID, intended environment, RPC and explorer provenance |
| Contract | Address, code/version, ABI, proxy and implementation if present |
| Authority | Caller, owner/admin roles, upgrade/pause privileges, signer requirements |
| Assets | Native currency versus token address, base units, decimals, allowance |
| Operation | Function, decoded arguments, value, fees, nonce, destination |
| Confirmation | Required chain-specific inclusion/finality policy |

Verify network identity before signing; a familiar address or wallet label is insufficient. EIP-155 binds legacy Ethereum transaction signatures to a chain ID, illustrating why network identity belongs in the signing context. [EIP-155](https://eips.ethereum.org/EIPS/eip-155)

**Done:** the intended chain, caller authority, asset interpretation, and relevant contract identity are established; any unresolved context is explicit in the diagnostic limit.

## 2. Define invariants and state transitions

Write the allowed state machine and accounting invariants before changing funds-related logic. Examples include conservation of accounted balances, withdrawal limited to entitlement, one-time consumption, and privileged updates restricted to the intended role.

Use integers/fixed-point representations for base units. Convert human input with explicit precision and rounding; avoid binary floating-point for token quantities. Check the actual asset metadata and behavior instead of assuming all tokens use 18 decimals.

ERC-20 declares `decimals` optional and requires callers to handle a false transfer result. Real integrations must also account for the supported token's concrete behavior; use the project's vetted wrappers where appropriate. [ERC-20 specification](https://eips.ethereum.org/EIPS/eip-20)

State whether fee-on-transfer, rebasing, callback-capable, or nonstandard tokens are supported. If amounts received can differ from amounts requested, test the accounting model against that difference.

**Done:** input units, permissions, success/failure transitions, and accounting invariants are testable.

## 3. Inspect external calls and privileged paths

Treat an external contract call as a possible reentrant boundary. Check state ordering, callback paths across functions/contracts, error propagation, and the established reentrancy protection. Apply checks/effects/interactions where appropriate, without treating it as proof that every cross-contract invariant holds.

Audit authorization on every privileged operation and initialization path. For upgrades, inspect storage-layout compatibility, initializer state, implementation identity, and who can change it. Do not infer safety from an audited library when its configuration or composition differs.

Bound work that can grow with user-controlled state. Review rounding, division, overflow assumptions, stale oracle inputs, and ordering/slippage/deadline constraints where the feature uses them. On-chain `private` data is not secret. [Solidity security considerations](https://docs.soliditylang.org/en/latest/security-considerations.html)

**Done:** each changed external or privileged path preserves the defined invariants under failure and adversarial interaction.

## 4. Test using the existing local toolchain

Compile with the pinned configuration and run relevant unit/integration tests. Use the project's local chain or fork support when needed, pinning the fork block and distinguishing it from current live state.

| Case | Verify |
| --- | --- |
| Normal transition | Correct state, balances, events, and return values |
| Unauthorized caller | Rejection without unintended state changes |
| Zero, boundary, and precision inputs | Defined behavior and correct rounding |
| Repeated call or replay | Invariant retained; one-time operations remain consumed |
| Malicious/failed external call | No excess withdrawal or corrupt partial state |
| Upgrade or initialization | Correct layout/state and authority enforcement |
| Wallet flow | Network mismatch, rejected signature, pending/replaced/reverted transaction |

Use property/invariant or fuzz tests for broad input/state spaces when the change warrants them. A fork test can validate an integration at a specific state; it cannot guarantee later liquidity, oracle values, ordering, or network availability.

Simulate the exact intended operation with matching caller, arguments, and value before an authorized broadcast when the toolchain supports it. Simulation success is evidence at that state, not a guarantee of mined execution.

**Done:** the changed invariants pass meaningful tests, and relevant compiler/static-analysis findings have been inspected rather than blindly counted.

## 5. Track transaction lifecycle and recovery

Before an authorized transaction, inspect decoded destination/function/arguments, chain, token/value, fee bounds, allowance scope, and signer. Use test funds for development rehearsal. Keep private keys and seed phrases out of source, logs, and reports.

Record the transaction hash and distinguish wallet approval, RPC acceptance, pending, inclusion, receipt success/revert, and finality. Verify intended effects from authoritative state and relevant logs; a hash alone proves neither success nor finality. [Ethereum transaction lifecycle](https://ethereum.org/developers/docs/transactions/)

After a timeout or dropped connection, query the existing transaction and nonce state before submitting another effect. Replacement and cancellation behavior depends on the chain/client and cannot undo a finalized operation. A contract pause or upgrade is a separate privileged action, not a universal rollback.

For a failed deployment, retain the manifest and distinguish contracts actually created from steps merely attempted. For a demo, label local simulations, testnet activity, recordings, and real transactions accurately.

**Exit:** for implementation, hand off code/configuration, compiler/dependency versions, relevant chain/address manifest, and invariant-test results. For diagnosis, provide the inspected transaction/network, observations supporting the status or cause, remaining uncertainty, and next recovery action; do not claim a repair or transaction ran unless it did. State remaining review or deployment gaps without describing tests as a security audit.
