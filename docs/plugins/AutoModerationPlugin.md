---
description: Automatically kick players when they violate rules
---

# AutoModerationPlugin

Plugin to automatically kick players when they violate rules:
* Driving without lights during the night
* Driving the wrong way
* Blocking the road

:::note
Admins are exempt from these rules and will not see flags or get kicked.
:::

When `EnableClientMessages` is enabled, wrong way / no parking / no lights signs will be shown to the player.  
Included in the `Flags` folder are Japanese-style signs. You can replace these with custom signs.
## Demo

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FojgcDgF-Iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- AutoModerationPlugin
```

Example configuration
```yaml title="plugin_auto_moderation_cfg.yml"
# Kick players that are AFK
AfkPenalty:
  # Set to true to enable
  Enabled: true
  # Don't kick if at least one open slot of the same car model is available
  IgnoreWithOpenSlots: true
  # Time after the player gets kicked. A warning will be sent in chat one minute before this time
  DurationMinutes: 10
  # Set this to MinimumSpeed to not reset the AFK timer on chat messages / controller inputs and require players to actually drive
  Behavior: PlayerInput
  # Which models are excluded from this penalty. Example: Spectator slots
  ExcludedModels: []
# Kick players with a high ping
HighPingPenalty:
  # Set to true to enable
  Enabled: true
  # Time after the player gets kicked. A warning will be sent in chat after half this time
  DurationSeconds: 20
  # Players having a lower ping will not be kicked
  MaximumPingMilliseconds: 500
# Penalise players driving the wrong way. AI has to enabled for this to work
WrongWayPenalty:
  # Set to true to enable
  Enabled: false
  # Time after the player gets kicked. A warning will be sent in chat after half this time
  DurationSeconds: 20
  # Players driving slower than this speed will not be kicked
  MinimumSpeedKph: 20
  # The amount of times a player will be send to pits before being kicked
  PitsBeforeKick: 2
# Penalise players driving without lights during the night
NoLightsPenalty:
  # Set to true to enable
  Enabled: false
  # Time in which no warning or signs will be sent
  IgnoreSeconds: 2
  # Time after the player gets kicked. A warning will be sent in chat after half this time
  DurationSeconds: 60
  # Players driving slower than this speed will not be kicked
  MinimumSpeedKph: 20
  # The amount of times a player will be send to pits before being kicked
  PitsBeforeKick: 2
# Penalise players blocking the road. AI has to be enabled for this to work
BlockingRoadPenalty:
  # Set to true to enable
  Enabled: false
  # Time after the player gets kicked. A warning will be sent in chat after half this time
  DurationSeconds: 30
  # Players driving faster than this speed will not be kicked
  MaximumSpeedKph: 5
  # The amount of times a player will be send to pits before being kicked
  PitsBeforeKick: 2
```