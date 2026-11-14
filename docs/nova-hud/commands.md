# Commands & controls

## Players

| Command / key | Action |
| --- | --- |
| `/hud` or <kbd>I</kbd> | Open the [settings menu](./settings) |
| `/togglehud` | Hide or show the HUD |
| `/resethud` | Reset your own settings to the server defaults |
| `/hudfix` | Clear a stuck grey or blurred screen |
| `/stress` | Show your current stress |
| `/hudveh` | Print raw vehicle values to F8 (useful if a warning light looks wrong) |
| <kbd>B</kbd> | Seatbelt (built-in seatbelt only) |
| <kbd>←</kbd> / <kbd>→</kbd> | Left / right turn signal (driver) |
| <kbd>Backspace</kbd> | Hazard lights (driver) |
| <kbd>X</kbd> | Cancel a stress relief item |

Keys can be rebound in GTA **Settings → Key Bindings → FiveM**. Settings save automatically for each player on their own PC.

## Admin and setup

| Command | Action |
| --- | --- |
| `/setstress [id] [0-100]` | Set a player's stress. Needs `add_ace group.admin command.setstress allow`. Also works from the server console |
| `/hudmapfit <number>` | Tune the round minimap fit live, e.g. `/hudmapfit 1.45`. Not saved, so copy the value into `Config.RoundMinimap.maskScale` |

Command names can be changed in `Config.Commands`. See [Configuration](./configuration#commands-and-keys).
