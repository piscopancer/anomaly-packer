/** @noSelfInFile */

declare namespace xr_hit {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): void
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_process_hit */
declare class action_process_hit {
  constructor(obj: TODO, storage: TODO)
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): void
}
