// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ph_death {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function disable_scheme(npc: TODO, scheme: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor ph_on_death */
declare class ph_on_death {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): TODO
  update(delta: TODO): TODO
  death_callback(obj: TODO, who: TODO): TODO
}
