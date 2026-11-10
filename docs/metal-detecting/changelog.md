# Changelog

## 1.2.2 <Badge type="tip" text="Latest" />

- **Performance:** lower client usage while the detector is out. Player state and beach zone checks now run every 250 ms instead of every frame, the hand bone is looked up once instead of every frame, and the "still have a detector" check runs every 2 seconds instead of every second.
- No gameplay, config, item or database changes.

## 1.2.1

- The original custom detector model is now bundled in `stream/` and set as the default. No separate prop resource is needed.

## 1.2.0

- Added the in-game [loot editor](./loot-editor) (`/detectorloot`).
