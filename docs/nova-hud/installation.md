# Installation

## 1. Add the resource

Drop the `kb3_novahud` folder into your `resources`.

## 2. server.cfg

Start it **after** your framework, and after `pma-voice` and your fuel script:

```cfg
ensure qbx_core          # or qb-core / es_extended
ensure pma-voice
ensure ox_fuel           # or your fuel script
ensure kb3_novahud

# Optional: lets admins use /setstress
add_ace group.admin command.setstress allow
```

## 3. Remove your old HUD

Stop or remove any other HUD, such as `qb-hud` or `esx_hud`. Nova HUD registers the same `hud:server:GainStress` and `hud:server:RelieveStress` events, so your existing consumables keep working.

## 4. Seatbelt

The seatbelt is set to `'auto'`:

- If another seatbelt script is running (qb-smallresources, qbx_smallresources, qbx_seatbelt and others), the HUD **shows that script's state** and doesn't add its own.
- If none is running, it uses the **built-in seatbelt** on <kbd>B</kbd>.

The F8 console says which one it picked when the resource starts. See [Vehicle](./vehicle#seatbelt) to change this.

## 5. Optional extras

| Extra | How |
| --- | --- |
| Your logo in the settings menu | Put `logo.png`, `logo.webp` or `logo.svg` in `html/brand/`. A transparent image around 512 px wide works best |
| Postals | Run `nearest-postal`, or drop a `postals.json` into `data/`. See [Map & postals](./map#postals) |
| Add-on weapon images | Drop `WEAPON_NAME.png` into `html/weapons/`. See [Weapons](./weapons) |
| Brand fonts | Put font files in `html/fonts/` and list them in `Config.Fonts` |
| Stress relief items | Add `joint`, `cigarette` and `beer` to your inventory. See [Stress](./stress#stress-relief-items) |

## 6. Test

Join and press <kbd>I</kbd> (or type `/hud`) to open the settings menu.

::: tip Preview without a server
Open `html/index.html` in Chrome to preview the UI. Add `?menu=1` to the end of the address to open the settings straight away.
:::
