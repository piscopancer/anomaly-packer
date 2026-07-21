// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface ModSystemZz3dssBeretta92fIni {
    wpn_beretta_lazup_pl15: {
      hud: string
      inv_grid_x: number
      laser_status: boolean
      use_alt_aim_hud: boolean
    }
    wpn_beretta_las_up_hud: {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_beretta92f.ltx': ModSystemZz3dssBeretta92fIni
  }
}
