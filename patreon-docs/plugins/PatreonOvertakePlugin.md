---
description: Gain points by overtaking other cars
---

# PatreonOvertakePlugin

Plugin for overtake runs with a leaderboard. Players gain points by overtaking other cars without crashing.
The score multiplier increases by 1 for every overtake and 3 for every close overtake and slowly decreases over time.

:::note

PatreonHubPlugin is required for the leaderboard to work.

Forced minimum CSP version of 0.1.77 (1937) and `EnableClientMessages: true` in `extra_cfg.yml` required!

:::

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
  - PatreonOvertakePlugin
```
Example configuration
```yaml title="plugin_patreon_overtake_cfg.yml"
# Name of leaderboard. Use this if you have multiple servers connected to the hub and want them to have different leaderboards.
LeaderboardName: Default
# Minimum speed required for an overtake run to start
MinimumSpeedKph: 80
# Number of seconds a player can drive below the minimum speed before the run ends
TooSlowTimeoutSeconds: 3
# Maximum distance to another for an overtake to count
OvertakeDistanceMeters: 7
# Maximum distance for a close overtake (x3 score multiplier)
CloseOvertakeDistanceMeters: 4
# Define wether the overtake UI is enabled by default (it can always be enabled/disabled via the light bulb in chat) 
EnableUIByDefault: true
# List of random messages to show on collision
CollisionMessages:
  - Collision!
# List of random messages to show on overtake
OvertakeMessages:
  - Overtake
# List of random messages to show on close overtake
CloseOvertakeMessages:
  - Close Overtake!
  - Near Miss!
```

## UI Customization
The overtake lua script is located in `plugins/PatreonOvertakePlugin/lua/overtake.lua`. You can edit this file to change the UI, add logos, etc.  
Note that the score calculation cannot be changed this way because it happens on the server for security reasons.
