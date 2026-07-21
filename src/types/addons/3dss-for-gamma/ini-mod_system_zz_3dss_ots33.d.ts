// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemZz3dssOts33Ini {
    wpn_oc33_lazup_pl15: {
      description: string
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_name_short: string
      laser_status: boolean
      use_alt_aim_hud: boolean
    }
    wpn_oc33_lazup_pl15_hud: {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: CommaSeparatedString<string[]>
      aim_hud_offset_alt_rot_16x9: CommaSeparatedString<string[]>
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_ots33.ltx': ModSystemZz3dssOts33Ini
  }
}
