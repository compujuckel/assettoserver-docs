---
title: User Groups
description: Explanation of AssettoServer user groups
---

# User Groups
AssettoServer handles user permissions via user groups. A user group is usually a text file containing a list of SteamIDs, for example `admins.txt`.  
By default, three user groups (`default_admins`, `default_blacklist`, `default_whitelist`) are defined and point to `admins.txt`, `blacklist.txt`, `whitelist.txt` respectively. Some plugins such as [ReservedSlotsPlugin](plugins/PatreonReservedSlotsPlugin.md) use their own user groups to manage permissions.

## Adding local User Groups
To create a new file-based user group, just add it to `extra_cfg.yml`:
```yaml title="extra_cfg.yml (AssettoServer)"
UserGroups:
  default_admins: admins.txt
  default_blacklist: blacklist.txt
  default_whitelist: whitelist.txt
# highlight-next-line
  my_group: my_group.txt
```

The group `my_group` can now be used in the configuration of plugins.

## Synchronizing User Groups via AssettoServer Hub
User groups can be synchronized to multiple game servers via AssettoServer Hub.

### Hub Setup
In `configuration.yml` of your Hub, add a new file-based user group:
```yaml title="configuration.yml (AssettoServer Hub)"
FileBasedUserGroups:
  - Name: my_group
    Path: my_group.txt
```

### Game Server Setup
When specifying a user group, prefix the user group name in `extra_cfg.yml` with a `+`, for example `+my_group`. This will cause the [PatreonHubPlugin](../plugins/PatreonHubPlugin) to load this user group from AssettoServer Hub.

### Examples

#### Synchronizing Blacklist
```yaml title="configuration.yml (AssettoServer Hub)"
FileBasedUserGroups:
  - Name: blacklist
    Path: blacklist.txt
```

```yaml title="extra_cfg.yml (AssettoServer)"
BlacklistUserGroup: +blacklist
```

#### Synchronizing Whitelist
```yaml title="configuration.yml (AssettoServer Hub)"
FileBasedUserGroups:
  - Name: whitelist
    Path: whitelist.txt
```

```yaml title="extra_cfg.yml (AssettoServer)"
WhitelistUserGroup: +whitelist
```

#### Synchronizing Reserved Slots
```yaml title="configuration.yml (AssettoServer Hub)"
FileBasedUserGroups:
  - Name: reserved
    Path: reserved.txt
```

```yaml title="extra_cfg.yml (AssettoServer, under !PatreonReservedSlotsConfiguration)"
ReservedEntryListSlotsUserGroup: +reserved
# and/or
ReservedSlotsUserGroup: +reserved
```
