---
title: Changelog
---
## Patreon Plugins

### v0.0.37

#### PatreonChatRolesPlugin (new!)

This plugin allows you to change the chat name colors of players and assign icons to groups, e.g. for admins, VIP, etc.

Thanks to **No Hesi** for commissioning this plugin!

#### PatreonAnalyticsPlugin (new!)

This plugin allows you to record various metrics about your servers and your players.

* Client metrics
  * General info: Resolution, MSAA, World Detail, Fullscreen, Vsync, VR, Triplescreen, Shifter, FPS cap
  * Reported continously: FPS, CPU occupancy
* Server metrics (commissioned by **No Hesi**)
  * For each car: Time spent empty / in loading screen / idle / driving, number of collisions

#### PatreonRaceChallengePlugin

* New parameter `LeaderDistanceOffsetMeters` to make leader lose points when follower is close

#### PatreonReservedSlotsPlugin

* Add support for multiple groups (commissioned by **No Hesi**)

:::caution Breaking Changes!

Please review the [documentation](./plugins/PatreonReservedSlotsPlugin.md).

:::

#### PatreonTimingPlugin

* Record more useful info for lap times: Input method, shifter, tyre choice, car checksum, sector times, weather, track grip, track/ambient temperature, in-game time

### v0.0.36

#### PatreonRaceChallengePlugin

* Fix chat commands not working

#### PatreonSafetyRatingPlugin

* Fix chat name colors on CSP &lt;0.1.79

#### PatreonSpeedTrapPlugin

* Fix speed trap flash not showing for other players

### v0.0.35

#### PatreonSafetyRatingPlugin (new!)

This plugin calculates a safety rating based on number of collisions and driven distance. Clean drivers will get a higher rating than people crashing every corner.  
You can also set a color for each safety rating rank that will be shown in chat and name tags.

#### PatreonTimingPlugin

* Disable timing for cars marked as `AI=fixed` (admins taking these cars were able to set times on the leaderboard)

#### PatreonSpeedTrapPlugin

* Ability to customize image overlays with Lua
* Fix wrong calculation of forward vector for custom speed traps
* add new variables `Guid` and `Car` for Discord webhooks

### v0.0.34

#### PatreonTwitchChatPlugin (new!)

If you're a streamer and running your own servers, this plugin might be helpful for you. It will forward all messages from your Twitch chat to the AC ingame chat and (optionally) vice versa.

Thanks to **AEGIS | VISUALS** for commissioning this plugin!

#### PatreonSpeedTrapPlugin

* Now works with maps other than SRP, custom speed traps can be defined in the [configuration](./plugins/PatreonSpeedTrapPlugin.md#custom-speed-traps)
* Overlay and grayscale can be disabled
* Allow players to disable picture upload, can help with slow internet connections

#### PatreonReservedSlotsPlugin

* Configuration has been updated to allow reserving specific entry list slots
* Using the new AssettoServer Hub user groups, it is possible to sync reserved slots across all your game servers

:::caution Breaking Changes!

Please review the [documentation](./plugins/PatreonReservedSlotsPlugin.md).

:::

## AssettoServer Hub

### v0.0.7

#### Timing Leaderboard
* Do not require `Default` leaderboard to be present, the first leaderboard will be used instead
* New parameter `TimingLeaderboardExtraColumns` to control which columns are shown on the leaderboards
* Use friendly car/track names instead of folder names ([more info](./assettoserver-hub/index.md#friendly-names))

#### Discord
* Synchronization of user groups should be more reliable

#### Other
* Slight improvements to mobile UI for leaderboards
* Prometheus metrics for daily/weekly/monthly active/new users (available via `/metrics` endpoint, commissioned by **No Hesi**)

### v0.0.6

#### Timing Leaderboard
* Add filter for current month / monthly leaderboards
* Add API
* Hide tracks from a leaderboard when no lap times are set for that track + leaderboard combination
* Add point-based timing leaderboard

#### Discord
* Add Discord Bot
* Add ability to link Steam account to Discord account
* Add Discord role mappings
* Add server status embeds
* Add Discord timing leaderboards
* Add Discord race challenge leaderboards

### v0.0.5

* Add race challenge leaderboard
* Improvements to timing leaderboards
* Add support for safety ratings
* Updated to .NET 7
* Fix menu not working on mobile

### v0.0.4

* Added a web interface for timing leaderboards ([demo](https://demo.assettoserver.org/timing))
* Introduced a new concept called user groups, making it possible to have multiple whitelists/blacklists and sync all lists to your game servers

:::caution Breaking changes!

Synchronizinig blacklist/whitelist to your game servers requires new configuration, please check the [documentation](./assettoserver-hub/index.md#how-to-sync-user-groups-from-the-hub-to-your-game-servers).

:::