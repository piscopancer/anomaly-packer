/** @noSelfInFile */

declare namespace ph_sound {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor snd_source */
declare class snd_source {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): void
  save(): void
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
  update(delta: TODO): TODO
  deactivate(): void
}
