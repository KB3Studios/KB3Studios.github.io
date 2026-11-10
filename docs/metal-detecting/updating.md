# Updating

::: tip Always keep
- The exact folder name `kb3_metaldetect`
- `shared/config.lua` and `shared/loot.lua`
- Any `bridge/` customisations
- The server's resource KVP data (saved loot tables and held trades)
:::

## To 1.2.2

Performance update with **no config, item or database changes**. Replace the resource folder and keep your `shared/config.lua` and `shared/loot.lua`.

## To 1.2.1: bundled detector model

1. Stop `kb3_metaldetect` and back up your config and bridge edits.
2. Replace it with the complete folder, including `stream/`, `fxmanifest.lua` and the new `shared/config.lua`. Merge your settings back in.
3. If you keep an old config, set `Config.Detector.model = 'w_am_digiscanner_reh'`.
4. **Remove duplicate prop resources:** `Metaldetector_props`, `Metaldetector_props-main`, `sn_metaldetect_props` or `kb3_metaldetect_props`. Don't stream the same model twice.
5. Start `kb3_metaldetect`.

There are no new items or SQL migrations.

## To 1.2.0: loot editor

Replace the resource and merge your config, loot and bridge settings back in. The loot editor needs no new items or SQL. [Grant staff access](./loot-editor#grant-access).

## From 1.0.0

Replace the resource and reapply your config and bridge changes. Add `Config.Inventory = 'auto'` (or your backend) and `Config.InventoryImagePath = '../install/images/%s.webp'`. Install only your inventory's item definitions. Item names and loot values are unchanged.

## From the SNRP resource

Stop the old SNRP metal detecting resource before starting KB3. KB3 uses `kb3_` item names, so old `sn_` items need a deliberate server-side migration or must be kept by the old setup. Don't run both resources against the same items.
