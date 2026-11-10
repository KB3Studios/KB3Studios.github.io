# Upgrading from KB3 Control

The product is now called **KB3 Admin Panel**, and the resource folder is now `kb3_adminpanel`. Your data carries over: staff, groups, cases, compensation, bans, audit history, removed props and per-PC keybinds are all kept.

## Steps

1. **Back up** your database and your current `kb3_control/config` folder.
2. Stop the server, or run `stop kb3_control`.
3. Delete the old `kb3_control` folder and copy in `kb3_adminpanel`.
4. **Carry over your settings.** Don't copy the old config files over the new ones, because the new files contain new options. Copy your values across:
   - `config/server.lua`: `Owners`, `AceRoles`, `Grants`, `Entities` protection, `Resources.allowed`, `StaffRoom`, `AppealUrl` and any `Hooks`
   - `config/shared.lua`: `ServerName`, `Command`, `OpenKey` and `Knowledge`
   - `config/features.lua`: any values you changed
5. Rename the resource in `server.cfg`:

   ```cfg
   add_ace resource.kb3_adminpanel command.profiler allow   # was resource.kb3_control
   ensure kb3_adminpanel                                    # was ensure kb3_control
   ```

   The `kb3.owner`, `kb3.admin`, `kb3.moderator` and `kb3.helper` ACEs are unchanged.
6. **Update your own resources' exports.** Replace `exports.kb3_control:` with `exports.kb3_adminpanel:`.
7. Start the server.

## What changed

- **Qbox, QBCore and ESX support.** `qbx_core` is no longer a hard dependency.
- **Automatic detection** of inventories, garages, keys, medical, police and fuel. See [Compatibility](./compatibility).
- **New settings:** `ServerConfig.Framework` and `ServerConfig.Providers` (server), `Config.Fuel` (shared), `Garage.garages` (features).
- **New hooks:** `heal`, `addItem` and `inspectInventory`.
- **Medical:** `ServerConfig.Medical.resource` now defaults to `'auto'`. A specific value you set before is still honoured.
