# Metal Detecting <Badge type="tip" text="v1.2.2" />

Search configurable beaches with proximity beeps, dig up finds with a trowel, open five tiers of beach bags, and buy equipment or sell finds at a dealer. Rewards and trades are checked on the server.

## Features

- **Audio-driven detecting.** Beeps speed up as you close in. There's no strength meter, just your ears.
- **Server-checked digging** with a trowel and animation, a find cooldown and expiring signals.
- **35 items:** 28 finds across five rarity tiers, five beach bags, a detector and a trowel.
- **Beach bags** with a reveal reel. The reward is awarded **before** the animation, so closing or disconnecting never rerolls it. The repeat button opens another bag of the same tier.
- **Dealer NPC** to buy equipment and sell finds, for cash or bank.
- **In-game loot editor** (`/detectorloot`) for the ground pool and all five bag pools, saved across restarts.
- **Custom detector model** bundled and streamed, with no extra prop resource needed.
- **Safe trades.** Uncertain payment outcomes are held for staff review instead of being retried automatically.
- **No target resource needed.** Interactions use simple key prompts.

## Requirements

| Framework | Included inventory adapters |
| --- | --- |
| Qbox | ox_inventory, Quasar qs-inventory |
| QBCore | qb-inventory, Quasar qs-inventory, ox_inventory (with existing framework integration) |
| ESX Legacy | ESX default inventory, ox_inventory, Quasar qs-inventory |

Plus **OneSync** and **ox_lib**. Framework and inventory are chosen separately. Other inventories can use the [custom adapter](./developers).

## Performance

| Resource | Client resmon |
| --- | ---: |
| KB3 Metal Detecting | 0.01–0.05 ms |

Since 1.2.2, player state and beach zone checks run every 250 ms instead of every frame while the detector is out, the hand bone is looked up once, and the inventory check runs every 2 seconds. Nothing runs while the detector is put away.

## How players use it

1. Keep a **Metal Detector** and **Digging Trowel** in inventory.
2. Use the detector at a configured beach and follow the accelerating beeps.
3. Press <kbd>E</kbd> at the dig prompt. Press <kbd>X</kbd> to put the detector away.
4. Open beach bags from your inventory.
5. Talk to the dealer with <kbd>E</kbd> to buy equipment or sell finds.

## Next steps

1. [Install the resource](./installation)
2. [Set up your inventory](./inventories)
3. [Place the dealer](./configuration#dealer)
