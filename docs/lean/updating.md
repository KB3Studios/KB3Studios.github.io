# Updating

::: warning Keep these
`config.lua`, `custom_ingredients.lua` and the entire `data/` folder (Lean Studio settings and the doctor review log).
:::

1. Back up your database and the files above.
2. Replace the `kb3_lean` folder with the new version.
3. Put your kept files back.
4. Run only the migrations you're missing, **in order**:

| Coming from | Run |
| --- | --- |
| 0.1.x / 0.2.x | `migrate_0_3_0.sql`, then `migrate_0_4_0.sql`, then `migrate_0_4_1.sql` |
| 0.3.x | `migrate_0_4_0.sql`, then `migrate_0_4_1.sql` |
| 0.4.0 | `migrate_0_4_1.sql` |
| 0.4.1 or newer | Nothing |

All migrations are safe to re-run. There's no migration from 0.8.x to 0.9.0.

5. Restart the resource and run `/leandiag` to confirm `ready=true`.
