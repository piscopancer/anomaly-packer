// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface ModSystemZz3dssMp9Ini {
    wpn_mp9_uh2: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp9_uh2_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_mp9_romeo4: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp9_romeo4_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_mp9_romeo8: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp9_romeo8_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_mp9_p1x42: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp9_p1x42_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_mp9_bossxe: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      laser_status: boolean
      use_alt_aim_hud: boolean
    }
    wpn_mp9_bossxe_hud: {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_mp9.ltx': ModSystemZz3dssMp9Ini
  }
}
