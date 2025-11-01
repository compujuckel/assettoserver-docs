---
title: Common Configuration Errors
---
AssettoServer will refuse to start with some common misconfigurations. You can choose to ignore these errors by setting the corresponding value in `extra_cfg.yml`.

## Missing car checksums
This error will be shown when `data.acd` cannot be found for one or more cars. A checksum for `data.acd` is required to prevent people from cheating by modifying their car data.

If you want to allow players to modify their car data you have to ignore this warning by setting this in `extra_cfg.yml`:
```yaml
IgnoreConfigurationErrors:
  MissingCarChecksums: true
```

:::note
Setting `MissingCarChecksums: true` does not disable checksums, it only allows the server to start if some of them are missing.  
Checksums that are present will still be loaded by the server.
If your goal is to remove checksums please read [this FAQ section](./faq.md#remove-checksums)
:::

## Missing track params
AssettoServer uses track coordinates and time zone for some features like live weather. At first server startup a list of known track params will be downloaded from here: https://github.com/ac-custom-shaders-patch/acc-extension-config/blob/master/config/data_track_params.ini  
When there is no entry in this file for your track this error will be shown. This should be fixed by creating a Pull Request on the above repository and then forcing AssettoServer to redownload this file by deleting `cfg/data_track_params.ini`.

**To create local track param data instead of creating a Pull Request, read [this FAQ section.](./faq.md#adding-trackparams)**

If you want to ignore this error set this in `extra_cfg.yml`:
```yaml
IgnoreConfigurationErrors:
  MissingTrackParams: true
```

:::caution
If WeatherFX is enabled while track params are missing, time will not be in sync between players and the server.
:::

## Wrong server details
In Content Manager `Server > Details > Mode to provide extra details` you selected `Via ID in name (recommended)`. For AssettoServer this is **NOT** recommended because AssettoServer has its own way to ensure server details are always up to date.

See [this page](./misc/server-details.md) for more info.

If you want to ignore this error set this in `extra_cfg.yml`:
```yaml
IgnoreConfigurationErrors:
  WrongServerDetails: true
```

## Unsafe admin whitelist
There are whitelisted admin SteamIDs in `admins.txt` but `UseSteamAuth` is disabled in `extra_cfg.yml`. This is unsafe because players can gain admin privileges by using SteamID spoofing. Please enable Steam auth to prevent SteamID spoofing.

If you want to ignore this error set this in `extra_cfg.yml`:
```yaml
IgnoreConfigurationErrors:
  UnsafeAdminWhitelist: true
```

## CSP extra options missing from chat
If you added parameters to the `csp_extra_options.ini` without requiring a CSP version, features like teleportation won't show up in the chat menu but will allow players to teleport via apps like comfy map if their installed CSP version supports it.  

To make them selectable in the chat app follow [the instructions on how to require a CSP version.](./thebeginnersguide.md#requiring-csp-version)
