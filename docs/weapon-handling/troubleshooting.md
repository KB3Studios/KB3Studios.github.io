# Troubleshooting

## UI or camera is stuck

Run `/kb3uiclose`. A render error or a missing web asset closes the editor automatically, so keep the complete `web/` folder and manifest together.

## Stuck crouching

Run `/kb3standup`. If another movement script keeps reapplying crouch, disable that script's crouch feature.

## Can't open the editor

- Stand still, on foot.
- On QB or ESX, holster your weapon first.

## Saved placements don't persist

- Make sure the resource folder is writable.
- Check `player_placements.json` is valid JSON. Invalid personal JSON is locked instead of overwritten, and the server console says so.

## No slings showing

- Run `/slingdebug` and check F8.
- Check the weapon's group is in `Config.Sling.groups` and it isn't set to `false` in `Config.Sling.weapons`.
- For misclassified add-ons, set a `category` and `hash` override.
- If you use a custom inventory, both `Bridge.customItems` functions must be implemented.

## "Start your framework first, then set Config.Framework"

Start the framework before this resource, or set `Config.Framework` explicitly. Qbox needs ox_inventory or a custom adapter.

## After restarting a framework or inventory

Restart `kb3_weaponhandling` too.

## Acceptance checklist

Run this on the exact framework, inventory and versions you plan to use:

1. Fresh start, character select, login and logout: no menu or cursor opens on its own. Restart the resource while idle and with the editor open.
2. Open and close `/slingmenu` with an empty inventory. Both switches save, and relogging restores them. Another character has its own choices.
3. Carry two long guns, a bat, a knife and a crowbar. Long guns suppress the bat, and hip props stay. Equip, holster, drop, give, die and enter a vehicle. Check your view and a second player's.
4. Save front and back positions with rotations like 116°, 145° and 145.5°. Verify the fit after rejoining and from another player's view.
5. Crouch, draw, holster, open the inventory, cancel crouch quickly, disable Crouch, and try `/kb3standup`.
6. Test at 1280×720, 1920×1080 and ultrawide.
7. Try saving an unowned weapon, an out-of-range position, and shared defaults without the ACE. Each must be rejected.
8. If you use the draw integration, check timing and ammo with it enabled, disabled and with KB3 stopped.
9. Compare `resmon` with your normal player and weapon-pack load.
