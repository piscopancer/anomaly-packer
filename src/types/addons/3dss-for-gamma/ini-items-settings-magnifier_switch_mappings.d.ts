// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface ItemsSettingsMagnifierSwitchMappingsIni {
    magnifier_mappings: {
      aim_t2_magd_off: string
      atacr_voodoo_off: string
      e0t2_magd_off: string
      e0t2_magd_unity_off: string
      infiltrator_tactical_kit_off: string
      spectre_tactical_kit_off: string
      uh1_magd_off: string
      uh1_magd_unity_off: string
      uh1_voodoo_off: string
    }
    unique_mappings: {
      wpn_pdx_terminal_off: string
    }
  }

  interface IniFileSchemas {
    'items\\settings\\magnifier_switch_mappings.ltx': ItemsSettingsMagnifierSwitchMappingsIni
  }
}
