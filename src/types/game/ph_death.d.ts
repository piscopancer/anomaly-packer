/** @noSelfInFile */

declare namespace ph_death {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function disable_scheme(npc: TODO, scheme: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor ph_on_death */
declare class ph_on_death {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  death_callback(obj: TODO, who: TODO): void
}
