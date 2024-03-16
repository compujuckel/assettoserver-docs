---
description: Challenge other players to races with a TXR-like UI
---

# PatreonRaceChallengePlugin
Plugin to challenge other players to races.  
Extended with a simple TXR-like UI and leaderboard with Elo rating.

:::note

PatreonHubPlugin is required for the leaderboard to work.

Forced minimum CSP version of 0.1.77 (1937) and `EnableClientMessages: true` in `extra_cfg.yml` required!

Do not use RaceChallengePlugin and PatreonRaceChallengePlugin at the same time!

:::

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
  - PatreonRaceChallengePlugin
```
Example configuration
```yaml title="plugin_patreon_race_challenge_cfg.yml"
# Number of points players start with. Increase this to make races last longer
MaxPoints: 3000
# Set to false to disable leaderboard and ratings
EnableLeaderboard: true
# Name of leaderboard. Use this if you have multiple servers connected to the hub and want them to have different leaderboards.
# For example if you don't want traffic- and non-traffic servers to show on the same leaderboard, just use different
# leaderboard names for them.
LeaderboardName: Default
# Optional: Make leader lose points when the follower is closer than x meters
LeaderDistanceOffsetMeters: 0
```

## UI Customization
The race challenge lua script is located in `plugins/PatreonRaceChallengePlugin/lua/racechallenge.lua`. You can edit this file to change the UI, add logos, etc.  
Note that the race logic cannot be changed this way because it happens on the server for security reasons.

## How it works
You can drive behind another player controlled car and flash either your headlights or high beams three times to initiate a race challenge.
The challenged player can accept the race by turning on their hazard lights or by writing `/accept` into the chat. If the challenged player fails to do this within 10 seconds or the two cars are not close enough to each other the race challenge will be cancelled.

Both players will start the race with a fixed amount of points. The leading player will not lose any points while the player behind loses points each second. The further the following player is behind, the more points they will lose.

The race ends when a player reaches zero points.
