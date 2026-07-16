/** @noSelfInFile */

declare namespace release_body_manager {
  export function get_release_body_manager(): Crelease_body
  export function on_game_start(): void
}

/** @customConstructor Crelease_body */
declare class Crelease_body {
  keep_items_table: TODO // @generated field — refine type
  release_objects_table: TODO // @generated field — refine type
  size: TODO // @generated field — refine type
  constructor()
  can_release(obj: CGameObject): boolean
  add_corpse(obj: CGameObject): void
  moving_dead_body(obj: CGameObject, net_spawn: boolean): void
  clear(all: boolean, dist: number): void
  save(packet: net_packet): void
  load(reader: net_packet): void
}

declare namespace release_body_manager {
  /** Anomaly `class "Crelease_body"` is also reachable on the `release_body_manager` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`release_body_manager.Crelease_body.Method = ...`). */
  export const Crelease_body: Crelease_body
}
