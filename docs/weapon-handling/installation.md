# Installation

## 1. Add the resource

Place `kb3_weaponhandling` in your resources folder and **keep that folder name**.

::: warning Writable folder
The resource folder must be writable by the server. Placements are saved to `placements.json` and `player_placements.json` inside it.
:::

## 2. Choose your framework and inventory

In `config.lua`:

```lua
Config.Framework = 'auto' -- auto | qbox | qb | esx
Config.Inventory = 'auto' -- auto | ox | qb | esx | custom
```

`auto` picks Qbox, then QBCore, then ESX. Inventory picks ox_inventory first, otherwise QB or ESX to match the framework. Set them explicitly if multiple cores are installed.

## 3. Configure for your server

Set your police job names, duty rule, weapon exclusions, default offsets and movement options. See [Configuration](./configuration). The defaults only cover stock weapons, so add unusual add-on groups or hashes yourself.

## 4. server.cfg

Start it after ox_lib, your framework, your inventory and any weapon packs:

```cfg
ensure ox_lib
ensure qbx_core
ensure ox_inventory
# ensure your custom weapon packs here
ensure kb3_weaponhandling

add_ace group.admin kb3_weaponhandling.admin allow
```

The ACE line grants access to shared default placements (`/slingadmin`).

::: tip QB / ESX
Start your existing working inventory setup in its usual order before this resource. This script doesn't install ox_inventory into another framework for you.
:::

## 5. Remove conflicts

Disable other resources that enforce crouch or replace the same movement sets.

## 6. Test

Test with an ordinary character **and** an administrator on your development server before enabling it for everyone. A full checklist is in [Troubleshooting](./troubleshooting#acceptance-checklist).

## Optional: draw animations

Pistol draw and holster timing needs a small hook in your inventory. See [Draw integration](./draw-integration). Slings, crouch, movement and the editor all work without it.
