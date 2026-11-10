# Changelog

## 0.9.0 <Badge type="tip" text="Latest" />

- **Fixed:** the Open Source edition is now delivered fully readable (no encrypted files). It's still license-locked through Keymaster.
- **Fixed:** the `data/` folder is now always included, so `/leanadmin` settings and the doctor review log save correctly.
- **Fixed:** hallucinations set to "Circle around" (e.g. Prism Carousel) now spread evenly around the player and visibly circle, instead of bunching up and trailing behind.
- **Performance:** lighter mixing scene. Camera math is cached, the control list and liquid shapes are built once, the liquid surface only moves when its level changes, and hover detection reruns only when the mouse moves, on click, or every 100 ms.
- **Added:** README with install, update and command reference.
- **Added:** `CUSTOM-INGREDIENTS.md`.
- **New Lean Studio design:** live effect preview, syrup colours, grouped settings, and text that scales on 1440p and 4K.
- Cleaned up `fxmanifest.lua`. No gameplay changes and no database migration from 0.8.x.
