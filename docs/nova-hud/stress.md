# Stress

A full stress system that's compatible with qb-hud events.

## Gaining stress

| Source | Default |
| --- | --- |
| Shooting | 0.6 per bullet (a full pistol magazine adds about 7) |
| Speeding | 0.5 per second above 70 mph unbuckled or 90 mph buckled, doubling when 30 mph over |
| Damage | 1 stress per 10 HP lost |

Whitelisted jobs (police, sheriff and ambulance by default) don't gain stress from shooting or speeding.

## Losing stress

Ten seconds after the last stressful event, stress starts dropping while the player is on foot:

| Activity | Stress removed per second |
| --- | ---: |
| Swimming | 0.6 |
| Sprinting | 0.5 |
| Running | 0.35 |
| Walking | 0.15 |
| Standing still | 0.05 |

## Effects

Effects scale by tier:

| Stress | Every | Shake | Blur | Extra |
| ---: | ---: | ---: | ---: | --- |
| 45+ | 45 s | 0.05 | off | |
| 65+ | 30 s | 0.10 | 800 ms | |
| 80+ | 18 s | 0.18 | 1500 ms | |
| 95+ | 9 s | 0.30 | 2500 ms | 15% chance to stumble |

### Shaky hands

From **75%** stress, every shot adds extra recoil: an upward kick with some sideways drift. It's eased in over a few frames so it feels like recoil rather than a camera snap. The kick grows from 0.6° per shot at 75% to 2.4° at 100%, and scales by weapon type:

| Weapon group | Multiplier |
| --- | ---: |
| Shotgun | 1.8 |
| Machine gun | 1.15 |
| Pistol / Rifle | 1.0 |
| SMG | 0.8 |
| Sniper | 0.6 |

## Configuration

Every value is in `Config.Stress`:

```lua
Config.Stress = {
    enabled = true,
    max     = 100,
    debug   = false, -- print every change in F8 and the server console while tuning

    whitelistedJobs = { police = true, sheriff = true, ambulance = true },

    shooting = {
        enabled = true, perShot = 0.6,
        whitelistedWeapons = { 'WEAPON_STUNGUN', 'WEAPON_PETROLCAN', 'WEAPON_FIREEXTINGUISHER',
            'WEAPON_SNOWBALL', 'WEAPON_BALL', 'WEAPON_FLARE', 'WEAPON_HAZARDCAN' },
    },

    speeding = {
        enabled = true, unit = 'mph',
        minBelted = 90, minUnbelted = 70,
        perSecond = 0.5, doubleAbove = 30,
        ignoredClasses = { [13] = true, [14] = true, [15] = true, [16] = true, [18] = true, [21] = true },
    },

    damage = { enabled = true, perHealth = 10, amount = 1 },

    relief = { calmTime = 10000, idle = 0.05, walk = 0.15, run = 0.35, sprint = 0.5, swim = 0.6 },

    recoil = {
        enabled = true, minStress = 75, kickMin = 0.6, kickMax = 2.4,
        sideways = 0.35, shake = 0.035, inVehicle = true,
        groups = { GROUP_PISTOL = 1.0, GROUP_SMG = 0.8, GROUP_RIFLE = 1.0,
                   GROUP_MG = 1.15, GROUP_SHOTGUN = 1.8, GROUP_SNIPER = 0.6 },
    },

    effects = {
        enabled = true,
        tiers = { -- ascending 'min' order. blur = 0 turns blur off for that tier
            { min = 45, interval = 45000, shake = 0.05, blur = 0 },
            { min = 65, interval = 30000, shake = 0.10, blur = 800 },
            { min = 80, interval = 18000, shake = 0.18, blur = 1500 },
            { min = 95, interval = 9000,  shake = 0.30, blur = 2500, ragdollChance = 0.15 },
        },
    },

    serverMaxPerRequest = 15, -- server-side cap on a single gain request from a client
}
```

`ignoredClasses` skips speeding stress for cycles (13), boats (14), helicopters (15), planes (16), emergency vehicles (18) and trains (21).

::: tip Tuning
Set `debug = true` to print every stress change, and use `/stress` to see your current level. Admins can set anyone's stress with `/setstress [id] [0-100]`.
:::

## Storage

| Framework | Stored in |
| --- | --- |
| QBCore / Qbox | Player metadata `stress` |
| ESX / standalone | Server KVP, keyed by license |

The live value is also in the player state bag `stress`.

## Stress relief items

`Config.StressItems` turns items into stress relievers. It ships with `joint`, `cigarette` and `beer`.

```lua
Config.StressItems = {
    enabled = true,
    items = {
        joint = {
            label = 'Smoking a joint', relieve = { 20, 30 }, duration = 10000, remove = true,
            scenario = 'WORLD_HUMAN_SMOKING_POT',
        },
        cigarette = {
            label = 'Smoking a cigarette', relieve = { 8, 15 }, duration = 8000, remove = true,
            scenario = 'WORLD_HUMAN_SMOKING',
        },
        beer = {
            label = 'Drinking a beer', relieve = { 5, 10 }, duration = 6000, remove = true,
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle', flag = 49 },
            prop = { model = 'prop_amb_beer_bottle', bone = 18905,
                     pos = { 0.12, 0.008, 0.03 }, rot = { 240.0, -60.0, 0.0 } },
        },
    },
}
```

| Field | Meaning |
| --- | --- |
| `relieve` | `{ min, max }` stress removed when finished |
| `duration` | How long it takes (ms) |
| `remove` | Take one item when finished. Nothing is taken if the player cancels |
| `scenario` | A GTA scenario, which comes with its own prop. Can't be used in a vehicle |
| `anim` + `prop` | A custom animation with a prop in hand. Works while walking or in a car |

Players cancel with <kbd>X</kbd>. Getting into a car (for scenarios) or dying also cancels. The server checks the player has the item and that the animation ran its full length before removing stress.

### Adding the items to your inventory

The items are registered as usable through QBCore, Qbox or ESX (ox_inventory picks them up through those). They also need to exist in your inventory's item list:

::: code-group

```lua [ox_inventory]
-- ox_inventory/data/items.lua
['joint']     = { label = 'Joint',     weight = 10,  stack = true, close = true },
['cigarette'] = { label = 'Cigarette', weight = 10,  stack = true, close = true },
['beer']      = { label = 'Beer',      weight = 500, stack = true, close = true },
```

```lua [qb-core]
-- qb-core/shared/items.lua
joint = { name = 'joint', label = 'Joint', weight = 10, type = 'item', image = 'joint.png',
          unique = false, useable = true, shouldClose = true, description = 'Takes the edge off' },
```

:::

For ESX without ox_inventory, add the rows to the `items` table. For any other inventory, call [`UseStressItem`](./developers#server-exports) from that item's use handler.
