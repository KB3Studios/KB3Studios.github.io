# Changelog

## 1.0.0 <Badge type="tip" text="Latest" />

First public release, renamed from KB3 Control.

### Compatibility
- Framework layer for **Qbox, QBCore and ESX Legacy**: characters, jobs, gangs, money, needs and live character edits. ESX `users` / `owned_vehicles` supported, including multicharacter.
- Inventory adapters: ox_inventory, qs-inventory, ps-inventory, qb-inventory, codem-inventory, tgiann-inventory and the ESX default inventory.
- Vehicle key adapters: qbx_vehiclekeys, MrNewbVehicleKeys, wasabi_carlock, qs-vehiclekeys, qb-vehiclekeys, cd_garage, okokGarage, Jaksam vehicles_keys, t1ger_keys and mk_vehiclekeys.
- Medical adapters: qbx_medical, wasabi_ambulance (v1 and v2), qb-ambulancejob, esx_ambulancejob and p_ambulancejob.
- Garage support for qbx_garages, jg-advancedgarages and any script using `player_vehicles` or `owned_vehicles`, with automatic column detection.
- Fuel adapters: ox_fuel, LegacyFuel, cdn-fuel, ps-fuel, lj-fuel, qs-fuelstations, okokGasStation, hyon_gas_station and qb-fuel.
- `ServerConfig.Framework` / `ServerConfig.Providers` overrides, plus new `heal`, `addItem` and `inspectInventory` hooks.

### Economy watch
- Anti-dupe and anti-exploit alerts: repeated payouts, money without a money event, large and rapid gains, abnormal balances, invalid amounts and watched-item spikes.
- Admin-spawned money is logged with the staff member's name.
- High-severity alerts pop up for on-duty staff, with review states and notes.

### Live map
- Real-time positions with search, follow, popover actions, right-click teleport or waypoint, and bucket filter.
- Bundled satellite map with 2-click in-game calibration.
- New permission `players.map`.

### Ped changer
- Categorised picker, typed models and one-click character restore.
- New permissions `self.ped` and `players.ped`.

### Entity inspector
- Press Delete twice to delete the aimed entity. Map props are removed for everyone until restart.

### Panel
- Player profiles, character system, in-game users and groups, garages, visual keybind editor, private live view with quality presets, prop removal, owner self-grants, case retention, live item search and spawn-replaces-current-vehicle.
