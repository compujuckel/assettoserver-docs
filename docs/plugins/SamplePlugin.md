---
description: Sample to show how to add custom HTTP routes and chat commands to the server
---

# SamplePlugin
Sample to show how to add custom HTTP routes and chat commands to the server.

:::caution

Please keep in mind that AssettoServer is licensed under the AGPL license. This license requires that all changes to the server code, including plugins, is made open source.

:::

## How to create your own plugin
Create a new `Class Library` project and make sure to have the following in your `*.csproj` file:

```xml
<PropertyGroup>
    <EnableDynamicLoading>true</EnableDynamicLoading>
</PropertyGroup>
```

```xml
<ItemGroup>
    <ProjectReference Include="..\AssettoServer\AssettoServer.csproj">
        <Private>false</Private>
        <ExcludeAssets>runtime</ExcludeAssets>
    </ProjectReference>
</ItemGroup>
```

Then create a class that implements the `IAssettoServerPlugin` (for plugins without configuration) or `IAssettoServerPlugin<T>` interface (for plugins with configuration).  
Every plugin gets an own config file with the filename derived from the name of the configuration type. For example, the type `SampleConfiguration` would be read from the file `plugin_sample_cfg.yml`.

```yaml
Config1: Value1
Config2: Value2
```