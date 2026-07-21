// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_sks_molot.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_sks_molot: {
      $npc: boolean
      $prefetch: number
      ammo_class: CommaSeparatedString<string[]>
      ammo_current: number
      ammo_elapsed: number
      ammo_limit: number
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
      discovery_dependency: string
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
      orientation: CommaSeparatedString<string[]>
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
      silencer_smoke_particles: string
      silencer_status: number
      single_handed: number
      slot: number
      smoke_particles: string
      snd_bore: string
      snd_draw: string
      snd_empty: string
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
      zoom_enabled: boolean
      zoom_rotate_time: number
    }
    wpn_sks_molot_hud: {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: vector
      aim_hud_offset_alt_rot_16x9: vector
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_bore: CommaSeparatedString<string[]>
      anm_bore_empty: CommaSeparatedString<string[]>
      anm_hide: CommaSeparatedString<string[]>
      anm_hide_empty: CommaSeparatedString<string[]>
      anm_idle: CommaSeparatedString<string[]>
      anm_idle_aim: CommaSeparatedString<string[]>
      anm_idle_aim_empty: CommaSeparatedString<string[]>
      anm_idle_empty: CommaSeparatedString<string[]>
      anm_idle_moving: CommaSeparatedString<string[]>
      anm_idle_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_moving_empty: CommaSeparatedString<string[]>
      anm_idle_moving_empty_crouch: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_empty: CommaSeparatedString<string[]>
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_shot_aim_l: CommaSeparatedString<string[]>
      anm_shot_l: CommaSeparatedString<string[]>
      anm_shot_l_aim: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_shots_aim: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_empty: CommaSeparatedString<string[]>
      attach_place_idx: number
      fire_bone: string
      fire_bone2: string
      fire_point: vector
      fire_point2: vector
      gl_hud_offset_pos: vector
      gl_hud_offset_rot: vector
      grenade_bone: string
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
      zoom_hide_crosshair: boolean
    }
    wpn_sks_molot_ekp8_02: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'inv_weight' | 'visual'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      inv_weight: number
      visual: string
    }
    wpn_sks_molot_ekp8_02_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'aim_hud_offset_pos' | 'aim_hud_offset_pos_16x9' | 'aim_hud_offset_rot' | 'aim_hud_offset_rot_16x9' | 'item_visual'> & {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      item_visual: string
    }
    wpn_sks_molot_kobra: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_kobra_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_ps01: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_sks_molot_ps01_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_okp: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_okp_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_1p29: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_1p29_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_pso2: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_pso2_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_1p76: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_1p76_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_pka: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_pka_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_1pn93: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_1pn93_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_1p78gs: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'inv_weight' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      inv_weight: number
      visual: string
    }
    wpn_sks_molot_1p78gs_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_1pn93n2_1gs: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_1pn93n2_1gs_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_pso1m21: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_sks_molot_pso1m21_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_usp1: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_usp1_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_sks_molot_1p59: Omit<ItemsWeaponsBaseIni['wpn_sks_molot'], '$spawn' | '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      $spawn: string
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_sks_molot_1p59_hud: Omit<ItemsWeaponsBaseIni['wpn_sks_molot_hud'], 'item_visual'> & {
      item_visual: string
    }
  }
}
