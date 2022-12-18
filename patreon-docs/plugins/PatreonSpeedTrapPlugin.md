---
description: Enable the speed traps on Shutoko Revival Project
---

# PatreonSpeedTrapPlugin
Enables the speed traps on Shutoko Revival Project.  
If a player drives with more than 100km/h trough a speed trap they'll see a red flash and optionally an evidence picture will be sent to a Discord channel.

:::note

Forced minimum CSP version of 0.1.77 (1937) and `EnableClientMessages: true` in `extra_cfg.yml` required!

:::

:::caution

Enabling evidence pictures can lead to lag spikes on clients due to the picture upload!  
Additionally the image processing is taxing on the server CPU. Don't use this if you're running the server on a toaster.

:::

![Example image](./assets/speedtrap-image.png)

[Map of speed trap locations](https://cdn.discordapp.com/attachments/943940311552507934/993845403755741266/Shutoko_speed_camera_map.jpg) (thanks CaptFingerpaint!)

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml
EnablePlugins:
  - PatreonSpeedTrapPlugin
```
Example configuration (add to bottom of `extra_cfg.yml`)
```yaml
---
!PatreonSpeedTrapConfiguration
# This number will be added to the picture ID. It can be used to identify different servers by their ID
NumberOffset: 100
# Enable evidence picture processing
EnablePictures: true
# Enable image overlay to make it look like a real Japanese speed trap image
EnableOverlay: true
# Convert image to grayscale
Grayscale: true
# Allow players to disable picture upload. Can be helpful for people with a slow internet connection
AllowDisablingPictureUpload: true
# Enable debug app for cameras
Debug: false
DiscordWebhook:
  # Discord webhook URL for evidence pictures
  Url: https://discord.com/api/webhooks/...
  # Username of the bot
  Username: 速度違反自動取締装置
  # Avatar URL of the bot
  PictureUrl: https://cdn.discordapp.com/attachments/...
  # Template for the message in Scriban format. This example was used in the SRP 2022 April Fools event.
  # Possible variables: SpeedTrapId, Counter, Name, Speed, AllowedSpeed, Lane
  MessageTemplate: |-
    番号　{{ SpeedTrapId | math.format "000" }}・{{ Counter | math.format "000" }}
    違反者　{{ Name }}
# Define custom speed traps here if you are not using SRP 
CustomSpeedTraps:
```

### Custom image overlays

Images can be completely customized using Lua. Source code for the default overlay can be found in the plugin folder `lua/script.lua`.
This plugin uses ImageMagick (or more specifically [Magick.NET](https://github.com/dlemstra/Magick.NET)) to process images.

### Custom Speed Traps

If you want to use this plugin on maps other than SRP it is possible to define custom speed trap locations.  
You can find the values for `Position` and `Forward` the same way as you would for [PatreonTimingPlugin](./PatreonTimingPlugin.md).
Camera locations can be found using the in-game Speed Trap debug app. Set `Debug: true` to enable it.
It can be opened via the light bulb in the chat app.

Example speed trap on Imola, at the 300m board of the first corner:
```yaml
CustomSpeedTraps:
  # ID of speed trap
  - Id: 1
    # Position of detection line
    Position: { X: -192.78, Y: -82.89, Z: -426.28 }
    # Forward vector of detection line
    Forward: { X: -195.07, Y: -82.9, Z: -425.97 }
    # Radius around detection point
    RadiusMeters: 10
    # Camera position
    CameraPosition: { X: -202.15, Y: -76.31, Z: -424.98 }
    # Direction of camera
    CameraLook: { X: 0.81, Y: -0.58, Z: -0.05 }
    # Camera FOV
    CameraFov: 60
    # Allowed speed, speed trap will not trigger when speed is below this value
    AllowedSpeedKph: 20
    # Enable red flash
    EnableFlash: true
    # Name of mesh that is turned into a red emissive (optional, when in doubt leave empty)
    MeshName:
```
