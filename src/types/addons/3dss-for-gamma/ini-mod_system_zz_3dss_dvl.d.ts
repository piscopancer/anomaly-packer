// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemZz3dssDvlIni {
    wpn_dvl10_ado: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_dvl10_ado_hud: {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: CommaSeparatedString<string[]>
      aim_hud_offset_alt_rot_16x9: CommaSeparatedString<string[]>
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_dvl10_cortex: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_dvl10_cortex_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_dvl10_razorhd: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_dvl10_razorhd_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_dvl10_ps320: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_dvl10_ps320_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_dvl10_tac30: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_dvl10_tac30_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_dvl.ltx': ModSystemZz3dssDvlIni
  }
}
