// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace sr_cutscene {
  export const jup_b219_descent_camera: TODO
  export const mar_intro_effector: TODO
  export const pri_a15_cameffector: TODO
  export const pri_b305_camera_2: TODO
  export const pri_b305_camera_5: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function effector_callback(obj: TODO): TODO
  export function set_scheme(obj: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor action_cutscene */
declare class action_cutscene {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): TODO
  update(delta: TODO): TODO
  zone_enter(): TODO
  select_next_motion(): TODO
  cutscene_callback(): TODO
}

/** @customConstructor cam_effector_set */
declare class cam_effector_set {
  constructor(set: TODO, storage: TODO)
  start_effect(eff: TODO): TODO
  stop_effect(): TODO
  update(): TODO
  select_effect(): TODO
}
