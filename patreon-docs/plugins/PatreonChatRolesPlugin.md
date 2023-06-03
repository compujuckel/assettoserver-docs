---
description: Change chat colors, nametag color and add name pre-/postfixes for players based on roles
---

# PatreonChatRolesPlugin
Plugin to change chat color of players and optionally add name prefixes or postfixes for them.  
It is advised to use square brackets for name prefixes/postfixes, since it is not possible to join with them normally.

Please see [this page](../assettoserver-hub/user-groups) for general information on user groups.

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml
EnablePlugins:
  - PatreonChatRolesPlugin
```
Example configuration (add to bottom of `extra_cfg.yml`)
```yaml
---
!PatreonChatRolesConfiguration
# List of roles
Roles:
  # Name of user group
  - UserGroup: default_admins
    # Color of name in chat and new name tags. Make sure to use "quotes" here!
    Color: "#ff0000"
    # Name prefix. Will be added in front of the player name (optional)
    NamePrefix: "[ADM] "
    # Name postfix. Will be added to the end of the player name (optional)
    NamePostfix: " (Admin)"
    # Image to replace the country flag with. CSP 0.1.80-preview218 or higher required
    IconUrl: 
# Prevent players from joining with role name prefixes/postfixes.
# For example, when trying to join with "Player (Admin)", the connection will be denied.
ProhibitRoleImpersonation: true
```
