---
title: Server Details
---

Do not enable "Provide extra details about the server, such as links to extra content, assists or description" in Content Manager.
Instead, set `EnableServerDetails` to `true` in `extra_cfg.yml` and enter the server description in `ServerDescription`.

If you have an existing server config please make sure that the server name in `server_cfg.ini` does not end in something like `x:<random letters>` or `ℹ8081`. AssettoServer will automatically append this for you when server details are enabled.

:::note

Enabling server details and using features such as Steam Auth or WeatherFX at the same time requires a Content Manager version of v0.8.2329.38887 or higher.

:::