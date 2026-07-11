/** @noSelfInFile */

declare namespace sr_monster {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(obj: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor fake_monster */
declare class fake_monster {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  on_enter(): void
  reset_path(): void
  next_point(): TODO
  set_positions(): void
}
