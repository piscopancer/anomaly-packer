// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_mp5sd.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsBaseIni {
    wpn_mp5sd: {
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
      fire_modes: vector
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
      laser_status: boolean
      launch_speed: number
      lewd_lens_hide_aim_mode: CommaSeparatedString<string[]>
      lewd_lens_hide_bone: string
      lewd_lens_hide_delays: CommaSeparatedString<string[]>
      lewd_lens_hide_enabled: boolean
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
      scripted_snd_ammo_check_aim: string
      scripted_snd_ammo_check_aim_ammo1: string
      scripted_snd_ammo_check_aim_ammo11: string
      scripted_snd_ammo_check_aim_ammo13: string
      scripted_snd_ammo_check_aim_ammo15: string
      scripted_snd_ammo_check_aim_ammo17: string
      scripted_snd_ammo_check_aim_ammo19: string
      scripted_snd_ammo_check_aim_ammo2: string
      scripted_snd_ammo_check_aim_ammo21: string
      scripted_snd_ammo_check_aim_ammo23: string
      scripted_snd_ammo_check_aim_ammo25: string
      scripted_snd_ammo_check_aim_ammo27: string
      scripted_snd_ammo_check_aim_ammo29: string
      scripted_snd_ammo_check_aim_ammo3: string
      scripted_snd_ammo_check_aim_ammo31: string
      scripted_snd_ammo_check_aim_ammo4: string
      scripted_snd_ammo_check_aim_ammo5: string
      scripted_snd_ammo_check_aim_ammo6: string
      scripted_snd_ammo_check_aim_ammo7: string
      scripted_snd_ammo_check_aim_ammo8: string
      scripted_snd_ammo_check_aim_ammo9: string
      scripted_snd_ammo_check_aim_jammed: string
      scripted_snd_ammo_check_aim_jammed_ammo1: string
      scripted_snd_ammo_check_aim_jammed_ammo11: string
      scripted_snd_ammo_check_aim_jammed_ammo13: string
      scripted_snd_ammo_check_aim_jammed_ammo15: string
      scripted_snd_ammo_check_aim_jammed_ammo17: string
      scripted_snd_ammo_check_aim_jammed_ammo19: string
      scripted_snd_ammo_check_aim_jammed_ammo2: string
      scripted_snd_ammo_check_aim_jammed_ammo21: string
      scripted_snd_ammo_check_aim_jammed_ammo23: string
      scripted_snd_ammo_check_aim_jammed_ammo25: string
      scripted_snd_ammo_check_aim_jammed_ammo27: string
      scripted_snd_ammo_check_aim_jammed_ammo29: string
      scripted_snd_ammo_check_aim_jammed_ammo3: string
      scripted_snd_ammo_check_aim_jammed_ammo31: string
      scripted_snd_ammo_check_aim_jammed_ammo4: string
      scripted_snd_ammo_check_aim_jammed_ammo5: string
      scripted_snd_ammo_check_aim_jammed_ammo6: string
      scripted_snd_ammo_check_aim_jammed_ammo7: string
      scripted_snd_ammo_check_aim_jammed_ammo8: string
      scripted_snd_ammo_check_aim_jammed_ammo9: string
      scripted_snd_ammo_check_ammo1: string
      scripted_snd_ammo_check_ammo11: string
      scripted_snd_ammo_check_ammo13: string
      scripted_snd_ammo_check_ammo15: string
      scripted_snd_ammo_check_ammo17: string
      scripted_snd_ammo_check_ammo19: string
      scripted_snd_ammo_check_ammo2: string
      scripted_snd_ammo_check_ammo21: string
      scripted_snd_ammo_check_ammo23: string
      scripted_snd_ammo_check_ammo25: string
      scripted_snd_ammo_check_ammo27: string
      scripted_snd_ammo_check_ammo29: string
      scripted_snd_ammo_check_ammo3: string
      scripted_snd_ammo_check_ammo31: string
      scripted_snd_ammo_check_ammo4: string
      scripted_snd_ammo_check_ammo5: string
      scripted_snd_ammo_check_ammo6: string
      scripted_snd_ammo_check_ammo7: string
      scripted_snd_ammo_check_ammo8: string
      scripted_snd_ammo_check_ammo9: string
      scripted_snd_ammo_check_empty: string
      scripted_snd_ammo_check_empty_aim: string
      scripted_snd_ammo_check_empty_aim_jammed: string
      scripted_snd_ammo_check_empty_jammed: string
      scripted_snd_ammo_check_jammed: string
      scripted_snd_ammo_check_jammed_ammo1: string
      scripted_snd_ammo_check_jammed_ammo11: string
      scripted_snd_ammo_check_jammed_ammo13: string
      scripted_snd_ammo_check_jammed_ammo15: string
      scripted_snd_ammo_check_jammed_ammo17: string
      scripted_snd_ammo_check_jammed_ammo19: string
      scripted_snd_ammo_check_jammed_ammo2: string
      scripted_snd_ammo_check_jammed_ammo21: string
      scripted_snd_ammo_check_jammed_ammo23: string
      scripted_snd_ammo_check_jammed_ammo25: string
      scripted_snd_ammo_check_jammed_ammo27: string
      scripted_snd_ammo_check_jammed_ammo29: string
      scripted_snd_ammo_check_jammed_ammo3: string
      scripted_snd_ammo_check_jammed_ammo31: string
      scripted_snd_ammo_check_jammed_ammo4: string
      scripted_snd_ammo_check_jammed_ammo5: string
      scripted_snd_ammo_check_jammed_ammo6: string
      scripted_snd_ammo_check_jammed_ammo7: string
      scripted_snd_ammo_check_jammed_ammo8: string
      scripted_snd_ammo_check_jammed_ammo9: string
      scripted_snd_bore: string
      scripted_snd_bore_empty: string
      scripted_snd_reload_misfire: string
      scripted_snd_reload_misfire_aim: string
      scripted_snd_reload_misfire_empty: string
      scripted_snd_reload_misfire_empty_aim: string
      scripted_snd_sprint_end: string
      scripted_snd_sprint_end_empty: string
      scripted_snd_sprint_end_jammed: string
      scripted_snd_sprint_end_jammed_empty: string
      scripted_snd_sprint_start: string
      scripted_snd_sprint_start_empty: string
      scripted_snd_sprint_start_jammed: string
      scripted_snd_sprint_start_jammed_empty: string
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
      snd_empty: string
      snd_holster: string
      snd_idle_sprint: string
      snd_reload: string
      snd_reload_empty: string
      snd_reload_misfire: string
      snd_switch_mode: string
      snd_switch_mode_aim: string
      snd_switch_mode_empty_aim: string
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
    wpn_mp5sd_hud: {
      aim_hud_offset_alt_pos: vector
      aim_hud_offset_alt_pos_16x9: vector
      aim_hud_offset_alt_rot: CommaSeparatedString<string[]>
      aim_hud_offset_alt_rot_16x9: CommaSeparatedString<string[]>
      aim_hud_offset_pos: vector
      aim_hud_offset_pos_16x9: vector
      aim_hud_offset_rot: CommaSeparatedString<string[]>
      aim_hud_offset_rot_16x9: CommaSeparatedString<string[]>
      anm_ammo_check: CommaSeparatedString<string[]>
      anm_ammo_check_aim: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo1: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo10: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo11: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo13: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo15: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo17: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo19: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo2: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo21: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo23: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo25: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo27: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo29: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo3: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo31: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo4: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo5: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo6: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo7: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo8: CommaSeparatedString<string[]>
      anm_ammo_check_aim_ammo9: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo1: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo11: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo13: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo15: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo17: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo19: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo2: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo21: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo23: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo25: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo27: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo29: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo3: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo31: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo4: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo5: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo6: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo7: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo8: CommaSeparatedString<string[]>
      anm_ammo_check_aim_jammed_ammo9: CommaSeparatedString<string[]>
      anm_ammo_check_ammo1: CommaSeparatedString<string[]>
      anm_ammo_check_ammo11: CommaSeparatedString<string[]>
      anm_ammo_check_ammo13: CommaSeparatedString<string[]>
      anm_ammo_check_ammo15: CommaSeparatedString<string[]>
      anm_ammo_check_ammo17: CommaSeparatedString<string[]>
      anm_ammo_check_ammo19: CommaSeparatedString<string[]>
      anm_ammo_check_ammo2: CommaSeparatedString<string[]>
      anm_ammo_check_ammo21: CommaSeparatedString<string[]>
      anm_ammo_check_ammo23: CommaSeparatedString<string[]>
      anm_ammo_check_ammo25: CommaSeparatedString<string[]>
      anm_ammo_check_ammo27: CommaSeparatedString<string[]>
      anm_ammo_check_ammo29: CommaSeparatedString<string[]>
      anm_ammo_check_ammo3: CommaSeparatedString<string[]>
      anm_ammo_check_ammo31: CommaSeparatedString<string[]>
      anm_ammo_check_ammo4: CommaSeparatedString<string[]>
      anm_ammo_check_ammo5: CommaSeparatedString<string[]>
      anm_ammo_check_ammo6: CommaSeparatedString<string[]>
      anm_ammo_check_ammo7: CommaSeparatedString<string[]>
      anm_ammo_check_ammo8: CommaSeparatedString<string[]>
      anm_ammo_check_ammo9: CommaSeparatedString<string[]>
      anm_ammo_check_empty: CommaSeparatedString<string[]>
      anm_ammo_check_empty_aim: CommaSeparatedString<string[]>
      anm_ammo_check_empty_aim_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_empty_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_jammed: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo1: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo10: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo11: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo13: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo15: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo17: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo19: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo2: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo21: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo23: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo25: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo27: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo29: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo3: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo31: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo4: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo5: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo6: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo7: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo8: CommaSeparatedString<string[]>
      anm_ammo_check_jammed_ammo9: CommaSeparatedString<string[]>
      anm_bore: CommaSeparatedString<string[]>
      anm_bore_empty: CommaSeparatedString<string[]>
      anm_hide: CommaSeparatedString<string[]>
      anm_hide_empty: CommaSeparatedString<string[]>
      anm_hide_jammed: CommaSeparatedString<string[]>
      anm_hide_jammed_empty: CommaSeparatedString<string[]>
      anm_idle: CommaSeparatedString<string[]>
      anm_idle_aim: CommaSeparatedString<string[]>
      anm_idle_aim_empty: CommaSeparatedString<string[]>
      anm_idle_aim_empty_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving_crouch_jammed_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_empty: CommaSeparatedString<string[]>
      anm_idle_aim_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_aim_moving_jammed_empty: CommaSeparatedString<string[]>
      anm_idle_empty: CommaSeparatedString<string[]>
      anm_idle_empty_jammed: CommaSeparatedString<string[]>
      anm_idle_jammed: CommaSeparatedString<string[]>
      anm_idle_moving: CommaSeparatedString<string[]>
      anm_idle_moving_crouch: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_empty: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_crouch_jammed_empty: CommaSeparatedString<string[]>
      anm_idle_moving_empty: CommaSeparatedString<string[]>
      anm_idle_moving_jammed: CommaSeparatedString<string[]>
      anm_idle_moving_jammed_empty: CommaSeparatedString<string[]>
      anm_idle_sprint: CommaSeparatedString<string[]>
      anm_idle_sprint_empty: CommaSeparatedString<string[]>
      anm_idle_sprint_jammed: CommaSeparatedString<string[]>
      anm_idle_sprint_jammed_empty: CommaSeparatedString<string[]>
      anm_reload: CommaSeparatedString<string[]>
      anm_reload_aim: CommaSeparatedString<string[]>
      anm_reload_aim_ammo1: CommaSeparatedString<string[]>
      anm_reload_aim_ammo11: CommaSeparatedString<string[]>
      anm_reload_aim_ammo13: CommaSeparatedString<string[]>
      anm_reload_aim_ammo15: CommaSeparatedString<string[]>
      anm_reload_aim_ammo17: CommaSeparatedString<string[]>
      anm_reload_aim_ammo19: CommaSeparatedString<string[]>
      anm_reload_aim_ammo2: CommaSeparatedString<string[]>
      anm_reload_aim_ammo21: CommaSeparatedString<string[]>
      anm_reload_aim_ammo23: CommaSeparatedString<string[]>
      anm_reload_aim_ammo25: CommaSeparatedString<string[]>
      anm_reload_aim_ammo27: CommaSeparatedString<string[]>
      anm_reload_aim_ammo29: CommaSeparatedString<string[]>
      anm_reload_aim_ammo3: CommaSeparatedString<string[]>
      anm_reload_aim_ammo31: CommaSeparatedString<string[]>
      anm_reload_aim_ammo4: CommaSeparatedString<string[]>
      anm_reload_aim_ammo5: CommaSeparatedString<string[]>
      anm_reload_aim_ammo6: CommaSeparatedString<string[]>
      anm_reload_aim_ammo7: CommaSeparatedString<string[]>
      anm_reload_aim_ammo8: CommaSeparatedString<string[]>
      anm_reload_aim_ammo9: CommaSeparatedString<string[]>
      anm_reload_ammo1: CommaSeparatedString<string[]>
      anm_reload_ammo11: CommaSeparatedString<string[]>
      anm_reload_ammo13: CommaSeparatedString<string[]>
      anm_reload_ammo15: CommaSeparatedString<string[]>
      anm_reload_ammo17: CommaSeparatedString<string[]>
      anm_reload_ammo19: CommaSeparatedString<string[]>
      anm_reload_ammo2: CommaSeparatedString<string[]>
      anm_reload_ammo21: CommaSeparatedString<string[]>
      anm_reload_ammo23: CommaSeparatedString<string[]>
      anm_reload_ammo25: CommaSeparatedString<string[]>
      anm_reload_ammo27: CommaSeparatedString<string[]>
      anm_reload_ammo29: CommaSeparatedString<string[]>
      anm_reload_ammo3: CommaSeparatedString<string[]>
      anm_reload_ammo31: CommaSeparatedString<string[]>
      anm_reload_ammo4: CommaSeparatedString<string[]>
      anm_reload_ammo5: CommaSeparatedString<string[]>
      anm_reload_ammo6: CommaSeparatedString<string[]>
      anm_reload_ammo7: CommaSeparatedString<string[]>
      anm_reload_ammo8: CommaSeparatedString<string[]>
      anm_reload_ammo9: CommaSeparatedString<string[]>
      anm_reload_empty: CommaSeparatedString<string[]>
      anm_reload_empty_aim: CommaSeparatedString<string[]>
      anm_reload_misfire: CommaSeparatedString<string[]>
      anm_reload_misfire_aim: CommaSeparatedString<string[]>
      anm_reload_misfire_empty: CommaSeparatedString<string[]>
      anm_reload_misfire_empty_aim: CommaSeparatedString<string[]>
      anm_shot_l: CommaSeparatedString<string[]>
      anm_shot_l_jammed: CommaSeparatedString<string[]>
      anm_shots: CommaSeparatedString<string[]>
      anm_shots_jammed: CommaSeparatedString<string[]>
      anm_shots_variant1: CommaSeparatedString<string[]>
      anm_shots_variant2: CommaSeparatedString<string[]>
      anm_show: CommaSeparatedString<string[]>
      anm_show_empty: CommaSeparatedString<string[]>
      anm_show_jammed: CommaSeparatedString<string[]>
      anm_show_jammed_empty: CommaSeparatedString<string[]>
      anm_sprint_end: CommaSeparatedString<string[]>
      anm_sprint_start: CommaSeparatedString<string[]>
      anm_switch_mode: CommaSeparatedString<string[]>
      anm_switch_mode_aim: CommaSeparatedString<string[]>
      anm_switch_mode_aim_empty_jammed: CommaSeparatedString<string[]>
      anm_switch_mode_aim_jammed: CommaSeparatedString<string[]>
      anm_switch_mode_empty: CommaSeparatedString<string[]>
      anm_switch_mode_empty_aim: CommaSeparatedString<string[]>
      anm_switch_mode_empty_jammed: CommaSeparatedString<string[]>
      anm_switch_mode_jammed: CommaSeparatedString<string[]>
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
    wpn_mp5sd_ac10632: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_ac10632_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_eot: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_eot_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_aimpoint: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_aimpoint_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_e0t2: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_e0t2_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_ekp8_18: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_ekp8_18_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_mepro: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_mepro_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_he510: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_he510_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_romeo4: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_romeo4_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_p1x42: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_p1x42_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_bossxe: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud' | 'laser_status' | 'use_alt_aim_hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
      laser_status: boolean
      use_alt_aim_hud: boolean
    }
    wpn_mp5sd_bossxe_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_t12: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_t12_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_acog: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_acog_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_monstrum: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_monstrum_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_trihawk: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_trihawk_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_specter: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_specter_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_vulcan: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_vulcan_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_c79: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_c79_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_e0t2_magd: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_e0t2_magd_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_e0t2_magd_off: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_e0t2_magd_off_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_tac30: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_tac30_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
    wpn_mp5sd_echo1: Omit<ItemsWeaponsBaseIni['wpn_mp5sd'], '1icon_layer' | '1icon_layer_x' | '1icon_layer_y' | 'hud'> & {
      '1icon_layer': string
      '1icon_layer_x': number
      '1icon_layer_y': number
      hud: string
    }
    wpn_mp5sd_echo1_hud: Omit<ItemsWeaponsBaseIni['wpn_mp5sd_hud'], 'item_visual'> & {
      item_visual: string
    }
  }
}
