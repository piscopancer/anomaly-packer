// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_colt1911.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_colt1911: {
    }
    wpn_colt1911_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_hide: CommaSeparatedString<string[]>
      anm_hide_empty: CommaSeparatedString<string[]>
      anm_hide_jammed: CommaSeparatedString<string[]>
      anm_idle: CommaSeparatedString<string[]>
      anm_idle_aim: CommaSeparatedString<string[]>
      anm_idle_aim_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end: CommaSeparatedString<string[]>
      anm_idle_aim_end_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_start: CommaSeparatedString<string[]>
      anm_idle_aim_start_empty: CommaSeparatedString<string[]>
      anm_idle_aim_start_jammed: CommaSeparatedString<string[]>
      anm_idle_empty: CommaSeparatedString<string[]>
      anm_idle_jammed: CommaSeparatedString<string[]>
      anm_idle_moving: CommaSeparatedString<string[]>
      anm_idle_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_empty: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_empty: CommaSeparatedString<string[]>
      anm_idle_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_empty: CommaSeparatedString<string[]>
      anm_idle_sprint_jammed: CommaSeparatedString<string[]>
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_shot_l: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_shots_aim: CommaSeparatedString<string[]>
      anm_shots_aim_l: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_empty: CommaSeparatedString<string[]>
      anm_show_jammed: CommaSeparatedString<string[]>
      anm_sprint_end: string
      anm_sprint_end_empty: CommaSeparatedString<string[]>
      anm_sprint_end_jammed: CommaSeparatedString<string[]>
      anm_sprint_start: string
      anm_sprint_start_empty: CommaSeparatedString<string[]>
      anm_sprint_start_jammed: CommaSeparatedString<string[]>
      attach_place_idx: number
      fire_bone: string
      fire_point: vector
      gl_hud_offset_pos: vector
      gl_hud_offset_rot: vector
      hands_orientation: vector
      hands_orientation_16x9: vector
      hands_position: vector
      hands_position_16x9: vector
      item_orientation: vector
      item_position: vector
      item_visual: string
      lean_hud_offset_pos: vector
      lean_hud_offset_rot: vector
      lowered_hud_offset_pos: vector
      lowered_hud_offset_pos_16x9: vector
      lowered_hud_offset_rot: vector
      lowered_hud_offset_rot_16x9: vector
      safemode_anm: string
      safemode_anm2: string
      shell_bone: string
      shell_point: vector
      ts_pattern_sprint_end: CommaSeparatedString<string[]>
      ts_pattern_sprint_start: CommaSeparatedString<string[]>
      ts_strict_sprint_end_move: CommaSeparatedString<string[]>
      zoom_hide_crosshair: boolean
    }
    wpn_colt1911_camo: Omit<ItemsWeaponsBaseIni['wpn_colt1911'], 'ammo_class' | 'ammo_elapsed' | 'ammo_mag_size' | 'bullet_speed' | 'condition_queue_shot_dec' | 'condition_shot_dec' | 'cost' | 'description' | 'fire_dispersion_base' | 'fire_distance' | 'hit_impulse' | 'hit_power' | 'hit_type' | 'hud' | 'icons_texture' | 'installed_upgrades' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y' | 'inv_name' | 'inv_name_short' | 'inv_weight' | 'misfire_end_condition' | 'misfire_end_prob' | 'misfire_start_condition' | 'misfire_start_prob' | 'rpm' | 'silencer_status' | 'upgr_icon_height' | 'upgr_icon_path' | 'upgr_icon_width' | 'upgr_icon_x' | 'upgr_icon_y' | 'visual'> & {
      ammo_class: CommaSeparatedString<string[]>
      ammo_elapsed: number
      ammo_mag_size: number
      bullet_speed: number
      condition_queue_shot_dec: number
      condition_shot_dec: number
      cost: number
      description: string
      fire_dispersion_base: number
      fire_distance: number
      hit_impulse: number
      hit_power: vector
      hit_type: string
      hud: string
      icons_texture: string
      installed_upgrades: CommaSeparatedString<string[]>
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_name_short: string
      inv_weight: number
      misfire_end_condition: number
      misfire_end_prob: number
      misfire_start_condition: number
      misfire_start_prob: number
      rpm: number
      silencer_status: number
      upgr_icon_height: number
      upgr_icon_path: string
      upgr_icon_width: number
      upgr_icon_x: number
      upgr_icon_y: number
      visual: string
    }
    wpn_colt1911_sk3_hud: Omit<ItemsWeaponsBaseIni['wpn_colt1911_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_colt1911_custom: Omit<ItemsWeaponsBaseIni['wpn_colt1911'], 'ammo_elapsed' | 'ammo_mag_size' | 'condition_queue_shot_dec' | 'condition_shot_dec' | 'cost' | 'description' | 'fire_dispersion_base' | 'fire_modes' | 'hud' | 'icons_texture' | 'installed_upgrades' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y' | 'inv_name' | 'inv_name_short' | 'misfire_end_condition' | 'misfire_end_prob' | 'misfire_start_condition' | 'misfire_start_prob' | 'rpm' | 'rpm_mode_2' | 'silencer_name' | 'silencer_status' | 'upgr_icon_height' | 'upgr_icon_path' | 'upgr_icon_width' | 'upgr_icon_x' | 'upgr_icon_y' | 'visual'> & {
      ammo_elapsed: number
      ammo_mag_size: number
      condition_queue_shot_dec: number
      condition_shot_dec: number
      cost: number
      description: string
      fire_dispersion_base: number
      fire_modes: CommaSeparatedString<string[]>
      hud: string
      icons_texture: string
      installed_upgrades: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_name_short: string
      misfire_end_condition: number
      misfire_end_prob: number
      misfire_start_condition: number
      misfire_start_prob: number
      rpm: number
      rpm_mode_2: number
      silencer_name: string
      silencer_status: number
      upgr_icon_height: number
      upgr_icon_path: string
      upgr_icon_width: number
      upgr_icon_x: number
      upgr_icon_y: number
      visual: string
    }
    wpn_colt1911_sk4_hud: Omit<ItemsWeaponsBaseIni['wpn_colt1911_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_colt1911_duty: {
    }
  }
}
