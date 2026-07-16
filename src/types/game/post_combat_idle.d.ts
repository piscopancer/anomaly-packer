/** @noSelfInFile */

declare namespace post_combat_idle {
  export function add_post_combat_idle(npc: CGameObject): void
}

/** @customConstructor action_post_combat_wait */
declare class action_post_combat_wait extends action_base {
  anim_st: TODO // @generated field — refine type
  anim_started: boolean // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(npc: CGameObject, storage: AnyTable, action_name: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_combat_enemy */
declare class evaluator_combat_enemy extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

declare namespace post_combat_idle {
  /** Anomaly `class "action_post_combat_wait"` is also reachable on the `post_combat_idle` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`post_combat_idle.action_post_combat_wait.Method = ...`). */
  export const action_post_combat_wait: action_post_combat_wait
  /** Anomaly `class "evaluator_combat_enemy"` is also reachable on the `post_combat_idle` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`post_combat_idle.evaluator_combat_enemy.Method = ...`). */
  export const evaluator_combat_enemy: evaluator_combat_enemy
}
