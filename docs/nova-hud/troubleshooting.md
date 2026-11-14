# Troubleshooting

## Grey or blurred screen

The HUD only touches the screen in two ways:

- The **stress blur** is always paired with a fade-out. It stops early if the player dies or opens a menu, and is wiped instantly when the resource stops or restarts.
- The **settings menu** darkens the screen only while it's open.

If a player gets a stuck grey or blurred screen, `/hudfix` clears it. Other scripts can call `exports.kb3_novahud:ClearScreenEffects()`. `/hudfix` also clears leftover blur, colour filters and screen fades from **other** scripts, so:

- **If it comes back while stress is high,** lower the blur in `Config.Stress.effects` (set `blur = 0` on a tier) or turn effects off.
- **If it comes back with low stress,** another resource is causing it. Stop resources one at a time to find it.

## Minimap is huge after loading in

Fixed in 1.0.1. The minimap is laid out once the player is actually in the world, and again on every spawn. Make sure you're on the latest version.

## Round map doesn't line up with the status ring

Use `/hudmapfit 1.45` (bigger number = bigger circle) to find the right value, then save it in `Config.RoundMinimap.maskScale`. See [Map & postals](./map#round-minimap-fit).

## Street label or pinned icons are in the wrong place

This is usually an unusual safezone setting. Use the **Label height** and **Move** sliders in the settings menu.

## No postal showing

Check F8 on start-up. It prints how many postals were loaded and from where. Either run `nearest-postal` or add `data/postals.json`. See [Postals](./map#postals).

## Seatbelt does nothing / two seatbelts

Check F8 on start-up to see which seatbelt the HUD chose. If your seatbelt script isn't detected, add its resource name to `Config.Seatbelt.otherScripts`, or set `enabled = false` and call `SetSeatbelt` from it.

## Turn signals fight with another script

Set `Config.Indicators.keys = false`. The HUD will still show signals from the other script.

## A warning light looks wrong

Run `/hudveh` and check the raw values in F8. Send them to support if the light still looks wrong.

## A custom background won't load

The link must go straight to the image file (`.png`, `.jpg`, `.gif` or `.webp`), must be `https://`, and the host must be allowed by `Config.Backgrounds.hostWhitelist` if you've set one.

## Stress items don't work

- The item must exist in your inventory's item list. See [Stress relief items](./stress#stress-relief-items).
- For inventories other than ox, QB or ESX, call `UseStressItem` from the item's use handler.

## Start fresh

Players can run `/resethud` to wipe their own saved settings back to the server defaults.
