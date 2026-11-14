# Vehicle

## Warning lights

The car and motorcycle dials have a full speed scale, a tach with redline, a fuel gauge, an engine temperature gauge, a trip meter and these lights:

| Light | Behaviour |
| --- | --- |
| Turn signals | Blink green |
| Hazards | Both arrows blink |
| Engine | Green when running, red when off |
| Maintenance (wrench) | Amber when the body or engine is damaged, flashing red when badly damaged |
| Seatbelt | Green when buckled, flashing red when moving unbuckled |
| Headlights | Green for low beam, blue for high beam |
| Parking brake | Red when on |
| Door open | Amber |

If a light looks wrong, `/hudveh` prints the raw vehicle values to F8.

## Seatbelt

```lua
Config.Seatbelt = {
    enabled      = 'auto', -- 'auto' | true | false
    otherScripts = { 'qb-smallresources', 'qbx_smallresources', 'qbx_seatbelt', 'seatbelt', 'jg-seatbelt', 'ps-seatbelt' },
    key          = 'B',
    eject        = true,   -- fly through the windscreen when crashing unbelted
    unit         = 'mph',  -- 'mph' | 'kmh' for ejectSpeed
    ejectSpeed   = 45,     -- minimum speed before the crash
    ejectDecel   = 0.55,   -- speed must suddenly drop below 55% of what it was
}
```

| `enabled` | Behaviour |
| --- | --- |
| `'auto'` | Built-in seatbelt, unless a script in `otherScripts` is running. In that case the HUD shows that script's state |
| `true` | Always use the built-in seatbelt |
| `false` | Never. The HUD only shows the state from another script |

When the HUD follows another script, it listens for the `seatbelt:client:ToggleSeatbelt` event, the `seatbelt` state bag and the `SetSeatbelt` [export](./developers#client-exports).

### Ejection

Players are only thrown through the windscreen when **all** of these are true:

- They're unbuckled.
- They were going at least `ejectSpeed` (45 mph by default).
- The car suddenly lost more than 45% of its speed in a collision (`ejectDecel = 0.55`).

Normal braking never ejects.

## Turn signals & hazards

```lua
Config.Indicators = {
    keys    = true,   -- false if another script handles indicators
    left    = 'LEFT',
    right   = 'RIGHT',
    hazards = 'BACK', -- backspace
}
```

The driver toggles them with the arrow keys and Backspace, and everyone nearby sees the lights flash. If another script already handles indicators, set `keys = false`. The HUD still shows signals turned on by any script, and still plays the blinker sound.

## Sounds

```lua
Config.Sounds = {
    -- Repeats while a door / hood / trunk is open, or while driving unbuckled
    chime     = { file = 'chime.wav', start = 0.0, length = 0, gap = 0 },
    -- Seatbelt chime: cars only, engine running, unbuckled, at least this fast
    beltChime = { enabled = true, minSpeed = 10, unit = 'mph' },
    -- Turn signal tick-tock. interval = seconds between tick and tock
    blinker   = { on = 'blinker_on.wav', off = 'blinker_off.wav', interval = 0.38 },
}
```

| Chime option | Meaning |
| --- | --- |
| `start` | Seconds into the file to start from |
| `length` | Seconds to play (`0` = to the end) |
| `gap` | Pause before it repeats (`0` = seamless loop, best for `chime.wav`) |

Sound files live in `html/sounds/`. Replace `chime.wav`, `blinker_on.wav`, `blinker_off.wav` or `stomach.mp3` (hunger and thirst alerts) with your own files, or point `Config.Sounds` at different names. `.wav`, `.mp3` and `.ogg` all work, and `.wav` loops without a gap.

Players can turn each sound on or off, set its volume and test it under **Vehicle → Sounds** in the settings menu.
