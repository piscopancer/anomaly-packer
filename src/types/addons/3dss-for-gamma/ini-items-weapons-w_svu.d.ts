// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_svu.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_svu: {
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
      scope_name: string
      scope_status: number
      scope_texture: string
      scope_x: number
      scope_y: number
      scope_zoom_factor: number
      scopes: CommaSeparatedString<string[]>
      shell_dir: vector
      shell_particles: string
      shell_point: vector
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
      zoom_enabled: boolean
      zoom_rotate_time: number
    }
    wpn_svu_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_hide: string
      anm_idle: string
      anm_idle_aim: string
      anm_idle_aim_moving: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch: string
      anm_idle_moving: string
      anm_idle_moving_crouch: string
      anm_idle_sprint: string
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_show: string
      attach_place_idx: number
      fire_bone: string
      fire_point: vector
      freelook_z_offset_mul: number
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
      shell_bone: string
      shell_dir: vector
      shell_point: vector
      zoom_hide_crosshair: boolean
    }
    wpn_svu_kobra: Omit<ItemsWeaponsBaseIni['wpn_svu'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_svu_kobra_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_svu_1p29: Omit<ItemsWeaponsBaseIni['wpn_svu'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_svu_1p29_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_svu_ps01: Omit<ItemsWeaponsBaseIni['wpn_svu'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_svu_pso1_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_svu_alt: Omit<ItemsWeaponsBaseIni['wpn_svu'], 'condition_queue_shot_dec' | 'condition_shot_dec' | 'cost' | 'fire_dispersion_base' | 'hud' | 'installed_upgrades' | 'inv_grid_x' | 'inv_grid_y' | 'inv_name' | 'inv_name_short' | 'misfire_end_condition' | 'misfire_end_prob' | 'misfire_start_condition' | 'misfire_start_prob' | 'parent_section' | 'rpm' | 'visual'> & {
      condition_queue_shot_dec: number
      condition_shot_dec: number
      cost: number
      fire_dispersion_base: number
      hud: string
      installed_upgrades: string
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_name_short: string
      misfire_end_condition: number
      misfire_end_prob: number
      misfire_start_condition: number
      misfire_start_prob: number
      parent_section: string
      rpm: number
      visual: string
    }
    wpn_svu_sk1_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_svu_alt_1p29: Omit<ItemsWeaponsBaseIni['wpn_svu_alt'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_svu_1p29_sk1_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_1p29_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_svu_alt_kobra: Omit<ItemsWeaponsBaseIni['wpn_svu_alt'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_svu_kobra_sk1_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_kobra_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_svu_alt_ps01: Omit<ItemsWeaponsBaseIni['wpn_svu_alt'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'item_visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      item_visual: string
    }
    wpn_svu_pso1_sk1_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_pso1_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_svu_nimble: Omit<ItemsWeaponsBaseIni['wpn_svu'], '$spawn' | 'class' | 'condition_queue_shot_dec' | 'condition_shot_dec' | 'cost' | 'description' | 'fire_dispersion_base' | 'fire_modes' | 'grenade_class' | 'grenade_flame_particles' | 'hit_power' | 'hud' | 'installed_upgrades' | 'inv_grid_x' | 'inv_grid_y' | 'inv_name' | 'inv_weight' | 'launch_speed' | 'misfire_end_condition' | 'misfire_end_prob' | 'misfire_start_condition' | 'misfire_start_prob' | 'parent_section' | 'rpm' | 'scopes' | 'visual'> & {
      $spawn: string
      class: string
      condition_queue_shot_dec: number
      condition_shot_dec: number
      cost: number
      description: string
      fire_dispersion_base: number
      fire_modes: CommaSeparatedString<string[]>
      grenade_class: string
      grenade_flame_particles: string
      hit_power: vector
      hud: string
      installed_upgrades: string
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_weight: number
      launch_speed: number
      misfire_end_condition: number
      misfire_end_prob: number
      misfire_start_condition: number
      misfire_start_prob: number
      parent_section: string
      rpm: number
      scopes: CommaSeparatedString<string[]>
      visual: string
    }
    wpn_svu_nimble_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_hud'], 'grenade_bone' | 'item_visual'> & {
      grenade_bone: string
      item_visual: string
    }
    wpn_svu_nimble_1p29: Omit<ItemsWeaponsBaseIni['wpn_svu_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_svu_nimble_1p29_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_1p29_hud'], 'grenade_bone' | 'item_visual'> & {
      grenade_bone: string
      item_visual: string
    }
    wpn_svu_nimble_kobra: Omit<ItemsWeaponsBaseIni['wpn_svu_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_svu_nimble_kobra_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_kobra_hud'], 'grenade_bone' | 'item_visual'> & {
      grenade_bone: string
      item_visual: string
    }
    wpn_svu_nimble_ps01: Omit<ItemsWeaponsBaseIni['wpn_svu_nimble'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_svu_nimble_pso1_hud: Omit<ItemsWeaponsBaseIni['wpn_svu_pso1_hud'], 'grenade_bone' | 'item_visual'> & {
      grenade_bone: string
      item_visual: string
    }
  }
}
