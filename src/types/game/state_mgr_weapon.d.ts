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
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_weapon_none */
declare class act_state_mgr_weapon_none extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_weapon_strapp */
declare class act_state_mgr_weapon_strapp extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_weapon_unstrapp */
declare class act_state_mgr_weapon_unstrapp extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_weapon */
declare class eva_state_mgr_weapon extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_drop */
declare class eva_state_mgr_weapon_drop extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_fire */
declare class eva_state_mgr_weapon_fire extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_locked */
declare class eva_state_mgr_weapon_locked extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_none */
declare class eva_state_mgr_weapon_none extends property_evaluator {
  st: TODO // @generated field — refine type
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
  st: TODO // @generated field — refine type
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
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_weapon_unstrapped_now */
declare class eva_state_mgr_weapon_unstrapped_now extends property_evaluator {
  constructor(name: string)
  evaluate(): boolean
}

declare namespace state_mgr_weapon {
  /** Anomaly `class "act_state_mgr_weapon_drop"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.act_state_mgr_weapon_drop.Method = ...`). */
  export const act_state_mgr_weapon_drop: act_state_mgr_weapon_drop
  /** Anomaly `class "act_state_mgr_weapon_none"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.act_state_mgr_weapon_none.Method = ...`). */
  export const act_state_mgr_weapon_none: act_state_mgr_weapon_none
  /** Anomaly `class "act_state_mgr_weapon_strapp"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.act_state_mgr_weapon_strapp.Method = ...`). */
  export const act_state_mgr_weapon_strapp: act_state_mgr_weapon_strapp
  /** Anomaly `class "act_state_mgr_weapon_unstrapp"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.act_state_mgr_weapon_unstrapp.Method = ...`). */
  export const act_state_mgr_weapon_unstrapp: act_state_mgr_weapon_unstrapp
  /** Anomaly `class "eva_state_mgr_weapon"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon.Method = ...`). */
  export const eva_state_mgr_weapon: eva_state_mgr_weapon
  /** Anomaly `class "eva_state_mgr_weapon_drop"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon_drop.Method = ...`). */
  export const eva_state_mgr_weapon_drop: eva_state_mgr_weapon_drop
  /** Anomaly `class "eva_state_mgr_weapon_fire"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon_fire.Method = ...`). */
  export const eva_state_mgr_weapon_fire: eva_state_mgr_weapon_fire
  /** Anomaly `class "eva_state_mgr_weapon_locked"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon_locked.Method = ...`). */
  export const eva_state_mgr_weapon_locked: eva_state_mgr_weapon_locked
  /** Anomaly `class "eva_state_mgr_weapon_none"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon_none.Method = ...`). */
  export const eva_state_mgr_weapon_none: eva_state_mgr_weapon_none
  /** Anomaly `class "eva_state_mgr_weapon_none_now"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon_none_now.Method = ...`). */
  export const eva_state_mgr_weapon_none_now: eva_state_mgr_weapon_none_now
  /** Anomaly `class "eva_state_mgr_weapon_strapped"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon_strapped.Method = ...`). */
  export const eva_state_mgr_weapon_strapped: eva_state_mgr_weapon_strapped
  /** Anomaly `class "eva_state_mgr_weapon_strapped_now"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon_strapped_now.Method = ...`). */
  export const eva_state_mgr_weapon_strapped_now: eva_state_mgr_weapon_strapped_now
  /** Anomaly `class "eva_state_mgr_weapon_unstrapped"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon_unstrapped.Method = ...`). */
  export const eva_state_mgr_weapon_unstrapped: eva_state_mgr_weapon_unstrapped
  /** Anomaly `class "eva_state_mgr_weapon_unstrapped_now"` is also reachable on the `state_mgr_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_weapon.eva_state_mgr_weapon_unstrapped_now.Method = ...`). */
  export const eva_state_mgr_weapon_unstrapped_now: eva_state_mgr_weapon_unstrapped_now
}
