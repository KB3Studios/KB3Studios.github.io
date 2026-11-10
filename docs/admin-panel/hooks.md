# Hooks

A hook replaces the built-in adapter for one action, so you can support any script with a few lines. Hooks live in `config/server.lua` under `ServerConfig.Hooks` and run on the **server**.

::: warning Return true only on success
A hook must return `true` only after the action has actually succeeded. Returning `false` (optionally with a reason) keeps the action from being reported as completed.
:::

## Available hooks

| Hook | Signature | Used for |
| --- | --- | --- |
| `revive` | `function(target)` | Revive with a custom ambulance script |
| `heal` | `function(target)` | Heal with a custom script |
| `giveKeys` | `function(target, vehicle)` | Vehicle keys on spawn and garage actions |
| `addItem` | `function(target, item, amount)` | Item gives and grants. May return `false, 'reason'` |
| `inspectInventory` | `function(staff, target)` | Open a player's inventory for staff |
| `returnVehicle` | `function(actor, citizenid, plate, reason)` | Return a vehicle to a garage |
| `releaseRestraints` | `function(target)` | Uncuff with a custom police script |
| `beforeRestart` | `function(resource)` | Guard resource restarts. Return `true` or `false, 'reason'` |
| `deleteCharacter` | `function(citizenid)` | Delete an offline character with your framework's own cleanup |

## Examples

```lua
Hooks = {
    -- Revive with a custom ambulance script
    revive = function(target)
        TriggerClientEvent('my_ambulance:revive', target)
        return true
    end,

    -- Give items with a custom inventory
    addItem = function(target, item, amount)
        return exports.my_inventory:AddItem(target, item, amount)
    end,

    -- Open a player's inventory for staff
    inspectInventory = function(staff, target)
        exports.my_inventory:OpenPlayerInventory(staff, target)
        return true
    end,

    -- Keys with a custom key script
    giveKeys = function(target, vehicle)
        exports.my_keys:GiveKeys(target, GetVehicleNumberPlateText(vehicle))
        return true
    end,
}
```

## Restart guard

```lua
ServerConfig.Hooks.beforeRestart = function(resource)
    if resource == 'your_cargo_resource' then
        -- Ask that resource for an authoritative active-session count.
        return false, 'Cargo work is active; finish or cancel those sessions first.'
    end
    return true
end
```

The `Resources.allowed` allowlist and protected-resource checks still apply. This hook is a guard only. It doesn't drain sessions or schedule a restart.
