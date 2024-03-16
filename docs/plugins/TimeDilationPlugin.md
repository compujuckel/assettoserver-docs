---
description: Dynamically adjust the time multiplier based on the sun position
---

# TimeDilationPlugin

Plugin to dynamically adjust the time multiplier based on the sun position or time of day. It can be used to make time pass faster during daytime and slower during nighttime for example.

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- TimeDilationPlugin
```

Example configuration
```yaml title="plugin_time_dilation_cfg.yml"
# Which mode should be used for time dilation 
# Available values: 'SunAngle' and 'Time'
# SunAngle is preferred because it works independent of seasons and longitude of the track
Mode: SunAngle
# Table to map sun angles to time multipliers. SunAngle is the altitude of the sun in degrees. 90° = sun directly overhead, -90° = sun directly underneath
SunAngleLookupTable:
- SunAngle: 6
  TimeMult: 4
- SunAngle: 12
  TimeMult: 8
# Table to map time to time multipliers. For time use format 24-hour format without leading zeros. For example 6:00 or 15:30
TimeLookupTable:
- Time: 4:20
  TimeMult: 6
- Time: 19:00
  TimeMult: 9

```