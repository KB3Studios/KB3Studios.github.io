# Installation

## 1. Add the resource

Put the `kb3_lean` folder in your resources.

::: warning Keep the folder name
The folder must be named `kb3_lean`. Item `export` fields (like `kb3_lean.openMixer`) depend on it.
:::

## 2. Import the database

Run `install/schema.sql` on your database. It creates three tables:

| Table | Stores |
| --- | --- |
| `kb3_lean_cups` | Every cup, its sips, state and world placement |
| `kb3_lean_effects` | Each character's current effect state |
| `kb3_lean_prescriptions` | The prescription registry |

## 3. Add the items

::: code-group

```text [ox_inventory]
1. Merge the entries from install/items_ox.lua into the existing
   return { ... } table in ox_inventory/data/items.lua.
   Don't paste a second return block.
2. Copy install/images/*.png into ox_inventory/web/images/
   (directly, no subfolder). If you customised inventory:imagepath,
   copy them there instead.
```

```text [qb-inventory]
1. Merge the entries from install/items_qb.lua into
   qb-core/shared/items.lua. Don't replace the full file.
2. Copy install/images/*.webp into qb-inventory/html/images/
3. Add 'html/images/*.webp' to the files list in
   qb-inventory's fxmanifest.lua.
```

:::

See [Items](./items) for the full list.

## 4. server.cfg

Start it **after** ox_lib, oxmysql, your framework and inventory (and your target resource, if you use one):

```cfg
ensure ox_lib
ensure oxmysql
ensure qbx_core          # or qb-core / es_extended
ensure ox_inventory      # or qb-inventory
ensure ox_target         # optional

add_ace group.admin kb3_lean.admin allow
ensure kb3_lean
```

The `kb3_lean.admin` ACE grants `/leanadmin`, `/leandiag` and `/leanaudit`.

## 5. Check it's running

Run `/leandiag` in game (as an admin) or `leandiag` in the server console. You should see `ready=true` along with your detected framework and inventory.

## 6. Set the doctor location

The back-alley doctor spawns at Pillbox by default. Move it with `Config.Doctor.coords` in `config.lua`, or disable it with `enabled = false`.
