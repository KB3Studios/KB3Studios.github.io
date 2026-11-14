# Performance

Client `resmon` figures measured on a live server, with each resource idle or in normal use:

| Resource | Client resmon |
| --- | ---: |
| KB3 Admin Panel | 0.00–0.02 ms |
| KB3 Lean System (idle) | 0.00–0.01 ms |
| KB3 Weapon Handling | 0.01–0.03 ms |
| KB3 Metal Detecting | 0.01–0.05 ms |

::: info Your numbers will vary
Resmon depends on hardware, player count, other resources and your inventory or framework. Measure on your own server with `resmon 1` in the F8 console.
:::

## How each resource stays light

**Admin Panel.** No client frame loops run while the panel is closed. Noclip, spectate and the entity inspector start their per-frame threads only while active. The UI is vanilla JS with no React bundle, CDN or animated backgrounds. See [Admin Panel performance details](/admin-panel/#performance).

**Lean System.** Nothing runs per frame until a player is holding or mixing a cup. In 0.9.0 the mixing scene caches camera math, builds liquid shapes once and only reruns hover detection when the mouse moves.

**Weapon Handling.** Since 1.1.1, player state, job, walk style and crouch recovery checks run every 100–250 ms instead of every frame. The sling display rebuilds only when the inventory, equipped weapon or `/sling` preference changes.

**Nova HUD.** Players pick an update rate in *General*: Smooth, Balanced (default) or Saver. Saver updates less often for lower CPU use. The UI uses plain HTML, CSS and JS, with no framework bundle.

**Metal Detecting.** Since 1.2.2, player state and beach zone checks run every 250 ms while the detector is out, and the inventory check runs every 2 seconds. Nothing runs while the detector is put away.

## Measuring

```text
# Client (F8)
resmon 1

# Server console
profiler record 500
profiler saveJSON kb3-profile.json
```

Compare a baseline with the resource stopped against the resource running, idle and in use.
