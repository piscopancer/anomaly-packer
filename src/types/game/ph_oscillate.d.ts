/** @noSelfInFile */

declare namespace ph_oscillate {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_oscillator */
declare class action_oscillator {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
}
