// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemZz3dssPkpSiberIni {
    wpn_pkp_siber_1p63: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_pkp_siber_1p63_hud: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: CommaSeparatedString<string[]>
      aim_hud_offset_alt_rot_16x9: CommaSeparatedString<string[]>
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: CommaSeparatedString<string[]>
      aim_hud_offset_rot_16x9: CommaSeparatedString<string[]>
      hands_orientation: vector
      hands_orientation_16x9: vector
      hands_position: vector
      hands_position_16x9: vector
      item_visual: string
      use_alt_aim_hud: boolean
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_pkp_siber.ltx': ModSystemZz3dssPkpSiberIni
  }
}
