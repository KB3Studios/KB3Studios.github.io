# Map & postals

## Minimap

Players choose in the [settings menu](./settings#map-streets):

- Shown **always**, **in vehicles only**, or **never**
- **Square** or **round**
- Size, position and zoom, with each shape keeping its own
- Status icons pinned beside the map
- **Status wrap**: statuses as thin bars around the map, each with its icon. It follows the circle on a round map or the edges on a square one. Players choose the coverage (right side, top and right, or all the way round), thickness, distance and icon size

### Round minimap fit

The map is drawn at its normal proportions and a circle is cut out of the middle, so it's cropped, never squeezed. If the circle doesn't line up with the status ring on your server:

1. Type `/hudmapfit 1.45` in game, or try any other number. Bigger numbers give a bigger circle.
2. When it looks right, save the value in `config.lua`:

```lua
Config.RoundMinimap = { maskScale = 1.37 }
```

The mask loads at runtime from `textures/circlemask.png`, so no streamed `.ytd` is needed. Blips clip correctly, but the GPS route line can still draw past the round edge. That's a game limitation.

::: info Safezone settings
The street label and pinned status icons are placed using the game's minimap anchor maths. If a player uses an unusual safezone setting, the **Label height** and **Move** sliders in the menu fix it.
:::

## Street names

Street names can be:

- **Their own panel.** It starts under the compass and follows it until the player drags it somewhere else in Layout mode.
- **Docked above the minimap**, with a direction badge.
- **Hidden.**

## Postals

The nearest postal code and the distance to it show next to the compass heading. They also show on the minimap street label when street names are docked there. Players can turn the postal or the distance off.

```lua
Config.Postals = {
    enabled  = true,
    resource = 'nearest-postal',
    interval = 1000, -- ms between lookups
}
```

Postal data is loaded from the first of these that exists:

1. `kb3_novahud/data/postals.json`. Drop in any postal map's JSON.
2. The running `nearest-postal` resource's postal file, read from its `postal_file` entry. If you already use nearest-postal, you don't need to do anything else.

The format is the standard nearest-postal one:

```json
[{ "code": "101", "x": 123.4, "y": -567.8 }]
```

The F8 console prints how many postals were loaded and where they came from. Other scripts can read the current postal with [`GetPostal()`](./developers#client-exports).
