---
description: Change chat colors, nametag color and add name pre-/postfixes for players based on roles
---

# PatreonChatRolesPlugin

:::note

Forced minimum CSP version of 0.1.77 (1937) and `EnableClientMessages: true` in `extra_cfg.yml` required!

* Chat colors require CSP 0.1.79 or higher
* Custom icons require CSP 0.1.80-preview218 or higher

:::

Plugin to change chat color of players, add player icons, and optionally add name prefixes or postfixes for them.  
It is advised to use square brackets for name prefixes/postfixes, since it is not possible to join with them normally.

Please see [this page](../assettoserver-hub/user-groups.md) for general information on user groups.

Example with custom icon and red name in chat:

![](./assets/chatroles.png)

Color and custom icons will be shown in the nametag as well when `New driver tags` is enabled in Content Manager.

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
  - PatreonChatRolesPlugin
```
Example configuration
```yaml title="plugin_patreon_chat_roles_cfg.yml"
# List of roles
Roles:
  # Name of user group
  - UserGroup: default_admins
    # Color of name in chat and new name tags. Make sure to use "quotes" here! CSP 0.1.79 or higher required
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
