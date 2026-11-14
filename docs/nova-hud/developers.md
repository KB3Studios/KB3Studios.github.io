# Exports & events

## Server exports

```lua
exports.kb3_novahud:AddStress(source, 10)
exports.kb3_novahud:RemoveStress(source, 25)
exports.kb3_novahud:SetStress(source, 0)
local stress = exports.kb3_novahud:GetStress(source)

-- For custom inventories: call from your item's use handler
exports.kb3_novahud:UseStressItem(source, 'joint')
```

## Client exports

| Export | Description |
| --- | --- |
| `ToggleHud(state)` | Show (`true`) or hide (`false`) the HUD. `nil` toggles |
| `HideHud(true)` | Hide for phones, cameras and cutscenes. Pass `false` to restore |
| `IsHudVisible()` | `true` while the HUD is shown |
| `OpenSettings()` | Open the settings menu |
| `SetSeatbelt(state)` | Set the seatbelt light when using an external seatbelt script |
| `GetSeatbelt()` | Current seatbelt state |
| `Notify(text, kind, icon)` | Show a HUD toast. `kind` is `'ok'`, `'warn'` or `'info'` |
| `GetPostal()` | Returns the nearest postal `code` and distance in metres |
| `AddStress(amount)` | Add stress from the client (checked against `serverMaxPerRequest`) |
| `RelieveStress(amount)` | Remove stress, e.g. after eating or smoking |
| `GetStress()` | Current stress |
| `ClearScreenEffects()` | Same as `/hudfix`: clears stuck blur, filters and fades |

```lua
-- Hide the HUD while a phone or camera is open
exports.kb3_novahud:HideHud(true)
-- ...
exports.kb3_novahud:HideHud(false)

-- Read the nearest postal
local code, distance = exports.kb3_novahud:GetPostal()
```

## Events (qb-hud compatible)

```lua
-- client -> server
TriggerServerEvent('hud:server:RelieveStress', 15)
TriggerServerEvent('hud:server:GainStress', 5)
```

Existing qb-hud consumables and scripts that fire these keep working without changes.

## Integrations the HUD listens to

| Data | Source |
| --- | --- |
| Hunger / thirst | QB / Qbox metadata (`hud:client:UpdateNeeds`), Qbox state bags, `esx_status` |
| Voice | `pma-voice` (range, talking, radio) |
| Fuel | `ox_fuel`, `LegacyFuel`, `cdn-fuel`, `ps-fuel`, `lj-fuel`, else native |
| Seatbelt | `seatbelt:client:ToggleSeatbelt`, the `seatbelt` state bag, or `SetSeatbelt` |
| Stress | Player state bag `stress` |

## Editable files

| File | Purpose |
| --- | --- |
| `server/framework.lua` | Framework layer, including `Framework.GetSocietyMoney` for other banking scripts |
| `client/bridge.lua` | Client framework data (needs, job, money) |
| `client/weapons.lua` | Weapon display names |
| `html/` | The full UI (HTML, CSS and JS) |
