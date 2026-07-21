// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemZz3dssValIni {
    wpn_val_1p63: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_val_1p63_hud: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      hands_orientation: vector
      hands_orientation_16x9: vector
      hands_position: vector
      hands_position_16x9: vector
      item_visual: string
      use_alt_aim_hud: boolean
    }
    wpn_val_ps01: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_val_ps01_hud: {
      '!scope_lense_fov': number
      '>scopes': CommaSeparatedString<string[]>
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      hud: string
      item_visual: string
      min_scope_zoom_factor: number
      nv_scope_status: number
      scope_dynamic_zoom: boolean
      scope_nightvision: string
      scope_texture: string
      scope_zoom_factor: number
      use_alt_aim_hud: boolean
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_val.ltx': ModSystemZz3dssValIni
  }
}
