// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemUdp9Ini {
    wpn_udp9: {
      $npc: boolean
      $prefetch: number
      $spawn: string
      ammo_class: CommaSeparatedString<string[]>
      ammo_elapsed: number
      ammo_mag_size: number
      animation_slot: number
      ap_modifier: number
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
      fire_modes: number
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
      inertion_origin_aim_offset: number
      inertion_origin_offset: number
      inertion_tendto_aim_speed: number
      inertion_tendto_speed: number
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
      scripted_snd_ammo_check: string
      scripted_snd_ammo_check_empty: string
      scripted_snd_ammo_check_empty_jammed: string
      scripted_snd_ammo_check_jammed: string
      scripted_snd_ammo_check_no_mag: string
      scripted_snd_bore: string
      scripted_snd_bore_empty: string
      scripted_snd_reload: string
      scripted_snd_reload_empty: string
      scripted_snd_reload_empty_variant1: string
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
      snd_ammo_check: string
      snd_ammo_check_empty: string
      snd_ammo_check_empty_jammed: string
      snd_ammo_check_jammed: string
      snd_bore: string
      snd_draw: string
      snd_holster: string
      snd_reload: string
      snd_reload_empty: string
      snd_reload_misfire: string
      sprint_allowed: boolean
      startup_ammo: number
      strap_bone0: string
      strap_bone1: string
      strap_orientation: vector
      strap_position: vector
      time_to_aim: number
      upgr_icon_height: number
      upgr_icon_path: string
      upgr_icon_width: number
      upgr_icon_x: number
      upgr_icon_y: number
      upgrade_scheme: string
      upgrades: CommaSeparatedString<string[]>
      use_aim_bullet: boolean
      use_alt_aim_hud: boolean
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
    wpn_udp9_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_ammo_check: CommaSeparatedString<string[]>
      anm_ammo_check_empty: CommaSeparatedString<string[]>
      anm_ammo_check_empty_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_no_mag: CommaSeparatedString<string[]>
      anm_bore: CommaSeparatedString<string[]>
      anm_bore_empty: CommaSeparatedString<string[]>
      anm_bore_empty_jammed: CommaSeparatedString<string[]>
      anm_bore_jammed: CommaSeparatedString<string[]>
      anm_hide: CommaSeparatedString<string[]>
      anm_hide_empty: CommaSeparatedString<string[]>
      anm_hide_jammed: CommaSeparatedString<string[]>
      anm_idle: CommaSeparatedString<string[]>
      anm_idle_aim: CommaSeparatedString<string[]>
      anm_idle_aim_empty: CommaSeparatedString<string[]>
      anm_idle_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_jammed: CommaSeparatedString<string[]>
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
      anm_reload_empty_variant1: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_shot_l: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_empty: CommaSeparatedString<string[]>
      anm_show_jammed: CommaSeparatedString<string[]>
      anm_sprint2walk: CommaSeparatedString<string[]>
      anm_sprint2walk_empty: CommaSeparatedString<string[]>
      anm_sprint2walk_jammed: CommaSeparatedString<string[]>
      anm_walk2sprint: CommaSeparatedString<string[]>
      anm_walk2sprint_empty: CommaSeparatedString<string[]>
      anm_walk2sprint_jammed: CommaSeparatedString<string[]>
      attach_place_idx: number
      base_hud_offset_pos: vector
      base_hud_offset_pos_16x9: vector
      base_hud_offset_rot: vector
      base_hud_offset_rot_16x9: vector
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
      ts_pattern_reload_empty_interrupt: CommaSeparatedString<string[]>
      ts_pattern_reload_interrupt: CommaSeparatedString<string[]>
      ts_pattern_sprint2walk: CommaSeparatedString<string[]>
      ts_pattern_sprint2walk_aim: CommaSeparatedString<string[]>
      ts_pattern_walk2sprint: CommaSeparatedString<string[]>
      ts_strict_sprint2aim: CommaSeparatedString<string[]>
      ts_strict_sprint2inspect: CommaSeparatedString<string[]>
      ts_strict_sprint2walk_idle: CommaSeparatedString<string[]>
      ts_strict_sprint2walk_move: CommaSeparatedString<string[]>
      ts_strict_walk2sprint_inspect: CommaSeparatedString<string[]>
      zoom_hide_crosshair: boolean
    }
    'wpn_udp9_c-more': Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    'wpn_udp9_c-more_hud': Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_udp9_ac10632: Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_udp9_ac10632_hud: Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_udp9_eot: Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_udp9_eot_hud: Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_udp9_aimpoint: Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_udp9_aimpoint_hud: Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_udp9_compm4s: Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_udp9_compm4s_hud: Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_udp9_point_aimpro: Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_udp9_point_aimpro_hud: Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_udp9_e0t2: Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_udp9_e0t2_hud: Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_udp9_lco1: Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_udp9_lco1_hud: Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_udp9_uh2: Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_udp9_uh2_hud: Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: CommaSeparatedString<string[]>
      aim_hud_offset_pos_16x9: CommaSeparatedString<string[]>
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_udp9_rmr: Omit<ModSystemUdp9Ini['wpn_udp9'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_udp9_rmr_hud: Omit<ModSystemUdp9Ini['wpn_udp9_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: CommaSeparatedString<string[]>
      aim_hud_offset_pos_16x9: CommaSeparatedString<string[]>
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
  }

  interface IniFileSchemas {
    'mod_system_udp9.ltx': ModSystemUdp9Ini
  }
}
