/** @noSelfInFile */

declare namespace ph_button {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor ph_button */
declare class ph_button {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  try_switch(): boolean
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): void
  use_callback(victim: TODO, who: TODO): void
}
