# Getting started

All KB3 resources share the same basics. Read this page once, then go to the guide for the resource you bought.

<div class="kb3-cards">
  <a href="../admin-panel/"><strong>Admin Panel</strong><span>Staff tools, characters, garages, cases and economy watch.</span></a>
  <a href="../lean/"><strong>Lean System</strong><span>Mixing scene, cups, effects and EMS prescriptions.</span></a>
  <a href="../weapon-handling/"><strong>Weapon Handling</strong><span>Slings, carry movement, crouch and placement editor.</span></a>
  <a href="../metal-detecting/"><strong>Metal Detecting</strong><span>Beach detecting, digging, beach bags and a dealer.</span></a>
</div>

## Shared requirements

| Requirement | Admin Panel | Lean | Weapon Handling | Metal Detecting |
| --- | :---: | :---: | :---: | :---: |
| OneSync | ✅ | ✅ | ✅ | ✅ |
| [ox_lib](https://github.com/overextended/ox_lib) | ✅ | ✅ | ✅ | ✅ |
| [oxmysql](https://github.com/overextended/oxmysql) | ✅ | ✅ | — | — |
| Qbox / QBCore / ESX Legacy | ✅ | ✅ | ✅ | ✅ |
| SQL import | Automatic | `schema.sql` | None | ESX default inventory only |
| New inventory items | — | 24 | — | 35 |

## The golden rules

::: warning Keep the folder names
Every resource must keep its original folder name: `kb3_adminpanel`, `kb3_lean`, `kb3_weaponhandling` and `kb3_metaldetect`. Inventory item exports and other resources call these by name, and renaming the folder breaks them.
:::

1. **Start order matters.** Always `ensure` ox_lib, oxmysql, your framework and your inventory **before** any KB3 resource.
2. **Framework and inventory are auto-detected.** Every resource defaults to `auto`. If your server has more than one framework or inventory installed, set them explicitly in the config.
3. **Restart after dependency restarts.** If you restart your framework or inventory, restart the KB3 resource too.
4. **Keep your data when updating.** Each guide lists the files and folders to keep (configs, `data/`, JSON placement files, resource KVP).

## Example `server.cfg`

```cfg
# Core dependencies first
ensure ox_lib
ensure oxmysql
ensure qbx_core          # or qb-core / es_extended
ensure ox_inventory      # your inventory

# KB3 Studios
add_ace identifier.license:YOUR_LICENSE_HERE kb3.owner allow
add_ace resource.kb3_adminpanel command.profiler allow
add_ace group.admin kb3_lean.admin allow
add_ace group.admin kb3_weaponhandling.admin allow
add_ace group.admin kb3.metaldetect.loot allow

ensure kb3_adminpanel
ensure kb3_lean
ensure kb3_weaponhandling
ensure kb3_metaldetect
```

## ACE permissions at a glance

| Permission | Resource | Grants |
| --- | --- | --- |
| `kb3.owner` | Admin Panel | Root owner access |
| `kb3.admin` / `kb3.moderator` / `kb3.helper` | Admin Panel | Maps an existing server group to a panel group |
| `command.profiler` (on `resource.kb3_adminpanel`) | Admin Panel | In-panel server profiler captures |
| `kb3_lean.admin` | Lean | `/leanadmin`, `/leandiag`, `/leanaudit` |
| `kb3_weaponhandling.admin` | Weapon Handling | Shared default sling placements (`/slingadmin`) |
| `kb3.metaldetect.loot` | Metal Detecting | `/detectorloot` loot editor |

## Open Source edition

The Open Source editions ship fully readable. Every Lua, JS, HTML and CSS file can be edited. They are still tied to the purchasing Cfx.re account through Keymaster, so download the resource from the account that bought it on the [KB3 Studios store](https://kb3-studios.tebex.store/) and run it on a server key linked to that account.
