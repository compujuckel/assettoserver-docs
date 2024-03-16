---
description: Do GeoIP lookups for connected players
---

# GeoIPPlugin
Plugin to do GeoIP lookups for connected players.

:::note

Lookups are done locally, so you need a copy of the GeoLite2 city database which you can download here: https://dev.maxmind.com/geoip/geolite2-free-geolocation-data?lang=en

:::

Log output format:
```
GeoIP results for {ClientName}: {Country} ({CountryCode}) [{Lat},{Lon}]
```

## Configuration
Enable the plugin in `extra_cfg.yml`
```yaml title="extra_cfg.yml"
EnablePlugins:
- GeoIPPlugin
```
Example configuration
```yaml title="plugin_geo_ip_cfg.yml"
DatabasePath: <path to GeoLite2-City.mmdb>
```