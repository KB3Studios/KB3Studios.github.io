# Commands

| Command | Who | Description |
| --- | --- | --- |
| `/detectorreset` | Players | Closes this resource's menu, cancels digging and removes the held detector. It doesn't undo prizes already awarded |
| `/detectorloot` | `kb3.metaldetect.loot` ACE | Open the [loot editor](./loot-editor) |
| `kb3metalresolve` | Server console only | Resolve a held trade. See below |

## Controls

| Key | Action |
| --- | --- |
| <kbd>E</kbd> | Dig at a pinpointed signal, or talk to the dealer |
| <kbd>X</kbd> | Put the detector away |

## Resolving held trades

When a dealer payment or refund result is uncertain, the trade is held by character in the `kb3_pawn_pending_v1` resource KVP instead of being retried. Resolve it from the server console:

```text
kb3metalresolve CHARACTER_ID completed|refund_items|refund_money
```

| Option | Use when |
| --- | --- |
| `completed` | You've manually confirmed the sale or purchase settled |
| `refund_items` | Compensation is owed in items and hasn't been applied |
| `refund_money` | Compensation is owed in money and hasn't been applied |

The character must be online for a refund. Failed or uncertain refunds stay held. Players can't run this command.
