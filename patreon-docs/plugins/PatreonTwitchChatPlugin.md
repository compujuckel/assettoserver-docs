---
description: Link in-game chat to the chat of a Twitch channel
---

# PatreonTwitchChatPlugin
Plugin to link in-game chat to the chat of a Twitch channel.

A Twitch access token can be obtained [here](https://twitchtokengenerator.com/) (select "Bot Chat Token")

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
  - PatreonTwitchChatPlugin
```
Example configuration
```yaml title="plugin_patreon_twitch_chat_cfg.yml"
# Username of the Twitch account you generated the access token for
TwitchUsername: YourUsername
# Twitch Access Token
TwitchAccessToken: yourAccesstoken
# Twitch channel name that should be linked to in-game chat
Channel: yourChannelName
# Set to true if in-game messages should be sent to Twitch chat
ForwardIngameMessages: false
# Show raw Twitch messages in server log
Debug: false
```
