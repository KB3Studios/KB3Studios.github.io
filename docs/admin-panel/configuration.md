# Configuration

Settings are split across three files in `config/`:

| File | What you change there |
| --- | --- |
| `config/shared.lua` | Panel name, server name, commands, open key, fuel override, ped list, handbook |
| `config/server.lua` | Owners, ACE mapping, default groups and limits, framework/provider overrides, hooks, entity protection, restartable resources, staff room |
| `config/features.lua` | Live view quality, item and vehicle catalogue, custom cars, vehicle images, garages, case retention, police detection, economy watch thresholds |

## config/shared.lua

| Option | Default | Description |
| --- | --- | --- |
| `Name` | `'KB3 Admin Panel'` | Name shown in the panel |
| `ServerName` | `'Your Server'` | Your server's name |
| `Command` | `'kb3admin'` | Command to open the panel |
| `ReportCommand` | `'report'` | Player report command. Change it if another resource already uses `/report` |
| `OpenKey` | `'F9'` | Default open key (players can rebind it in FiveM key bindings) |
| `RecoveryCommand` | `'kb3uireset'` | Resets only the panel's UI and focus |
| `Inspector.distance` | `65.0` | Entity inspector reach in metres |
| `Noclip.speed` / `fastMultiplier` | `1.5` / `4.0` | Noclip speed |
| `Fuel` | `'auto'` | Fuel script override. A resource name, or `'native'` for GTA fuel |
| `Peds.list` | 40 peds | Ped changer picker entries: `{ model, label, category }` |
| `Peds.blocked` | `{}` | Models nobody can switch to, e.g. `['a_c_chimp'] = true` |
| `Peds.reset` | `'auto'` | Restore method. Auto detects illenium-appearance, qb-clothing and esx_skin. Otherwise use a client event name |
| `Theme.accent` | `'#e9a58b'` | Default accent colour |
| `Knowledge` | 4 entries | Staff handbook articles shown in the panel |

### Adding add-on peds

```lua
Peds = {
    reset = 'auto',
    blocked = { ['a_c_chimp'] = true },
    list = {
        { model = 'my_addon_ped', label = 'My add-on ped', category = 'Custom' },
        -- ...
    },
},
```

## config/server.lua

| Option | Default | Description |
| --- | --- | --- |
| `OwnerAce` | `'kb3.owner'` | ACE that grants root owner |
| `RequireDuty` | `true` | Staff must be on duty to use tools |
| `Framework` | `'auto'` | `'qbx'`, `'qb'` or `'esx'` to force a framework |
| `Providers.inventory` / `keys` / `medical` | `'auto'` | Force a specific adapter. See [Compatibility](./compatibility#forcing-a-choice) |
| `Owners` | `{}` | Root owner identifiers (any identifier type) |
| `AceRoles` | admin/moderator/helper | Maps ACEs to panel groups |
| `Roles` | 4 groups | Default groups, created **once** on first start (see [permissions](./permissions)) |
| `Grants.reviewMoney` / `reviewItems` | `10000` / `5` | Compensation above these needs a separate approver |
| `Grants.maxMoney` / `maxItems` | `1000000` / `10000` | Hard caps per grant |
| `Grants.blockedItems` | `money`, `black_money` | Items that can't be granted as items |
| `Entities.maxCleanupRadius` | `35.0` | Area cleanup radius cap |
| `Entities.protectedModels` / `protectedZones` | — | Models and zones the inspector and cleanup won't touch |
| `Resources.allowed` | `{}` | **Opt-in** list of resources that may be restarted from the panel |
| `Resources.protected` | core resources | Never restartable |
| `Limits.retentionDays` | `90` | Audit and history retention |
| `Limits.reportCooldown` / `openReports` | `60` / `3` | Report spam protection per player |
| `StaffRoom.coords` | Legion area | Private staff room location. **Set this to a spot you've tested** |
| `SpawnVehicles` | 5 vehicles | Quick-spawn list |
| `TemporaryVehicles` | 2 per staff, 20 global | Staff vehicle caps. `replaceCurrent` swaps your current vehicle |
| `Workflows` | 2 presets | Multi-step recovery workflows (see [exports](./exports#recovery-workflows)) |
| `AppealUrl` | `''` | Ban appeal link shown to banned players |
| `Hooks` | all `nil` | Custom integrations. See [Hooks](./hooks) |

## config/features.lua

New options live here so upgrades can keep your original `server.lua`.

### Live view

```lua
defaults('Live', {
    enabled = true, maxSessions = 3, duration = 600,
    width = 1280, height = 720, fps = 30, bitrate = 4500000,           -- default preset
    maxWidth = 1920, maxHeight = 1080, maxFps = 60, maxBitrate = 12000000, -- owner ceilings
    notifyTarget = false, -- true tells the player they're being watched (sessions are always audited)
    iceServers = { ... }, -- STUN/TURN servers
})
```

Live view uses peer-to-peer WebRTC. On strict networks you may need a TURN server in `iceServers`:

```lua
{ urls = { 'turn:YOUR_TURN_HOST:3478' }, username = 'LIMITED_USERNAME', credential = 'LIMITED_CREDENTIAL' }
```

### Catalogue (items and vehicles)

| Option | Default | Description |
| --- | --- | --- |
| `maxGive` | `10000` | Max quantity per item give |
| `imageBase` | `'auto'` | Item image folder. Auto reads your inventory's folder |
| `vehicleImages` | local, then FiveM CDN | Image paths tried in order. `%s` is the spawn code |
| `extraVehicles` | `{}` | Streamed cars that aren't in your framework's vehicle list |

::: tip Add-on car pictures
Drop `spawncode.png` or `spawncode.webp` into `web/vehicles/`. You can also reuse another resource's images, e.g. `'nui://jg-advancedgarages/vehicle_images/%s.png'`.
:::

### Garages

```lua
defaults('Garage', {
    system = 'auto',
    garages = { 'pillboxgarage', { id = 'legion', label = 'Legion Square' } },
})
```

The `garages` list fills the dropdown for garage scripts without a garage list export. If it's empty, the panel suggests garage names already used in your database.

### Economy watch

| Option | Default | Flags when… |
| --- | --- | --- |
| `largeTransaction` | `250000` | A single money change is at or above this |
| `rapidGain` | `500000` in `600` s | A character gains this much inside the window |
| `repeatPayout` | `6` times in `60` s, min `500` | The same amount and reason fires repeatedly (dupes, event spam) |
| `maxBalance` | `50000000` | Any cash or bank balance is above this |
| `unexplainedMin` | `1000` | Money appears with no money event |
| `reconcileSeconds` | `60` | How often live balances are checked against recorded changes |
| `adminReasons` | list | Reason text that marks money as admin-made (other menus, txAdmin, `/givemoney`) |
| `watchedItems` | `black_money`, `markedbills`, `goldbar` | Item = largest normal gain per check |
| `alertStaff` | `true` | High-severity alerts pop up for on-duty staff |

### Live map

```lua
defaults('Map', { image = 'map/map.jpg', refreshMs = 1000, calibration = { ... } })
```

The bundled satellite map is pre-aligned to within about 100–250 m. To make it exact, open **Live map**, click **Calibrate**, stand somewhere and click your spot, travel at least 500 m and click again. The calibration is saved for all staff. If you swap the image (a file in `web/map/` or an `https://` URL), calibrate again.

### Other

| Option | Default | Description |
| --- | --- | --- |
| `Diagnostics.profileSeconds` | `10` | Profiler capture length (5–15) |
| `Diagnostics.retentionDays` | `7` | Diagnostic sample retention |
| `Announcements.duration` | `10000` | Announcement display time (ms) |
| `Characters.moneyTypes` | `cash`, `bank` | Add `'crypto'` if your Qbox config uses it |
| `Cases.closedRetentionDays` | `30` | Starting value. Owners change it in game on the Reports page |
