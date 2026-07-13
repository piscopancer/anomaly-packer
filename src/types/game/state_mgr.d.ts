/** @noSelfInFile */

declare namespace state_mgr {
  export const combat_action_ids: AnyTable
  export const no_idle_alife_ids: AnyTable
  export function bind_manager(object: CGameObject): state_manager | undefined
  export function get_state(npc: CGameObject): string | undefined
  export function is_npc_in_combat(npc: CGameObject): boolean
  export function set_state(npc: CGameObject, state_name: string, callback?: AnyTable, timeout?: number, target?: AnyTable, extra?: AnyTable): void
}

/** @customConstructor act_state_mgr_end */
declare class act_state_mgr_end extends action_base {
  constructor(name: string, st: state_manager, name_?: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_locked */
declare class act_state_mgr_locked extends action_base {
  constructor(name: string, st: state_manager, name_?: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_to_idle */
declare class act_state_mgr_to_idle extends action_base {
  constructor(name: string, state_manager: state_manager, name_?: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_end */
declare class eva_state_mgr_end extends property_evaluator {
  constructor(name: string, st: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_locked */
declare class eva_state_mgr_locked extends property_evaluator {
  constructor(name: string, st: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_locked_external */
declare class eva_state_mgr_locked_external extends property_evaluator {
  constructor(name: string, st: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_state_mgr_idle */
declare class evaluator_state_mgr_idle extends property_evaluator {
  constructor(name: string, state_manager: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_state_mgr_idle_alife */
declare class evaluator_state_mgr_idle_alife extends property_evaluator {
  constructor(name: string, state_manager: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_state_mgr_idle_items */
declare class evaluator_state_mgr_idle_items extends property_evaluator {
  constructor(name: string, state_manager: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_state_mgr_logic_active */
declare class evaluator_state_mgr_logic_active extends property_evaluator {
  constructor(name: string, state_manager: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor state_manager */
declare class state_manager {
  constructor(npc: CGameObject)
  set_state(state_name: string, callback?: AnyTable, timeout?: number, target?: AnyTable, extra?: AnyTable): void
  get_state(): string
  update(): void
}
