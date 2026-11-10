# Commands

## Players

| Command | Description |
| --- | --- |
| `/lean` | Open the mixer (needs an empty cup, a syrup and a soda) |
| `/leansip` | Sip the cup you're holding |
| `/leanplace` | Place the held cup in the world |
| `/leanpass` | Offer the held cup to a nearby player |
| `/leanpocket` | Put the held cup away |
| `/leanaccept` / `/leandecline` | Answer a cup offer |
| `/leanfx on` / `off` / `status` | Toggle reduced visual effects (no distortion, hallucinations or stumbling) |
| `/leanfxstatus` | Print effect status to F8 |
| `/leanreset` / `/leanuireset` | Close the mixing scene and UI and restore the camera |
| <kbd>Backspace</kbd> | Cancel the current action or pocket the cup (rebindable as *Lean: cancel action / pocket cup*) |

With ox_target or qb-target, a **Place cup** option appears while you're holding a cup.

## EMS

| Command | Description |
| --- | --- |
| `/leanmed violet` / `azure` / `amber` `[id]` | Hand a clinic syrup to yourself or a nearby player |
| `/rxpad` | Get a prescription pad |
| `/rxrevoke <id> <reason>` | Revoke a prescription |
| `/rxcancel` | Cancel a prescription you're writing |

## Prescriptions (patients)

| Command | Description |
| --- | --- |
| `/rxsign` | Review and sign a prescription you've been offered |
| `/rxaccept` / `/rxdecline` | Accept or decline a prescription being shown to you |
| `/rxshow` | Show your prescription to someone nearby |

## Admin

Requires the `kb3_lean.admin` ACE.

| Command | Description |
| --- | --- |
| `/leanadmin` | Open [Lean Studio](./configuration#lean-studio) |
| `/leandiag` | Print readiness, framework, inventory and version. Also works from the server console |
| `/leanaudit [cupId]` | Print pending or quarantined cups (or one cup's full record) to the server console |
