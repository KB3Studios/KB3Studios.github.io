# Settings menu

Players open the menu with `/hud` or <kbd>I</kbd>. Every change saves automatically on the player's own PC. Every colour option has quick swatches, a full colour picker and a hex box for any `#RRGGBB`.

You can lock any tab so players can't change it. See [Server defaults & locked sections](./configuration#server-defaults).

## General

Theme presets, two accent colours, 12 built-in fonts plus custom ones, a separate font for numbers, panel opacity, numbers on icons, low-status reminders, cinematic mode, hunger and thirst alerts, and update rate (**Smooth**, **Balanced** or **Saver**).

::: tip Lower CPU use
**Saver** updates the HUD less often for lower CPU use.
:::

## Status

7 styles (Ring, Square, Hexagon, Octagon, Diamond, Bar, Minimal) in outline or liquid fill. Players also choose row, column or grid layout, size, spacing, thickness and glow. For each status, they can set ring and symbol colours, auto-hide above or below a value, and a warning pulse.

## Icon backgrounds

Paste an image link behind each status (or all of them at once), or pick a preset: Galaxy, Nebula, Aurora, Sunset, Ocean, Ember, Carbon, Gold or Matrix. There are sliders for opacity, blur and darkening, and GIFs animate.

::: info Tips for players
The link must point **directly at the image**, ending in `.png`, `.jpg`, `.gif` or `.webp`. On Imgur, right-click the image and choose *Copy image address*. Discord attachment links expire after a while, so Imgur or ImgBB work better. The menu test-loads the link and says whether it works.
:::

## Vehicle

Each vehicle class has its own speedometers, and a class can only use its own:

| Class | Speedometers |
| --- | --- |
| Car | GT gauge, Classic twin-dial, Race digital, Minimal |
| Motorcycle | Moto tach, Moto digital |
| Bicycle | Bike computer (speed, trip, max speed, heading) |
| Boat | Marine compass, Marine dial (knots, heading, throttle, anchor) |
| Helicopter / Plane | Flight decks with attitude indicator, heading tape, airspeed, altitude, vertical speed (plus landing gear on planes) |

Units (knots for boats and aircraft), gauge maximum, colours, which parts show, and [vehicle sounds](./vehicle#sounds) are all adjustable. See [Vehicle](./vehicle#warning-lights) for the warning lights.

## Map & streets {#map-streets}

Players choose whether the minimap shows always, only in vehicles, or never. They also set square or round, size, position and zoom (each shape keeps its own), whether status icons stay pinned beside the map, and the **status wrap**. Street names can be their own movable panel, docked above the minimap with a direction badge, or hidden. See [Map & postals](./map).

## Player info

5 styles (Pills, Card, Tiles, Bar, Minimal) with live previews. Players can toggle ID, clock, job, cash, bank, dirty money and society money, with optional labels. The clock can show in-game or real time, in 24h or 12h. There are colours for icons, text, cash and bank, panel colour, opacity and roundness, and a background image or preset.

## Compass

Tape or simple compass, street names, postal and distance, and colour.

## Weapon

Weapon picture, size, monochrome mode, name, ammo and colour.

## Layout

A drag-and-drop **edit mode** (scroll to resize), per-part and global scale, and **export / import** of a whole setup as text, so players can share their HUD with each other.
