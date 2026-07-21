// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_vssk.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_vssk_barry_shots: {
      snd_1_layer: string
      snd_2_layer: string
      snd_3_layer: string
      snd_4_layer: string
    }
    wpn_vssk_barry_shot_l: {
      snd_1_layer: string
      snd_2_layer: string
      snd_3_layer: string
      snd_4_layer: string
    }
    wpn_vssk_barry_sounds: {
      snd_ammo_check: string
      snd_ammo_check_empty: string
      snd_ammo_check_no_mag: string
      snd_draw: string
      snd_empty: string
      snd_holster: string
      snd_reload: string
      snd_reload_empty: string
      snd_reload_misfire: string
      snd_reload_misfire_empty: string
      snd_shoot: string
      snd_shoot_actor: string
      snd_silncer_shot: string
      snd_silncer_shot_actor: string
      snd_wpn_vssk_reload_misfire: string
      snd_wpn_vssk_reload_misfire_empty: string
      snd_wpn_vssk_shot_l: string
      snd_wpn_vssk_shots: string
    }
    wpn_vssk: Omit<ItemsWeaponsBaseIni['wpn_vssk_barry_sounds'], '$npc' | '$prefetch' | '$spawn' | 'ammo_class' | 'ammo_elapsed' | 'ammo_mag_size' | 'animation_slot' | 'bullet_speed' | 'cam_dispersion' | 'cam_dispersion_frac' | 'cam_dispersion_inc' | 'cam_max_angle' | 'cam_max_angle_horz' | 'cam_relax_speed' | 'cam_relax_speed_ai' | 'cam_return' | 'cam_step_angle_horz' | 'cform' | 'class' | 'condition_queue_shot_dec' | 'condition_shot_dec' | 'control_inertion_factor' | 'cost' | 'crosshair_inertion' | 'default_to_ruck' | 'description' | 'ef_main_weapon_type' | 'ef_weapon_type' | 'fire_dispersion_base' | 'fire_dispersion_condition_factor' | 'fire_distance' | 'fire_modes' | 'fire_point' | 'fire_point2' | 'flame_particles' | 'grenade_launcher_status' | 'GroupControlSection' | 'hand_dependence' | 'hit_impulse' | 'hit_power' | 'hit_probability_gd_master' | 'hit_probability_gd_novice' | 'hit_probability_gd_stalker' | 'hit_probability_gd_veteran' | 'hit_type' | 'holder_fov_modifier' | 'holder_range_modifier' | 'hud' | 'icons_texture' | 'installed_upgrades' | 'inv_grid_height' | 'inv_grid_width' | 'inv_grid_x' | 'inv_grid_y' | 'inv_name' | 'inv_name_short' | 'inv_weight' | 'kill_msg_height' | 'kill_msg_width' | 'kill_msg_x' | 'kill_msg_y' | 'kind' | 'light_color' | 'light_disabled' | 'light_range' | 'light_time' | 'light_var_color' | 'light_var_range' | 'max_radius' | 'min_radius' | 'misfire_end_condition' | 'misfire_end_prob' | 'misfire_probability' | 'misfire_start_condition' | 'misfire_start_prob' | 'orientation' | 'parent_section' | 'PDM_disp_accel_factor' | 'PDM_disp_base' | 'PDM_disp_crouch' | 'PDM_disp_crouch_no_acc' | 'PDM_disp_vel_factor' | 'ph_mass' | 'position' | 'reload_dof' | 'repair_type' | 'rpm' | 'rpm_empty_click' | 'scheduled' | 'scope_dynamic_zoom' | 'scope_name' | 'scope_status' | 'scope_texture' | 'scope_x' | 'scope_y' | 'scope_zoom_factor' | 'scopes' | 'silencer_light_color' | 'silencer_light_range' | 'silencer_light_time' | 'silencer_light_var_color' | 'silencer_light_var_range' | 'silencer_name' | 'silencer_smoke_particles' | 'silencer_status' | 'silencer_x' | 'silencer_y' | 'single_handed' | 'slot' | 'smoke_particles' | 'sprint_allowed' | 'startup_ammo' | 'strap_bone0' | 'strap_bone1' | 'strap_orientation' | 'strap_position' | 'time_to_aim' | 'upgr_icon_height' | 'upgr_icon_width' | 'upgr_icon_x' | 'upgr_icon_y' | 'upgrade_scheme' | 'upgrades' | 'use_aim_bullet' | 'visual' | 'weapon_class' | 'zoom_cam_dispersion' | 'zoom_cam_dispersion_frac' | 'zoom_cam_dispersion_inc' | 'zoom_cam_max_angle' | 'zoom_cam_max_angle_horz' | 'zoom_cam_relax_speed' | 'zoom_cam_relax_speed_ai' | 'zoom_cam_step_angle_horz' | 'zoom_enabled' | 'zoom_rotate_time'> & {
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
      scope_dynamic_zoom: boolean
      scope_name: string
      scope_status: number
      scope_texture: string
      scope_x: number
      scope_y: number
      scope_zoom_factor: number
      scopes: CommaSeparatedString<string[]>
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
    wpn_vssk_hud: {
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: vector
      aim_hud_offset_rot_16x9: vector
      anm_ammo_check: CommaSeparatedString<string[]>
      anm_ammo_check_aim: CommaSeparatedString<string[]>
      anm_ammo_check_empty: CommaSeparatedString<string[]>
      anm_ammo_check_empty_aim: CommaSeparatedString<string[]>
      anm_ammo_check_empty_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_no_mag: CommaSeparatedString<string[]>
      anm_bore: CommaSeparatedString<string[]>
      anm_bore_empty: CommaSeparatedString<string[]>
      anm_bore_empty_jammed: CommaSeparatedString<string[]>
      anm_hide: CommaSeparatedString<string[]>
      anm_hide_empty: CommaSeparatedString<string[]>
      anm_hide_empty_jammed: CommaSeparatedString<string[]>
      anm_idle: CommaSeparatedString<string[]>
      anm_idle_aim: CommaSeparatedString<string[]>
      anm_idle_aim_empty: CommaSeparatedString<string[]>
      anm_idle_aim_empty_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_empty: CommaSeparatedString<string[]>
      anm_idle_empty: CommaSeparatedString<string[]>
      anm_idle_empty_jammed: CommaSeparatedString<string[]>
      anm_idle_moving: CommaSeparatedString<string[]>
      anm_idle_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_empty: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_empty_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_empty: CommaSeparatedString<string[]>
      anm_idle_moving_empty_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_empty: CommaSeparatedString<string[]>
      anm_idle_sprint_empty_jammed: CommaSeparatedString<string[]>
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_reload_misfire_empty: CommaSeparatedString<string[]>
      anm_shot_l: CommaSeparatedString<string[]>
      anm_shot_l_jammed: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_shots_jammed: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_empty: CommaSeparatedString<string[]>
      anm_show_empty_jammed: CommaSeparatedString<string[]>
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
    wpn_vssk_cortex: Omit<ItemsWeaponsBaseIni['wpn_vssk'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_vssk_cortex_hud: Omit<ItemsWeaponsBaseIni['wpn_vssk_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_vssk_acog: Omit<ItemsWeaponsBaseIni['wpn_vssk'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_vssk_acog_hud: Omit<ItemsWeaponsBaseIni['wpn_vssk_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_vssk_eot: Omit<ItemsWeaponsBaseIni['wpn_vssk'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_vssk_eot_hud: Omit<ItemsWeaponsBaseIni['wpn_vssk_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_vssk_ac10632: Omit<ItemsWeaponsBaseIni['wpn_vssk'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'visual'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      visual: string
    }
    wpn_vssk_ac10632_hud: Omit<ItemsWeaponsBaseIni['wpn_vssk_hud'], 'item_visual'> & {
      item_visual: string
    }
  }
}
