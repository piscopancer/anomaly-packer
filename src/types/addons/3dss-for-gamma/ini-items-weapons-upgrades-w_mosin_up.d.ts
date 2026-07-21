// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/upgrades/w_mosin_up.ltx` is never opened directly — `items/weapons/upgrades/upgrade_presets.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsUpgradesUpgradePresetsIni {
    up_sect_firsta_mosin: {
      condition_queue_shot_dec: number
      condition_shot_dec: number
      cost: number
      inv_weight: string
      value: string
    }
    up_sect_firstc_mosin: {
      cost: number
      fire_dispersion_base: number
      inv_weight: string
      value: string
    }
    up_sect_firstd_mosin: {
      bullet_speed: string
      cost: number
      fire_dispersion_base: number
      inv_weight: string
      value: string
    }
    up_sect_firste_mosin: {
      ammo_class: CommaSeparatedString<string[]>
      condition_queue_shot_dec: string
      condition_shot_dec: string
      cost: number
      misfire_end_prob: number
      misfire_start_prob: number
      value: string
    }
    up_sect_firstf_mosin: {
      ammo_class: CommaSeparatedString<string[]>
      condition_queue_shot_dec: string
      condition_shot_dec: string
      cost: number
      misfire_end_prob: number
      misfire_start_prob: number
      value: string
    }
    up_sect_secona_mosin: {
      cost: number
      crosshair_inertion: number
      inv_weight: number
      PDM_disp_accel_factor: number
      PDM_disp_vel_factor: number
      value: number
    }
    up_sect_seconc_mosin: {
      cost: number
      crosshair_inertion: number
      inv_weight: number
      PDM_disp_accel_factor: number
      PDM_disp_base: number
      PDM_disp_vel_factor: number
      value: string
    }
    up_sect_secone_mosin: {
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
    up_sect_seconf_mosin: {
      bullet_speed: string
      cost: number
      fire_dispersion_base: number
      inv_weight: string
      value: string
    }
    up_firsta_mosin: {
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
    up_firstc_mosin: {
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
    up_firstd_mosin: {
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
    up_firste_mosin: {
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
    up_firstf_mosin: {
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
    up_secona_mosin: {
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
    up_seconc_mosin: {
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
    up_secone_mosin: {
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
    up_seconf_mosin: {
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
    up_gr_firstab_mosin: {
      elements: string
    }
    up_gr_firstcd_mosin: {
      elements: CommaSeparatedString<string[]>
    }
    up_gr_firstef_mosin: {
      elements: CommaSeparatedString<string[]>
    }
    up_gr_seconab_mosin: {
      elements: string
    }
    up_gr_seconcd_mosin: {
      elements: string
    }
    up_gr_seconef_mosin: {
      elements: CommaSeparatedString<string[]>
    }
  }
}
