---
description: Define multiple timed stages per track
---

# PatreonTimingPlugin
This plugin allows you to define multiple timed stages per track. Very useful for large maps like SRP, where no AI spline is loaded on the client.  
Comes with an AssettoServerHub-based leaderboard.

:::note

Forced minimum CSP version of 0.1.77 (1937) and `EnableClientMessages: true` in `extra_cfg.yml` required!

:::

## How to create checkpoints
Each checkpoint needs two coordinates, "Position" and "Forward". Use the Object Inspector app to find coordinates like this:  
![](./assets/timing_checkpoints.png)  
The checkpoint will be placed on "Position", facing in the direction of "Forward".  

:::caution Direction of a checkpoint is important!

Checkpoints won't trigger if you drive through them from the opposite direction.

:::

After creating checkpoints, you can view them ingame by ticking the "Debug checkpoints" checkbox on the Timing Leaderboard:
![](./assets/debug_checkpoints.png)
Green = Start of a timing zone  
Blue = Checkpoint  
Red = Backside of a checkpoint. Checkpoint won't trigger when coming from this direction  

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml
EnablePlugins:
  - PatreonTimingPlugin
```
Example configuration for SRP (add to bottom of `extra_cfg.yml`)
```yaml
---
!PatreonTimingConfiguration
# Name of leaderboard. Use this if you have multiple servers connected to the hub and want them to have different leaderboards.
# For example if you don't want traffic- and non-traffic servers to show on the same leaderboard, just use different
# leaderboard names for them.
LeaderboardName: Default
# Number of allowed environment collisions before a lap time is invalidated. Set to -1 for unlimited collisions.
MaxCollisions: 0
# List of timed stages
Stages:
  # Stage name, will be shown on the leaderboard
  - Name: C1 Inner
    # Set to true if start and end point are identical
    ClosedLoop: true
    # List of checkpoints
    Checkpoints:
      # position of the timing line. Should be in the middle of the track
      - Position: { X: 2281.24, Y: 14.56, Z: -9398.49 }
        # Forward vector of timing line. Just choose a point that is 1-2m in the direction of travel of the timing line
        Forward:  { X: 2280.43, Y: 14.63, Z: -9400.87 }
      - Position: { X: 262.46,  Y: 3.98,  Z: -8509.16 }
        Forward:  { X: 264.55,  Y: 4,     Z: -8506.33 }
      - Position: { X: 1062.82, Y: 13.89, Z: -5714.83 }
        Forward:  { X: 1065.31, Y: 13.91, Z: -5714.58 }
  - Name: C1 Outer
    ClosedLoop: true
    Checkpoints:
      - Position: { X: 279.99,  Y: 12.04, Z: -5733.97 }
        Forward:  { X: 277.32,  Y: 12.04, Z: -5734.39 }
      - Position: { X: -90.54,  Y: 9.18,  Z: -9275.4  }
        Forward:  { X: -89.6,   Y: 9.18,  Z: -9279.57 }
      - Position: { X: 2453.62, Y: -2.11, Z: -7902.25 }
        Forward:  { X: 2452.95, Y: -2.13, Z: -7899.35 }
  - Name: Belt Inner
    ClosedLoop: true
    Checkpoints:
      - Position: { X: 5848.64, Y: 14.34, Z: -6193.65 }
        Forward:  { X: 5846.08, Y: 14.26, Z: -6196.83 }
      - Position: { X: 2954.63, Y: 18.5,  Z: -9065.35 }
        Forward:  { X: 2952.76, Y: 18.49, Z: -9061.68 }
      - Position: { X: 3645.8,  Y: 20.26, Z: -3388.6  }
        Forward:  { X: 3648.67, Y: 20.06, Z: -3390.5  }
  - Name: Belt Outer
    ClosedLoop: true
    Checkpoints:
      - Position: { X: 1976.96, Y: 56.32, Z: -3741.04 }
        Forward:  { X: 1973.16, Y: 56.49, Z: -3742.53 }
      - Position: { X: 2554.65, Y: -2.12, Z: -8289.24 }
        Forward:  { X: 2556.07, Y: -2.1,  Z: -8291.99 }
      - Position: { X: 6038.22, Y: 22.46, Z: -5540.76 }
        Forward:  { X: 6038.76, Y: 22.48, Z: -5536.6  }
  - Name: Mirai Inner
    ClosedLoop: false
    Checkpoints:
      - Position: { X: -6718.66,  Y: 11.49, Z: 11040.15 }
        Forward:  { X: -6721.39,  Y: 11.43, Z: 11041.99 }
      - Position: { X: -11022.51, Y: 13.77, Z: 13900.66 }
        Forward:  { X: -11022.36, Y: 13.72, Z: 13904.99 }
      - Position: { X: -6892.25,  Y: 52.93, Z: 15516.16 }
        Forward:  { X: -6891.25,  Y: 53.01, Z: 15514.33 }
      - Position: { X: -6452.59,  Y: 11.19, Z: 10895.76 }
        Forward:  { X: -6449.85,  Y: 11.2,  Z: 10894.58 }
  - Name: Mirai Outer
    ClosedLoop: false
    Checkpoints:
      - Position: { X: -6671.69,  Y: 18.53, Z: 11174.74 }
        Forward:  { X: -6669.96,  Y: 18.58, Z: 11177.86 }
      - Position: { X: -7491.71,  Y: 12.62, Z: 16476.26 }
        Forward:  { X: -7493.4,   Y: 12.6,  Z: 16474.62 }
      - Position: { X: -10436.07, Y: -4.53, Z: 14983.14 }
        Forward:  { X: -10439.45, Y: -4.53, Z: 14980.74 }
      - Position: { X: -6452.59,  Y: 11.19, Z: 10895.76 }
        Forward:  { X: -6449.85,  Y: 11.2,  Z: 10894.58 }
  - Name: Shinjuku
    ClosedLoop: false
    Checkpoints:
      - Position: { X: 93.31,    Y: 21.46, Z: -8648.5   }
        Forward:  { X: 90.59,    Y: 21.61, Z: -8649.57  }
      - Position: { X: -4249.14, Y: 32.52, Z: -10005.47 }
        Forward:  { X: -4241.66, Y: -4.18, Z: -9943.17  }
      - Position: { X: -468.03,  Y: 13.47, Z: -8612.7   }
        Forward:  { X: -465.19,  Y: 13.46, Z: -8613.36  }
  - Name: Shibuya
    ClosedLoop: false
    Checkpoints:
      - Position: { X: -632.57,  Y: 24.53, Z: -7167.9  }
        Forward:  { X: -635.28,  Y: 24.4,  Z: -7170.08 }
      - Position: { X: -4752.27, Y: 34.23, Z: -5842.44 }
        Forward:  { X: -4759.22, Y: 23.86, Z: -5843.29 }
      - Position: { X: -786.26,  Y: 31.85, Z: -7138.52 }
        Forward:  { X: -783.98,  Y: 31.77, Z: -7139.99 }
  - Name: Bayshore Southbound
    ClosedLoop: false
    Checkpoints:
      - Position: { X: 2198.53,  Y: -4.26, Z: -2316.08 }
        Forward:  { X: 2194.01,  Y: -4.5,  Z: -2312.07 }
      - Position: { X: 1709.28,  Y: -1.21, Z: 3316.72  }
        Forward:  { X: 1721.17,  Y: -1.75, Z: 3323.7   }
      - Position: { X: 3831.48,  Y: -8.88, Z: 8857.27  }
        Forward:  { X: 3822.56,  Y: -9.1,  Z: 8863.96  }
      - Position: { X: -6997.31, Y: 47.26, Z: 15726.07 }
        Forward:  { X: -6999.81, Y: 47.12, Z: 15731.5  }
  - Name: Bayshore Northbound
    ClosedLoop: false
    Checkpoints:
      - Position: { X: -5376.32, Y: 38,     Z: 13623.5  }
        Forward:  { X: -5370.39, Y: 38.02,  Z: 13620.5  }
      - Position: { X: 3821.08,  Y: -8.84,  Z: 8841.8   }
        Forward:  { X: 3832.02,  Y: -16.52, Z: 8832.65  }
      - Position: { X: 1700.95,  Y: -1.16,  Z: 3329.1   }
        Forward:  { X: 1695.08,  Y: -0.896, Z: 3325.75  }
      - Position: { X: 2190.43,  Y: -4.18,  Z: -2328.53 }
        Forward:  { X: 2192.97,  Y: -4.04,  Z: -2330.82 }
      - Position: { X: 5479.73,  Y: 12,     Z: -4506.1  }
        Forward:  { X: 5483.61,  Y: 11.98,  Z: -4507.9  }
  - Name: Yokohane Southbound
    ClosedLoop: false
    Checkpoints:
      - Position: { X: 1047.68,  Y: 12.82, Z: -4985.14 }
        Forward:  { X: 1046.48,  Y: 12.82, Z: -4982.37 }
      - Position: { X: -295.96,  Y: 5.84,  Z: 1275.45  }
        Forward:  { X: -293.55,  Y: 5.84,  Z: 1277.5   }
      - Position: { X: -336.48,  Y: 12.3,  Z: 6281.81  }
        Forward:  { X: -336.29,  Y: 12.17, Z: 6287.25  }
      - Position: { X: -6025.48, Y: 12.82, Z: 10729.98 }
        Forward:  { X: -6029.04, Y: 12.83, Z: 10731.43 }
  - Name: Yokohane Northbound
    ClosedLoop: false
    Checkpoints:
      - Position: { X: -6028.78, Y: 12.82, Z: 10721.99 }
        Forward:  { X: -6026.21, Y: 12.81, Z: 10720.99 }
      - Position: { X: -348.85,  Y: 15.05, Z: 6150.45  }
        Forward:  { X: -348.88,  Y: 15.06, Z: 6146.78  }
      - Position: { X: -303.18,  Y: 5.84,  Z: 1283.01  }
        Forward:  { X: -305.91,  Y: 5.84,  Z: 1280.69  }
      - Position: { X: 1040.31,  Y: 12.83, Z: -4988.62 }
        Forward:  { X: 1041.19,  Y: 12.83, Z: -4990.9  }
  - Name: Yaesu Northbound
    ClosedLoop: false
    Checkpoints:
      - Position: { X: 1455.74, Y: 10.18, Z: -6733.75 }
        Forward:  { X: 1461.19, Y: 10,    Z: -6742.06 }
      - Position: { X: 1817.45, Y: 12.79, Z: -8221.92 }
        Forward:  { X: 1820.93, Y: 12.87, Z: -8228.57 }
      - Position: { X: 2663.91, Y: -1.54, Z: -8494.79 }
        Forward:  { X: 2665.11, Y: -1.54, Z: -8497.18 }
  - Name: Yaesu Southbound
    ClosedLoop: false
    Checkpoints:
      - Position: { X: 2493.15, Y: 12.93, Z: -8155.47 }
        Forward:  { X: 2486.98, Y: 11.46, Z: -8145.67 }
      - Position: { X: 1817.75, Y: 12.8,  Z: -8222.51 }
        Forward:  { X: 1815.6,  Y: 12.74, Z: -8218.15 }
      - Position: { X: 1383.24, Y: 9.53,  Z: -6577.58 }
        Forward:  { X: 1382.28, Y: 9.52,  Z: -6576.13 }
```
