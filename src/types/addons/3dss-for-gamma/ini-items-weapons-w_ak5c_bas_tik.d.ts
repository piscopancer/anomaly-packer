// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_ak5c_bas_tik.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_ak5c_bas_5c_tik: {
      bullet_speed: number
      description: string
      fire_distance: number
      hit_impulse: number
      hit_power: vector
      hit_type: string
      hud: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_name_short: string
      inv_weight: number
      laser_status: boolean
      parent_section: string
      rpm: number
      rpm_empty_click: number
      scopes: string
      silencer_name: string
      silencer_x: number
      silencer_y: number
      use_alt_aim_hud: boolean
      visual: string
    }
    wpn_ak5c_bas_5c_tik_hud: {
      anm_bore: CommaSeparatedString<string[]>
      item_visual: string
    }
  }
}
