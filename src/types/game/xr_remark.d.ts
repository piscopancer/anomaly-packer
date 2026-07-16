/** @noSelfInFile */

declare namespace xr_remark {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function init_target(obj: CGameObject, target_str: string): LuaMultiReturn<[vector | undefined, number | undefined, boolean]>
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_remark_activity */
declare class action_remark_activity extends action_base {
  action_end_signalled: boolean // @generated field — refine type
  anim_end_signalled: boolean // @generated field — refine type
  anim_scheduled: boolean // @generated field — refine type
  snd_scheduled: boolean // @generated field — refine type
  snd_started: boolean // @generated field — refine type
  sound_end_signalled: boolean // @generated field — refine type
  st: TODO // @generated field — refine type
  state: TODO // @generated field — refine type
  tips_sound: TODO // @generated field — refine type
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  activate_scheme(): void
  get_target(): AnyTable | undefined
  time_callback(): void
  update(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_need_remark */
declare class evaluator_need_remark extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

declare namespace xr_remark {
  /** Anomaly `class "action_remark_activity"` is also reachable on the `xr_remark` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_remark.action_remark_activity.Method = ...`). */
  export const action_remark_activity: action_remark_activity
  /** Anomaly `class "evaluator_need_remark"` is also reachable on the `xr_remark` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_remark.evaluator_need_remark.Method = ...`). */
  export const evaluator_need_remark: evaluator_need_remark
}
