/** @noSelfInFile */

declare namespace sr_cutscene {
  export const jup_b219_descent_camera: AnyTable
  export const mar_intro_effector: AnyTable
  export const pri_a15_cameffector: AnyTable
  export const pri_b305_camera_2: AnyTable
  export const pri_b305_camera_5: AnyTable
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function effector_callback(obj: CGameObject): void
  export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor action_cutscene */
declare class action_cutscene {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  zone_enter(): void
  select_next_motion(): void
  cutscene_callback(): void
}

/** @customConstructor cam_effector_set */
declare class cam_effector_set {
  constructor(set: AnyTable, storage: AnyTable)
  start_effect(eff: AnyTable): void
  stop_effect(): void
  update(): void
  select_effect(): AnyTable
}
