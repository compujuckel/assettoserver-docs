---
description: Reserve car models and slots for "reserved" players
---

# PatreonReservedSlotsPlugin
Plugin to reserve car models and slots for "reserved" players. Only players with SteamIDs listed in the configured user groups will be allowed to join on these slots.  

Please see [this page](../assettoserver-hub/user-groups) for general information on user groups.

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml
EnablePlugins:
  - PatreonReservedSlotsPlugin
```
Example configuration (add to bottom of `extra_cfg.yml`)
```yaml
---
!PatreonReservedSlotsConfiguration
# List of entry list slots that are always reserved
ReservedEntryListSlots:
    # List of reserved entry list slots (get the number from CAR_? in entry_list.ini)
  - Slots: [1, 2, 3]
    # Name of user group for these reserved slots
    UserGroup: reserved_1
  - Slots: [4, 5, 6]
    UserGroup: reserved_2
# Number of dynamic reserved slots. The number of unreserved slots is calculated like this: Total slots - Fixed AI slots - Reserved entry list slots - Dynamic reserved slots
DynamicReservedSlotsCount: 2
# Name of user group for dynamic reserved slots
DynamicReservedSlotsUserGroup: default_whitelist
```
