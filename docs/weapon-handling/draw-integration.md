# Draw integration

Slings, the editor, crouch and gun run don't need any inventory changes. **Pistol draw and holster timing is opt-in.** The inventory that equips the weapon must call the KB3 export before it plays its own draw or holster animation, which avoids two competing animation systems.

## ox_inventory

::: warning Back up first
Back up `ox_inventory/modules/weapon/client.lua`. These steps target versions with the normal `Weapon.Equip`, `Weapon.Disarm`, `anim` and `sleep` locals, so compare against your installed version.
:::

**1.** Add this helper near the top of the module:

```lua
local function kb3DrawAnimation(hash, name)
    if GetResourceState('kb3_weaponhandling') ~= 'started' then return end
    local ok, anim = pcall(function()
        return exports.kb3_weaponhandling:getDrawAnimation(hash, name)
    end)
    if ok and type(anim) == 'table' then return anim end
end
```

**2.** In `Weapon.Equip`, after the existing animation selection and police-group filter, and just before `sleep` is assigned:

```lua
anim = kb3DrawAnimation(data.hash, item.name) or anim
```

**3.** In `Weapon.Disarm`, after its animation selection and police-group filter, and just before its `sleep` assignment:

```lua
anim = kb3DrawAnimation(currentWeapon.hash, currentWeapon.name) or anim
```

Keep ox's `client.weaponanims`, skip/noAnim/vehicle checks, timing, component, ammo and durability logic intact. If the old SNRP hook is installed, replace those calls rather than stacking both.

When KB3 is stopped or the export fails, the helper falls back to ox's own animation.

## Other inventories

Call the same export in your weapon controller before draw and holster:

```lua
local anim = exports.kb3_weaponhandling:getDrawAnimation(weaponHash, weaponName)
```

It returns `nil` for stock behaviour, or a six-value table:

| # | Value |
| --- | --- |
| 1 | Equip animation dictionary |
| 2 | Equip clip |
| 3 | Equip delay (ms) |
| 4 | Holster dictionary |
| 5 | Holster clip |
| 6 | Holster delay (ms) |

Your weapon controller stays responsible for loading and playing animations, weapon visibility, and ammo and inventory operations. Respect its busy, no-animation and vehicle rules, and don't add a second per-frame equip loop.
