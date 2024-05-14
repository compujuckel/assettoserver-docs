---
title: Admin Commands
---

## Get admin privileges

`/admin <adminPassword>`

| Parameter     | Description                                              |
| ------------- | -------------------------------------------------------- |
| adminPassword | The admin password that has been set in `server_cfg.ini` |

## Kick player

`/kick <id> <reason>`  
`/kick_id <id> <reason>`

| Parameter | Description |
| --------- | ------------------------------------------------------------- |
| id        | The car ID or name of the player to be kicked.                |
| reason    | Optional, will display a reason on why the player was kicked. |

## Ban player

`/ban <id> <reason>`  
`/ban_id <id> <reason>`

| Parameter | Description                                                   |
| --------- | ------------------------------------------------------------- |
| id         | The car ID or name of the player to be banned                |
| reason    | Optional, will display a reason on why the player was banned. |

## Force next session

`/next_session`

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| None      | Forces the server to move to the next session. |

## Restart session

`/restart_session`

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| None      | Restarts the current session.                  | 

## Teleport player to pits

`/pit <id>`

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| id        | The car ID or name of the player to be teleported.    |

## Set server time

`/settime <time>`

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| time      | The time in 24-hour format, for example `/settime 13:45`  |

## Set weather configuration

`/setweather <weatherId>`

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| weatherId | The ID of the weather specified in the `server_cfg.ini`<br/>For example, if you want to use `WEATHER_0`, type `/setweather 0` |

## List available CSP WeatherFX types

`/cspweather`

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| None      | Lists all available CSP WeatherFX types.       | 

## Set CSP weather

`/setcspweather <weatherType> <transitionDuration>`

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| weatherType | Name of the WeatherFX type, [list of possible values](./misc/wfx-types.md) or use `/cspweather` ingame. |
| transitionDuration | Weather transition duration in seconds, requires `EnableWeatherFx` set to `true` in `extra_cfg.yml` |

## Set rain properties

`/setrain <intensity> <wetness> <water>`

| Parameter | Description                                |
| --------- | ------------------------------------------ |
| intensity | The rain intensity.                        |
| wetness   | The track wetness.                         |
| water     | The amount of standing water on the track. |

## Set track grip

`/setgrip <gripValue>`

| Parameter | Description           |
| --------- | --------------------- |
| gripValue | The track grip value. |

## Calculate distance to player

`/distance <id>`

| Parameter | Description                                                    |
| --------- | -------------------------------------------------------------- |
| id        | The car ID or name of the player to calculate the distance to. |

## Force player headlights

`/forcelights <on/off> <id>`

| Parameter | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| on/off    | On = Active forcing of headlights, Off = Disable forcing of headlights |
| id        | The car ID or name of the player.                                      |

:::note

Forcing headlights for a player will still give them the opportunity to turn on/off their lights locally. Their lights will however appear turned on for all other players.

:::

## Show player information (IP address, Steam profile)

`/whois <id>`

| Parameter | Description                       |
| --------- | --------------------------------- |
| id        | The car ID or name of the player. |

## Set restrictor

`/restrict <id> <value>`

| Parameter | Description                       |
| --------- | --------------------------------- |
| id        | The car ID or name of the player. |
| value     | From 0 to 400, cuts the car's engine power. Limits power in the top range of the power band, will not kill total power. <br/> Calculation: `HP_Final = HP_Original * (1 - rpm * (restrictor / 4000000))` |

## Set ballast

`/ballast <id> <ballast>`

| Parameter | Description                       |
| --------- | --------------------------------- |
| id        | The car ID or name of the player. |
| ballast   | Ballast to be added to the car in kg. Excessive ballast can severely affect handling and car behaviour. |

## Set server configuration parameters

:::caution

Only use this for testing! All changes made with this command will be lost after a server restart.

:::

`/set <key> <value>`

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| key       | The name of the server configuration parameter to set. |
| value     | The value to set the parameter to.                     |

:::note

Parameters in `server_cfg.ini` are prefixed with `Server.`, Parameters in `extra_cfg.yml` with `Extra.`.  
Not all values can be changed at runtime.

**Examples:**  
`/set Server.Name Start 123` - changes Server name to `Start 123`  
`/set Extra.AiParams.MinAiSafetyDistanceMeters 100` - set minimum distance between AI cars to `100` meters  
`/set Extra.AiParams.SplineHeightOffsetMeters 0.2` - set spline height offset to `0.2` meters

:::

## Whitelist a SteamID

`/whitelist <steamId>`

| Parameter | Description                |
| --------- | -------------------------- |
| steamId   | The SteamId of the player. |

## Send Chat Message as CONSOLE

`/say <message>`

| Parameter | Description |
| --------- | ----------- |
| message   | The message to send to the ingame chat. <br/> Example: `/say Hello World` will result in `CONSOLE: Hello World` ingame. |
