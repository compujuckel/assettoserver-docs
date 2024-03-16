---
description: Let players vote for server configuration presets
---

# VotingPresetPlugin

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- VotingPresetPlugin
```

Example configuration  
```yaml title="plugin_voting_preset_cfg.yml"
# Reconnect clients instead of kicking when restart is initiated. 
# Please disable reconnect with varying entry lists in the presets
ReconnectEnabled: true
# Enable Voting
VoteEnabled: true
# Number of choices players can choose from at each voting interval
VoteChoices: 3
# Will preset/track change randomly with equal odds if no vote has been counted
ChangePresetWithoutVotes: false
# Whether the current preset/track should be part of the next vote.
IncludeStayOnTrackVote: true
# Whether to skip the comparison of the starting entry list to the presets entry lists.
SkipEntryListCheck: false
# How often a cycle/vote takes place. Minimum 5, Default 90
VotingIntervalMinutes: 90
# How long the vote stays open. Minimum 10, Default 300
VotingDurationSeconds: 300
# How long it takes before notifying. Minimum 0, Default 10
DelayTransitionDurationSeconds: 0
# How long it takes to change the preset/track after notifying. Minimum 2, Default 5
TransitionDurationSeconds: 5
# Preset specific settings 
# The cfg/ directory is always ignored for the presets pool.
Meta:
  # The name that is displayed when a vote is going on or the preset is changing
  Name: <Please change me>
  # Is this preset part of the voting, Admins can still change to this track.
  VotingEnabled: true
```