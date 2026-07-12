/** @noSelfInFile */

declare namespace state_mgr_weapon {
  export function get_idle_state(target_state: string): string
  export function get_queue_params(npc: CGameObject, st: AnyTable, override: AnyTable): LuaMultiReturn<[number, number]>
  export function get_weapon(obj: CGameObject, target_state: string): CGameObject
  export function strappable_weapon(obj: CGameObject): boolean
  export function weapon_locked(npc: CGameObject): boolean
}

/** @customConstructor act_state_mgr_weapon_drop */
declare class act_state_mgr_weapon_drop extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_weapon_none */
declare class act_state_mgr_weapon_none extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_weapon_strapp */
declare class act_state_mgr_weapon_strapp extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_weapon_unstrapp */
declare class act_state_mgr_weapon_unstrapp extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_weapon */
declare class eva_state_mgr_weapon extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_drop */
declare class eva_state_mgr_weapon_drop extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_fire */
declare class eva_state_mgr_weapon_fire extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_locked */
declare class eva_state_mgr_weapon_locked extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_none */
declare class eva_state_mgr_weapon_none extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_none_now */
declare class eva_state_mgr_weapon_none_now extends property_evaluator {
  constructor(name: string)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_strapped */
declare class eva_state_mgr_weapon_strapped extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_strapped_now */
declare class eva_state_mgr_weapon_strapped_now extends property_evaluator {
  constructor(name: string)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_unstrapped */
declare class eva_state_mgr_weapon_unstrapped extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_unstrapped_now */
declare class eva_state_mgr_weapon_unstrapped_now extends property_evaluator {
  constructor(name: string)
  evaluate(): boolean
}
