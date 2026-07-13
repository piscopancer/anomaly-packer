/** @noSelfInFile */

declare namespace release_body_manager {
  export function get_release_body_manager(): Crelease_body
  export function on_game_start(): void
}

/** @customConstructor Crelease_body */
declare class Crelease_body {
  constructor()
  can_release(obj: CGameObject): boolean
  add_corpse(obj: CGameObject): void
  moving_dead_body(obj: CGameObject, net_spawn: boolean): void
  clear(all: boolean, dist: number): void
  save(packet: net_packet): void
  load(reader: net_packet): void
}
