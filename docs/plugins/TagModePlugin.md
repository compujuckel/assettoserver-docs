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