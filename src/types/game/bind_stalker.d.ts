/** @noSelfInFile */

declare namespace bind_stalker {
  export function actor_init(npc: CGameObject): void
  export function init(obj: CGameObject): void
}

/** @customConstructor actor_binder */
declare class actor_binder extends object_binder {
  already_jumped: boolean // @generated field — refine type
  bCheckStart: TODO // @generated field — refine type
  character_icon: TODO // @generated field — refine type
  deimos_intensity: TODO // @generated field — refine type
  last_detective_achievement_spawn_time: TODO // @generated field — refine type
  last_mutant_hunter_achievement_spawn_time: TODO // @generated field — refine type
  loaded: boolean // @generated field — refine type
  loaded_active_slot: TODO // @generated field — refine type
  spawn_frame: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  talking_state: boolean // @generated field — refine type
  weapon_hide: boolean // @generated field — refine type
  weapon_lowered_before_dialog: boolean // @generated field — refine type
  constructor(obj: CGameObject)
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  reinit(): void
  update(delta: number): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  save_state(m_data: AnyTable): void
  load_state(m_data: AnyTable): void
}

declare namespace bind_stalker {
  /** Anomaly `class "actor_binder"` is also reachable on the `bind_stalker` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_stalker.actor_binder.Method = ...`). */
  export const actor_binder: actor_binder
}
