---
description: Allow players to change skins dynamically
draft: true
---

# PatreonDynamicSkinsPlugin
Allow players to change skins without leaving the game. Skins will be downloaded from a remote server and don't have to be installed on clients.

:::note

Forced minimum CSP version of 0.1.77 (1937) and `EnableClientMessages: true` in `extra_cfg.yml` required!

:::

:::note

This plugin will not work without a connection to AssettoServer Hub!

:::

## Limitations
* Once a car skin is changed, CSP color changing stops working for that car.
* Skin .dds filenames are case sensitive and **must** match the case of the texture slot!  
  For example, if a texture slot is called `Metal_Detail.dds` and a skin applies a texture named `metal_detail.dds`, the texture will not be reset properly after the next skin change.

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml
EnablePlugins:
  - PatreonDynamicSkinsPlugin
```
No further plugin-specific configuration in `extra_cfg.yml` is required.

## Hub Configuration
The list of all skins and their downloads are stored in AssettoServer Hub.  
tbd
