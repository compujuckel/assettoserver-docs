---
description: Tag gamemode
---

# TagModePlugin 

:::note

Forced minimum CSP version of 0.1.77 (1937) and `EnableClientMessages: true` in `extra_cfg.yml` required for this plugin!  

Cars in the `entry_list.ini` **cannot** have the CSP extra options `Allow Color Changing` flag in their skin line!

:::

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- TagModePlugin
```

Example configuration
```yaml title="plugin_tag_mode_cfg.yml"
# Should a session only end when all runners have been caught.
# If set to true, the winner will be the last runner that was caught.
# If set to false, if at least one runner was not caught when the time runs out, the runners win
EnableEndlessMode: false
# Should tag sessions be started automatically
EnableLoop: false
# If this is set to 'true' late joiners will join an active game as a runner. 
# If this is set to 'false' late joiners will join an active game as a tagger
EnableLateJoinRunner: true
# How long a session last, if all players are tagged, the session also ends
SessionDurationMinutes: 5
# How long the pause between sessions is
SessionPauseIntervalMinutes: 2
# Color used when no session is active
NeutralColor: '#348feb'
# Color used when running from the taggers
RunnerColor: '#dbdbdb'
# Color when hit by the tagger/joining the taggers
TaggedColor: '#fa0000'`
```

Example `csp_extra_options.ini` settings
```ini title="csp_extra_options.ini
[EXTRA_RULES]
ALLOW_WRONG_WAY = 1                         ; Allow cars to drive either way

ENFORCE_BACK_TO_PITS_PENALTY = 1            ; Adds penalty during race when using back-to-pits AC command, same as when using “back to pits” in pause menu
ENFORCE_BACK_TO_PITS_STOP = 1               ; Stops back-to-pits AC command from working if car is moving

LIMIT_LOCK_CONTROLS_TIME = 300              ; Upper cap for each locking controls penalty in seconds
LIMIT_LOCK_CONTROLS_TOTAL_TIME = 300        ; Upper cap for total of locking controls penalty in seconds (on some large laps without it penalty might get so large rejoining server would be the only valid course of action)

; (Please make sure to set 0.1.78 as required):
NO_BACK_TO_PITS = 1                         ; Disallow back-to-pits AC command and “back to pits” in pause menu (admin would still be able to teleport cars back if needed)
NO_BACK_TO_PITS_OUTSIDE_OF_PITS = 1         ; Same, but only if car is not in its pits position 

[PITS_SPEED_LIMITER]
DISABLE_FORCED = 0                          ; Disable forced pits speed limiter
KEEP_COLLISIONS = 1                         ; Activate collisions between cars in pits
SPEED_KMH = 25                              ; Alter pits speed limiter value; default is 80
SPEEDING_PENALTY = TELEPORT_TO_PITS         ; Penalty for violation (for now, either DRIVE_THROUGH
SPEEDING_SUBSEQUENT_PENALTY_TIME = 300      ; How long controls will be locked, in seconds
```