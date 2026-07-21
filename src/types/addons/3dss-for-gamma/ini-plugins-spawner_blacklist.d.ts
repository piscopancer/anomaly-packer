// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface PluginsSpawnerBlacklistIni {
    ignore_sections: string[]
  }

  interface IniFileSchemas {
    'plugins\\spawner_blacklist.ltx': PluginsSpawnerBlacklistIni
  }
}
