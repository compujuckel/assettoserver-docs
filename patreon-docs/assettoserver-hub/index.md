# AssettoServer Hub

## Introduction
AssettoServerHub is a central data store for multiple AssettoServer instances. It allows servers to share things
like leaderboards, blacklist, whitelist and more in the future.

## Getting started
When starting `AssettoServer.Hub` for the first time, a default configuration file called `configuration.yml` will be generated.  
Use the server address and generated key to connect an AssettoServer instance by loading and configuring [PatreonHubPlugin](../plugins/PatreonHubPlugin.md).

## Web Interface
The web interface can be reached at the `HttpPort` you specified in your config, for example `http://yourip:8000`. You can also check out a demo [here](https://demo.assettoserver.org).

## How to add more servers
You can add more servers by adding more `Name` entries like this:
```yaml
# Port that the hub will listen for server (gRPC) connections
GrpcPort: 5085
# Port that the hub will listen on for the web interface
HttpPort: 8000
# Name of the hub, will be shown in web page titles
HubName: AssettoServer Hub
# Filename of main logo in wwwroot/images
MainLogoFile: logo.svg
# Filename of logo shown in nav bar in wwwroot/images
NavbarLogoFile: logo.svg
# List of keys that are allowed to connect to the hub. Do not share these keys with other people!
Keys:
- Name: server-1
- Name: another-server
- Name: server-3
# List of file-based user groups
FileBasedUserGroups:
  - Name: blacklist
    Path: blacklist.txt
  - Name: whitelist
    Path: whitelist.txt
```

After starting the hub, keys will be automatically generated for each entry without a key. You can then enter the generated key
in your AssettoServer configuration.

## How to sync user groups from the Hub to your game servers
When specifying a user group, prefix the user group name with a `+`. This will cause the PatreonHubPlugin to load this user group from AssettoServer Hub.

**Example (Blacklist)**  
Set `BlacklistUserGroup` to `+blacklist` in `extra_cfg.yml`.

**Example (Whitelist)**  
Set `WhitelistUserGroup` to `+whitelist` in `extra_cfg.yml`.

**Example (PatreonReservedSlotsPlugin)**  
Set `ReservedEntryListSlotsUserGroup` and/or `ReservedSlotsUserGroup` to `+reserved` in `extra_cfg.yml` and create a new file-based user group in `configuration.yml` of your Hub:  
```yaml
FileBasedUserGroups:
  - Name: reserved
    Path: reserved.txt
```

## How it works
AssettoServerHub and AssettoServer are using gRPC to communicate. Data is stored in an SQLite database called `Hub.db`.