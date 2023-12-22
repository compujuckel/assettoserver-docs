---
description: Collect metrics about players and car usage
---

# PatreonAnalyticsPlugin

:::caution

This is an advanced plugin that requires you to know how to set up and operate [Prometheus](https://prometheus.io/) or [VictoriaMetrics](https://victoriametrics.com/) (recommended) to ingest and store metrics.

Setup and operation of Prometheus or Victoriametrics is out of scope of this document.

:::

:::note

Forced minimum CSP version of 0.1.77 (1937) and `EnableClientMessages: true` in `extra_cfg.yml` required for client metrics!

:::

This plugin allows collection of metrics regarding client performance and car usage.  
Metrics in Prometheus format are available on the `/metrics` endpoint.

## Client Metrics
General info about clients will be reported in the server log:
```
[20:24:21 INF] Analytics for compu (1234567890): screen=1920x1080 msaa=2 detail=3 fullscreen=False vsync=False post=True vr=False triple=False shifter=False fpsCap=40
```

Aggregated over all players (50th/75th/95th/99th percentile)
* FPS
* CPU occupancy
* Frame time

## Server Metrics
For each car:
* Time spent empty / in loading screen / idle / driving
* Number of collisions over time

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml
EnablePlugins:
  - PatreonAnalyticsPlugin
```
Example configuration (add to bottom of `extra_cfg.yml`)
```yaml
---
!PatreonAnalyticsConfiguration
# Enable collection of client metrics
EnableClientMetrics: true
# Update interval for client metrics (FPS, CPU occupancy)
ClientMetricsUpdateIntervalSeconds: 10
# Update interval for server metrics
ServerMetricsUpdateIntervalSeconds: 10
# Minimum speed for collisions to be counted to metrics
MinimumCollisionsSpeedKph: 10
```