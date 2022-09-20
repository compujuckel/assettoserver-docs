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

## Missing track params
AssettoServer uses track coordinates and time zone for some features like live weather. At first server startup a list of known track params will be downloaded from here: https://github.com/ac-custom-shaders-patch/acc-extension-config/blob/master/config/data_track_params.ini  
When there is no entry in this file for your map this error will be shown. This should be fixed by creating a Pull Request on the above repository and then forcing AssettoServer to redownload this file by deleting `cfg/data_track_params.ini`.

You can manually add an entry for your track in `cfg/data_track_params.ini`, **but if you enable WeatherFX in `extra_cfg.yml`, time will not be in sync between server and client, unless you add that entry to `extension/config/data_track_params.ini` in your AC folder as well.**

If you want to ignore this error set this in `extra_cfg.yml`:
```yaml
IgnoreConfigurationErrors:
  MissingTrackParams: true
```

## Wrong server details
In Content Manager `Server > Details > Mode to provide extra details` you selected `Via ID in name (recommended)`. For AssettoServer this is **NOT** recommended because AssettoServer has its own way to ensure server details are always up to date.

See [this page](https://github.com/compujuckel/AssettoServer/wiki/Server-Details) for more info.

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
