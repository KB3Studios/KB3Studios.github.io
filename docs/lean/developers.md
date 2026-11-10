# Exports & events

## Server events

Listen to these from your own server resources, for example for EMS, logging or drug-test scripts. They're fired from `server/hooks.lua`, which you can also edit directly.

| Event | Arguments | Fires when |
| --- | --- | --- |
| `kb3_lean:server:sipped` | `src, cup, state` | A player takes a sip |
| `kb3_lean:server:blackout` | `src, state` | A player blacks out |
| `kb3_lean:server:overdose` | `src, state` | A player passes the overdose threshold. Requires `Config.Effects.overdoseHook.enabled = true` |

```lua
AddEventHandler('kb3_lean:server:overdose', function(src, state)
    -- e.g. down the player or alert EMS with your ambulance script
    TriggerClientEvent('my_ambulance:client:down', src)
end)
```

## Server exports

### GetIntoxication

Returns the character's current effect state, or `nil` if the resource isn't ready or the player has no character loaded.

```lua
local state = exports.kb3_lean:GetIntoxication(source)
```

## Client exports

These are used by the inventory item definitions. You normally don't call them yourself.

| Export | Used by |
| --- | --- |
| `openMixer` | `kb3_empty_cup` |
| `useCup` | `kb3_lean_cup` |
| `drinkSoda` | `kb3_soda_*` |
| `eatCandy` | `kb3_candy_*` |
| `usePrescriptionPad` | `kb3_prescription_pad` |
| `usePrescription` | `kb3_prescription` |

## Editable integration files

| File | Purpose |
| --- | --- |
| `server/bridge.lua` | Framework layer: characters, money, jobs, needs |
| `server/inventory.lua` | Inventory layer: counts, add/remove, metadata |
| `client/target.lua` | ox_target / qb-target integration |
| `server/hooks.lua` | Event hooks above |
