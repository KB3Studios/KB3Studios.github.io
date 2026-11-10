# Custom ingredients

Add your own syrups and mixers in `custom_ingredients.lua`. **Updates never overwrite this file.**

## Steps

1. Add the entry to `Config.CustomSyrups` or `Config.CustomMixers`.
2. Add an item with the **same item name** to your inventory (ox or qb), like the bundled `kb3_*` items.
3. Restart the resource.

Custom syrups start with the *Progressive* blend and no perk. Tune them in [`/leanadmin`](./configuration#lean-studio).

## Example

```lua
Config.CustomSyrups = {
    { id = 'cherry_drift', label = 'Cherry Drift', item = 'cherry_syrup',
      color = '#b83360', points = 12, bottleAs = 'ruby', fillAs = 'ruby', doctor = true },
}

Config.CustomMixers = {
    { id = 'lemon_fizz', label = 'Lemon Fizz', item = 'lemon_soda',
      color = '#edee87', note = 'Bright lemon', bottleAs = 'citrus', fillAs = 'citrus' },
}
```

## Fields

| Field | Required | Notes |
| --- | --- | --- |
| `id` | yes | Unique. Lowercase letters, numbers and underscores, starting with a letter, max 32 characters |
| `label` | yes | Name shown in game |
| `item` | yes | Inventory item name |
| `color` | yes | Hex colour for the liquid and UI |
| `points` | syrups | Effect strength per serving |
| `note` | mixers | Short flavour note shown in the mixer |
| `doctor` | no | Syrups only. `true` lets the doctor NPC sell it |
| `bottleAs` / `fillAs` | no | Reuse a bundled bottle or liquid look. If omitted, the closest colour is picked |
| `prop`, `propHeight`, `capProp` | no | Your own bottle model. It must be uncapped, with its origin at the base and the mouth on local +Z |
| `image` | no | WebP filename in `install/images/`. Changes the UI icon only, not the 3D label |

## Bundled looks

| Type | Values |
| --- | --- |
| Syrups | `violet`, `ruby`, `azure`, `amber`, `mint` (bottles also accept `med_violet`, `med_azure`, `med_amber`) |
| Mixers | `citrus`, `grape`, `berry`, `tropical`, `cream` |
