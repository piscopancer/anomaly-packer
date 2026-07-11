/** @noSelfInFile */

declare namespace xr_death {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): void
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, st: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_process_death */
declare class action_process_death {
  constructor(obj: TODO, storage: TODO)
  death_callback(victim: TODO, who: TODO): void
}
