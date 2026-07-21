// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_sig550.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_sig550: {
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
      fire_modes: vector
      fire_point: vector
      fire_point2: vector
      flame_particles: string
      grenade_class: CommaSeparatedString<string[]>
      grenade_flame_particles: string
      grenade_launcher_name: string
      grenade_launcher_status: number
      grenade_launcher_x: number
      grenade_launcher_y: number
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
      scopes: CommaSeparatedString<string[]>
      shell_dir: vector
      shell_particles: string
      shell_point: vector
      silencer_light_color: vector
      silencer_light_range: number
      silencer_light_time: number
      silencer_light_var_color: number
      silencer_light_var_range: number
      silencer_name: string
      silencer_smoke_particles: string
      silencer_status: number
      silencer_x: number
      silencer_y: number
      single_handed: number
      slot: number
      smoke_particles: string
      snd_draw: string
      snd_reload: string
      snd_reload_empty: string
      snd_reload_grenade: string
      snd_reload_misfire: string
      snd_shoot_grenade: string
      snd_silncer_shot: string
      snd_switch: string
      snd_switch_g: string
      snd_switch_mode: string
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
    wpn_sig550_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_hide: CommaSeparatedString<string[]>
      anm_hide_empty: CommaSeparatedString<string[]>
      anm_hide_g: CommaSeparatedString<string[]>
      anm_hide_jammed: CommaSeparatedString<string[]>
      anm_hide_w_gl: CommaSeparatedString<string[]>
      anm_hide_w_gl_empty: CommaSeparatedString<string[]>
      anm_hide_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle: CommaSeparatedString<string[]>
      anm_idle_aim: CommaSeparatedString<string[]>
      anm_idle_aim_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end: CommaSeparatedString<string[]>
      anm_idle_aim_end_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end_g: CommaSeparatedString<string[]>
      anm_idle_aim_end_g_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_end_w_gl: CommaSeparatedString<string[]>
      anm_idle_aim_end_w_gl_empty: CommaSeparatedString<string[]>
      anm_idle_aim_end_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_start: CommaSeparatedString<string[]>
      anm_idle_aim_start_empty: CommaSeparatedString<string[]>
      anm_idle_aim_start_g: CommaSeparatedString<string[]>
      anm_idle_aim_start_g_empty: CommaSeparatedString<string[]>
      anm_idle_aim_start_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_start_w_gl: CommaSeparatedString<string[]>
      anm_idle_aim_start_w_gl_empty: CommaSeparatedString<string[]>
      anm_idle_aim_start_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_empty: CommaSeparatedString<string[]>
      anm_idle_g: CommaSeparatedString<string[]>
      anm_idle_g_aim: CommaSeparatedString<string[]>
      anm_idle_jammed: CommaSeparatedString<string[]>
      anm_idle_moving: CommaSeparatedString<string[]>
      anm_idle_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_empty: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_g: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_g_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_aim_empty: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_empty: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_empty: CommaSeparatedString<string[]>
      anm_idle_moving_g: CommaSeparatedString<string[]>
      anm_idle_moving_g_aim: CommaSeparatedString<string[]>
      anm_idle_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_aim_empty: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_empty: CommaSeparatedString<string[]>
      anm_idle_moving_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_empty: CommaSeparatedString<string[]>
      anm_idle_sprint_g: CommaSeparatedString<string[]>
      anm_idle_sprint_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint_w_gl: CommaSeparatedString<string[]>
      anm_idle_sprint_w_gl_empty: CommaSeparatedString<string[]>
      anm_idle_sprint_w_gl_jammed: CommaSeparatedString<string[]>
      anm_idle_w_gl: CommaSeparatedString<string[]>
      anm_idle_w_gl_aim: CommaSeparatedString<string[]>
      anm_idle_w_gl_aim_empty: CommaSeparatedString<string[]>
      anm_idle_w_gl_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_w_gl_empty: CommaSeparatedString<string[]>
      anm_idle_w_gl_jammed: CommaSeparatedString<string[]>
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_reload_empty_w_gl: CommaSeparatedString<string[]>
      anm_reload_g: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_reload_misfire_w_gl: CommaSeparatedString<string[]>
      anm_reload_w_gl: CommaSeparatedString<string[]>
      anm_shot_l: CommaSeparatedString<string[]>
      anm_shot_l_aim: CommaSeparatedString<string[]>
      anm_shot_l_w_gl: CommaSeparatedString<string[]>
      anm_shot_l_w_gl_aim: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_shots_aim: CommaSeparatedString<string[]>
      anm_shots_g: CommaSeparatedString<string[]>
      anm_shots_g_aim: CommaSeparatedString<string[]>
      anm_shots_w_gl: CommaSeparatedString<string[]>
      anm_shots_w_gl_aim: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_empty: CommaSeparatedString<string[]>
      anm_show_g: CommaSeparatedString<string[]>
      anm_show_jammed: CommaSeparatedString<string[]>
      anm_show_w_gl: CommaSeparatedString<string[]>
      anm_show_w_gl_empty: CommaSeparatedString<string[]>
      anm_show_w_gl_jammed: CommaSeparatedString<string[]>
      anm_sprint_end: CommaSeparatedString<string[]>
      anm_sprint_end_empty: CommaSeparatedString<string[]>
      anm_sprint_end_empty_g: CommaSeparatedString<string[]>
      anm_sprint_end_empty_w_gl: CommaSeparatedString<string[]>
      anm_sprint_end_g: CommaSeparatedString<string[]>
      anm_sprint_end_jammed: CommaSeparatedString<string[]>
      anm_sprint_end_w_gl: CommaSeparatedString<string[]>
      anm_sprint_end_w_gl_jammed: CommaSeparatedString<string[]>
      anm_sprint_start: CommaSeparatedString<string[]>
      anm_sprint_start_empty: CommaSeparatedString<string[]>
      anm_sprint_start_empty_g: CommaSeparatedString<string[]>
      anm_sprint_start_empty_w_gl: CommaSeparatedString<string[]>
      anm_sprint_start_g: CommaSeparatedString<string[]>
      anm_sprint_start_jammed: CommaSeparatedString<string[]>
      anm_sprint_start_w_gl: CommaSeparatedString<string[]>
      anm_sprint_start_w_gl_jammed: CommaSeparatedString<string[]>
      anm_switch_mode: CommaSeparatedString<string[]>
      anm_switch_mode_empty: CommaSeparatedString<string[]>
      anm_switch_mode_w_gl: CommaSeparatedString<string[]>
      anm_switch_mode_w_gl_empty: CommaSeparatedString<string[]>
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
      shell_bone: string
      shell_dir: vector
      shell_point: vector
      ts_pattern_sprint_end: CommaSeparatedString<string[]>
      ts_pattern_sprint_start: CommaSeparatedString<string[]>
      ts_strict_sprint_end_move: CommaSeparatedString<string[]>
      zoom_hide_crosshair: boolean
    }
    wpn_sig550_ac10632: Omit<ItemsWeaponsBaseIni['wpn_sig550'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_sig550_ac10632_hud: Omit<ItemsWeaponsBaseIni['wpn_sig550_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sig550_acog: Omit<ItemsWeaponsBaseIni['wpn_sig550'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_sig550_acog_hud: Omit<ItemsWeaponsBaseIni['wpn_sig550_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sig550_eot: Omit<ItemsWeaponsBaseIni['wpn_sig550'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_sig550_eot_hud: Omit<ItemsWeaponsBaseIni['wpn_sig550_hud'], 'item_visual'> & {
      item_visual: string
    }
    'wpn_sig550_c-more': Omit<ItemsWeaponsBaseIni['wpn_sig550'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'scope_zoom_factor'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      scope_zoom_factor: number
    }
    'wpn_sig550_c-more_hud': Omit<ItemsWeaponsBaseIni['wpn_sig550_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sig550_custom: Omit<ItemsWeaponsBaseIni['wpn_sig550'], 'condition_queue_shot_dec' | 'condition_shot_dec' | 'cost' | 'fire_dispersion_base' | 'grenade_class' | 'grenade_launcher_name' | 'grenade_launcher_status' | 'grenade_launcher_x' | 'grenade_launcher_y' | 'hud' | 'icons_texture' | 'installed_upgrades' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y' | 'inv_name' | 'inv_name_short' | 'laser_status' | 'launch_speed' | 'misfire_end_condition' | 'misfire_end_prob' | 'misfire_start_condition' | 'misfire_start_prob' | 'parent_section' | 'rpm' | 'scope_zoom_factor_alt' | 'scopes' | 'snd_draw' | 'snd_reload' | 'snd_reload_empty' | 'snd_reload_grenade' | 'snd_reload_misfire' | 'snd_shoot_grenade' | 'snd_silncer_shot' | 'snd_switch' | 'snd_switch_g' | 'snd_switch_mode' | 'use_alt_aim_hud' | 'visual'> & {
      condition_queue_shot_dec: number
      condition_shot_dec: number
      cost: number
      fire_dispersion_base: number
      grenade_class: CommaSeparatedString<string[]>
      grenade_launcher_name: string
      grenade_launcher_status: number
      grenade_launcher_x: number
      grenade_launcher_y: number
      hud: string
      icons_texture: string
      installed_upgrades: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_name_short: string
      laser_status: boolean
      launch_speed: number
      misfire_end_condition: number
      misfire_end_prob: number
      misfire_start_condition: number
      misfire_start_prob: number
      parent_section: string
      rpm: number
      scope_zoom_factor_alt: number
      scopes: CommaSeparatedString<string[]>
      snd_draw: string
      snd_reload: string
      snd_reload_empty: string
      snd_reload_grenade: string
      snd_reload_misfire: string
      snd_shoot_grenade: string
      snd_silncer_shot: string
      snd_switch: string
      snd_switch_g: string
      snd_switch_mode: string
      use_alt_aim_hud: boolean
      visual: string
    }
    wpn_sig550_custom_hud: Omit<ItemsWeaponsBaseIni['wpn_sig550_hud'], 'aim_hud_offset_alt_pos' | 'aim_hud_offset_alt_pos_16x9' | 'aim_hud_offset_alt_rot' | 'aim_hud_offset_alt_rot_16x9' | 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'anm_hide' | 'anm_hide_empty' | 'anm_hide_jammed' | 'anm_idle' | 'anm_idle_aim' | 'anm_idle_aim_empty' | 'anm_idle_aim_end' | 'anm_idle_aim_end_empty' | 'anm_idle_aim_end_jammed' | 'anm_idle_aim_jammed' | 'anm_idle_aim_moving' | 'anm_idle_aim_moving_crouch' | 'anm_idle_aim_moving_crouch_empty' | 'anm_idle_aim_moving_crouch_jammed' | 'anm_idle_aim_moving_empty' | 'anm_idle_aim_moving_jammed' | 'anm_idle_aim_start' | 'anm_idle_aim_start_empty' | 'anm_idle_aim_start_jammed' | 'anm_idle_empty' | 'anm_idle_jammed' | 'anm_idle_moving' | 'anm_idle_moving_crouch' | 'anm_idle_moving_crouch_empty' | 'anm_idle_moving_crouch_jammed' | 'anm_idle_moving_empty' | 'anm_idle_moving_jammed' | 'anm_idle_sprint' | 'anm_idle_sprint_empty' | 'anm_idle_sprint_jammed' | 'anm_reload' | 'anm_reload_empty' | 'anm_reload_misfire' | 'anm_shot_l' | 'anm_shot_l_aim' | 'anm_shots' | 'anm_shots_aim' | 'anm_show' | 'anm_show_empty' | 'anm_show_jammed' | 'anm_sprint_end' | 'anm_sprint_end_empty' | 'anm_sprint_end_jammed' | 'anm_sprint_start' | 'anm_sprint_start_empty' | 'anm_sprint_start_jammed' | 'anm_switch_mode' | 'anm_switch_mode_empty' | 'anm_switch_mode_jammed' | 'gl_hud_offset_pos' | 'gl_hud_offset_pos_16x9' | 'gl_hud_offset_rot' | 'gl_hud_offset_rot_16x9' | 'hands_orientation' | 'hands_orientation_16x9' | 'item_visual' | 'ts_pattern_sprint_end' | 'ts_pattern_sprint_start' | 'ts_strict_sprint_end_move'> & {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
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
      anm_shot_l_aim: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_shots_aim: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_empty: CommaSeparatedString<string[]>
      anm_show_jammed: CommaSeparatedString<string[]>
      anm_sprint_end: CommaSeparatedString<string[]>
      anm_sprint_end_empty: CommaSeparatedString<string[]>
      anm_sprint_end_jammed: CommaSeparatedString<string[]>
      anm_sprint_start: CommaSeparatedString<string[]>
      anm_sprint_start_empty: CommaSeparatedString<string[]>
      anm_sprint_start_jammed: CommaSeparatedString<string[]>
      anm_switch_mode: CommaSeparatedString<string[]>
      anm_switch_mode_empty: CommaSeparatedString<string[]>
      anm_switch_mode_jammed: CommaSeparatedString<string[]>
      gl_hud_offset_pos: vector
      gl_hud_offset_pos_16x9: vector
      gl_hud_offset_rot: vector
      gl_hud_offset_rot_16x9: vector
      hands_orientation: vector
      hands_orientation_16x9: vector
      item_visual: string
      ts_pattern_sprint_end: CommaSeparatedString<string[]>
      ts_pattern_sprint_start: CommaSeparatedString<string[]>
      ts_strict_sprint_end_move: CommaSeparatedString<string[]>
    }
    wpn_sig550_custom_ac10632: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_sig550_custom_ac10632_hud: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sig550_custom_acog: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_sig550_custom_acog_hud: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sig550_custom_eot: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_sig550_custom_eot_hud: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom_hud'], 'item_visual'> & {
      item_visual: string
    }
    'wpn_sig550_custom_c-more': Omit<ItemsWeaponsBaseIni['wpn_sig550_custom'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    'wpn_sig550_custom_c-more_hud': Omit<ItemsWeaponsBaseIni['wpn_sig550_custom_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sig550_luckygun: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_luckygun_ac10632: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom_ac10632'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_luckygun_eot: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom_eot'], 'parent_section'> & {
      parent_section: string
    }
    'wpn_sig550_luckygun_c-more': Omit<ItemsWeaponsBaseIni['wpn_sig550_custom_c-more'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_luckygun_e0t2: {
      parent_section: string
    }
    wpn_sig550_luckygun_ekp8_18: {
      parent_section: string
    }
    wpn_sig550_luckygun_hco: {
      parent_section: string
    }
    wpn_sig550_luckygun_he510: {
      parent_section: string
    }
    wpn_sig550_luckygun_kemper: {
      parent_section: string
    }
    wpn_sig550_luckygun_mepro: {
      parent_section: string
    }
    wpn_sig550_luckygun_aimpoint: {
      parent_section: string
    }
    wpn_sig550_luckygun_0kp2: {
      parent_section: string
    }
    wpn_sig550_luckygun_romeo4: {
      parent_section: string
    }
    wpn_sig550_luckygun_romeo8: {
      parent_section: string
    }
    wpn_sig550_luckygun_t12: {
      parent_section: string
    }
    wpn_sig550_luckygun_bossxe: {
      parent_section: string
    }
    wpn_sig550_luckygun_acog: Omit<ItemsWeaponsBaseIni['wpn_sig550_custom_acog'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_luckygun_pn23: {
      parent_section: string
    }
    wpn_sig550_luckygun_leupold: {
      parent_section: string
    }
    wpn_sig550_luckygun_specter: {
      parent_section: string
    }
    wpn_sig550_luckygun_marchf: {
      parent_section: string
    }
    wpn_sig550_luckygun_gee36: {
      parent_section: string
    }
    wpn_sig550_luckygun_gauss_sight: {
      parent_section: string
    }
    wpn_sig550_luckygun_tac30: {
      parent_section: string
    }
    wpn_sig550_luckygun_cortex: {
      parent_section: string
    }
    wpn_sig550_luckygun_razorhd: {
      parent_section: string
    }
    wpn_sig550_luckygun_ps320: {
      parent_section: string
    }
    wpn_sig550_luckygun_c79: {
      parent_section: string
    }
    wpn_sig550_luckygun_march_f_shorty: {
      parent_section: string
    }
    wpn_sig550_luckygun_devo: {
      parent_section: string
    }
    wpn_sig550_luckygun_e0t2_magd: {
      parent_section: string
    }
    wpn_sig550_luckygun_e0t2_magd_off: {
      parent_section: string
    }
    wpn_sig550_luckygun_uh1_magd: {
      parent_section: string
    }
    wpn_sig550_luckygun_uh1_magd_off: {
      parent_section: string
    }
    wpn_sig550_luckygun_echo1: {
      parent_section: string
    }
    wpn_sig550_sniper: Omit<ItemsWeaponsBaseIni['wpn_sig550'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_sniper_ac10632: Omit<ItemsWeaponsBaseIni['wpn_sig550_ac10632'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_sniper_eot: Omit<ItemsWeaponsBaseIni['wpn_sig550_eot'], 'parent_section'> & {
      parent_section: string
    }
    'wpn_sig550_sniper_c-more': Omit<ItemsWeaponsBaseIni['wpn_sig550_c-more'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_sniper_e0t2: {
      parent_section: string
    }
    wpn_sig550_sniper_ekp8_18: {
      parent_section: string
    }
    wpn_sig550_sniper_hco: {
      parent_section: string
    }
    wpn_sig550_sniper_he510: {
      parent_section: string
    }
    wpn_sig550_sniper_kemper: {
      parent_section: string
    }
    wpn_sig550_sniper_mepro: {
      parent_section: string
    }
    wpn_sig550_sniper_aimpoint: {
      parent_section: string
    }
    wpn_sig550_sniper_0kp2: {
      parent_section: string
    }
    wpn_sig550_sniper_romeo4: {
      parent_section: string
    }
    wpn_sig550_sniper_romeo8: {
      parent_section: string
    }
    wpn_sig550_sniper_bossxe: {
      parent_section: string
    }
    wpn_sig550_sniper_acog: Omit<ItemsWeaponsBaseIni['wpn_sig550_acog'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_sniper_leupold: {
      parent_section: string
    }
    wpn_sig550_sniper_pn23: {
      parent_section: string
    }
    wpn_sig550_sniper_specter: {
      parent_section: string
    }
    wpn_sig550_sniper_marchf: {
      parent_section: string
    }
    wpn_sig550_sniper_gauss_sight: {
      parent_section: string
    }
    wpn_sig550_sniper_tac30: {
      parent_section: string
    }
    wpn_sig550_sniper_cortex: {
      parent_section: string
    }
    wpn_sig550_sniper_razorhd: {
      parent_section: string
    }
    wpn_sig550_sniper_ps320: {
      parent_section: string
    }
    wpn_sig550_sniper_c79: {
      parent_section: string
    }
    wpn_sig550_sniper_march_f_shorty: {
      parent_section: string
    }
    wpn_sig550_sniper_devo: {
      parent_section: string
    }
    wpn_sig550_camo: Omit<ItemsWeaponsBaseIni['wpn_sig550'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_camo_ac10632: Omit<ItemsWeaponsBaseIni['wpn_sig550_ac10632'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_camo_eot: Omit<ItemsWeaponsBaseIni['wpn_sig550_eot'], 'parent_section'> & {
      parent_section: string
    }
    'wpn_sig550_camo_c-more': Omit<ItemsWeaponsBaseIni['wpn_sig550_c-more'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_camo_e0t2: {
      parent_section: string
    }
    wpn_sig550_camo_ekp8_18: {
      parent_section: string
    }
    wpn_sig550_camo_hco: {
      parent_section: string
    }
    wpn_sig550_camo_he510: {
      parent_section: string
    }
    wpn_sig550_camo_kemper: {
      parent_section: string
    }
    wpn_sig550_camo_mepro: {
      parent_section: string
    }
    wpn_sig550_camo_aimpoint: {
      parent_section: string
    }
    wpn_sig550_camo_0kp2: {
      parent_section: string
    }
    wpn_sig550_camo_romeo4: {
      parent_section: string
    }
    wpn_sig550_camo_romeo8: {
      parent_section: string
    }
    wpn_sig550_camo_bossxe: {
      parent_section: string
    }
    wpn_sig550_camo_acog: Omit<ItemsWeaponsBaseIni['wpn_sig550_acog'], 'parent_section'> & {
      parent_section: string
    }
    wpn_sig550_camo_leupold: {
      parent_section: string
    }
    wpn_sig550_camo_pn23: {
      parent_section: string
    }
    wpn_sig550_camo_specter: {
      parent_section: string
    }
    wpn_sig550_camo_marchf: {
      parent_section: string
    }
    wpn_sig550_camo_gauss_sight: {
      parent_section: string
    }
    wpn_sig550_camo_tac30: {
      parent_section: string
    }
    wpn_sig550_camo_cortex: {
      parent_section: string
    }
    wpn_sig550_camo_razorhd: {
      parent_section: string
    }
    wpn_sig550_camo_ps320: {
      parent_section: string
    }
    wpn_sig550_camo_c79: {
      parent_section: string
    }
    wpn_sig550_camo_march_f_shorty: {
      parent_section: string
    }
    wpn_sig550_camo_devo: {
      parent_section: string
    }
  }
}
