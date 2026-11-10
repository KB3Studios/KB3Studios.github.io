# Troubleshooting

## No dealer or buy/sell menu

Set `Config.Pawn.coords` to a `vec4`, because `nil` disables the dealer. Check the ped model exists, the resource started after its dependencies, and you're close enough on foot.

## Missing items or images

- Install all 35 entries using the snippet for **your** inventory. See [Inventory setup](./inventories).
- Copy the right icon set (WebP or PNG) to your inventory's image folder.
- **ox_inventory:** keep the exports pointing to `kb3_metaldetect` and `consume = 0` on the detector and bags.
- **QB / QS / ESX:** don't add a second use handler or automatic consumption.
- Restart the inventory or framework after installing items.

The bag and dealer UI use the bundled icons regardless of inventory.

## Wrong inventory detected or a missing export

Set `Config.Framework` and `Config.Inventory` explicitly. Start dependencies first. The QB adapter needs current qb-inventory APIs and QBCore, and QS needs its framework integration working. Don't rename an unsupported inventory to pretend it's a supported one. Use the [custom adapter](./developers#custom-inventory).

## No signal, or can't dig

- Be alive, on foot and inside a configured beach.
- Carry both a detector and a trowel.
- Signals expire (`SignalLifetime`) and finds have a cooldown (`FindCooldown`).
- OneSync is required, and the default logic uses routing bucket 0.
- Make room in your inventory before digging or opening bags.

## Menu or cursor stuck

Run `/detectorreset`. If a menu can't render, focus is released after a timeout. Check F8 for NUI asset errors and restart the resource after restoring its files.

## The reward was already in my inventory after closing a bag

This is expected. The server awards the find before the reveal finishes, so closing, resetting or disconnecting never rerolls it.

## A trade needs staff review

Uncertain trades are held in the `kb3_pawn_pending_v1` resource KVP. Don't delete it. Check payment and inventory logs, then use [`kb3metalresolve`](./commands#resolving-held-trades).

## The detector model looks wrong or duplicated

Remove any old standalone detector prop resources. The model is streamed by `kb3_metaldetect` itself.
