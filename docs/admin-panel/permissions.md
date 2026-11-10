# Staff & permissions

Staff and groups are managed **in game** on the **Users** page. The config only seeds the defaults.

## How access is granted

1. **Root owners** come from the `kb3.owner` ACE or `ServerConfig.Owners`. They always have Owner access and can't be removed in game.
2. **ACE shortcuts** map existing server groups to panel groups:

   ```cfg
   add_ace group.admin kb3.admin allow
   # kb3.admin / kb3.moderator / kb3.helper map to the matching groups
   ```

3. **In-game users** are added on the **Users** page by picking an online player or pasting a license, choosing a group, and optionally setting an expiry date and note.

## Default groups

These are created **once** from `config/server.lua`. After that the in-game editor owns them, so editing the config won't overwrite your changes.

| Group | Priority | Money grant | Item grant | Max ban |
| --- | ---: | ---: | ---: | --- |
| Owner | 1000 | $1,000,000 | 10,000 | ~10 years |
| Administrator | 80 | $25,000 | 10 | 7 days |
| Moderator | 40 | $5,000 | 3 | None |
| Support | 10 | $0 | 0 | None |

Priority controls who can manage whom. Staff can only create, edit, assign or revoke groups with a **lower** priority than their own, and nobody can assign the Owner group in game.

## Permission reference

### Players

| Permission | Allows |
| --- | --- |
| `players.view` | View players and profiles |
| `players.teleport` | Go to, bring, return, staff room |
| `players.freeze` | Freeze / unfreeze |
| `players.spectate` | Spectate camera |
| `players.liveview` | Live game view |
| `players.recover` | Unstuck, animation, cuffs, vehicle recovery |
| `players.revive` | Revive and heal |
| `players.inventory` | Inspect inventory |
| `players.job` | Set job |
| `players.gang` | Set gang |
| `players.ped` | Change players' peds |
| `players.map` | Live map |
| `players.money` | Add / remove / set money |

### Moderation

| Permission | Allows |
| --- | --- |
| `players.warn` | Warn |
| `players.kick` | Kick |
| `players.ban` | Ban (up to the group limit) |
| `bans.manage` | View and revoke bans |

### Characters

| Permission | Allows |
| --- | --- |
| `characters.view` | Browse all characters |
| `characters.edit` | Edit character info |
| `characters.delete` | Delete offline characters |

### Reports & compensation

| Permission | Allows |
| --- | --- |
| `cases.view` | View reports |
| `cases.manage` | Manage reports |
| `cases.internal` | Internal staff notes |
| `grants.create` | Request compensation |
| `grants.approve` | Approve compensation |

### Garages

| Permission | Allows |
| --- | --- |
| `garage.view` | View player garages |
| `garage.manage` | Add, remove and move garage vehicles |

### Spawning

| Permission | Allows |
| --- | --- |
| `items.view` | Browse items |
| `items.give` | Give items |
| `vehicles.view` | Browse vehicles |
| `self.vehicle` | Spawn and fix vehicles |

### Self tools

| Permission | Allows |
| --- | --- |
| `self.noclip` | Noclip |
| `self.god` | God mode |
| `self.invisible` | Invisibility |
| `self.ped` | Change own ped |
| `self.extra` | Extra self tools |

### World & entities

| Permission | Allows |
| --- | --- |
| `entities.view` | Entity inspector |
| `entities.freeze` | Freeze entities |
| `entities.delete` | Delete entities |
| `entities.cleanup` | Area cleanup |
| `entities.force` | Force delete (script props, map props, occupied and owned vehicles) |
| `world.announce` | Announcements |
| `world.maintenance` | Maintenance mode |

### Server

| Permission | Allows |
| --- | --- |
| `dashboard.view` | Command center |
| `health.view` | Server health |
| `resources.view` | View resources |
| `resources.manage` | Start / stop allowed resources |
| `diagnostics.view` | Diagnostics |
| `diagnostics.profile` | Profiler captures |
| `economy.view` | Economy ledger and alerts |
| `economy.review` | Review economy alerts |
| `audit.view` | Audit trail |

### Administration

| Permission | Allows |
| --- | --- |
| `staff.view` | View staff users |
| `staff.manage` | Add / remove staff users |
| `roles.manage` | Create and edit groups |

## Accountability

Every action on a player, their money, items, vehicles or character requires a written reason. Every staff action, including personal tools, is recorded with who did it, what changed, when and why. Owners can review it all in the **Audit** page.
