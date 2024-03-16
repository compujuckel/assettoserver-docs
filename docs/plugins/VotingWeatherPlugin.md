---
description: Let players vote for a server weather at a specified interval
---

# VotingWeatherPlugin
Plugin to let players vote for a server weather at a specified interval.

:::note

For smooth weather transitions and rain you need to set `EnableWeatherFx` to `true` in `extra_cfg.yml`.

:::

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- VotingWeatherPlugin
```

Example configuration  
For a list of weather types that can be used with `BlacklistedWeathers` see [WeatherFX Types](../misc/wfx-types.md)
```yaml title="plugin_voting_weather_cfg.yml"
# List of weather types that can't be voted on
BlacklistedWeathers:
- Cold
- Hot
- Windy
# Number of choices players can choose from at each voting interval
NumChoices: 3
# How often a vote takes place
VotingIntervalMinutes: 10
# How long the vote stays open
VotingDurationSeconds: 30
```