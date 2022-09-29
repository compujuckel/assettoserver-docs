---
title: Changelog
---
## Patreon Plugins

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

### v0.0.4

* Added a web interface for timing leaderboards ([demo](https://demo.assettoserver.org/timing))
* Introduced a new concept called user groups, making it possible to have multiple whitelists/blacklists and sync all lists to your game servers

:::caution Breaking changes!

Synchronizinig blacklist/whitelist to your game servers requires new configuration, please check the [documentation](./assettoserver-hub/index.md#how-to-sync-user-groups-from-the-hub-to-your-game-servers).

:::