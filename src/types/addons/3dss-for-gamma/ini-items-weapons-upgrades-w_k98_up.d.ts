// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/upgrades/w_k98_up.ltx` is never opened directly — `items/weapons/upgrades/upgrade_presets.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsUpgradesUpgradePresetsIni {
    up_sect_firsta_k98: {
      condition_queue_shot_dec: number
      condition_shot_dec: number
      cost: number
      inv_weight: string
      value: string
    }
    up_sect_firstc_k98: {
      cost: number
      fire_dispersion_base: number
      inv_weight: string
      value: string
    }
    up_sect_firstd_k98: {
      bullet_speed: string
      cost: number
      fire_dispersion_base: number
      inv_weight: string
      value: string
    }
    up_sect_secona_k98: {
      cost: number
      crosshair_inertion: number
      inv_weight: number
      PDM_disp_accel_factor: number
      PDM_disp_vel_factor: number
      value: number
    }
    up_sect_seconc_k98: {
      cost: number
      crosshair_inertion: number
      inv_weight: number
      PDM_disp_accel_factor: number
      PDM_disp_base: number
      PDM_disp_vel_factor: number
      value: string
    }
    up_sect_secone_k98: {
      cam_dispersion: number
      cam_dispersion_inc: number
      cam_step_angle_horz: number
      cost: number
      inv_weight: string
      value: number
      zoom_cam_dispersion: number
      zoom_cam_dispersion_inc: number
      zoom_cam_step_angle_horz: number
    }
    up_sect_seconf_k98: {
      bullet_speed: string
      cost: number
      fire_dispersion_base: number
      inv_weight: string
      value: string
    }
    up_sect_thirda_k98: {
      cost: number
      inv_weight: string
      silencer_name: string
      silencer_status: number
      silencer_x: number
      silencer_y: number
      snd_silncer_shot: string
      snd_silncer_shot_actor: string
    }
    up_sect_thirdc_k98: {
      ammo_class: CommaSeparatedString<string[]>
      bullet_speed: string
      condition_queue_shot_dec: string
      condition_shot_dec: string
      cost: number
      inv_weight: string
      misfire_end_prob: number
      misfire_start_prob: number
      value: string
    }
    up_sect_thirdd_k98: {
      ammo_class: CommaSeparatedString<string[]>
      condition_queue_shot_dec: string
      condition_shot_dec: string
      cost: number
      inv_weight: string
      misfire_end_prob: number
      misfire_start_prob: number
      silencer_name: string
      silencer_status: number
      silencer_x: number
      silencer_y: number
      snd_silncer_shot: string
      value: string
    }
    up_firsta_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: string
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: string
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_firstc_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: boolean
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: string
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_firstd_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: string
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: string
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_secona_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: string
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: string
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_seconc_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: boolean
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: string
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_secone_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: string
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: string
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_seconf_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: string
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: string
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_thirda_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: boolean
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: string
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_thirdc_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: string
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: string
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_thirdd_k98: {
      description: string
      effect_functor: string
      effect_parameter: string
      effects: string
      icon: string
      known: number
      name: string
      precondition_functor: string
      precondition_parameter: boolean
      prereq_functor: string
      prereq_params: string
      prereq_tooltip_functor: string
      property: CommaSeparatedString<string[]>
      scheme_index: CommaSeparatedString<string[]>
      section: string
    }
    up_gr_firstab_k98: {
      elements: string
    }
    up_gr_firstcd_k98: {
      elements: CommaSeparatedString<string[]>
    }
    up_gr_seconab_k98: {
      elements: string
    }
    up_gr_seconcd_k98: {
      elements: string
    }
    up_gr_seconef_k98: {
      elements: CommaSeparatedString<string[]>
    }
    up_gr_thirdab_k98: {
      elements: string
    }
    up_gr_thirdcd_k98: {
      elements: CommaSeparatedString<string[]>
    }
  }
}
