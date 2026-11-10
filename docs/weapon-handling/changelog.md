# Changelog

## 1.1.1 <Badge type="tip" text="Latest" />

- **Performance:** much lower idle client usage. Heavy checks (player state, job, walk style, crouch recovery) now run every 100–250 ms instead of every frame. Only controls that must be held every frame still run per frame.
- **Performance:** the sling display no longer reads the full inventory every 400 ms. It rebuilds only when the inventory, equipped weapon or `/sling` preference changes. Weapon lookups are cached, far-away players are skipped earlier, and placement change checks are cheaper.
- No gameplay or config changes.

## 1.1.0

- **Fixed:** the Open Source edition is now delivered fully readable (no encrypted files). It's still license-locked through Keymaster.
- No gameplay changes. Existing `placements.json` and `player_placements.json` are compatible, so keep them when updating.
