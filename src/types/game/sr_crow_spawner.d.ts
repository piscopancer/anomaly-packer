/** @noSelfInFile */

declare namespace sr_crow_spawner {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor crowkiller */
declare class crowkiller {
  object: TODO // @generated field — refine type
  spawn_points_idle: TODO // @generated field — refine type
  spawned_count: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  time_for_spawn: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  check_for_spawn_new_crow(): boolean
}

declare namespace sr_crow_spawner {
  /** Anomaly `class "crowkiller"` is also reachable on the `sr_crow_spawner` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_crow_spawner.crowkiller.Method = ...`). */
  export const crowkiller: crowkiller
}
