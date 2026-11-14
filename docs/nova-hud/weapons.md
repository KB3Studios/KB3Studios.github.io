# Weapons

## Weapon images

Base-game weapons show their picture automatically.

```lua
Config.WeaponImages = {
    enabled = true,
    source  = 'auto',
    pattern = 'https://docs-backend.fivem.net/weapons/%s.png', -- %s = WEAPON_NAME, %l = weapon_name
    addons  = {},
}
```

| `source` | Images from |
| --- | --- |
| `'auto'` | ox_inventory or qb-inventory images if running, otherwise the FiveM docs images |
| `'cfx'` | `https://docs-backend.fivem.net/weapons/WEAPON_NAME.png` |
| `'ox_inventory'` | `nui://ox_inventory/web/images/WEAPON_NAME.png` |
| `'qb-inventory'` | `nui://qb-inventory/html/images/weapon_name.png` |
| `'custom'` | Your `pattern` |

If an image can't load, the HUD falls back to the FiveM docs image, then to a plain gun icon.

## Add-on weapons

Either option works.

**Option 1: drop in a file.** Put `WEAPON_NAME.png` (or `.webp`) in `html/weapons/`, for example `WEAPON_GLOCK17.png`. It's picked up automatically and also overrides base-game images. Transparent PNGs around 512×256 look best.

**Option 2: list it in config.**

```lua
Config.WeaponImages.addons = {
    ['WEAPON_GLOCK17'] = { label = 'Glock 17', image = 'https://i.imgur.com/xxxxxxx.png' },
    ['WEAPON_M4A1']    = { label = 'M4A1',     image = 'm4a1.png' }, -- file in html/weapons/
}
```

`image` can be a full link (`https://` or `nui://`) or a file name inside `html/weapons/`.

## Weapon names

Weapon display names come from `client/weapons.lua`. Add your add-on weapons there, or give them a `label` in `Config.WeaponImages.addons`.
