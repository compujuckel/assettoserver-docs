---
title: Admin Commands
---

### Teleport player to pits

`/pit <id>`

| Parameter | Description                                                   |
| --------- | ------------------------------------------------------------- |
| id        | The car ID or name of the player to be teleported             |

### Kick player

`/kick <id> <reason>`  
`/kick_id <id> <reason>`

| Parameter | Description                                                   |
| --------- | ------------------------------------------------------------- |
| id        | The car ID or name of the player to be kicked                 |
| reason    | Optional, will display a reason on why the player was kicked. |

### Ban player

`/ban <ID> <reason>`  
`/ban_id <ID> <reason>`

| Parameter | Description                                                   |
| --------- | ------------------------------------------------------------- |
| id        | The car ID or name of the player to be banned                 |
| reason    | Optional, will display a reason on why the player was banned. |

### Set server time

`/settime <time>`

| Parameter | Description                                                   |
| --------- | ------------------------------------------------------------- |
| time      | Time (HH:mm), for example `/settime 13:45`                    |

### Set weather configuration

`/setweather <weatherId>`

| Parameter | Description                                                   |
| --------- | ------------------------------------------------------------- |
| weatherId | The ID of the weather specified in the `server_cfg.ini`<br/>For example, if you want to use `WEATHER_0`, type `/setweather 0`       |

### Get a list of CSP weather types

`/cspweather`

### Set weather type

`/setcspweather <weatherType> <transitionDuration>`

| Parameter | Description                                                   |
| --------- | ------------------------------------------------------------- |
| weatherType | WeatherFX type ([list of possible values](./misc/wfx-types.md)) |
| transitionDuration | How long the weather transition should take (seconds), only functional when `EnableWeatherFx` is set to `true` in `extra_cfg.yml` |

### Force headlights for a player

`/forcelights <on/off> <id>`

| Parameter | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| on/off    | On = Active forcing of headlights, Off = Disable forcing of headlights  |
| id        | The car ID or name of the player                                        |

**NOTE**: Forcing headlights for a player will still give him the opportunity to turn on/off his lights locally. His
lights will however appear turned on for all other players.

### Show player information (IP address, Steam profile)

`/whois <id>`

| Parameter | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| id        | The car ID or name of the player                                        |

### Set ballast and restrictor

`/restrict <id> <restrictor> <ballast>`

| Parameter | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| id        | The car ID or name of the player                                        |
| restrictor| From 0 to 100%, cuts the car's engine power.  It limits power in the top range of the power band, will not kill total power |
| ballast   | Ballast to be added to the car in kg. Excessive ballast can severely affect handling and car behaviour |

### Change a configuration value

`/set <key> <value>`

| Parameter | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| key       | Name of the configuration field                                         |
| value     | New value                                                               |

Values in `server_cfg.ini` are prefixed with `Server.`, values in `extra_cfg.yml` with `Extra.`.  
Not all values can be changed at runtime.

:::caution

Only use this for testing! All changes made with this command will be lost after a server restart.

:::

#### Examples
`/set Server.Name Start 123` - changes Server name to `Start 123`  
`/set Extra.AiParams.MinAiSafetyDistanceMeters 100` - set minimum distance between AI cars to 100 meters  
`/set Extra.AiParams.SplineHeightOffsetMeters 0.2` - set spline height offset to 0.2 meters

### Whitelist a SteamID

`/whitelist <guid>`

| Parameter | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| guid      | The SteamID of the player                                               |