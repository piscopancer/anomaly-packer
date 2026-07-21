// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_ru556.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_m4_ru556: {
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
      rpm_mode_2: number
      scheduled: boolean
      scope_status: number
      scope_zoom_factor: number
      scope_zoom_factor_alt: number
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
      snd_bore: string
      snd_draw: string
      snd_empty: CommaSeparatedString<string[]>
      snd_holster: string
      snd_reload: string
      snd_reload_empty: string
      snd_reload_misfire: string
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
    wpn_m4_ru556_hud: {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_bore: string
      anm_bore_empty: CommaSeparatedString<string[]>
      anm_hide: string
      anm_hide_empty: CommaSeparatedString<string[]>
      anm_idle: string
      anm_idle_aim: string
      anm_idle_aim_empty: CommaSeparatedString<string[]>
      anm_idle_empty: CommaSeparatedString<string[]>
      anm_idle_moving: CommaSeparatedString<string[]>
      anm_idle_moving_empty: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_empty: CommaSeparatedString<string[]>
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_shot_l: CommaSeparatedString<string[]>
      anm_shots: string
      anm_show: string
      anm_show_empty: CommaSeparatedString<string[]>
      anm_switch_mode: string
      anm_switch_mode_empty: CommaSeparatedString<string[]>
      attach_place_idx: number
      fire_bone: string
      fire_bone2: string
      fire_point: vector
      fire_point2: vector
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
      lowered_hud_offset_pos: vector
      lowered_hud_offset_pos_16x9: vector
      lowered_hud_offset_rot: vector
      lowered_hud_offset_rot_16x9: vector
      shell_bone: string
      shell_dir: vector
      shell_point: vector
      zoom_hide_crosshair: boolean
    }
    wpn_m4_ru556_acog: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_m4_ru556_acog_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_specter: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_m4_ru556_specter_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_leupold: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_m4_ru556_leupold_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_pn23: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_m4_ru556_pn23_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_gauss_sight: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_m4_ru556_gauss_sight_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_susat: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_m4_ru556_susat_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_marchf: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_m4_ru556_marchf_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_ac10632: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_m4_ru556_ac10632_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_eot: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_m4_ru556_eot_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    'wpn_m4_ru556_c-more': Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    'wpn_m4_ru556_c-more_hud': Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_0kp2: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_m4_ru556_0kp2_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_mepro: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
      visual: string
    }
    wpn_m4_ru556_mepro_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_aimpoint: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_m4_ru556_aimpoint_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_point_aimpro: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_m4_ru556_point_aimpro_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_ekp8_18: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_m4_ru556_ekp8_18_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_e0t2: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_m4_ru556_e0t2_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_compm4s: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_m4_ru556_compm4s_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_m4_ru556_kemper: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      use_alt_aim_hud: boolean
    }
    wpn_m4_ru556_kemper_hud: Omit<ItemsWeaponsBaseIni['wpn_m4_ru556_hud'], 'item_visual'> & {
      item_visual: string
    }
  }
}
