# Troubleshooting

## The panel won't open

- Check the console for `[KB3 Admin Panel] Database ready.` If it's missing, oxmysql isn't connected or started after the panel.
- Confirm you have access: your license is in the `kb3.owner` ACE (written as `identifier.license:...`) or in `ServerConfig.Owners`.
- Try `/kb3admin` instead of F9. Another resource or your FiveM key bindings may have taken the key.
- Run `/kb3uireset` to reset the panel's UI and focus.

## Tools are greyed out

`RequireDuty` is on by default. Click **Go on duty** first. Then check that your group has the permission. See [Staff & permissions](./permissions).

## An action says an integration is missing

Open **Server health → Integrations**. If the script shows "setup" or isn't listed:

1. Make sure it starts **before** `kb3_adminpanel` in `server.cfg`.
2. If you run two scripts of the same kind, [force the right one](./compatibility#forcing-a-choice).
3. For unsupported scripts, add a [hook](./hooks).

## No keys when spawning or adding vehicles

Check the Integrations card for your key script. If it's not detected, set `Providers.keys` or add a `giveKeys` hook.

## Spectate is stuck

Run `/kb3spectateoff`.

## Live view shows nothing

Live view is peer-to-peer WebRTC. On strict networks or behind certain NATs, add a TURN server to `Live.iceServers` in `config/features.lua`.

## The live map is offset

Owners can calibrate it in game: **Live map → Calibrate**, click your position, travel at least 500 m, and click again.

## I can't restart a resource from the panel

Nothing can be restarted until you add it to `ServerConfig.Resources.allowed`. Core resources in `Resources.protected` can never be restarted from the panel.

## Profiler capture fails

Add `add_ace resource.kb3_adminpanel command.profiler allow` to `server.cfg`. Captures are limited to one at a time and one per minute.
