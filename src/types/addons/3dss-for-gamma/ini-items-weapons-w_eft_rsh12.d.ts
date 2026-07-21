// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_eft_rsh12.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_rsh12_sa_snd_shoot: {
      snd_1_layer: string
      snd_1_layer1: string
      snd_1_layer2: string
      snd_1_layer3: string
      snd_2_layer: string
      snd_3_layer: string
      snd_4_layer: CommaSeparatedString<string[]>
      snd_4_layer1: CommaSeparatedString<string[]>
      snd_4_layer2: CommaSeparatedString<string[]>
      snd_4_layer3: CommaSeparatedString<string[]>
      snd_5_layer: string
    }
    wpn_rsh12_sa_snd_shoot_actor: {
      snd_1_layer: string
      snd_1_layer1: string
      snd_1_layer2: string
      snd_1_layer3: string
      snd_2_layer: string
      snd_2_layer1: string
      snd_2_layer2: string
      snd_2_layer3: string
      snd_3_layer: string
    }
    wpn_rsh12_sa_snd_silenced: {
      snd_1_layer: string
      snd_1_layer1: string
      snd_1_layer2: string
      snd_1_layer3: string
      snd_2_layer: string
      snd_3_layer: string
      snd_4_layer: CommaSeparatedString<string[]>
      snd_4_layer1: CommaSeparatedString<string[]>
      snd_4_layer2: CommaSeparatedString<string[]>
      snd_4_layer3: CommaSeparatedString<string[]>
    }
    wpn_rsh12_sa_snd_silenced_actor: {
      snd_1_layer: string
      snd_1_layer1: string
      snd_1_layer2: string
      snd_1_layer3: string
      snd_2_layer: CommaSeparatedString<string[]>
      snd_2_layer1: CommaSeparatedString<string[]>
      snd_2_layer2: CommaSeparatedString<string[]>
      snd_2_layer3: CommaSeparatedString<string[]>
    }
    wpn_eft_rsh12: {
      $npc: boolean
      $prefetch: number
      $spawn: string
      ammo_class: CommaSeparatedString<string[]>
      ammo_current: number
      ammo_elapsed: number
      ammo_limit: number
      ammo_mag_size: number
      animation_slot: number
      bullet_bones: CommaSeparatedString<string[]>
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
      discovery_dependency: string
      ef_weapon_type: number
      fire_dispersion_base: number
      fire_dispersion_condition_factor: number
      fire_distance: number
      fire_modes: number
      fire_point: vector
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
      scripted_snd_ammo_check_aim: string
      scripted_snd_ammo_check_aim_empty: string
      scripted_snd_ammo_check_jammed: string
      scripted_snd_reload: string
      scripted_snd_reload_ammo1: string
      scripted_snd_reload_ammo2: string
      scripted_snd_reload_ammo3: string
      scripted_snd_reload_ammo4: string
      scripted_snd_shots: CommaSeparatedString<string[]>
      scripted_snd_shots_aim: CommaSeparatedString<string[]>
      scripted_snd_shots_aim_jammed: CommaSeparatedString<string[]>
      scripted_snd_shots_jammed: CommaSeparatedString<string[]>
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
      snd_bore: string
      snd_draw: string
      snd_empty: string
      snd_empty_first: string
      snd_holster: string
      snd_reload: string
      snd_reload_empty: string
      snd_reload_misfire: string
      snd_shoot: string
      snd_shoot_actor: string
      snd_shoot_jammed: string
      snd_silncer_shot: string
      snd_silncer_shot_actor: string
      sprint_allowed: boolean
      time_to_aim: number
      upgr_icon_height: number
      upgr_icon_path: string
      upgr_icon_width: number
      upgr_icon_x: number
      upgr_icon_y: number
      upgrade_scheme: string
      upgrades: CommaSeparatedString<string[]>
      use_aim_bullet: boolean
      visual: string
      weapon_lower_speed: number
      zoom_cam_dispersion: number
      zoom_cam_dispersion_frac: number
      zoom_cam_max_angle_horz: number
      zoom_cam_step_angle_horz: number
      zoom_dof: vector
      zoom_enabled: boolean
      zoom_rotate_time: number
    }
    wpn_eft_rsh12_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: CommaSeparatedString<string[]>
      aim_hud_offset_rot_16x9: CommaSeparatedString<string[]>
      anm_ammo_check: CommaSeparatedString<string[]>
      anm_ammo_check_aim: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_jammed: CommaSeparatedString<string[]>
      anm_bore: CommaSeparatedString<string[]>
      anm_bore_aim: CommaSeparatedString<string[]>
      anm_bore_aim_jammed: CommaSeparatedString<string[]>
      anm_bore_jammed: CommaSeparatedString<string[]>
      anm_hide: string
      anm_hide_jammed: CommaSeparatedString<string[]>
      anm_idle: string
      anm_idle_aim: string
      anm_idle_aim_end: CommaSeparatedString<string[]>
      anm_idle_aim_end_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving: string
      anm_idle_aim_moving_crouch: string
      anm_idle_aim_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_start: CommaSeparatedString<string[]>
      anm_idle_aim_start_jammed: CommaSeparatedString<string[]>
      anm_idle_jammed: CommaSeparatedString<string[]>
      anm_idle_moving: string
      anm_idle_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_jammed: CommaSeparatedString<string[]>
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_ammo1: CommaSeparatedString<string[]>
      anm_reload_ammo2: CommaSeparatedString<string[]>
      anm_reload_ammo3: CommaSeparatedString<string[]>
      anm_reload_ammo4: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_reload_misfire: string
      anm_reload_misfire_aim: CommaSeparatedString<string[]>
      anm_shots: string
      anm_shots_aim: CommaSeparatedString<string[]>
      anm_shots_jammed: CommaSeparatedString<string[]>
      anm_shots_jammed_aim: CommaSeparatedString<string[]>
      anm_show: string
      anm_show_jammed: CommaSeparatedString<string[]>
      anm_sprint_end: CommaSeparatedString<string[]>
      anm_sprint_end_jammed: CommaSeparatedString<string[]>
      anm_sprint_start: CommaSeparatedString<string[]>
      anm_sprint_start_jammed: CommaSeparatedString<string[]>
      attach_place_idx: number
      fire_bone: string
      fire_direction: vector
      fire_point: vector
      freelook_z_offset_mul: number
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
    wpn_eft_rsh12_0kp2: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_0kp2_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_ac10632: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_ac10632_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_aim_low: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_aim_low_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_aimpoint: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_aimpoint_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_point_aimpro: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_point_aimpro_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    'wpn_eft_rsh12_c-more': Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    'wpn_eft_rsh12_c-more_hud': Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_compm4s: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_compm4s_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_deltapoint: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_deltapoint_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_d0cter: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_d0cter_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_e0t2: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_e0t2_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_ekp8_18: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_ekp8_18_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_eot: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_eot_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_exps3: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_exps3_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_he510: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_he510_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_lazup_pl15: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], 'hud' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y' | 'laser_status' | 'silencer_x' | 'silencer_y' | 'use_alt_aim_hud'> & {
      hud: string
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      laser_status: boolean
      silencer_x: number
      silencer_y: number
      use_alt_aim_hud: boolean
    }
    wpn_eft_rsh12_lazup_pl15_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_rmr: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_rmr_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_t12: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_t12_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_march_f_shorty: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_eft_rsh12_march_f_shorty_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_aim_acro: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], 'hud'> & {
      hud: string
    }
    wpn_eft_rsh12_aim_acro_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_hco: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], 'hud'> & {
      hud: string
    }
    wpn_eft_rsh12_hco_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_1p87: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], 'hud'> & {
      hud: string
    }
    wpn_eft_rsh12_1p87_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_romeo8: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], 'hud'> & {
      hud: string
    }
    wpn_eft_rsh12_romeo8_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_pk6: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], 'hud'> & {
      hud: string
    }
    wpn_eft_rsh12_pk6_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_p1x42: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], 'hud'> & {
      hud: string
    }
    wpn_eft_rsh12_p1x42_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_lco1: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], 'hud'> & {
      hud: string
    }
    wpn_eft_rsh12_lco1_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_eft_rsh12_romeo4: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12'], 'hud'> & {
      hud: string
    }
    wpn_eft_rsh12_romeo4_hud: Omit<ItemsWeaponsBaseIni['wpn_eft_rsh12_hud'], 'item_visual'> & {
      item_visual: string
    }
  }
}
