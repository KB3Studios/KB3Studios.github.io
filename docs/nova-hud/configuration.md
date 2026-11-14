# Configuration

All server options are in `config.lua`. Players customise the look themselves in the [settings menu](./settings).

## Framework and integrations

| Option | Default | Description |
| --- | --- | --- |
| `Config.Framework` | `'auto'` | `auto`, `qbox`, `qb`, `esx` or `standalone`. Auto checks qbx_core, then qb-core, then es_extended |
| `Config.Fuel` | `'auto'` | `auto`, `native`, `ox_fuel`, `LegacyFuel`, `cdn-fuel`, `ps-fuel` or `lj-fuel` |
| `Config.VoiceModes` | `3` | Number of pma-voice proximity modes |

## Commands and keys

```lua
Config.Commands = {
    settings = 'hud',        -- opens the settings menu
    toggle   = 'togglehud',  -- hides / shows the whole HUD
    reset    = 'resethud',   -- wipes the player's saved HUD settings
    fix      = 'hudfix',     -- clears stuck blur / grey filters / screen fades / NUI focus
    stress   = 'stress',     -- shows your current stress level
}
Config.SettingsKey = 'I'     -- '' to disable the key
```

Rename any command here if it clashes with another resource.

## Default GTA HUD

| Option | Default | Description |
| --- | --- | --- |
| `Config.HideGtaHud` | `true` | Hide GTA's own HUD components |
| `Config.HideGtaComponents` | `{ 2, 3, 4, 6, 7, 8, 9, 13, 17, 20 }` | Weapon icon, cash, MP cash, vehicle name, area, vehicle class, street name, cash change, saving and weapon stats |

## Dirty money

```lua
Config.DirtyMoney = {
    enabled  = true,
    account  = 'black_money',  -- ESX account, or QB/Qbox money type if your server has one
    item     = 'markedbills',  -- otherwise these items are counted
    worthKey = 'worth',        -- metadata key for each item's value
}
```

Dirty money only shows while the player is carrying some. On QBCore and Qbox, if there's no `black_money` money type, the HUD adds up `markedbills` items using each item's `worth` where it's set.

## Society money

```lua
Config.SocietyMoney = {
    enabled  = true,
    bossOnly = true, -- only job bosses see it
    refresh  = 30,   -- seconds between balance updates
}
```

The server looks up the balance from the player's real job, so a client can't request another business's balance. Supported out of the box: qb-banking, Renewed-Banking, qb-management, okokBanking and esx_addonaccount. For another banking script, edit `Framework.GetSocietyMoney` in `server/framework.lua`.

## Custom icon backgrounds

```lua
Config.Backgrounds = {
    allowCustom   = true,  -- false = presets only
    allowHttp     = false, -- only https:// links by default
    hostWhitelist = {},    -- e.g. { 'i.imgur.com', 'i.ibb.co' }. Empty = any host
}
```

Backgrounds are only visible to the player who set them.

## Server defaults & locked sections {#server-defaults}

```lua
-- New players start with these. Existing players keep their own saves.
Config.DefaultSettings = {
    general = { accent = '#00c8f0', accent2 = '#c9d1d9' },
    status  = { style = 'hexagon', size = 56 },
    vehicle = { style = 'sport', units = 'kmh' },
}

-- Forced to your defaults, with the tab hidden from players
Config.LockedSections = { 'layout' }
```

`DefaultSettings` accepts any key from `DEFAULTS` in `html/app.js`. You can lock any of these sections: `general`, `status`, `backgrounds`, `vehicle`, `map`, `info`, `compass`, `weapon` and `layout`.

::: tip Hunger and thirst alert defaults
Set the alert threshold, repeat interval and sound defaults with `Config.DefaultSettings.alerts`. Players can still change them under *General*, unless you lock that section.
:::

## Other sections

| Section | Page |
| --- | --- |
| `Config.Seatbelt`, `Config.Indicators`, `Config.Sounds` | [Vehicle](./vehicle) |
| `Config.RoundMinimap`, `Config.Postals` | [Map & postals](./map) |
| `Config.WeaponImages` | [Weapons](./weapons) |
| `Config.Stress`, `Config.StressItems` | [Stress](./stress) |

## Fonts

```lua
Config.Fonts = {
    { name = 'KB3 Brand', file = 'kb3-brand.woff2' }, -- file in html/fonts/
}
```

Listed fonts appear in every player's font picker. Players can also type any Google Fonts name, or paste a direct link to a `.woff2`, `.woff`, `.ttf` or `.otf` file.
