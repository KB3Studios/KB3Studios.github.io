# Compatibility

KB3 Admin Panel detects your scripts by resource name when it starts, and again if a resource starts later. The **Server health → Integrations** card shows what was detected, so check it after installing.

Detection runs in the order listed below. If you run two scripts of the same kind, the first match wins. You can [force a choice](#forcing-a-choice).

::: info About testing
Each adapter uses the API published in that script's documentation and was tested against simulated APIs. Paid scripts sometimes change their exports between versions. If an action fails with your version, use a [hook](./hooks) and tell us the version so we can update the adapter.
:::

## Frameworks

| Framework | Resource | Characters | Jobs | Gangs | Money |
| --- | --- | --- | --- | --- | --- |
| Qbox | `qbx_core` | ✅ `players` table | ✅ | ✅ | ✅ cash / bank / crypto |
| QBCore | `qb-core` | ✅ `players` table | ✅ | ✅ | ✅ cash / bank / crypto |
| ESX Legacy | `es_extended` | ✅ `users` table (multicharacter `charN:` supported) | ✅ | — (gang tools hidden) | ✅ money → cash, bank, black_money → crypto |

- Live characters are always changed through the framework, so its own save never overwrites a staff edit. Offline edits use SQL.
- On ESX, the "stress" quick action reports that ESX has no stress value, and "feed" uses `esx_status`.
- Banking scripts such as Renewed-Banking, okokBanking, qb-banking and pefcl store personal accounts in the framework's `bank` account, so money edits show up there automatically.

## Inventories

| Inventory | Item list & images | Give / grant | Capacity check | Inspect a player |
| --- | :---: | :---: | :---: | --- |
| ox_inventory | ✅ | ✅ | ✅ | ✅ `InspectInventory` |
| qs-inventory | ✅ | ✅ | ✅ | Hook |
| ps-inventory | ✅ | ✅ | ✅ | Hook |
| qb-inventory | ✅ | ✅ | ✅ | ✅ `OpenInventoryById` |
| codem-inventory | ✅ | ✅ | AddItem decides | Hook |
| tgiann-inventory | ✅ | ✅ | AddItem decides | Hook |
| ESX default | ✅ | ✅ | ✅ | Hook |

Item images are read from each inventory's image folder. To use a different folder, set `Catalog.imageBase` in `config/features.lua`.

## Garages

| Garage | How KB3 talks to it | Garage list |
| --- | --- | --- |
| qbx_garages + qbx_vehicles | Exports | From the script |
| jg-advancedgarages | Vehicle table + `deleteOutsideVehicle` | From the script |
| cd_garage, okokGarage, qs-advancedgarages, codem-garage, loaf_garage, rcore_garage, qb-garages, esx_garage | Framework vehicle table | Your config list, else names found in the database |
| Anything else | `player_vehicles` or `owned_vehicles` | Your config list, else names found in the database |

KB3 reads the vehicle table's columns and adapts:

- **Garage column:** `garage_id`, `garage` or `parking`
- **Stored flag:** `in_garage`, `stored` or `state`
- **Impound:** `impound`, `pound` or `depotprice`
- **Vehicle:** a spawn name, or ESX JSON props whose hash is matched to your vehicle list

Removing a vehicle despawns every world copy first, including cars stuck as "out". Players inside are only ejected when staff tick **Eject anyone inside**.

## Vehicle keys

| Script | Method |
| --- | --- |
| qbx_vehiclekeys | `GiveKeys(source, vehicle)` (server) |
| MrNewbVehicleKeys | `GiveKeys(source, netId)` (server) |
| wasabi_carlock | `GiveKeys(source, plate, model)` (server) |
| qs-vehiclekeys | `GiveServerKeys(source, plate, model)` (server) |
| qb-vehiclekeys | `vehiclekeys:client:SetOwner` (client) |
| cd_garage keys | `cd_garage:AddKeys` (client) |
| okokGarage keys | `okokGarage:GiveKeys` |
| Jaksam vehicles_keys | `vehicles_keys:selfGiveVehicleKeys` |
| t1ger_keys | `t1ger_keys:updateOwnedKeys` |
| mk_vehiclekeys | `AddKey(vehicle)` (client) |

Client-only APIs are triggered on the player's own client by a server-verified event, so other players can't forge them.

## Medical

| Script | Revive | Heal |
| --- | --- | --- |
| qbx_medical | `Revive` export | `Heal` export |
| wasabi_ambulance_v2 | `RevivePlayer` export | `ApplyHeal` export |
| wasabi_ambulance | `RevivePlayer` export | Built-in heal |
| qb-ambulancejob | `hospital:client:Revive` | Built-in heal + `HealInjuries` |
| esx_ambulancejob | `esx_ambulancejob:revive` | Built-in heal |
| p_ambulancejob | `p_ambulancejob/client/death/revive` | Built-in heal |

"Built-in heal" restores full health and clears blood on the player's client.

## Police (restraint release)

| Script | Supported |
| --- | --- |
| qbx_police, qb-policejob | ✅ uncuff + de-escort |
| esx_policejob | ✅ `esx_policejob:unrestrain` |
| wasabi_police and others | [Hook](./hooks) (`releaseRestraints`) |

## Fuel

Fuel is detected on each player's client and used by **Refuel** and when vehicles are spawned.

| Script | Method |
| --- | --- |
| ox_fuel | `fuel` state bag |
| LegacyFuel, cdn-fuel, ps-fuel, lj-fuel, qs-fuelstations, okokGasStation, hyon_gas_station, qb-fuel | `SetFuel(vehicle, level)` export |
| None | GTA native fuel |

To force one, set `Config.Fuel` in `config/shared.lua`.

## Economy ledger

| Source | Captured automatically |
| --- | --- |
| Qbox / QBCore cash and bank | ✅ `QBCore:Server:OnMoneyChange` |
| ESX money and bank | ✅ ESX Legacy account events, where your version emits them |
| Society accounts, direct SQL changes | Use the [`RecordTransaction`](./exports#recordtransaction) export |

## Forcing a choice

In `config/server.lua`:

```lua
Framework = 'auto', -- 'qbx' | 'qb' | 'esx'
Providers = {
    inventory = 'auto', -- e.g. 'qs-inventory'
    keys = 'auto',      -- e.g. 'wasabi_carlock', or 'none'
    medical = 'auto',   -- e.g. 'wasabi_ambulance_v2', or 'none'
},
```

Garages and police are set in `config/features.lua` with `Garage.system` and `Restraints.system`.

## Open adapter files

Adapter files stay readable, including in the escrow build:

| File | Contains |
| --- | --- |
| `server/framework.lua` | Qbox / QBCore / ESX player, job, gang and money layer |
| `server/compat.lua` | Inventory, keys and medical adapters |
| `server/bridge.lua` | Player summary and the Integrations card |
| `client/compat.lua` | Fuel, client-side keys, heal, item images, login/logout events |
