// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_groza.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_groza: {
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
      default_to_ruck: boolean
      description: string
      ef_main_weapon_type: number
      ef_weapon_type: number
      fire_dispersion_base: number
      fire_dispersion_condition_factor: number
      fire_distance: number
      fire_modes: CommaSeparatedString<string[]>
      fire_point: vector
      fire_point2: vector
      flame_particles: string
      grenade_class: CommaSeparatedString<string[]>
      grenade_flame_particles: string
      grenade_launcher_name: string
      grenade_launcher_status: number
      grenade_launcher_x: number
      grenade_launcher_y: number
      grenade_vel: number
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
      launch_speed: number
      light_color: vector
      light_disabled: boolean
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
      reload_dof: vector
      repair_type: string
      rpm: number
      rpm_empty_click: number
      scheduled: boolean
      scope_status: number
      scope_zoom_factor: number
      scopes: string
      shell_dir: vector
      shell_particles: string
      shell_point: vector
      silencer_light_color: vector
      silencer_light_range: number
      silencer_light_time: number
      silencer_light_var_color: number
      silencer_light_var_range: number
      silencer_smoke_particles: string
      silencer_status: number
      single_handed: number
      slot: number
      smoke_particles: string
      sprint_allowed: boolean
      startup_ammo: number
      strap_bone0: string
      strap_bone1: string
      strap_orientation: vector
      strap_position: vector
      time_to_aim: number
      upgr_icon_height: number
      upgr_icon_width: number
      upgr_icon_x: number
      upgr_icon_y: number
      upgrade_scheme: string
      upgrades: CommaSeparatedString<string[]>
      use_aim_bullet: boolean
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
    wpn_groza_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_bore_jammed: CommaSeparatedString<string[]>
      anm_hide: CommaSeparatedString<string[]>
      anm_hide_g: CommaSeparatedString<string[]>
      anm_hide_jammed: CommaSeparatedString<string[]>
      anm_hide_w_gl: CommaSeparatedString<string[]>
      anm_hide_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle: CommaSeparatedString<string[]>
      anm_idle_aim: CommaSeparatedString<string[]>
      anm_idle_aim_end: CommaSeparatedString<string[]>
      anm_idle_aim_end_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end_g: CommaSeparatedString<string[]>
      anm_idle_aim_end_g_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_end_w_gl: CommaSeparatedString<string[]>
      anm_idle_aim_end_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_start: CommaSeparatedString<string[]>
      anm_idle_aim_start_empty: CommaSeparatedString<string[]>
      anm_idle_aim_start_g: CommaSeparatedString<string[]>
      anm_idle_aim_start_g_empty: CommaSeparatedString<string[]>
      anm_idle_aim_start_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_start_w_gl: CommaSeparatedString<string[]>
      anm_idle_aim_start_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_g: CommaSeparatedString<string[]>
      anm_idle_g_aim: CommaSeparatedString<string[]>
      anm_idle_jammed: CommaSeparatedString<string[]>
      anm_idle_moving: CommaSeparatedString<string[]>
      anm_idle_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_g: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_g_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_g: CommaSeparatedString<string[]>
      anm_idle_moving_g_aim: CommaSeparatedString<string[]>
      anm_idle_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_g: CommaSeparatedString<string[]>
      anm_idle_sprint_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint_w_gl: CommaSeparatedString<string[]>
      anm_idle_sprint_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_w_gl: CommaSeparatedString<string[]>
      anm_idle_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_w_gl_jammed: CommaSeparatedString<string[]>
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_reload_empty_w_gl: CommaSeparatedString<string[]>
      anm_reload_g: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_reload_misfire_w_gl: CommaSeparatedString<string[]>
      anm_reload_w_gl: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_shots_aim: CommaSeparatedString<string[]>
      anm_shots_g: CommaSeparatedString<string[]>
      anm_shots_g_aim: CommaSeparatedString<string[]>
      anm_shots_w_gl: CommaSeparatedString<string[]>
      anm_shots_w_gl_aim: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_g: CommaSeparatedString<string[]>
      anm_show_jammed: CommaSeparatedString<string[]>
      anm_show_w_gl: CommaSeparatedString<string[]>
      anm_show_w_gl_jammed: CommaSeparatedString<string[]>
      anm_sprint_end: CommaSeparatedString<string[]>
      anm_sprint_end_g: CommaSeparatedString<string[]>
      anm_sprint_end_jammed: CommaSeparatedString<string[]>
      anm_sprint_end_w_gl: CommaSeparatedString<string[]>
      anm_sprint_end_w_gl_jammed: CommaSeparatedString<string[]>
      anm_sprint_start: CommaSeparatedString<string[]>
      anm_sprint_start_g: CommaSeparatedString<string[]>
      anm_sprint_start_jammed: CommaSeparatedString<string[]>
      anm_sprint_start_w_gl: CommaSeparatedString<string[]>
      anm_sprint_start_w_gl_jammed: CommaSeparatedString<string[]>
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      anm_switch_mode: CommaSeparatedString<string[]>
      anm_switch_mode_jammed: CommaSeparatedString<string[]>
      anm_switch_mode_w_gl: CommaSeparatedString<string[]>
      attach_place_idx: number
      fire_bone: string
      fire_bone2: string
      fire_point: vector
      fire_point2: vector
      gl_hud_offset_pos: vector
      gl_hud_offset_pos_16x9: vector
      gl_hud_offset_rot: vector
      gl_hud_offset_rot_16x9: vector
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
      shell_bone: string
      shell_dir: vector
      shell_point: vector
      ts_pattern_sprint_end: CommaSeparatedString<string[]>
      ts_pattern_sprint_start: CommaSeparatedString<string[]>
      ts_strict_sprint_end_move: CommaSeparatedString<string[]>
      zoom_hide_crosshair: boolean
    }
    wpn_groza_wpn_addon_scope_po4x34: Omit<ItemsWeaponsBaseIni['wpn_groza'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'snd_switch' | 'snd_switch_g'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      snd_switch: string
      snd_switch_g: string
    }
    wpn_groza_wpn_addon_scope_po4x34_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'anm_hide_g' | 'anm_hide_w_gl' | 'anm_hide_w_gl_jammed' | 'anm_idle_aim_end_g' | 'anm_idle_aim_end_g_empty' | 'anm_idle_aim_end_w_gl' | 'anm_idle_aim_end_w_gl_jammed' | 'anm_idle_aim_start_g' | 'anm_idle_aim_start_g_empty' | 'anm_idle_aim_start_w_gl' | 'anm_idle_aim_start_w_gl_jammed' | 'anm_idle_g' | 'anm_idle_g_aim' | 'anm_idle_moving_crouch_g' | 'anm_idle_moving_crouch_g_aim' | 'anm_idle_moving_crouch_w_gl' | 'anm_idle_moving_crouch_w_gl_aim' | 'anm_idle_moving_crouch_w_gl_aim_jammed' | 'anm_idle_moving_crouch_w_gl_jammed' | 'anm_idle_moving_g' | 'anm_idle_moving_g_aim' | 'anm_idle_moving_w_gl' | 'anm_idle_moving_w_gl_aim' | 'anm_idle_moving_w_gl_aim_jammed' | 'anm_idle_moving_w_gl_jammed' | 'anm_idle_sprint_g' | 'anm_idle_sprint_w_gl' | 'anm_idle_sprint_w_gl_jammed' | 'anm_idle_w_gl' | 'anm_idle_w_gl_aim' | 'anm_idle_w_gl_aim_jammed' | 'anm_idle_w_gl_jammed' | 'anm_reload_empty_w_gl' | 'anm_reload_g' | 'anm_reload_misfire_w_gl' | 'anm_reload_w_gl' | 'anm_shots_g' | 'anm_shots_g_aim' | 'anm_shots_w_gl' | 'anm_shots_w_gl_aim' | 'anm_show_g' | 'anm_show_w_gl' | 'anm_show_w_gl_jammed' | 'anm_sprint_end' | 'anm_sprint_end_g' | 'anm_sprint_end_jammed' | 'anm_sprint_end_w_gl' | 'anm_sprint_end_w_gl_jammed' | 'anm_sprint_start' | 'anm_sprint_start_g' | 'anm_sprint_start_jammed' | 'anm_sprint_start_w_gl' | 'anm_sprint_start_w_gl_jammed' | 'anm_switch' | 'anm_switch_g' | 'anm_switch_mode_w_gl' | 'gl_hud_offset_pos' | 'gl_hud_offset_pos_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      anm_hide_g: CommaSeparatedString<string[]>
      anm_hide_w_gl: CommaSeparatedString<string[]>
      anm_hide_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_end_g: CommaSeparatedString<string[]>
      anm_idle_aim_end_g_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end_w_gl: CommaSeparatedString<string[]>
      anm_idle_aim_end_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_start_g: CommaSeparatedString<string[]>
      anm_idle_aim_start_g_empty: CommaSeparatedString<string[]>
      anm_idle_aim_start_w_gl: CommaSeparatedString<string[]>
      anm_idle_aim_start_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_g: CommaSeparatedString<string[]>
      anm_idle_g_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_g: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_g_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_g: CommaSeparatedString<string[]>
      anm_idle_moving_g_aim: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint_g: CommaSeparatedString<string[]>
      anm_idle_sprint_w_gl: CommaSeparatedString<string[]>
      anm_idle_sprint_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_w_gl: CommaSeparatedString<string[]>
      anm_idle_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_w_gl_jammed: CommaSeparatedString<string[]>
      anm_reload_empty_w_gl: CommaSeparatedString<string[]>
      anm_reload_g: CommaSeparatedString<string[]>
      anm_reload_misfire_w_gl: CommaSeparatedString<string[]>
      anm_reload_w_gl: CommaSeparatedString<string[]>
      anm_shots_g: CommaSeparatedString<string[]>
      anm_shots_g_aim: CommaSeparatedString<string[]>
      anm_shots_w_gl: CommaSeparatedString<string[]>
      anm_shots_w_gl_aim: CommaSeparatedString<string[]>
      anm_show_g: CommaSeparatedString<string[]>
      anm_show_w_gl: CommaSeparatedString<string[]>
      anm_show_w_gl_jammed: CommaSeparatedString<string[]>
      anm_sprint_end: CommaSeparatedString<string[]>
      anm_sprint_end_g: CommaSeparatedString<string[]>
      anm_sprint_end_jammed: CommaSeparatedString<string[]>
      anm_sprint_end_w_gl: CommaSeparatedString<string[]>
      anm_sprint_end_w_gl_jammed: CommaSeparatedString<string[]>
      anm_sprint_start: CommaSeparatedString<string[]>
      anm_sprint_start_g: CommaSeparatedString<string[]>
      anm_sprint_start_jammed: CommaSeparatedString<string[]>
      anm_sprint_start_w_gl: CommaSeparatedString<string[]>
      anm_sprint_start_w_gl_jammed: CommaSeparatedString<string[]>
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      anm_switch_mode_w_gl: CommaSeparatedString<string[]>
      gl_hud_offset_pos: vector
      gl_hud_offset_pos_16x9: vector
      item_visual: string
    }
    wpn_groza_nimble: Omit<ItemsWeaponsBaseIni['wpn_groza'], '$spawn' | 'ammo_class' | 'ammo_current' | 'ammo_elapsed' | 'ammo_limit' | 'ammo_mag_size' | 'bullet_speed' | 'condition_queue_shot_dec' | 'condition_shot_dec' | 'control_inertion_factor' | 'cost' | 'crosshair_inertion' | 'description' | 'fire_dispersion_base' | 'fire_distance' | 'grenade_class' | 'grenade_launcher_name' | 'grenade_launcher_status' | 'grenade_launcher_x' | 'grenade_launcher_y' | 'grenade_vel' | 'hit_impulse' | 'hit_power' | 'hit_type' | 'hud' | 'icons_texture' | 'installed_upgrades' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y' | 'inv_name' | 'inv_name_short' | 'inv_weight' | 'kind' | 'laser_status' | 'launch_speed' | 'misfire_end_condition' | 'misfire_end_prob' | 'misfire_probability' | 'misfire_start_condition' | 'misfire_start_prob' | 'parent_section' | 'PDM_disp_accel_factor' | 'PDM_disp_base' | 'PDM_disp_crouch' | 'PDM_disp_crouch_no_acc' | 'PDM_disp_vel_factor' | 'repair_type' | 'rpm' | 'rpm_empty_click' | 'scope_status' | 'scope_zoom_factor' | 'scopes' | 'time_to_aim' | 'use_aim_bullet' | 'use_alt_aim_hud'> & {
      $spawn: string
      ammo_class: CommaSeparatedString<string[]>
      ammo_current: number
      ammo_elapsed: number
      ammo_limit: number
      ammo_mag_size: number
      bullet_speed: number
      condition_queue_shot_dec: number
      condition_shot_dec: number
      control_inertion_factor: string
      cost: number
      crosshair_inertion: number
      description: string
      fire_dispersion_base: number
      fire_distance: number
      grenade_class: CommaSeparatedString<string[]>
      grenade_launcher_name: string
      grenade_launcher_status: number
      grenade_launcher_x: number
      grenade_launcher_y: number
      grenade_vel: number
      hit_impulse: number
      hit_power: vector
      hit_type: string
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
      kind: string
      laser_status: boolean
      launch_speed: number
      misfire_end_condition: number
      misfire_end_prob: number
      misfire_probability: number
      misfire_start_condition: number
      misfire_start_prob: number
      parent_section: string
      PDM_disp_accel_factor: number
      PDM_disp_base: number
      PDM_disp_crouch: number
      PDM_disp_crouch_no_acc: number
      PDM_disp_vel_factor: number
      repair_type: string
      rpm: number
      rpm_empty_click: number
      scope_status: number
      scope_zoom_factor: number
      scopes: CommaSeparatedString<string[]>
      time_to_aim: number
      use_aim_bullet: boolean
      use_alt_aim_hud: boolean
    }
    wpn_groza_nimble_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_hud'], 'aim_hud_offset_alt_pos' | 'aim_hud_offset_alt_pos_16x9' | 'aim_hud_offset_alt_rot' | 'aim_hud_offset_alt_rot_16x9' | 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'anm_bore_jammed' | 'anm_hide' | 'anm_hide_g' | 'anm_hide_jammed' | 'anm_hide_w_gl' | 'anm_hide_w_gl_jammed' | 'anm_idle' | 'anm_idle_aim' | 'anm_idle_aim_end' | 'anm_idle_aim_end_empty' | 'anm_idle_aim_end_g' | 'anm_idle_aim_end_g_empty' | 'anm_idle_aim_end_jammed' | 'anm_idle_aim_end_w_gl' | 'anm_idle_aim_end_w_gl_jammed' | 'anm_idle_aim_jammed' | 'anm_idle_aim_moving' | 'anm_idle_aim_moving_crouch' | 'anm_idle_aim_moving_crouch_jammed' | 'anm_idle_aim_moving_jammed' | 'anm_idle_aim_start' | 'anm_idle_aim_start_empty' | 'anm_idle_aim_start_g' | 'anm_idle_aim_start_g_empty' | 'anm_idle_aim_start_jammed' | 'anm_idle_aim_start_w_gl' | 'anm_idle_aim_start_w_gl_jammed' | 'anm_idle_g' | 'anm_idle_g_aim' | 'anm_idle_jammed' | 'anm_idle_moving' | 'anm_idle_moving_crouch' | 'anm_idle_moving_crouch_g' | 'anm_idle_moving_crouch_g_aim' | 'anm_idle_moving_crouch_jammed' | 'anm_idle_moving_crouch_w_gl' | 'anm_idle_moving_crouch_w_gl_aim' | 'anm_idle_moving_crouch_w_gl_aim_jammed' | 'anm_idle_moving_crouch_w_gl_jammed' | 'anm_idle_moving_g' | 'anm_idle_moving_g_aim' | 'anm_idle_moving_jammed' | 'anm_idle_moving_w_gl' | 'anm_idle_moving_w_gl_aim' | 'anm_idle_moving_w_gl_aim_jammed' | 'anm_idle_moving_w_gl_jammed' | 'anm_idle_sprint' | 'anm_idle_sprint_g' | 'anm_idle_sprint_jammed' | 'anm_idle_sprint_w_gl' | 'anm_idle_sprint_w_gl_jammed' | 'anm_idle_w_gl' | 'anm_idle_w_gl_aim' | 'anm_idle_w_gl_aim_jammed' | 'anm_idle_w_gl_jammed' | 'anm_reload' | 'anm_reload_empty' | 'anm_reload_empty_w_gl' | 'anm_reload_g' | 'anm_reload_misfire' | 'anm_reload_misfire_w_gl' | 'anm_reload_w_gl' | 'anm_shots' | 'anm_shots_aim' | 'anm_shots_g' | 'anm_shots_g_aim' | 'anm_shots_w_gl' | 'anm_shots_w_gl_aim' | 'anm_show' | 'anm_show_g' | 'anm_show_jammed' | 'anm_show_w_gl' | 'anm_show_w_gl_jammed' | 'anm_sprint_end' | 'anm_sprint_end_g' | 'anm_sprint_end_jammed' | 'anm_sprint_end_w_gl' | 'anm_sprint_end_w_gl_jammed' | 'anm_sprint_start' | 'anm_sprint_start_g' | 'anm_sprint_start_jammed' | 'anm_sprint_start_w_gl' | 'anm_sprint_start_w_gl_jammed' | 'anm_switch' | 'anm_switch_g' | 'anm_switch_mode' | 'anm_switch_mode_jammed' | 'anm_switch_mode_w_gl' | 'fire_bone' | 'fire_bone2' | 'fire_point' | 'fire_point2' | 'hands_orientation' | 'hands_orientation_16x9' | 'hands_position' | 'hands_position_16x9' | 'item_visual' | 'shell_bone' | 'shell_dir' | 'shell_point' | 'ts_pattern_sprint_end' | 'ts_pattern_sprint_start' | 'ts_strict_sprint_end_move'> & {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_bore_jammed: CommaSeparatedString<string[]>
      anm_hide: CommaSeparatedString<string[]>
      anm_hide_g: CommaSeparatedString<string[]>
      anm_hide_jammed: CommaSeparatedString<string[]>
      anm_hide_w_gl: CommaSeparatedString<string[]>
      anm_hide_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle: CommaSeparatedString<string[]>
      anm_idle_aim: CommaSeparatedString<string[]>
      anm_idle_aim_end: CommaSeparatedString<string[]>
      anm_idle_aim_end_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end_g: CommaSeparatedString<string[]>
      anm_idle_aim_end_g_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_end_w_gl: CommaSeparatedString<string[]>
      anm_idle_aim_end_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_start: CommaSeparatedString<string[]>
      anm_idle_aim_start_empty: CommaSeparatedString<string[]>
      anm_idle_aim_start_g: CommaSeparatedString<string[]>
      anm_idle_aim_start_g_empty: CommaSeparatedString<string[]>
      anm_idle_aim_start_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_start_w_gl: CommaSeparatedString<string[]>
      anm_idle_aim_start_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_g: CommaSeparatedString<string[]>
      anm_idle_g_aim: CommaSeparatedString<string[]>
      anm_idle_jammed: CommaSeparatedString<string[]>
      anm_idle_moving: CommaSeparatedString<string[]>
      anm_idle_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_g: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_g_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_g: CommaSeparatedString<string[]>
      anm_idle_moving_g_aim: CommaSeparatedString<string[]>
      anm_idle_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_g: CommaSeparatedString<string[]>
      anm_idle_sprint_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint_w_gl: CommaSeparatedString<string[]>
      anm_idle_sprint_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_w_gl: CommaSeparatedString<string[]>
      anm_idle_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_w_gl_jammed: CommaSeparatedString<string[]>
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_reload_empty_w_gl: CommaSeparatedString<string[]>
      anm_reload_g: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_reload_misfire_w_gl: CommaSeparatedString<string[]>
      anm_reload_w_gl: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_shots_aim: CommaSeparatedString<string[]>
      anm_shots_g: CommaSeparatedString<string[]>
      anm_shots_g_aim: CommaSeparatedString<string[]>
      anm_shots_w_gl: CommaSeparatedString<string[]>
      anm_shots_w_gl_aim: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_g: CommaSeparatedString<string[]>
      anm_show_jammed: CommaSeparatedString<string[]>
      anm_show_w_gl: CommaSeparatedString<string[]>
      anm_show_w_gl_jammed: CommaSeparatedString<string[]>
      anm_sprint_end: CommaSeparatedString<string[]>
      anm_sprint_end_g: CommaSeparatedString<string[]>
      anm_sprint_end_jammed: CommaSeparatedString<string[]>
      anm_sprint_end_w_gl: CommaSeparatedString<string[]>
      anm_sprint_end_w_gl_jammed: CommaSeparatedString<string[]>
      anm_sprint_start: CommaSeparatedString<string[]>
      anm_sprint_start_g: CommaSeparatedString<string[]>
      anm_sprint_start_jammed: CommaSeparatedString<string[]>
      anm_sprint_start_w_gl: CommaSeparatedString<string[]>
      anm_sprint_start_w_gl_jammed: CommaSeparatedString<string[]>
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      anm_switch_mode: CommaSeparatedString<string[]>
      anm_switch_mode_jammed: CommaSeparatedString<string[]>
      anm_switch_mode_w_gl: CommaSeparatedString<string[]>
      fire_bone: string
      fire_bone2: string
      fire_point: vector
      fire_point2: vector
      hands_orientation: vector
      hands_orientation_16x9: vector
      hands_position: vector
      hands_position_16x9: vector
      item_visual: string
      shell_bone: string
      shell_dir: vector
      shell_point: vector
      ts_pattern_sprint_end: CommaSeparatedString<string[]>
      ts_pattern_sprint_start: CommaSeparatedString<string[]>
      ts_strict_sprint_end_move: CommaSeparatedString<string[]>
    }
    wpn_groza_nimble_pn23: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_pn23_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_ac10632: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_ac10632_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_point_aimpro: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_point_aimpro_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_ekp8_18: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_ekp8_18_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_specter: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_specter_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_acog: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_acog_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_wpn_addon_scope_po4x34: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_wpn_addon_scope_po4x34_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_rmr: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_rmr_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_mepro: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_mepro_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_kemper: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y' | 'scope_status'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      scope_status: number
    }
    wpn_groza_nimble_kemper_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_eot: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_eot_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_e0t2: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_e0t2_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_d0cter: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_d0cter_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_groza_nimble_deltapoint: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y' | 'scope_status'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      scope_status: number
    }
    wpn_groza_nimble_deltapoint_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_groza_nimble_compm4s: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_compm4s_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    'wpn_groza_nimble_c-more': Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    'wpn_groza_nimble_c-more_hud': Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_aimpoint: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y' | 'inv_weight'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      inv_weight: number
    }
    wpn_groza_nimble_aimpoint_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
    }
    wpn_groza_nimble_0kp2: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'icons_texture' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      icons_texture: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
    }
    wpn_groza_nimble_0kp2_hud: Omit<ItemsWeaponsBaseIni['wpn_groza_nimble_hud'], 'anm_switch' | 'anm_switch_g' | 'item_visual' | 'wpn_addon_scope_po4x34'> & {
      anm_switch: CommaSeparatedString<string[]>
      anm_switch_g: CommaSeparatedString<string[]>
      item_visual: string
      wpn_addon_scope_po4x34: string
    }
  }
}
