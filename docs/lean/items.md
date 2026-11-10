# Items

The Lean System adds **24 items**. Item definitions are in `install/items_ox.lua` and `install/items_qb.lua`, and icons are in `install/images/` (PNG and WebP).

| | Item | Label | Use |
| --- | --- | --- | --- |
| ![](/items/lean/kb3_empty_cup.webp){.item-icon} | `kb3_empty_cup` | Empty Cup | Use to open the mixer |
| ![](/items/lean/kb3_lean_cup.webp){.item-icon} | `kb3_lean_cup` | Afterhours Cup | A unique mixed cup. Use to hold it and sip |
| ![](/items/lean/kb3_syrup_violet.webp){.item-icon} | `kb3_syrup_violet` | Violet Haze | Syrup |
| ![](/items/lean/kb3_syrup_ruby.webp){.item-icon} | `kb3_syrup_ruby` | Ruby Night | Syrup |
| ![](/items/lean/kb3_syrup_azure.webp){.item-icon} | `kb3_syrup_azure` | Blue Hour | Syrup |
| ![](/items/lean/kb3_syrup_amber.webp){.item-icon} | `kb3_syrup_amber` | Amber Glow | Syrup |
| ![](/items/lean/kb3_syrup_mint.webp){.item-icon} | `kb3_syrup_mint` | Mint Mirage | Syrup |
| ![](/items/lean/kb3_soda_citrus.webp){.item-icon} | `kb3_soda_citrus` | Citrus Soda | Mixer, or drink for +20 thirst |
| ![](/items/lean/kb3_soda_grape.webp){.item-icon} | `kb3_soda_grape` | Grape Soda | Mixer, or drink for +20 thirst |
| ![](/items/lean/kb3_soda_berry.webp){.item-icon} | `kb3_soda_berry` | Berry Soda | Mixer, or drink for +20 thirst |
| ![](/items/lean/kb3_soda_tropical.webp){.item-icon} | `kb3_soda_tropical` | Tropical Soda | Mixer, or drink for +20 thirst |
| ![](/items/lean/kb3_soda_cream.webp){.item-icon} | `kb3_soda_cream` | Cream Soda | Mixer, or drink for +20 thirst |
| ![](/items/lean/kb3_candy_prism.webp){.item-icon} | `kb3_candy_prism` | Prism Bites | Cup topping, or eat for +5 hunger |
| ![](/items/lean/kb3_candy_sourcrew.webp){.item-icon} | `kb3_candy_sourcrew` | Sour Crew | Cup topping, or eat for +5 hunger |
| ![](/items/lean/kb3_candy_crystal.webp){.item-icon} | `kb3_candy_crystal` | Crystal Drops | Cup topping, or eat for +5 hunger |
| ![](/items/lean/kb3_candy_bears.webp){.item-icon} | `kb3_candy_bears` | Jelly Cubs | Cup topping, or eat for +5 hunger |
| ![](/items/lean/kb3_candy_worms.webp){.item-icon} | `kb3_candy_worms` | Jelly Wiggles | Cup topping, or eat for +5 hunger |
| ![](/items/lean/kb3_candy_sourbears.webp){.item-icon} | `kb3_candy_sourbears` | Zing Cubs | Cup topping, or eat for +5 hunger |
| ![](/items/lean/kb3_candy_sourworms.webp){.item-icon} | `kb3_candy_sourworms` | Zing Wiggles | Cup topping, or eat for +5 hunger |
| ![](/items/lean/kb3_syrup_med_violet.webp){.item-icon} | `kb3_syrup_med_violet` | Clinic Violet | EMS syrup. A finished cup refills armour to 100 once |
| ![](/items/lean/kb3_syrup_med_azure.webp){.item-icon} | `kb3_syrup_med_azure` | Clinic Azure | EMS syrup. A finished cup refills armour to 100 once |
| ![](/items/lean/kb3_syrup_med_amber.webp){.item-icon} | `kb3_syrup_med_amber` | Clinic Amber | EMS syrup. A finished cup refills armour to 100 once |
| ![](/items/lean/kb3_prescription_pad.webp){.item-icon} | `kb3_prescription_pad` | Prescription Pad | EMS: use to write a prescription |
| ![](/items/lean/kb3_prescription.webp){.item-icon} | `kb3_prescription` | Prescription | Use to read or show it to someone nearby |

::: tip ox_inventory exports
Usable items call client exports such as `kb3_lean.openMixer`, `kb3_lean.useCup`, `kb3_lean.drinkSoda` and `kb3_lean.eatCandy`. Keep `consume = 0` on these entries. The script removes items itself on the server.
:::

## Item names in config

| Setting | Default |
| --- | --- |
| `Config.CupItem` | `kb3_lean_cup` |
| `Config.EmptyCupItem` | `kb3_empty_cup` |
| `Config.Syrups[].item` | `kb3_syrup_*` |
| `Config.Mixers[].item` | `kb3_soda_*` |

If you rename an item, change it in both the config and your inventory.
