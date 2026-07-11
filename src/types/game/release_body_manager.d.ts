/** @noSelfInFile */

declare namespace release_body_manager {
  export function get_release_body_manager(): Crelease_body
  export function on_game_start(): void
}

/** @customConstructor Crelease_body */
declare class Crelease_body {
  constructor()
  can_release(obj: TODO): boolean
  add_corpse(obj: TODO): void
  moving_dead_body(obj: TODO, net_spawn: TODO): void
  clear(all: TODO, dist: TODO): void
  save(packet: TODO): void
  load(reader: TODO): void
}
