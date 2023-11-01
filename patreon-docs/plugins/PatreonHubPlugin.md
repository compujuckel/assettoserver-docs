---
description: Connect a server to AssettoServer Hub
---

# PatreonHubPlugin
Connects this server to an AssettoServer Hub instance. Required for leaderboards of other plugins to work.

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml
EnablePlugins:
  - PatreonHubPlugin
```
Example configuration (add to bottom of `extra_cfg.yml`)
```yaml
---
!PatreonHubConfiguration
# URL of the hub. This default should work fine if AssettoServerHub is running on the same host
Address: http://localhost:5085
# Key as specified in configuration.yml of the hub
Key: YourKeyHere
```
