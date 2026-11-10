# Installation

## 1. Add the resource

Copy the `kb3_adminpanel` folder into your resources, for example `resources/[kb3]/kb3_adminpanel`.

::: warning
Keep the folder name `kb3_adminpanel`. Your own resources call its [exports](./exports) by that name.
:::

## 2. server.cfg

Start it **after** your framework, inventory, garage and key scripts:

```cfg
ensure ox_lib
ensure oxmysql
ensure qbx_core            # or qb-core / es_extended
# ... inventory, garages, keys, medical ...

add_ace identifier.license:YOUR_LICENSE_HERE kb3.owner allow
add_ace resource.kb3_adminpanel command.profiler allow
ensure kb3_adminpanel
```

::: tip Finding your license
Use your Rockstar **license** identifier, not your Cfx server key. It looks like `license:1a2b3c...`. In the ACE line write `identifier.license:1a2b3c...` and don't repeat `license:`. txAdmin shows the license on each player's page.
:::

The `command.profiler` line is only needed for the Diagnostics profiler capture.

## 3. Owners

There are two ways to make someone an owner:

- **ACE (recommended):** the `kb3.owner` line above.
- **Config:** add the license to `ServerConfig.Owners` in `config/server.lua`:

```lua
Owners = {
    'license:1a2b3c...', -- your name
},
```

Root owners always keep Owner access and can't be removed from inside the panel.

## 4. Database

Nothing to import. The resource uses your existing oxmysql connection and creates its own `kb3_` tables on first start. `server/schema.sql` is included if you want to read it.

## 5. First start

1. Start the server and watch for `[KB3 Admin Panel] Database ready.` in the console.
2. Join, press **F9** (or type `/kb3admin`), and click **Go on duty**.
3. Open **Server health** and check the **Integrations** card. Every detected script is listed. If something shows "setup", see [Compatibility](./compatibility).

## 6. Quick test

1. Open and close the panel, and switch between full screen and side panel
2. Look up a character and change their job and cash
3. Give yourself an item
4. Add a vehicle to a garage, then remove it
5. Spawn a vehicle and confirm you receive keys
6. Revive and heal yourself from **Toolkit**
7. Inspect a prop and copy its model
8. Add a test user to the Support group and confirm what they can see

If an action reports a missing integration, see [Compatibility](./compatibility) or add a [hook](./hooks).
