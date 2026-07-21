// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/upgrades/w_mp412_up.ltx` is never opened directly — `items/weapons/upgrades/upgrade_presets.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ItemsWeaponsUpgradesUpgradePresetsIni {
    up_sect_firsta_mp412: {
      cost: number
      crosshair_inertion: number
      inv_weight: number
      PDM_disp_accel_factor: number
      PDM_disp_base: number
      PDM_disp_vel_factor: number
      value: string
    }
    up_sect_firstc_mp412: {
      cost: number
      inv_weight: string
      rpm: string
      value: string
    }
    up_sect_firstd_mp412: {
      cam_dispersion: number
      cost: number
      inv_weight: string
      value: number
      zoom_cam_dispersion: number
    }
    up_sect_firste_mp412: {
      cost: number
      fire_dispersion_base: number
      inv_weight: string
      PDM_disp_base: number
      value: string
    }
    up_sect_firstf_mp412: {
      bullet_speed: string
      cam_dispersion: number
      cost: number
      fire_dispersion_base: number
      inv_weight: string
      rpm: number
      value: string
      zoom_cam_dispersion: number
    }
    up_sect_secona_mp412: {
      condition_queue_shot_dec: number
      condition_shot_dec: number
      cost: number
      misfire_end_prob: number
      misfire_start_prob: number
      value: string
    }
    up_firsta_mp412: {
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
    up_firstc_mp412: {
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
    up_firstd_mp412: {
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
    up_firste_mp412: {
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
    up_firstf_mp412: {
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
    up_secona_mp412: {
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
    up_gr_firstab_mp412: {
      elements: string
    }
    up_gr_firstcd_mp412: {
      elements: CommaSeparatedString<string[]>
    }
    up_gr_firstef_mp412: {
      elements: CommaSeparatedString<string[]>
    }
    up_gr_seconab_mp412: {
      elements: string
    }
  }
}
