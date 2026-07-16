/** @noSelfInFile */

declare namespace sr_cutscene {
  export const jup_b219_descent_camera: AnyTable
  export const mar_intro_effector: AnyTable
  export const pri_a15_cameffector: AnyTable
  export const pri_b305_camera_2: AnyTable
  export const pri_b305_camera_5: AnyTable
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function effector_callback(obj: CGameObject): void
  export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_cutscene */
declare class action_cutscene {
  motion: TODO // @generated field — refine type
  motion_id: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  postprocess: boolean // @generated field — refine type
  st: TODO // @generated field — refine type
  state: string // @generated field — refine type
  ui_disabled: boolean // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  zone_enter(): void
  select_next_motion(): void
  cutscene_callback(): void
}

/** @customConstructor cam_effector_set */
declare class cam_effector_set {
  condlist: TODO // @generated field — refine type
  cur_effect: TODO // @generated field — refine type
  enabled: boolean // @generated field — refine type
  looped: boolean // @generated field — refine type
  playing: boolean // @generated field — refine type
  set: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  state: string // @generated field — refine type
  constructor(set: AnyTable, storage: AnyTable)
  start_effect(eff: AnyTable): void
  stop_effect(): void
  update(): void
  select_effect(): AnyTable
}

declare namespace sr_cutscene {
  /** Anomaly `class "action_cutscene"` is also reachable on the `sr_cutscene` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_cutscene.action_cutscene.Method = ...`). */
  export const action_cutscene: action_cutscene
  /** Anomaly `class "cam_effector_set"` is also reachable on the `sr_cutscene` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_cutscene.cam_effector_set.Method = ...`). */
  export const cam_effector_set: cam_effector_set
}
