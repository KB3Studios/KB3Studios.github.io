# Exports

All exports run on the **server**. Keep resource-specific integrations in `config/server.lua` [hooks](./hooks) or in your cooperating resource.

::: danger Security
Never expose a generic client event that can call these exports with arbitrary targets or amounts. Your resource is responsible for validating its own inputs.
:::

## HasPermission

Checks whether a player's group grants a permission. It does **not** check duty.

```lua
local allowed = exports.kb3_adminpanel:HasPermission(source, 'entities.view')
```

## IsOnDuty

```lua
local onDuty = exports.kb3_adminpanel:IsOnDuty(source)
```

Check both `HasPermission` and `IsOnDuty` when your feature requires duty.

## RegisterEntity

Records provenance for an entity your resource created, and optionally protects it from the inspector and cleanup.

```lua
local scanner = CreateObject(joaat('prop_ind_conveyor_01'), x, y, z, true, true, false)
exports.kb3_adminpanel:RegisterEntity(scanner, {
    protected = true,
    label = 'Active cargo scanner'
})
```

The calling resource name is recorded automatically. `protected = false` records provenance without export-based protection (other protection rules still apply).

## UnregisterEntity

```lua
exports.kb3_adminpanel:UnregisterEntity(scanner)
DeleteEntity(scanner)
```

A resource can only unregister its own registrations.

## RecordTransaction

Adds a transaction to the economy ledger for money the framework doesn't report, such as society accounts, external balances or direct SQL changes. Call it **after** your resource has completed the transaction.

```lua
exports.kb3_adminpanel:RecordTransaction({
    citizenid = playerCitizenId,
    account = playerLicense,   -- optional for online characters
    direction = 'in',          -- 'in' or 'out'
    amount = 1250,
    category = 'job_payout',
    data = { job = 'cargo', reference = paymentReference }
})
```

- This **records** a transaction. It doesn't award money.
- Don't report framework cash or bank changes again here, since they're captured automatically.
- Rate cap: 20 submissions per second per calling resource. Returns `false` when a submission is rejected.

## RecordIssue

Groups a diagnostic message in the Diagnostics page. Identical messages from the same resource are grouped.

```lua
exports.kb3_adminpanel:RecordIssue('Scanner model did not finish loading', 'warning')
```

Levels: `info`, `warning`, `error`.

## RecordResourceFailure

For a failure your resource considers fatal. This increments the reported-failure counter.

```lua
exports.kb3_adminpanel:RecordResourceFailure('Scanner worker stopped after an unrecoverable error')
```

A normal resource stop is never counted as a crash.

## Recovery workflows

Add named step lists to `ServerConfig.Workflows`:

```lua
Workflows = {
    { key = 'standard_recovery', label = 'Standard bug recovery',
      description = 'Reset the animation, then request a nearby safe position.',
      steps = { 'animation', 'unstuck' } },
    { key = 'staff_sit', label = 'Begin a staff sit',
      description = 'Freeze, move to the configured private room, then release the player.',
      steps = { 'freeze', 'staffRoom', 'unfreeze' } },
},
```

Each step uses the normal player action handler, repeats its permission checks and is logged individually. If a step fails, the UI shows which steps completed. Steps are not rolled back.
