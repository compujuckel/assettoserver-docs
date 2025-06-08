---
description: Let players vote for server configuration presets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# VotingPresetPlugin

:::note

Forced minimum CSP version of 0.2.0 (2651) and `EnableClientMessages: true` in `extra_cfg.yml` required for this plugin!

:::

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- VotingPresetPlugin
```

Example configurations
<Tabs groupId="votingpresetplugin">
<TabItem value="default" label="Default Configuration" default>

```yaml title="plugin_voting_preset_cfg.yml"
# Reconnect clients instead of kicking when restart is initiated. 
# It's recommended to set it to false with varying entry lists between the presets
EnableReconnect: true
# Enable Preset voting. Set this to false to enable automatic preset cycling
EnableVote: true
# Number of choices available to players in a vote
VoteChoices: 3
# If set to true, current preset/track will be included in the randomized cycling 
# and will always be added to a vote as the first choice
EnableStayOnTrack: true
# Will preset/track change randomly with equal odds if no vote has been counted
ChangePresetWithoutVotes: false
# Whether to skip the comparison of the starting entry list to the presets entry lists.
SkipEntryListCheck: false
# Time between votes or automatic preset cycles. 
# Minimum 5, Default 90
IntervalMinutes: 90
# How long a vote stays open. 
# Minimum 10, Default 300
VotingDurationSeconds: 300
# Time between end of vote and restart notification. 
# Minimum 0, Default 10
TransitionDelaySeconds: 10
# Time between restart notification and restart. 
# Minimum 2, Default 5
TransitionDurationSeconds: 5
# Preset specific settings 
# The cfg/ directory is always ignored for the presets pool.
Meta:
  # The name that is displayed when a vote is going on or the preset is changing
  Name: <Please change me>
  # Set to true too make this preset only available for admins. 
  # Set to false to add this preset into the preset pool for voting
  AdminOnly: false
```

</TabItem>
<TabItem value="votingoff" label="Voting Turned off">

```yaml title="plugin_voting_preset_cfg.yml"
# Reconnect clients instead of kicking when restart is initiated. 
# It's recommended to set it to false with varying entry lists between the presets
EnableReconnect: true
# Enable Preset voting. Set this to false to enable automatic preset cycling
EnableVote: false
# Number of choices available to players in a vote
VoteChoices: 3
# If set to true, current preset/track will be included in the randomized cycling 
# and will always be added to a vote as the first choice
EnableStayOnTrack: false
# Will preset/track change randomly with equal odds if no vote has been counted
ChangePresetWithoutVotes: false
# Whether to skip the comparison of the starting entry list to the presets entry lists.
SkipEntryListCheck: false
# Time between votes or automatic preset cycles. 
# Minimum 5, Default 90
IntervalMinutes: 90
# How long a vote stays open. 
# Minimum 10, Default 300
VotingDurationSeconds: 300
# Time between end of vote and restart notification. 
# Minimum 0, Default 10
TransitionDelaySeconds: 10
# Time between restart notification and restart. 
# Minimum 2, Default 5
TransitionDurationSeconds: 5
# Preset specific settings 
# The cfg/ directory is always ignored for the presets pool.
Meta:
  # The name that is displayed when a vote is going on or the preset is changing
  Name: <Please change me>
  # Set to true too make this preset only available for admins. 
  # Set to false to add this preset into the preset pool for voting
  AdminOnly: false
```

</TabItem>
</Tabs>

Place your presets in the `presets` folder, they need to include all files that would normally be inside your `cfg` folder.  
Example folder structure:
```md
📁presets
├── 📁preset_name_1
│   ├── 📁cm_content
│   ├── 📁reference
│   ├── 📁schemas
│   ├── 📄csp_extra_options.ini
│   ├── 📄data_track_params.ini
│   ├── 📄entry_list.ini
│   ├── 📄extra_cfg.yml
│   ├── 📄plugin_example_name_cfg.yml
│   └── 📄server_cfg.ini
└── 📁preset_name_2
    ├── 📁cm_content
    ├── 📁reference
    ├── 📁schemas
    ├── 📄csp_extra_options.ini
    ├── 📄data_track_params.ini
    ├── 📄entry_list.ini
    ├── 📄extra_cfg.yml
    ├── 📄plugin_example_name_cfg.yml
    └── 📄server_cfg.ini
```

## Commands
Most commands have multiple alias

#### Show current track / preset
- `/currenttrack`
- `/presetshow`
- `/currentpreset`

#### Vote for the next track / preset
Server will ask users to vote for new map as per configured timeframe.
- `/votetrack <number>`
- `/vt <number>`
- `/votepreset <number>`
- `/vp <number>`
- `/presetvote <number>`
- `/pv <number>`

### Admin commands

#### List available tracks / presets
- `/presetlist`
- `/presetget`
- `/presets`

#### Change track / preset
Exact usage is shown by track list
- `/presetset`
- `/presetchange`
- `/presetuse`
- `/presetupdate`

#### Initiate track / preset vote
- `/presetstartvote`
- `/presetvotestart`

#### Finish track / preset vote
- `/presetfinishvote`
- `/presetvotefinish`

#### Cancel track / preset vote
- `/presetcancelvote`
- `/presetvotecancel`

#### Change to random track / preset with equal odds
- `/presetrandom`