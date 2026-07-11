/** @noSelfInFile */

declare namespace sr_crow_spawner {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(obj: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor crowkiller */
declare class crowkiller {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  check_for_spawn_new_crow(): boolean
}
