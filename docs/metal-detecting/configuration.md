# Configuration

Edit `shared/config.lua` with the resource stopped, then restart it.

## General

| Option | Default | Description |
| --- | --- | --- |
| `Config.Framework` | `'auto'` | `auto`, `qbox`, `qbcore`, `esx`, `standalone` or `custom`. Auto prefers Qbox, then QBCore, then ESX |
| `Config.Inventory` | `'auto'` | `auto`, `ox_inventory`, `qb-inventory`, `qs-inventory`, `esx` or `custom` |
| `Config.Brand` | `'KB3 Studios'` | Browser title branding |
| `Config.Debug` | `false` | Extra console output |
| `Config.DetectorItem` / `TrowelItem` | `kb3_detector` / `kb3_trowel` | Equipment item names |
| `Config.MoneyType` | `'cash'` | `cash` or `bank`. ESX cash maps to its `money` account |
| `Config.InventoryImagePath` | `'../install/images/%s.webp'` | UI icon path. `%s` is the item name |

## Detecting and digging

| Option | Default | Description |
| --- | --- | --- |
| `Config.DigSeconds` | `7` | Server-checked digging duration |
| `Config.SearchRadius` | `18.0` | Distance a signal can be heard from. Must be larger than `PinpointRadius` and at least 6 |
| `Config.PinpointRadius` | `2.0` | Distance you can dig from |
| `Config.FindCooldown` | `20` | Seconds between finds |
| `Config.SignalLifetime` | `180` | Seconds before an uncollected signal expires |

## Beaches

```lua
Config.Zones = {
    { label = 'Vespucci Beach', center = vec3(-1394.0, -1458.0, 2.0), radius = 180.0 },
    { label = 'Del Perro Beach', center = vec3(-1572.0, -1167.0, 2.0), radius = 150.0 },
    { label = 'Chumash Beach',  center = vec3(-3205.0, 1120.0, 2.0),  radius = 110.0 },
}
```

Add or change zones for your city. There are no automatic map blips.

## Dealer

```lua
Config.Pawn = {
    coords = vec4(100.0, 100.0, 30.0, 180.0), -- nil disables the dealer
    model = 'a_m_m_business_01',
    radius = 3.0,
}
Config.Equipment = { detectorPrice = 5000, trowelPrice = 100 }
```

`Config.Equipment` sets purchase prices. Resale prices for equipment are separate, in `Loot.Items`.

## Audio

```lua
Config.DetectorAudio = {
    farInterval = 1400, -- ms between beeps far away
    nearInterval = 75,  -- rapid beeps at the pinpointed spot
    volume = 0.4,
}
Config.BagAudio = { volume = 0.55 }
```

## Models and animations

`Config.Detector` sets the detector model (`w_am_digiscanner_reh`, bundled), hand bone, attachment offsets, holding animation and sweep angle. `Config.Dig` sets the digging animation and trowel prop.

## Tiers and UI

| Option | Description |
| --- | --- |
| `Config.Tiers` | Label and colour per rarity: common, uncommon, rare, ultra, extraordinary |
| `Config.RecentWins.limit` | Recent wins kept in the bag UI for this session (no database) |
| `Config.UI` | Bag header (`brandTop`, `brandBottom`) and footer text |
| `Config.ItemPrefix` / `Config.BagItems` | Item naming. These must match your inventory definitions |
