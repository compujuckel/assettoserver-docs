---
title: User Groups
description: Explanation of AssettoServer user groups
---

# User Groups
AssettoServer handles user permissions via user groups. A user group is usually a text file containing a list of SteamIDs, for example `admins.txt`.  
By default, three user groups (`default_admins`, `default_blacklist`, `default_whitelist`) are defined and point to `admins.txt`, `blacklist.txt`, `whitelist.txt` respectively. Some plugins such as [ReservedSlotsPlugin](plugins/PatreonReservedSlotsPlugin.md) use their own user groups to manage permissions.

## Adding local User Groups
To create a new file-based user group, just add it to `extra_cfg.yml`:
```yaml
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
```yaml
FileBasedUserGroups:
  - Name: my_group
    Path: my_group.txt
```

### Game Server Setup
When specifying a user group, prefix the user group name in `extra_cfg.yml` with a `+`, for example `+my_group`. This will cause the [PatreonHubPlugin](../plugins/PatreonHubPlugin) to load this user group from AssettoServer Hub.

### Examples

#### Synchronizing Blacklist
AssettoServer Hub configuration (`configuration.yml`):
```yaml
FileBasedUserGroups:
  - Name: blacklist
    Path: blacklist.txt
```

AssettoServer configuration (`extra_cfg.yml`):
```yaml
BlacklistUserGroup: +blacklist
```

#### Synchronizing Whitelist
AssettoServer Hub configuration (`configuration.yml`):
```yaml
FileBasedUserGroups:
  - Name: whitelist
    Path: whitelist.txt
```

AssettoServer configuration (`extra_cfg.yml`):
```yaml
BlacklistUserGroup: +whitelist
```

#### Synchronizing Reserved Slots
AssettoServer Hub configuration (`configuration.yml`):
```yaml
FileBasedUserGroups:
  - Name: reserved
    Path: reserved.txt
```

AssettoServer configuration (`extra_cfg.yml`, under `!PatreonReservedSlotsConfiguration`):
```yaml
ReservedEntryListSlotsUserGroup: +reserved
# and/or
ReservedSlotsUserGroup: +reserved
```
