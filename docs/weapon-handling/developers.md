# Adapters & exports

## Client exports

| Export | Returns / does |
| --- | --- |
| `exports.kb3_weaponhandling:isCrouched()` | `true` while the player is crouched |
| `exports.kb3_weaponhandling:setPaused(bool)` | Pause custom movement and crouch during another interaction. `true` also cancels crouch |
| `exports.kb3_weaponhandling:getDrawAnimation(hash, name)` | Six-value draw tuple, or `nil`. See [Draw integration](./draw-integration) |

::: warning setPaused is shared
It's a single shared flag, not a per-caller lock. Avoid overlapping pause ownership, and always release your pause when your interaction closes or your resource stops.
:::

```lua
-- Example: pause while a minigame is open
exports.kb3_weaponhandling:setPaused(true)
-- ... minigame ...
exports.kb3_weaponhandling:setPaused(false)
```

## Client events

| Event | Payload | Fires when |
| --- | --- | --- |
| `kb3_weaponhandling:crouchChanged` | `boolean` | Crouch state changes |
| `kb3_weaponhandling:inventoryChanged` | none | Trigger this yourself after a custom inventory update |

```lua
AddEventHandler('kb3_weaponhandling:crouchChanged', function(crouched)
    print('Crouched:', crouched)
end)
```

## Adapter files

Everything in `bridge/` is editable in both editions. Core code calls these functions, so keep their return formats.

| File | Purpose |
| --- | --- |
| `bridge/shared.lua` | Detects framework and inventory, and normalises weapon item tables |
| `bridge/client.lua` | Caches character and job state, and reads the local inventory |
| `bridge/server.lua` | Derives the authenticated character and reads server-owned inventory |

## Custom inventory

Set `Config.Inventory = 'custom'`, then implement **both**:

- `Bridge.customItems()` on the client
- `Bridge.customItems(source)` on the server

Return item tables with `name`, `slot`, `count` (or `amount`) and `metadata` (or `info`). Slots must be stable positive integers.

```lua
return {
    { name = 'WEAPON_CARBINERIFLE', slot = 1, count = 1,
      metadata = { tint = 0, components = { 'COMPONENT_AT_AR_FLSH' } } }
}
```

::: danger
Never forward client-supplied inventory or character IDs to the server adapter. Without both implementations, an empty list means no slings and no saved placements.
:::

Other functions you may want to replace:

| Function | Purpose |
| --- | --- |
| `Bridge.currentWeapon()` | Identifies the selected inventory item |
| `Bridge.holster()` | Returns `true` once your inventory has actually holstered |
| `Bridge.componentItem(name, weaponName)` | Resolves component item names (raw GTA component hashes also work) |
| `Bridge.job()` | Job name and duty used for police rules |

After a custom inventory update, trigger the local event `kb3_weaponhandling:inventoryChanged`. Periodic server reconciliation is a fallback.
