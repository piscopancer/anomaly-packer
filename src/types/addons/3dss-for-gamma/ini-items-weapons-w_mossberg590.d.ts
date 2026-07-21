// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_mossberg590.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_mossberg590_rail: {
      $npc: boolean
      $prefetch: number
      $spawn: string
      ammo_class: CommaSeparatedString<string[]>
      ammo_elapsed: number
      ammo_mag_size: number
      animation_slot: number
      bullet_speed: number
      cam_dispersion: number
      cam_dispersion_frac: number
      cam_dispersion_inc: number
      cam_max_angle: number
      cam_max_angle_horz: number
      cam_relax_speed: number
      cam_relax_speed_ai: number
      cam_return: number
      cam_step_angle_horz: number
      cform: string
      class: string
      condition_queue_shot_dec: number
      condition_shot_dec: number
      control_inertion_factor: string
      cost: number
      crosshair_inertion: number
      description: string
      ef_main_weapon_type: number
      ef_weapon_type: number
      fire_dispersion_base: number
      fire_dispersion_condition_factor: number
      fire_distance: number
      fire_modes: number
      fire_point: vector
      fire_point2: vector
      flame_particles: string
      grenade_launcher_status: number
      GroupControlSection: string
      hand_dependence: number
      hit_impulse: number
      hit_power: vector
      hit_probability_gd_master: number
      hit_probability_gd_novice: number
      hit_probability_gd_stalker: number
      hit_probability_gd_veteran: number
      hit_type: string
      holder_fov_modifier: number
      holder_range_modifier: number
      hud: string
      icons_texture: string
      installed_upgrades: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_name_short: string
      inv_weight: number
      kill_msg_height: number
      kill_msg_width: number
      kill_msg_x: number
      kill_msg_y: number
      kind: string
      light_color: vector
      light_range: number
      light_time: number
      light_var_color: number
      light_var_range: number
      max_radius: number
      min_radius: number
      misfire_end_condition: number
      misfire_end_prob: number
      misfire_probability: number
      misfire_start_condition: number
      misfire_start_prob: number
      orientation: vector
      parent_section: string
      PDM_disp_accel_factor: number
      PDM_disp_base: number
      PDM_disp_crouch: number
      PDM_disp_crouch_no_acc: number
      PDM_disp_vel_factor: number
      ph_mass: number
      position: vector
      repair_type: string
      rpm: number
      rpm_empty_click: number
      scheduled: boolean
      scope_status: number
      scope_zoom_factor: number
      scopes: CommaSeparatedString<string[]>
      shell_particles: string
      shell_point: vector
      silencer_status: number
      single_handed: number
      slot: number
      smoke_particles: string
      startup_ammo: number
      strap_bone0: string
      strap_bone1: string
      strap_orientation: vector
      strap_position: vector
      tri_state_reload: boolean
      upgr_icon_path: string
      upgr_icon_x: number
      upgr_icon_y: number
      upgrade_scheme: string
      upgrades: CommaSeparatedString<string[]>
      visual: string
      weapon_class: string
      zoom_cam_dispersion: number
      zoom_cam_dispersion_frac: number
      zoom_cam_dispersion_inc: number
      zoom_cam_max_angle: number
      zoom_cam_max_angle_horz: number
      zoom_cam_relax_speed: number
      zoom_cam_relax_speed_ai: number
      zoom_cam_step_angle_horz: number
      zoom_dof: vector
      zoom_enabled: boolean
      zoom_rotate_time: number
    }
    wpn_mossberg590_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_add_cartridge: CommaSeparatedString<string[]>
      anm_add_cartridge_ammo1: CommaSeparatedString<string[]>
      anm_add_cartridge_ammoeven: CommaSeparatedString<string[]>
      anm_add_cartridge_ammoodd: CommaSeparatedString<string[]>
      anm_add_cartridge_empty: CommaSeparatedString<string[]>
      anm_aim2idle: CommaSeparatedString<string[]>
      anm_aim2idle_jammed: CommaSeparatedString<string[]>
      anm_ammo_check: CommaSeparatedString<string[]>
      anm_ammo_check_aim: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_ammo1: CommaSeparatedString<string[]>
      anm_ammo_check_empty: CommaSeparatedString<string[]>
      anm_ammo_check_empty_aim: CommaSeparatedString<string[]>
      anm_ammo_check_empty_aim_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_empty_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_jammed: CommaSeparatedString<string[]>
      anm_bore: CommaSeparatedString<string[]>
      anm_bore_aim: CommaSeparatedString<string[]>
      anm_bore_aim_jammed: CommaSeparatedString<string[]>
      anm_bore_jammed: CommaSeparatedString<string[]>
      anm_close: CommaSeparatedString<string[]>
      anm_close_ammo1: CommaSeparatedString<string[]>
      anm_close_ammoeven: CommaSeparatedString<string[]>
      anm_close_ammoodd: CommaSeparatedString<string[]>
      anm_empty_fire: CommaSeparatedString<string[]>
      anm_empty_fire_aim: CommaSeparatedString<string[]>
      anm_hide: CommaSeparatedString<string[]>
      anm_hide_jammed: CommaSeparatedString<string[]>
      anm_idle: CommaSeparatedString<string[]>
      anm_idle_aim: CommaSeparatedString<string[]>
      anm_idle_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_move: CommaSeparatedString<string[]>
      anm_idle_jammed: CommaSeparatedString<string[]>
      anm_idle_moving: CommaSeparatedString<string[]>
      anm_idle_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_empty_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_empty_crouch: CommaSeparatedString<string[]>
      anm_idle_moving_empty_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_jammed: CommaSeparatedString<string[]>
      anm_idle_variant1: CommaSeparatedString<string[]>
      anm_idle_variant2: CommaSeparatedString<string[]>
      anm_idle2aim: CommaSeparatedString<string[]>
      anm_idle2aim_jammed: CommaSeparatedString<string[]>
      anm_idle2sprint: CommaSeparatedString<string[]>
      anm_idle2sprint_jammed: CommaSeparatedString<string[]>
      anm_open: CommaSeparatedString<string[]>
      anm_open_ammo1: CommaSeparatedString<string[]>
      anm_open_ammoodd: CommaSeparatedString<string[]>
      anm_open_empty: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_reload_misfire_aim: CommaSeparatedString<string[]>
      anm_reload_misfire_aim_jammed: CommaSeparatedString<string[]>
      anm_reload_misfire_jammed: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_shots_aim: CommaSeparatedString<string[]>
      anm_shots_aim_variant1: CommaSeparatedString<string[]>
      anm_shots_aim_variant2: CommaSeparatedString<string[]>
      anm_shots_jammed: CommaSeparatedString<string[]>
      anm_shots_variant1: CommaSeparatedString<string[]>
      anm_shots_variant2: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_jammed: CommaSeparatedString<string[]>
      anm_sprint2aim: CommaSeparatedString<string[]>
      anm_sprint2aim_jammed: CommaSeparatedString<string[]>
      anm_sprint2idle: CommaSeparatedString<string[]>
      anm_sprint2idle_jammed: CommaSeparatedString<string[]>
      attach_place_idx: number
      fire_bone: string
      fire_point: vector
      freelook_z_offset_mul: number
      hands_orientation: vector
      hands_orientation_16x9: vector
      hands_position: vector
      hands_position_16x9: vector
      item_orientation: vector
      item_position: vector
      item_visual: string
      lowered_hud_offset_pos: vector
      lowered_hud_offset_pos_16x9: vector
      lowered_hud_offset_rot: vector
      lowered_hud_offset_rot_16x9: vector
      shell_bone: string
      shell_dir: vector
      shell_point: vector
      ts_pattern_aim2idle: CommaSeparatedString<string[]>
      ts_pattern_aim2jam: CommaSeparatedString<string[]>
      ts_pattern_aim2moving: CommaSeparatedString<string[]>
      ts_pattern_aim2sprint: CommaSeparatedString<string[]>
      ts_pattern_aim2var: CommaSeparatedString<string[]>
      ts_pattern_closeammo1: CommaSeparatedString<string[]>
      ts_pattern_closeammo2: CommaSeparatedString<string[]>
      ts_pattern_closeeven: CommaSeparatedString<string[]>
      ts_pattern_closeodd: CommaSeparatedString<string[]>
      ts_pattern_idle2aim: CommaSeparatedString<string[]>
      ts_pattern_idle2sprint: CommaSeparatedString<string[]>
      ts_pattern_jam2aim: CommaSeparatedString<string[]>
      ts_pattern_moving2aim: CommaSeparatedString<string[]>
      ts_pattern_sprint2aim: CommaSeparatedString<string[]>
      ts_pattern_sprint2idle: CommaSeparatedString<string[]>
      ts_pattern_var2aim: CommaSeparatedString<string[]>
      zoom_hide_crosshair: boolean
    }
    wpn_mossberg590_rail_hud: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_mossberg590_rail_acog: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_acog_hud: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mossberg590_rail_ac10632: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_ac10632_hud: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mossberg590_rail_eot: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_eot_hud: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mossberg590_rail_rmr: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_rmr_hud: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mossberg590_rail_d0cter: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_d0cter_hud: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_hud'], 'item_visual'> & {
      item_visual: string
    }
    'wpn_mossberg590_rail_c-more': Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    'wpn_mossberg590_rail_c-more_hud': Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mossberg590_rail_e0t2: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_e0t2_hud: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mossberg590_rail_aim_low: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_aim_low_hud: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mossberg590_rail_specter: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mossberg590_rail_specter_hud: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mossberg590: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail'], 'parent_section'> & {
      parent_section: string
    }
    wpn_mossberg590_eot: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_eot'], 'parent_section'> & {
      parent_section: string
    }
    wpn_mossberg590_ac10632: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_ac10632'], 'parent_section'> & {
      parent_section: string
    }
    wpn_mossberg590_e0t2: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_e0t2'], 'parent_section'> & {
      parent_section: string
    }
    wpn_mossberg590_aim_low: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_aim_low'], 'parent_section'> & {
      parent_section: string
    }
    wpn_mossberg590_rmr: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_rmr'], 'parent_section'> & {
      parent_section: string
    }
    wpn_mossberg590_d0cter: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_d0cter'], 'parent_section'> & {
      parent_section: string
    }
    wpn_mossberg590_hco: {
      parent_section: string
    }
    wpn_mossberg590_p1x42: {
      parent_section: string
    }
    wpn_mossberg590_pk6: {
      parent_section: string
    }
    wpn_mossberg590_ekp8_18: {
      parent_section: string
    }
    wpn_mossberg590_bossxe: {
      parent_section: string
    }
    wpn_mossberg590_acog: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_acog'], 'parent_section'> & {
      parent_section: string
    }
    wpn_mossberg590_specter: Omit<ItemsWeaponsBaseIni['wpn_mossberg590_rail_specter'], 'parent_section'> & {
      parent_section: string
    }
    wpn_mossberg590_tac30: {
      parent_section: string
    }
    wpn_mossberg590_monstrum: {
      parent_section: string
    }
    wpn_mossberg590_trihawk: {
      parent_section: string
    }
    wpn_mossberg590_hamr: {
      parent_section: string
    }
    wpn_mossberg590_vulcan: {
      parent_section: string
    }
  }
}
