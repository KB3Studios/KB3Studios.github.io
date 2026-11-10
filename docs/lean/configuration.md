# Configuration

Everything lives in `config.lua`. Effect tuning can also be done live in game with [Lean Studio](#lean-studio).

::: tip Files to keep when updating
`config.lua`, `custom_ingredients.lua` and the `data/` folder.
:::

## General

| Option | Default | Description |
| --- | --- | --- |
| `Config.Framework` | `'auto'` | `auto`, `qbox`, `qb` or `esx` |
| `Config.Inventory` | `'auto'` | `auto`, `ox` or `qb`. Per-cup metadata is required |
| `Config.Target` | `'auto'` | `auto`, `ox`, `qb` or `none` (E-key fallback) |
| `Config.Locale` | `'en'` | Key into `Config.Text` |
| `Config.Debug` | `false` | Extra console output |
| `Config.Command` | `'lean'` | Opens the mixer |
| `Config.Admin` | `leanadmin` / `kb3_lean.admin` | Lean Studio command and ACE |
| `Config.CupItem` / `EmptyCupItem` | `kb3_lean_cup` / `kb3_empty_cup` | Item names |

## Cups and sipping

| Option | Default | Description |
| --- | --- | --- |
| `Config.Sips` | `8` | Sips per cup |
| `Config.Sip.durationMs` | `2200` | Sip animation length |
| `Config.Sip.cooldownSeconds` | `0` | Pause between sips (walking is allowed while sipping) |
| `Config.Pass.distance` | `2.0` | Max distance to offer a cup |
| `Config.Pass.expiresSeconds` | `15` | How long an offer stays open |
| `Config.CupPose.twoHands` | `true` | Use a supporting hand while holding |

## Mixing scene

| Option | Default | Description |
| --- | --- | --- |
| `Config.Mixing.stageMs` | `3200` | Length of each pour stage |
| `Config.Mixing.timeoutMs` | `90000` | Scene times out after this |
| `Config.Mixing.maxMove` | `2.0` | Moving further than this cancels mixing (ingredients aren't consumed) |
| `Config.Mixing.animation` | drinking shot clip | Ped animation while mixing |
| `Config.Physical.cameraFov` | `48.0` | Close-up camera FOV |
| `Config.Physical.prompts` / `showSips` | `true` | On-screen prompts and sip counter |
| `Config.Physical.sceneNetworked` | `false` | The close-up scene is private. Carried and placed cups are always shared |
| `Config.Finishing.maxCandies` | `3` | Max candies per cup |
| `Config.Finishing.ice` | `true` | Allow ice |
| `Config.Finishing.mixerVolume` / `syrupVolume` | `.68` / `.25` | Visual fill proportions only (doesn't change ingredient counts) |

## Placed cups

| Option | Default | Description |
| --- | --- | --- |
| `Config.Placement.enabled` | `true` | Allow placing cups in the world |
| `maxDistance` / `pickupDistance` | `2.5` / `2.0` | Place and pick-up reach |
| `streamDistance` | `40.0` | Distance placed cups are shown from |
| `maxCups` | `250` | Server-wide placed cup limit |
| `maxPerCharacter` | `12` | Per-character placed cup limit |
| `lifetimeHours` | `48` | Placed cups expire after this |
| `syncSeconds` | `15` | World sync interval |

## Effects

```lua
Config.Effects = {
    enabled = true, durationSeconds = 180, decayPerMinute = 5.0, maxPoints = 120,
    thresholds = { 1, 22, 43, 66, 88 }, -- points needed for levels 1–5
    preset = 'balanced', feedback = true,
    timecycle = true, cameraShake = true, movement = false,
    layered = { enabled = true, postFx = 'DrugsMichaelAliensFight', breathing = .12,
                swayScale = 1.8, stagger = true, staggerLevel = 3 },
    hallucinations = { maxActors = 15, spawnIntervalMs = 250, collideWithPlayer = true,
                       followSpeed = 2.0, followDistance = 3.0, despawnDistance = 60.0 },
    blackout = { enabled = true, threshold = 100, durationMs = 6500, cooldownSeconds = 120 },
    overdoseHook = { enabled = false, threshold = 115, cooldownSeconds = 300 },
}
```

| Option | Description |
| --- | --- |
| `durationSeconds` | How long a sip's effect lasts |
| `decayPerMinute` | Points lost per minute |
| `maxPoints` | Cap on accumulated points |
| `thresholds` | Points needed for each of the five intensity levels |
| `layered.*` | Post-FX, breathing, sway and stagger layering |
| `hallucinations.*` | Hallucination actor count, spawn rate and movement |
| `blackout.*` | Short blackout at `threshold` points |
| `overdoseHook.*` | Fires the [`kb3_lean:server:overdose`](./developers#server-events) event for EMS integration. **Off by default** |

## Syrups and mixers

```lua
Config.Syrups = {
    { id = 'violet', label = 'Violet Haze', item = 'kb3_syrup_violet', color = '#ad88ff', points = 12, timecycle = 'spectator5' },
    -- ruby, azure, amber, mint
}
Config.Mixers = {
    { id = 'citrus', label = 'Citrus Soda', item = 'kb3_soda_citrus', color = '#c9e998', note = 'Bright / crisp' },
    -- grape, berry, tropical, cream
}
```

`points` is the effect strength per serving. To add your own, use [`custom_ingredients.lua`](./custom-ingredients) instead of editing these tables.

### Recipe allowlist

By default all 25 syrup and mixer combinations are allowed. To restrict them:

```lua
Config.Recipes = { ['violet:citrus'] = true, ['ruby:cream'] = true }
```

## Doctor NPC

```lua
Config.Doctor = {
    enabled = true,
    coords = { x = 315.3941, y = -600.7806, z = 29.2928, w = 175.6673 },
    account = 'cash',     -- 'cash' or 'bank'
    defaultPrice = 250,   -- per bottle
}
```

Extra optional fields with their defaults: `label = 'Back-Alley Doctor'`, `model = 's_m_m_doctor_01'`, `distance = 2.5`, `streamDistance = 60.0`, `bucket = 0`, `maxQuantity = 10`, and `prices = { violet = 300 }` for per-syrup prices.

The doctor only sells ordinary syrups, never clinic syrups. Custom syrups need `doctor = true` to be sold. If a payment or delivery result is uncertain, the purchase is logged to `data/doctor-review.log` for staff review instead of being retried.

## Medical and prescriptions

See [EMS & prescriptions](./ems).

## Text

All player-facing strings are in `Config.Text.en`. Add another language table and set `Config.Locale` to use it.

## Lean Studio

`/leanadmin` (ACE `kb3_lean.admin`) opens an in-game tuning studio with:

- **Live effect preview** while you edit
- **Per-syrup settings:** enable or disable, effect preset, duration, colour, perks, armour and blackout
- **Effect presets:** Progressive blend, Mellow, Soft Focus, Double Pulse and more, each with its own timecycle, post-FX, strength, sway, breathing, stagger and hallucination pattern
- **Grouped settings** with text that scales on 1440p and 4K

Changes are saved to `data/effect-settings.json` and survive restarts and updates, as long as you keep the `data/` folder.
