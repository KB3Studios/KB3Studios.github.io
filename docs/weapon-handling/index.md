# Weapon Handling <Badge type="tip" text="v1.1.1" />

Visible weapon slings, lowered carry movement, a custom crouch and a live placement editor, so every player can fit their slung weapons exactly where they want them.

## Features

- **Weapon slings.** Long guns appear on the back or front (two visible by default). A bat shows only when no long gun is carried. One knife and one crowbar get their own hip mounts. Pistols stay concealed.
- **Tints and attachments** are copied onto slung weapons where the inventory supplies the metadata.
- **Smart hiding.** Equipped weapons are excluded, and props hide in vehicles and on death.
- **Live placement editor.** Players fine-tune position and rotation per weapon with an orbit/zoom camera, saved per character.
- **Shared defaults.** Admins set server-wide default placements per weapon.
- **Lowered carry movement ("gun run").** A relaxed one-handed carry while moving, unless aiming, firing or reloading. Players can toggle it per character.
- **Custom crouch** on <kbd>Left Ctrl</kbd> (rebindable), with combat roll disabled. Players can toggle it per character.
- **Police styles.** Separate movement style and draw animation for on-duty police jobs.
- **Optional draw animations.** Waistband-style pistol draw and holster timing through a small [inventory integration](./draw-integration).
- **No SQL and no new items.** Placements are stored in JSON files inside the resource.

This resource uses stock GTA animation and model assets. It doesn't include proprietary animation packs, physical sling straps or holster meshes.

## Requirements

| Framework | Inventory options |
| --- | --- |
| Qbox | ox_inventory, or an editable custom adapter |
| QBCore | ox_inventory (on an already-integrated server), QB inventory via `PlayerData.items`, or a custom adapter |
| ESX Legacy | ox_inventory, ESX inventory/loadout, or a custom adapter |

Plus **OneSync** and **ox_lib** on every framework.

## Performance

| Resource | Client resmon |
| --- | ---: |
| KB3 Weapon Handling | 0.01–0.03 ms |

Since 1.1.1, heavy checks (player state, job, walk style, crouch recovery) run every 100–250 ms instead of every frame. The sling display rebuilds only when the inventory, equipped weapon or `/sling` preference changes, and far-away players are skipped early.

## Next steps

1. [Install the resource](./installation)
2. [Configure police jobs and sling positions](./configuration)
3. [Learn the placement editor](./editor)
