# Nova HUD <Badge type="tip" text="v1.0.4" />

A fully customisable FiveM HUD: status icons with per-icon custom backgrounds, 11 class-specific speedometers, a compass with postals, player info, weapon and ammo, a drag-and-drop layout editor and a complete stress system. Every player styles their own HUD from an in-game settings menu.

Works with **Qbox, QBCore, ESX or standalone** (auto-detected).

## Features

- **Status icons.** 7 shapes (Ring, Square, Hexagon, Octagon, Diamond, Bar, Minimal) in outline or liquid fill, laid out as a row, column or grid. Each status has its own colours, auto-hide and warning pulse.
- **Custom icon backgrounds.** Players paste an image link (GIFs animate) or pick a preset such as Galaxy, Nebula, Aurora, Sunset, Ocean, Ember, Carbon, Gold or Matrix.
- **11 speedometers, locked to their vehicle class:**
  - **Car:** GT gauge, Classic twin-dial, Race digital, Minimal
  - **Motorcycle:** Moto tach, Moto digital
  - **Bicycle:** Bike computer
  - **Boat:** Marine compass, Marine dial
  - **Helicopter and plane:** flight decks with an attitude indicator
- **Warning lights:** turn signals, hazards, engine, maintenance, seatbelt, headlights (low and high beam), parking brake and door open.
- **Minimap.** Square or round, with its own size, position and zoom for each shape. A **status wrap** can put statuses around the map as thin bars.
- **Compass, street names and postals.** The nearest postal code and distance are shown, using data from `nearest-postal` or your own JSON file.
- **Player info.** 5 styles showing ID, clock, job, cash, bank, dirty money and society money.
- **Weapon panel.** Base-game images load automatically, and you can add images for add-on weapons.
- **Layout editor.** Drag and drop to move parts, scroll to resize, and export or import a setup as text.
- **Stress system.** Stress builds from shooting, speeding and damage, and drops through activity. It brings shake, blur, stumbles and shaky-hand recoil, plus relief items with animations.
- **Built-in seatbelt** with windscreen ejection. If another seatbelt script is running, the HUD shows that script's state instead.
- **Turn signals and hazards** on the arrow keys and Backspace, synced to nearby players, with blinker and door chime sounds.
- **Hunger and thirst alerts** with a pop-up and a stomach-growl sound.
- **Fonts:** 12 built in, plus any Google Font name, a link to a font file, or your own brand fonts.
- **Server control.** Set defaults for new players and lock whole sections of the settings menu.
- **qb-hud compatible.** It uses the same `hud:server:GainStress` and `hud:server:RelieveStress` events, so existing consumables keep working.

## Requirements

| Requirement | Notes |
| --- | --- |
| Framework | Qbox, QBCore, ESX or standalone (auto-detected) |
| Voice | Optional: `pma-voice` for range, talking and radio indicators |
| Fuel | Optional: auto-detects `ox_fuel`, `LegacyFuel`, `cdn-fuel`, `ps-fuel` and `lj-fuel`, otherwise uses GTA's native fuel |
| Postals | Optional: the `nearest-postal` resource, or a `data/postals.json` file |

There's no SQL and nothing new to add to your inventory, apart from the optional [stress relief items](./stress#stress-relief-items).

## Next steps

1. [Install the resource](./installation)
2. [Set server defaults](./configuration#server-defaults)
3. [Tune the stress system](./stress)
