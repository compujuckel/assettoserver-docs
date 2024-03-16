---
description: Change weather randomly
---

# RandomWeatherPlugin
Plugin that changes weather randomly.

:::note

For smooth weather transitions and rain you need to set `EnableWeatherFx` to `true` in `extra_cfg.yml`.

:::

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- RandomWeatherPlugin
```

Example configuration  
For a list of weather types that can be used with `WeatherWeights` see [WeatherFX Types](../misc/wfx-types.md)
```yaml title="plugin_random_weather_cfg.yml"
# Which mode should be used for weather randomization 
# Available values: 'Default' and 'TransitionTable'
Mode: TransitionTable
# Minimum duration until next weather change
MinWeatherDurationMinutes: 15
# Maximum duration until next weather change
MaxWeatherDurationMinutes: 60
# Minimum weather transition duration
MinTransitionDurationSeconds: 180
# Maximum weather transition duration
MaxTransitionDurationSeconds: 600
# Weights for weather transition, only listed weathers will be counted
# Check the reference config to see the structure
WeatherTransitions:
  ScatteredClouds:
    ScatteredClouds: 3
    BrokenClouds: 1
    OvercastClouds: 1
  BrokenClouds:
    ScatteredClouds: 0.1
    OvercastClouds: 1
  OvercastClouds:
    ScatteredClouds: 1
    BrokenClouds: 2
    OvercastClouds: 0.2
# Weights for random weather selection, removing a weight or setting it to 0 blacklists a weather
# You can also use decimals like 0.1
WeatherWeights:
  LightThunderstorm: 1
  Thunderstorm: 1
  HeavyThunderstorm: 1
  LightDrizzle: 1
  Drizzle: 1
  HeavyDrizzle: 1
  LightRain: 1
  Rain: 1
  HeavyRain: 1
  LightSnow: 1
  Snow: 1
  HeavySnow: 1
  LightSleet: 1
  Sleet: 1
  HeavySleet: 1
  Clear: 1
  FewClouds: 1
  ScatteredClouds: 1
  BrokenClouds: 1
  OvercastClouds: 1
  Fog: 1
  Mist: 1
  Smoke: 1
  Haze: 1
  Sand: 1
  Dust: 1
  Squalls: 1
  Tornado: 1
  Hurricane: 1
  Cold: 1
  Hot: 1
  Windy: 1
  Hail: 1
```
