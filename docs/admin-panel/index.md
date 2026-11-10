# Admin Panel <Badge type="tip" text="v1.0.0" />

KB3 Admin Panel is an in-game staff panel for FiveM roleplay servers. It covers player moderation, characters, garages, cases and compensation, entity inspection, a live map, live player view, diagnostics, and permission groups that you manage entirely in game.

It works with **Qbox, QBCore and ESX Legacy** and automatically detects the inventory, garage, vehicle key, medical, police and fuel scripts most cities run. For anything it doesn't detect, a few lines in a [hook](./hooks) add support.

## Features

- **Full-screen or side-panel layout.** Each staff member picks their own layout and accent colour.
- **Players.** A detailed profile with overview, job, gang, money, character info, every character on the license, garage and history. Moderation covers warn, kick, timed ban, freeze, bring/goto/return, spectate, private staff room, revive/heal and unstuck.
- **Characters.** Search every character, online or offline, by name, citizen ID, phone or license. Edit character info, job, gang and money. Owners can delete offline characters, and a snapshot is kept in the audit log.
- **Garages.** Add, move, store and remove vehicles in any character's garage, online or offline, including cars stuck as "out". Every world copy is despawned.
- **Users and groups in game.** Add staff by clicking an online player or pasting a license. Build permission groups with a categorised editor and expiry dates, with no config editing needed.
- **Cases and compensation.** Player reports, internal notes, assignment and linked cases. Compensation goes through approval and is protected against double payout. Closed cases are cleaned up after a retention period you choose.
- **Entity inspector.** Aim at a vehicle, ped or prop to see the model, archetype, network ID, owner and creating script. Copy coords or the model, or press **Delete twice** to remove it. Map props can be removed for everyone and restored later.
- **Ped changer.** Change any player's ped or your own from a categorised picker or a typed model (add-on peds work), and restore the character in one click.
- **Items and vehicles.** Live item search with images and quantities up to 10,000. A vehicle catalogue with thumbnails. Spawning a car replaces the one you're in.
- **Live map.** Real server-side positions every second with smooth dots, on-duty and downed markers, search, follow, Go to, Spectate, right-click teleport or waypoint, and bucket filtering. Ships with a satellite map and a 2-click calibration.
- **Live view.** Watch a player's screen privately from inside the panel, up to 1080p60.
- **Keybinds.** A visual keyboard to bind any Command Center action to a key, saved per PC.
- **Economy watch.** Flags repeated payouts, money appearing without a money event, large or rapid gains, abnormal balances, item spikes and admin-spawned money (with the staff member's name).
- **Diagnostics.** Resource error grouping, crash and disconnect evidence, server profiler captures and an economy ledger.
- **Audit trail.** Every action on a player, their money, items, vehicles or character needs a written reason and is logged with who, what, when and why.

## Requirements

| Required | Notes |
| --- | --- |
| OneSync | Infinity or Legacy |
| [ox_lib](https://github.com/overextended/ox_lib) | Any current release |
| [oxmysql](https://github.com/overextended/oxmysql) | Any current release |
| Framework | Qbox (`qbx_core`), QBCore (`qb-core`) or ESX Legacy (`es_extended`) |

Everything else is optional and detected automatically. See [Compatibility](./compatibility).

## Performance

| Resource | Client resmon |
| --- | ---: |
| KB3 Admin Panel | 0.00–0.02 ms |

- No client `Wait(0)` loop runs while the panel is closed or the inspector is inactive. Noclip, spectate and inspector targeting create frame threads only while active.
- The UI never polls. Command palette searches are debounced by 300 ms, and lists refresh only on navigation, manual refresh or a successful action.
- One server sampler runs every 10 seconds and keeps at most 180 samples (30 minutes).
- Requests are rate-limited per player (8/s, burst 14, 3 concurrent, one mutation at a time).
- The UI uses local assets and vanilla JS/CSS, with no React bundle, external CDN or backdrop blur.

## Next steps

1. [Install the resource](./installation)
2. [Set up staff and groups](./permissions)
3. [Check the Integrations card](./compatibility)
