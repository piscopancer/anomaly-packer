/** @noSelfInFile */

declare namespace post_combat_idle {
  export function add_post_combat_idle(npc: TODO): TODO
}

/** @customConstructor action_post_combat_wait */
declare class action_post_combat_wait extends action_base {
  constructor(npc: TODO, storage: TODO, action_name: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_combat_enemy */
declare class evaluator_combat_enemy extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): boolean
}
