# Loot editor

Edit the ground pool and all five bag tiers in game. Changes are saved on the server and survive restarts.

## Grant access

Add to `server.cfg` (use your real ACE group if it's not `group.admin`):

```cfg
add_ace group.admin kb3.metaldetect.loot allow
```

The permission is independent of framework jobs and is checked by the server when opening, searching, reloading and saving.

## Using the editor

Open it with **`/detectorloot`**.

1. Select **Ground loot** or one of the five beach bag tiers.
2. Click **Add item** to search the active inventory by label or ID. For custom adapters without an item catalogue, type the exact ID. Install new item definitions in your inventory first.
3. Set the **rarity**, **relative weight** and **min/max quantity**, or remove a row. Each dig or bag rolls one row, then the server awards a quantity in that range.
4. Click **Save changes**. Odds and quantities apply to new rolls immediately.

## Limits

| Value | Range |
| --- | --- |
| Weight | 1 – 1,000,000 |
| Quantity | 1 – 1,000 |
| Items per pool | Up to 200 distinct IDs |

- **Rarity** is the display colour only. It doesn't change the odds.
- Beach bags can be ground loot, but can't be nested inside another bag.
- Adding an item to a pool doesn't give it a dealer price. Prices stay in `Loot.Items`.

## Pausing and restoring

- Saving an **empty ground pool** pauses new detecting signals.
- Saving an **empty bag pool** pauses opening that tier. Players keep their bags.
- **Restore defaults** loads that pool's starter values from `shared/loot.lua` into your draft. Click **Save changes** to apply.
- If another admin saves the same pool first, reload its latest values before saving again.

## Custom reward icons

Rewards without a matching image show a placeholder. To add one, put `ITEM_ID.webp` in `install/images/` and restart the resource so clients download it. Install the inventory icon separately as your inventory requires.

## Where it's stored

Saved pools override the matching entries in `shared/loot.lua` and are stored in the server's resource KVP. No SQL is needed. Back up your KVP data and keep the exact `kb3_metaldetect` folder name when upgrading or moving servers.
