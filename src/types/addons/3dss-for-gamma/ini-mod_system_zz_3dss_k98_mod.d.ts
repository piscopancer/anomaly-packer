// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemZz3dssK98ModIni {
    wpn_k98_mod_skeet: {
      hud: string
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_k98_mod_skeet_hud: {
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      item_visual: string
      lewd_lens_hide_aim_mode: CommaSeparatedString<string[]>
      lewd_lens_hide_bone: string
      lewd_lens_hide_delays: CommaSeparatedString<string[]>
      lewd_lens_hide_enabled: boolean
      parent_section: string
      scopes: string
      silencer_x: number
      silencer_y: number
      upgr_icon_height: number
      upgr_icon_path: string
      upgr_icon_width: number
      upgr_icon_x: number
      upgr_icon_y: number
    }
    wpn_k98_mod_silen98_skeet: {
      hud: string
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_k98_mod_silen98_skeet_hud: {
      item_visual: string
    }
    wpn_k98_mauser_kit: {
      parent_section: string
    }
    wpn_k98_mauser_kit_skeet: ModSystemZz3dssK98ModIni['wpn_k98_mod_silen98_skeet']
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_k98_mod.ltx': ModSystemZz3dssK98ModIni
  }
}
