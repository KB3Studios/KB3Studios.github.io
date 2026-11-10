# Troubleshooting

## "Lean system is not ready. Check the server console."

Run `leandiag` in the server console. Common causes:

- `schema.sql` wasn't imported, or oxmysql isn't connected.
- `kb3_lean` started before ox_lib, oxmysql, the framework or the inventory.
- A dependency was restarted. Restart `kb3_lean` after it.
- More than one framework or inventory is running. Set `Config.Framework` and `Config.Inventory` explicitly.

## Item use does nothing

- **ox_inventory:** make sure the item has `consume = 0` and the `export` points to `kb3_lean.…`. If you renamed the folder, rename it back to `kb3_lean`.
- **qb-inventory:** restart qb-core after merging the items.

## Item images are missing

- **ox:** PNGs belong directly in `ox_inventory/web/images/`.
- **qb:** WebPs belong in `qb-inventory/html/images/`, and `'html/images/*.webp'` must be in qb-inventory's `fxmanifest.lua`.

## Lean Studio settings don't save

The `data/` folder must exist and be writable by the server. It's always included since 0.9.0.

## Camera or UI stuck after mixing

Run `/leanreset`.

## "This transaction needs staff review"

The server couldn't confirm an inventory or payment result, so it quarantined the transaction instead of risking a duplicate. Check `/leanaudit` (cups) or `data/doctor-review.log` (doctor purchases), verify against your inventory and money logs, then compensate manually if needed.

## Effects are too strong or weak

Tune them live in [`/leanadmin`](./configuration#lean-studio). Players who prefer less distortion can use `/leanfx off`.
