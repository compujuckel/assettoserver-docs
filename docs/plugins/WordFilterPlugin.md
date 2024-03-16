---
description: Suppress certain chat message patterns and disallow players with certain usernames to join
---

# WordFilterPlugin
## Features
* Disallow certain player names
* Filter chat messages
* Autoban on certain chat messages
## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- WordFilterPlugin
```

Example configuration  
**All patterns are regular expressions. If you don't know what regular expressions are I'd highly recommend reading about them first.**
```yaml title="plugin_word_filter_cfg.yml"
# Username patterns it won't be possible to join with
ProhibitedUsernamePatterns:
  - "^Player$"
  - "^RLD!$"
  - "^Traffic \\d+"
# Chat message patterns that will automatically ban the player on sending them
BannableChatPatterns:
  - "nicecar"
  - "fallout"
# Chat message patterns that will not be broadcasted to other players
ProhibitedChatPatterns:
  - "^DRIFT-STRUCTION POINTS:"
  - "^ACP: App not active$"
  - "^D&O Racing APP:"
```