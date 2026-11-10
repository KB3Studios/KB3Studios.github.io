# Configuration

All options live in `config.lua`.

## General

| Option | Default | Description |
| --- | --- | --- |
| `Config.Framework` | `'auto'` | `auto`, `qbox`, `qb` or `esx` |
| `Config.Inventory` | `'auto'` | `auto`, `ox`, `qb`, `esx` or `custom` |
| `Config.Brand` | `'KB3 Studios'` | Branding in the editor |
| `Config.PlayerEditor.enabled` | `true` | Let players edit their own placements |
| `Config.PlayerEditor.maxOffset` | `0.35` | Max distance (m) a player can move a weapon from the default |
| `Config.EditorAce` | `'kb3_weaponhandling.admin'` | ACE for shared default editing |

## Police

```lua
Config.PoliceJobs = { police = true, sheriff = true }
Config.PoliceMustBeOnDuty = true
```

Police get `Movement.policeStyle` and the `Draw.policePistol` animation. ESX jobs without an `onduty` flag count as on duty.

## Movement

```lua
Config.Movement = {
    enabled = true,
    civilianStyle = 'Default',
    policeStyle = 'Default',
    civilianCarryClipset = 'move_ped_wpn_jerrycan_generic', -- lowered one-handed carry
    relaxCivilians = true, -- no tense combat shuffle when not aiming or firing
}
```

The carry clipset is used only while moving without aiming, firing or reloading.

## Crouch

| Option | Default | Description |
| --- | --- | --- |
| `enabled` | `true` | Master switch |
| `key` | `'LCONTROL'` | Default key (players can rebind it in FiveM key bindings) |
| `command` | `'kb3crouch'` | Command behind the key mapping |
| `movement` / `strafe` | `move_ped_crouched` / `move_ped_crouched_strafing` | Clipsets |
| `transition` | `0.25` | Blend time |
| `disableCombatRoll` | `true` | Block combat roll while crouched |

## Draw animations

```lua
Config.Draw = {
    enabled = true,
    -- { equipDict, equipClip, equipMs, holsterDict, holsterClip, holsterMs }
    civilianPistol = { 'reaction@intimidation@1h', 'intro', 900, 'reaction@intimidation@1h', 'outro', 900 },
    policePistol   = { 'reaction@intimidation@cop@unarmed', 'intro', 400, 'reaction@intimidation@cop@unarmed', 'outro', 450 },
    weapons = {
        -- WEAPON_YOUR_PISTOL = { ...six values... },
    },
}
```

These only apply when your inventory calls the export. See [Draw integration](./draw-integration).

## Slings

| Option | Default | Description |
| --- | --- | --- |
| `enabled` | `true` | Master switch |
| `maxVisible` | `2` | Long guns shown at once (hip slots are separate) |
| `distance` | `70.0` | Distance other players' slings render from |
| `refreshMs` / `serverRefreshMs` | `400` / `4000` | Client and server reconcile intervals |
| `hideInVehicles` / `hideOnDeath` | `true` | Hide props in these states |
| `defaultSide` | `'back'` | `back` or `front` |
| `groups` | rifles, SMGs, MGs, shotguns, snipers, melee | Weapon groups that get a sling |
| `secondOffset` | `0.16` | Offset for the second visible long gun |

### Per-weapon overrides

```lua
weapons = {
    WEAPON_YOUR_RIFLE = { category = 'compact', hash = 'WEAPON_YOUR_RIFLE' }, -- fix a misclassified add-on
    WEAPON_RADARGUN = false,   -- never sling
    WEAPON_DIGISCANNER = false,
    WEAPON_STUNGUN = false,
},
```

### Default positions

```lua
positions = {
    back          = { bone = 24818, x = 0.13, y = -0.18, z = 0.00,  rx = 0.0, ry = 155.0, rz = 0.0 },
    front         = { bone = 24818, x = 0.08, y = 0.18,  z = -0.08, rx = 0.0, ry = 145.0, rz = 180.0 },
    compact_back  = { bone = 24818, x = 0.12, y = -0.16, z = -0.07, rx = 0.0, ry = 150.0, rz = 0.0 },
    compact_front = { bone = 24818, x = 0.06, y = 0.17,  z = -0.08, rx = 0.0, ry = 145.0, rz = 180.0 },
},
```

Position is in metres and rotation in degrees. The `bat_back`, `knife_hip` and `crowbar_hip` positions have built-in defaults and can be overridden here too.

### Melee mounts

Built in: `WEAPON_BAT` → bat (back), `WEAPON_CROWBAR` → crowbar (hip), and `WEAPON_KNIFE`, `WEAPON_DAGGER`, `WEAPON_SWITCHBLADE`, `WEAPON_MACHETE` → knife (hip). Add others with `Config.Sling.meleeMounts`, or set one to `false` to disable it.

## Saved data

| File | Contents |
| --- | --- |
| `placements.json` | Shared default placements per weapon. Starts empty |
| `player_placements.json` | Generated on first personal save. Per-character positions and Gun run / Crouch switches |

::: danger Keep both JSON files when updating
Don't replace generated player data with an empty file. Invalid personal JSON is locked instead of overwritten, so check the server console if saves fail.
:::
