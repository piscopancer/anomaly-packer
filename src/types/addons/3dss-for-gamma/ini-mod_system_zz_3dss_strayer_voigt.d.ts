// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface ModSystemZz3dssStrayerVoigtIni {
    wpn_colt1911_custom_deltapoint: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_colt1911_sk4_deltapoint_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_colt1911_custom_rmr: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_colt1911_sk4_rmr_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_strayer_voigt.ltx': ModSystemZz3dssStrayerVoigtIni
  }
}
