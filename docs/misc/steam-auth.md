---
title: Steam Authentication on Linux
description: How to install the steam server SDK libraries on Linux for AssettoServer.
---

Steam Authentication on Linux can be slightly confusing to set up, but is relatively straight forward. Because the vanilla acServer does not have Steam Authentication, we have to grab the libraries ourselves.

This should be the same for all distros, with slight possible differences. Here we are using Debian 12.

:::note
On Ubuntu, it is reported that you should just be able to install SteamCMD and the libraries may install themselves to the correct location, but this needs to be tested.
:::

## Step 1. Install SteamCMD
This is different for every distro, please follow the instructions from [Valve's Wiki](https://developer.valvesoftware.com/wiki/SteamCMD#Linux).

## Step 2. Grab the Libraries
Using SteamCMD, we can grab the libraries and download them to our home folder.

Running this command should do the trick:
```shell
steamcmd +force_install_dir ~/sdk_lin +login anonymous +app_validate 1007 +quit
```

## Step 3. Copy Libraries to Their Proper Locations
The directory structure of what we just downloaded should look like this. We need to copy the `Linux64` bin to `~/.steam/sdk64`

```
sdk_lin
├──Linux64
│  └──steamclient.so
├──SteamApps
│  └──<irrelevant files>
└──steamclient.so
```
As you can see there are two `steamclient.so` files. We need the file from the `Linux64` directory, and copy it to `~/.steam/sdk64/steamclient.so`

After this is complete, you should be able to enable steam auth via `extra_cfg.yml` without issue

### Bash Script
```shell
#! /bin/bash
steamcmd +force_install_dir ~/sdk_lin +login anonymous +app_validate 1007 +quit
mkdir ~/.steam/sdk64
cp ~/sdk_lin/Linux64/steamclient.so ~/.steam/sdk64/
```

### Common Issues
If you get an error regarding 
```
/home/<user>/.steam/sdk64/steamclient.so: wrong ELF class: ELFCLASS32
```
You have copied the wrong version of `steamclient.so`

### More Info
[Steam Wiki on SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD#Linux)

[Facepunch Wiki on Server Libraries](https://wiki.facepunch.com/steamworks/Server_Library)