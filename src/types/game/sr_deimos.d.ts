/** @noSelfInFile */

declare namespace sr_deimos {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function check_disable_bound(obj: TODO): boolean
  export function check_intensity_delta(obj: TODO): boolean
  export function check_lower_bound(obj: TODO): boolean
  export function check_upper_bound(obj: TODO): boolean
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor CDeimos */
declare class CDeimos {
  constructor(obj: TODO, storage: TODO)
  update(delta: TODO): void
}
