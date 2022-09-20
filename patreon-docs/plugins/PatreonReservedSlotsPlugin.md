---
description: Reserve car models and slots for "reserved" players
---

# PatreonReservedSlotsPlugin
Plugin to reserve car models and slots for "reserved" players. Only players with SteamIDs listed in the configured GUID list files will be allowed to join on these slots.

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
# List of entry list slots that are always reserved. Use "ReservedEntryListSlots: []" to disable
ReservedEntryListSlots: [0, 1, 2]
# Number of reserved slots. The number of unreserved slots is calculated like this: Total slots - Fixed AI slots - Reserved car model slots - Reserved slots. 0 to disable
ReservedSlotsCount: 0
# Name of user group for reserved entry list slots
ReservedEntryListSlotsUserGroup: reserved
# Name of user group for reserved slots
ReservedSlotsUserGroup: reserved
```
