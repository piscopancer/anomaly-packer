/** @noSelfInFile */

declare namespace xrs_facer {
  export const actid_facer: TODO
  export const actid_steal_up_facer: TODO
  export const evid_facer: TODO
  export const evid_steal_up_facer: TODO
  export function add_to_binder(npc: CGameObject, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): void
  export function check_enemy(enemy: TODO, obj: TODO): boolean
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function get_anim(npc: CGameObject): LuaMultiReturn<[TODO, TODO]>
  export function hit_callback(obj: TODO, amount: TODO, dir: TODO, who: TODO, bone_index: TODO): void
  export function npc_add_precondition(action: TODO): void
  export function on_game_start(): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_facer */
declare class action_facer extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  cancel(): void
  finalize(): void
}

/** @customConstructor action_steal_up */
declare class action_steal_up extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_facer */
declare class evaluator_facer extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO)
  evaluate(): boolean
}

/** @customConstructor evaluator_steal_up */
declare class evaluator_steal_up extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO)
  evaluate(): boolean
}
