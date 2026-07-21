// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemZz3dssKorthCustomIni {
    wpn_korth_custom_deltapoint: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_korth_custom_deltapoint_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: CommaSeparatedString<string[]>
      aim_hud_offset_rot_16x9: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_korth_custom_rmr: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_korth_custom_rmr_hud: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: CommaSeparatedString<string[]>
      aim_hud_offset_rot_16x9: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_korth_custom_pk6: {
      hud: string
    }
    wpn_korth_custom_lazup_pl15: {
      hud: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_korth_custom.ltx': ModSystemZz3dssKorthCustomIni
  }
}
