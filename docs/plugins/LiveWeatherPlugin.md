---
description: Get realtime weather from OpenWeatherMap
---

# LiveWeatherPlugin
Plugin to get realtime weather from OpenWeatherMap.

:::note

For smooth weather transitions and rain you need to set `EnableWeatherFx` to `true` in `extra_cfg.yml`.

:::

To get your API key a free account on https://openweathermap.org/ is required.
## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- LiveWeatherPlugin
```
Example configuration
```yaml title="plugin_live_weather_cfg.yml"
OpenWeatherMapApiKey: <your api key here>
UpdateIntervalMinutes: 10
```