---
description: Define custom chat commands
---

# CustomCommandPlugin
This plugin allows you to define custom chat commands that respond with a predefined reply.

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
  - CustomCommandPlugin
```
Example configuration
```yaml title="plugin_discord_cfg.yml"
# Configure your custom commands
Commands:
    alias: some spicy response
    discord: https://discord.gg/uXEXRcSkyz
    docs: https://assettoserver.org/
```

## Usage
In-game you will be able to use the configured commands with the chat app.  
By typing `/alias` you will get the response `some spicy response`.

Only the person sending the command will get the response from the server.
