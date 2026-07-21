// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemZz3dssMossberg590RailIni {
    wpn_mossberg590_rail_hco: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_hco_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_mossberg590_rail_p1x42: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_p1x42_hud: {
      aim_hud_offset_pos: CommaSeparatedString<string[]>
      aim_hud_offset_pos_16x9: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_mossberg590_rail_pk6: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_pk6_hud: {
      aim_hud_offset_pos: CommaSeparatedString<string[]>
      aim_hud_offset_pos_16x9: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_mossberg590_rail_ekp8_18: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_ekp8_18_hud: {
      aim_hud_offset_pos: CommaSeparatedString<string[]>
      aim_hud_offset_pos_16x9: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_mossberg590_rail_bossxe: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      laser_status: boolean
      use_alt_aim_hud: boolean
    }
    wpn_mossberg590_rail_bossxe_hud: {
      '1icon_layer': string
      '1icon_layer_x': number
      aim_hud_offset_alt_pos: CommaSeparatedString<string[]>
      aim_hud_offset_alt_pos_16x9: CommaSeparatedString<string[]>
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_mossberg590_rail_tac30: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_tac30_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_mossberg590_rail_monstrum: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_monstrum_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_mossberg590_rail_trihawk: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_trihawk_hud: {
      aim_hud_offset_pos: CommaSeparatedString<string[]>
      aim_hud_offset_pos_16x9: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_mossberg590_rail_hamr: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_mossberg590_rail_hamr_hud: {
      aim_hud_offset_alt_pos: CommaSeparatedString<string[]>
      aim_hud_offset_alt_pos_16x9: CommaSeparatedString<string[]>
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_mossberg590_rail_vulcan: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_vulcan_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_mossberg590_rail.ltx': ModSystemZz3dssMossberg590RailIni
  }
}
