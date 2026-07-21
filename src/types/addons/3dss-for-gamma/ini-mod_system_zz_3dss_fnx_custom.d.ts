// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface ModSystemZz3dssFnxCustomIni {
    wpn_fnx45_custom_lazup_pl15: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      laser_status: boolean
      use_alt_aim_hud: boolean
    }
    wpn_fnx45_custom_lazup_pl15_hud: {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_fnx_custom.ltx': ModSystemZz3dssFnxCustomIni
  }
}
