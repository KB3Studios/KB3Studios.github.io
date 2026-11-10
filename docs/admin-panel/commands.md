# Commands & controls

| Control | Purpose |
| --- | --- |
| <kbd>F9</kbd> / `/kb3admin` | Open the panel (rebind in FiveM Settings → Key Bindings) |
| `/report` | Player report center |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Search pages and online players |
| <kbd>Esc</kbd> | Close the top dialog, then the panel |
| `/kb3inspect` | Start the entity inspector |
| `/kb3spectateoff` | End spectate if anything goes wrong |
| `/kb3uireset` | Reset only the panel's UI and focus |
| **Keybinds** page | Bind any Command Center action to a key (saved per PC) |

## Entity inspector

| Key | Action |
| --- | --- |
| <kbd>E</kbd> | Open the aimed entity in the panel |
| <kbd>G</kbd> | Copy coords |
| <kbd>H</kbd> | Copy model |
| <kbd>Delete</kbd> twice | Delete the aimed entity. Map props are removed for everyone until restart |
| <kbd>Backspace</kbd> | Exit the inspector |

The same protections as the menu apply: occupied vehicles, player peds and protected entities are excluded unless the staff member has `entities.force`.

::: tip Command conflicts
If another resource already uses `/report`, change `Config.ReportCommand` in `config/shared.lua`. The open command and key are `Config.Command` and `Config.OpenKey`.
:::
