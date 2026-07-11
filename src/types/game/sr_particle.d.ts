/** @noSelfInFile */

declare namespace sr_particle {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(obj: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_particle */
declare class action_particle {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  is_end(): boolean
  update_mode_1(): void
  update_mode_2(): TODO
  deactivate(): void
}
