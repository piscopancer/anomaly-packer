// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface ModSystem3dssScopeInheritanceSectionsIni {
    big_common_s: {
      min_scope_zoom_factor: number
      scope_dynamic_zoom: boolean
      scope_status: number
      scope_zoom_factor: number
    }
  }

  interface IniFileSchemas {
    'mod_system_3dss_scope_inheritance_sections.ltx': ModSystem3dssScopeInheritanceSectionsIni
  }
}
