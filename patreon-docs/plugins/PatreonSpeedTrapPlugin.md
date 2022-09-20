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
```
