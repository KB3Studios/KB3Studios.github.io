# Placement editor

Open with `/slingmenu` while standing still on foot.

::: tip QB / ESX inventories
Holster your selected weapon before opening the editor. On ox_inventory the weapon is holstered automatically.
:::

## Personal placements

1. Pick a weapon you own from the list.
2. Choose the side: **front** or **back** for long guns, **hip** for knives and crowbars, **back** for bats.
3. Adjust position and rotation. Rotations accept decimal degrees, such as 145.5°.
4. Use the camera controls in the panel:
   - **Full stance** gives a wide view of the whole character.
   - **Weapon focus** follows the selected model.
   - Orbit and zoom update smoothly.
5. Click **Save** to commit the current weapon. <kbd>Esc</kbd> or **Close** discards unsaved changes.

### Limits

- Personal positions can move up to `Config.PlayerEditor.maxOffset` (0.35 m) from the default.
- The bone is locked to the default.
- Rotations are limited to ±360°.
- The server checks your identity and that you own the weapon on every save.
- Resetting one weapon keeps your movement switches.

## Movement switches

The **Crouch** and **Gun run** switches in the editor save on their own and work without a weapon. Disabling Crouch stands you up.

## Shared defaults (admins)

```text
/slingadmin WEAPON_CARBINERIFLE front
```

This sets the server-wide default for that weapon and side, saved to `placements.json`. It requires the `kb3_weaponhandling.admin` ACE. Players' personal placements are offset from these defaults.

::: info Custom models
Add-on weapon models with unusual origins, or bulky clothing, may need manual fitting. Set a good shared default first, then let players fine-tune.
:::
