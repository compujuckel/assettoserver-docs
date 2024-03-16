---
description: Send chat messages / kicks / bans to a Discord channel
---

# DiscordAuditPlugin
## Features
* Send a Discord message on every kick/ban
* Log all chat messages to a Discord channel

Generate Webhook URLs: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks
## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
  - DiscordAuditPlugin
```
Example configuration
```yaml title="plugin_discord_cfg.yml"
# Avatar picture URL
PictureUrl: 
# Discord webhook URL for kick/ban events
AuditUrl: 
# Discord webhook URL for chat messages
ChatUrl: 
# Set this to true if the Discord username of the bot should be the AC server name
ChatMessageIncludeServerName: false
# Set this to true if the audit message should include the Steam ID
ChatMessageIncludeSteamID: false
# Optional list of SteamIDs whose chat messages should not be forwarded to Discord
ChatIgnoreGuids: []
```
