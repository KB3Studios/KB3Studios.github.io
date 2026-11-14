# Changelog

## 1.0.4 <Badge type="tip" text="Latest" />

- **Street names are now their own movable panel.** Drag or resize them in Layout mode, for example above the compass. Until a player moves them, they sit under the compass and follow it. They also stay visible with the compass turned off.
- Edit mode now starts dragging a panel from where it actually is on screen, so auto-placed panels no longer jump when first grabbed.

## 1.0.3

- **Sounds:** new recorded blinker tick-tock for turn signals and hazards. The arrows flash in step with it (0.38 s).
- **Sounds:** new recorded chime that loops seamlessly. It plays while a door is open and, new in this version, while driving a car unbuckled (`Config.Sounds.beltChime`, plus a *Seatbelt chime* toggle in *Vehicle → Sounds*).

## 1.0.2

- **Round minimap:** the map circle now fills the status ring, and it's bigger (0.20 of screen height at 100%, up from 0.18).
- **New:** `/hudmapfit <number>` to tune the round map fit live.

## 1.0.1

- **Fixed:** the minimap could load in huge until `/hud` was opened.
- **Round minimap:** the map keeps its normal proportions and is cropped to a circle instead of squeezed.
- **New:** hazard light on car and motorcycle speedometers.
- **New:** blinker tick-tock sound for turn signals and hazards.
- **New:** a door chime that repeats while a door, hood or trunk is open.
- **New:** volume and on/off for the door chime and blinker under *Vehicle → Sounds*, with test buttons.
- **New:** built-in driver keys for turn signals (← / →) and hazards (Backspace), synced to nearby players.

## 1.0.0

First release, with status icons and backgrounds, the status wrap, 11 speedometers, warning lights, square and round minimap, streets and postals, player info, the weapon panel, the stress system, hunger and thirst alerts, custom fonts, the layout editor, server defaults and locks, and Qbox, QBCore, ESX and standalone support.
