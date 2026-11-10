# Lean System <Badge type="tip" text="v0.9.0" />

A roleplay drink system built around a physical, close-up mixing scene. Players pick a syrup and a soda, pour them in a first-person scene, add candy and ice, and get a unique cup whose sips are tracked individually. Cups can be carried, sipped while walking, passed to other players, pocketed or placed in the world.

::: info Fictional by design
All syrups, effects and medical items are fictional gameplay content. Effect "points" are gameplay units, not real-world recipes or dosages.
:::

## Features

- **Physical mixing scene.** Pour soda and syrup, drop in up to 3 candies and ice, with live liquid levels and colours.
- **Unique cups.** Every cup is its own item with metadata: syrup, mixer, appearance and remaining sips (8 by default).
- **Carry, sip, pass, pocket and place.** Sip while walking, offer a cup to a nearby player, pocket it, or set it down. Placed cups are synced to everyone nearby and expire after 48 hours.
- **Layered effects.** Five intensity levels with timecycles, post-FX, breathing, sway, stagger, hallucinations and an optional blackout. Each syrup can use a different preset.
- **Reduced effects mode.** Players can turn off distortion, hallucinations and stumbling with `/leanfx off`.
- **Lean Studio (`/leanadmin`).** In-game tuning with live effect preview, syrup colours and grouped settings that scale to 1440p and 4K.
- **Back-alley doctor.** An NPC that sells ordinary syrups for cash or bank, with configurable prices.
- **EMS medical syrups.** Three fictional clinic syrups that refill armour, handed out by on-duty EMS.
- **Prescription registry.** EMS write signed, registered prescriptions that patients can show to others.
- **Snacks and drinks.** Sodas give +20 thirst and candies +5 hunger when consumed directly.
- **Custom ingredients.** Add your own syrups and mixers in a file updates never overwrite.
- **Server-authoritative.** Every craft, sip, pass and purchase is checked on the server. Uncertain transactions are quarantined for staff review instead of being duplicated.

## Requirements

| Requirement | Notes |
| --- | --- |
| OneSync | Required |
| [ox_lib](https://github.com/overextended/ox_lib) | Required |
| [oxmysql](https://github.com/overextended/oxmysql) | Required |
| Framework | Qbox, QBCore or ESX (auto-detected) |
| Inventory | ox_inventory or qb-inventory (item metadata is required) |
| Target | Optional: ox_target or qb-target. Without one, an E-key prompt is used |

## Performance

| Resource | Client resmon |
| --- | ---: |
| KB3 Lean System (idle) | 0.00–0.01 ms |

## Next steps

1. [Install the resource](./installation)
2. [Add the items](./items)
3. [Tune effects with Lean Studio](./configuration#lean-studio)
