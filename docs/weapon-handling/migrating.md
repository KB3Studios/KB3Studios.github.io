# Migrating from SNRP

1. **Back up** the old resource folder.
2. **Stop and remove** its `ensure`. The two versions share player command names and must not run together.
3. Install `kb3_weaponhandling` separately.
4. **Copy your config values** into the new `config.lua`. Don't overwrite the new file.
5. Copy `placements.json` and `player_placements.json` if you want to keep the same fits.
6. Update your inventory draw hook to the KB3 export. See [Draw integration](./draw-integration).

::: info Notes
- Character keys are the framework's citizenid or the ESX character identifier, so migrate within the same identity scheme.
- KB3 uses its own state and KVP keys, so `/sling` visibility and default-side preferences start fresh.
:::
