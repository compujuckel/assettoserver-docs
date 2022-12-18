---
description: Calculate a safety rating based on driven distance and collisions
---

# PatreonSafetyRatingPlugin

This plugin assigns ranks to players based on the number of collisions per driven distance. This makes it easy for other players to identify bad drivers or rammers.

:::note

PatreonHubPlugin is required for this plugin to work.

Forced minimum CSP version of 0.1.77 (1937) and `EnableClientMessages: true` in `extra_cfg.yml` required!

:::

## How it works

The plugin assigns contact points to all collisions of a player and divides the driven distance by that.  
The number of points for a collisions depends on relative speed and the type of collision (AI/Player/Environment). The score of a player is recalculated after every 25km driven.  
The score has a range of 0 (worst) to 10 (best).

## Configuration

Enable the plugin in `extra_cfg.yml`
```yaml
EnablePlugins:
  - PatreonSafetyRatingPlugin
```
Example configuration (add to bottom of `extra_cfg.yml`)
```yaml
---
!PatreonSafetyRatingConfiguration
# Only allow admins to view safety ratings
AdminOnly: false
# Change driver chat name colors based on safety rating rank
EnableChatColors: true
```

## Hub configuration

Ranks are configured in AssettoServer Hub. Example snippet for `configuration.yml`:

```yaml
# List of ranks for PatreonSafetyRatingPlugin
SafetyRatingRanks:
- Name: A
  Color: '#00FF00'
  MinimumRating: 3
- Name: B
  Color: 
  MinimumRating: 1
- Name: C
  Color: '#FF0000'
  MinimumRating: 0
```
