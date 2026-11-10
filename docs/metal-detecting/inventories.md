# Inventory setup

Choose one backend in `Config.Inventory`: `auto`, `ox_inventory`, `qb-inventory`, `qs-inventory`, `esx` or `custom`. It's independent of `Config.Framework`.

`auto` picks the one supported inventory that's started. If none is found, it falls back to ESX default only when es_extended is running. It refuses to guess when several are running.

::: warning Install only one
Each adapter has its own install snippet. Install **only** the one for your inventory.
:::

## Items and icons

::: code-group

```text [ox_inventory]
Items: merge the entries from install/ox_items.lua inside the existing
       return { ... } in ox_inventory/data/items.lua
Icons: copy install/images/*.webp to ox_inventory/web/images/
```

```text [qb-inventory]
Items: merge the entries from install/qb_items.lua inside QBShared.Items
       in qb-core/shared/items.lua
Icons: copy install/images/*.webp to qb-inventory/html/images/
```

```text [qs-inventory]
Items: merge install/qs_items.lua into the item registry for your setup:
       QBCore -> qb-core/shared/items.lua
       ESX/Qbox -> qs-inventory/shared/items.lua
Icons: copy install/images_png/*.png to your QS images folder
       (current builds: qs-inventory/web/dist/images/,
        older builds: html/images/)
```

```text [ESX default]
Items: import install/esx_items.sql into your ESX database, then restart ESX.
       (Don't import this if ESX uses ox_inventory or QS.)
Icons: copy install/images_png/*.png to your inventory UI's image folder
       (current esx_inventory: esx_inventory/web/images/)
```

:::

The Lua install files include a `return { ... }` wrapper for reference only. Copy the entries **inside** it into your existing table. Don't paste a second `return` or replace unrelated items.

All templates contain **35 items**. Six are usable: the detector and the five bags. The trowel is a required tool, not a usable item.

## Use registration

| Inventory | How items are used |
| --- | --- |
| ox_inventory | Client exports `kb3_metaldetect.useDetector` and `kb3_metaldetect.openBag`. **Keep `consume = 0`** on these entries |
| QB / QS / ESX | Native server-side usable item registration, done for you |

The script checks ownership and the slot on the server and removes one bag only when it awards the prize.

::: danger Don't double-register
Don't add a second handler that consumes these items, or give them generic food or drink behaviour.
:::

## Weights

ox, QB and QS templates use grams. The ESX SQL rounds those up to whole kilograms (minimum 1). Adjust the SQL to your server's weight scale before importing if it's different. `INSERT IGNORE` keeps any existing item definitions.

## Bag and dealer UI icons

The script's own bag and dealer UI uses the bundled WebP icons through `Config.InventoryImagePath = '../install/images/%s.webp'`. They work regardless of your inventory's image folder.

## Switching inventories on a live server

Stop `kb3_metaldetect`, back up the inventory database and follow your inventory vendor's migration steps. This script doesn't move player inventories between products. Install the matching 35 item definitions, select the new backend and restart. Keep the resource name and its trade KVP data.
