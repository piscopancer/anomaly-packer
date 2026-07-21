// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemZz3dssDesertEagleNimbleIni {
    wpn_desert_eagle_nimble_rmr: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_desert_eagle_nimble_rmr_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_desert_eagle_nimble_d0cter: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_desert_eagle_nimble_d0cter_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_desert_eagle_nimble_deltapoint: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_desert_eagle_nimble_deltapoint_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_desert_eagle_nimble_t12: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_desert_eagle_nimble_t12_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_desert_eagle_nimble_lazup_pl15: {
      hud: string
      icons_texture: string
      inv_grid_x: number
      inv_grid_y: number
      laser_status: boolean
      use_alt_aim_hud: boolean
    }
    wpn_desert_eagle_nimble_lazup_pl15_hud: {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: CommaSeparatedString<string[]>
      aim_hud_offset_alt_rot_16x9: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_desert_eagle_nimble_pk6: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      inv_weight: number
    }
    wpn_desert_eagle_nimble_pk6_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_desert_eagle_nimble_acog: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      s3ds_exit_pupil: number
      s3ds_eye_relief: number
      s3ds_reticle_size: number
    }
    wpn_desert_eagle_nimble_acog_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
      scope_texture: string
      scope_zoom_factor: number
      zoom_rotate_time: number
    }
    wpn_desert_eagle_nimble_march_f_shorty: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_desert_eagle_nimble_march_f_shorty_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_desert_eagle_nimble.ltx': ModSystemZz3dssDesertEagleNimbleIni
  }
}
