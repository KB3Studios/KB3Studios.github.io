# Installation

## 1. Add the resource

Copy `kb3_metaldetect/` into your resources **with this exact folder name**.

## 2. Choose framework and inventory

In `shared/config.lua`:

```lua
Config.Framework = 'auto' -- auto, qbox, qbcore, esx, standalone, custom
Config.Inventory = 'auto' -- auto, ox_inventory, qb-inventory, qs-inventory, esx, custom
```

Both default to `auto`. If more than one supported inventory is running, choose explicitly.

## 3. Install items and images

Follow the [Inventory setup](./inventories) page for **your inventory only**. Stock ESX needs an SQL import. The other inventories use item definitions with no database changes.

## 4. Place the dealer

```lua
Config.Pawn = { coords = vec4(x, y, z, heading), model = 'a_m_m_business_01', radius = 3.0 }
```

::: warning The dealer is off by default
`coords = nil` deliberately disables the dealer and shop until you choose a location.
:::

## 5. Review prices

- Equipment purchase prices: `Config.Equipment` (detector $5,000, trowel $100)
- Rewards, sale prices and weights: `shared/loot.lua`. See [Loot & prices](./loot)

## 6. server.cfg

::: code-group

```cfg [Qbox + ox_inventory]
ensure ox_lib
ensure qbx_core
ensure ox_inventory
ensure kb3_metaldetect
add_ace group.admin kb3.metaldetect.loot allow
```

```cfg [QBCore + qb-inventory]
ensure ox_lib
ensure qb-core
ensure qb-inventory
ensure kb3_metaldetect
add_ace group.admin kb3.metaldetect.loot allow
```

```cfg [ESX default]
ensure ox_lib
ensure es_extended
ensure esx_inventory
ensure kb3_metaldetect
add_ace group.admin kb3.metaldetect.loot allow
```

:::

The `kb3.metaldetect.loot` ACE grants the [loot editor](./loot-editor). On ESX, keep your existing dependency order and use your inventory UI resource's real name. Quasar setups start `qs-inventory` after the framework.

Restart the framework and inventory when their item definitions change. Restart this resource when its config changes.
