# EMS & prescriptions

## Clinic syrups

Three fictional EMS syrups (**Clinic Violet**, **Clinic Azure** and **Clinic Amber**) can be dispensed by on-duty EMS. Finishing a cup mixed with one refills armour to 100 once. Clinic syrups can't be bought from the doctor.

```lua
Config.Medical = {
    enabled = true,
    requireDuty = true,
    jobs = { ambulance = 0, ems = 0 }, -- job name = minimum grade
    dispenseCooldown = 30,             -- seconds between dispenses
    provideDistance = 3.0,
    allowBlackout = false,             -- clinic cups never cause blackouts
}
```

Dispense with `/leanmed violet|azure|amber [nearby player ID]`.

## Prescriptions

EMS can write registered prescriptions that are stored in the `kb3_lean_prescriptions` table.

1. **Get a pad.** Run `/rxpad`, or give the `kb3_prescription_pad` item.
2. **Write it.** Use the pad and fill in the patient, syrup, supply (bottles), duration, reason and directions.
3. **Patient signs.** The patient has `signSeconds` to review and sign with `/rxsign`.
4. **Patient receives** a named `kb3_prescription` item, and can use it or `/rxshow` to show it to someone nearby.
5. **Revoke** with `/rxrevoke <id> <reason>` if needed.

```lua
Config.Prescriptions = {
    enabled = true,
    clinic = 'City Medical Services', -- printed on prescriptions
    maxSupply = 30,      -- max bottles per prescription
    maxDays = 30,        -- max duration
    defaultDays = 7,
    range = 3.0,         -- distance to issue or show
    issueCooldown = 30,  -- seconds between issues
    signSeconds = 90,    -- patient signature window (minimum 15)
    padCommand = true,   -- enable /rxpad
    revokeOthers = false -- true lets EMS revoke prescriptions written by others
}
```
