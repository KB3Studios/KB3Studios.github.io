# Exports & custom adapters

## Client exports

Used by ox_inventory item definitions:

| Export | Item |
| --- | --- |
| `kb3_metaldetect.useDetector` | `kb3_detector` |
| `kb3_metaldetect.openBag` | `kb3_bag_*` |

```lua
['kb3_detector'] = {
    label = 'Metal Detector', weight = 1800, stack = true, close = true, consume = 0,
    client = { image = 'kb3_detector.webp', export = 'kb3_metaldetect.useDetector' }
},
```

## Integration files

| File | Purpose |
| --- | --- |
| `bridge/framework.lua` | Character and money APIs for Qbox, QBCore, ESX, standalone and custom |
| `bridge/inventory.lua` | Server inventory adapters and `KB3Inventory.custom` |
| `client/inventory.lua` | Local item count and inventory close hooks |
| `shared/inventory.lua` | Inventory auto-selection rules |
| `bridge/trades.lua` | Durable transaction holds. **Leave this unchanged** unless you fully understand it |

## Custom framework

For `standalone` or `custom`, implement `customBalance` and `customMoney` in `bridge/framework.lua`. Custom mode also needs `customCharacter`, returning authoritative server data:

```lua
{ id = 'stable-character-id', name = 'Character Name', job = ... }
```

Standalone uses the player's license identifier.

::: warning customMoney contract
Return `true` only after money has definitely moved, `false` only after it definitely didn't, and **throw** when the outcome is uncertain. Never return success from a fire-and-forget event. Keep the supplied transaction reference in your backend logs.
:::

## Custom inventory

1. Set `Config.Inventory = 'custom'`.
2. Implement the functions in `KB3Inventory.custom` in `bridge/inventory.lua`.
3. Implement the local count function in `client/inventory.lua`.
4. Register native usable items through the supplied handler.

Rules:

- Return real, authoritative item counts and slot data.
- Calls must be **synchronous**.
- Don't consume equipment or bags automatically.
- Confirm adds and removes by reading the resulting inventory state, never with fire-and-forget success events.

The custom hooks don't implement PS, LJ, Codem, TGIANN or other products automatically. Implement and test that backend yourself.

## Supported API versions

- **qb-inventory:** uses the server exports `CanAddItem`, `AddItem`, `RemoveItem`, `GetItemBySlot` and `GetItemByName`, plus QBCore's item registry. Older forks without these need an adapter.
- **qs-inventory:** uses current server exports for count, slot lookup, carry checks, item movement and usable registration. Install QS's framework integration first.
- **ESX default:** uses server xPlayer inventory APIs and ESX's item registry. ESX with a different inventory must select that backend instead of `esx`.
