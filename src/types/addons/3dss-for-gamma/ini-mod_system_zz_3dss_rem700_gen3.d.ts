// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface ModSystemZz3dssRem700Gen3Ini {
    wpn_remington700_mod_x_gen3_pn23: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      magnifications: string
      ms_colors: string
      ms_count: number
      s3ds_image_type: number
      s3ds_reticle_type: number
    }
    wpn_remington700_mod_x_gen3_pn23_hud: {
      item_visual: string
    }
    wpn_remington700_mod_x_gen3_skeet: {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      magnifications: string
      ms_colors: string
      ms_count: number
      s3ds_image_type: number
      s3ds_reticle_type: number
    }
    wpn_remington700_mod_x_gen3_skeet_hud: {
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_rem700_gen3.ltx': ModSystemZz3dssRem700Gen3Ini
  }
}
