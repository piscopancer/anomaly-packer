// AUTO-GENERATED addon pack for `weapon_parts_overhaul` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export { }

declare global {
  interface ItemsSettingsOverheatIni {
    custom_overheat: {
      wpn_m249: number
      wpn_pkm: number
      wpn_pkm_zulus: number
      wpn_rpd: number
      wpn_rpk: number
      wpn_rpk74: number
    }
    overheat: {
      base_threshold: number
      heat_1: number
      heat_2: number
      heat_3: number
      suppressed_mult: number
    }
  }

  interface IniFileSchemas {
    'items\\settings\\overheat.ltx': ItemsSettingsOverheatIni
  }
}
