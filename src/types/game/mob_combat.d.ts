/** @noSelfInFile */

declare namespace mob_combat {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): void
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor mob_combat */
declare class mob_combat {
  constructor(obj: TODO, storage: TODO)
  combat_callback(): void
}
