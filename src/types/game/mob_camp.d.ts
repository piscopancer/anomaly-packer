// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace mob_camp {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor mob_camp */
declare class mob_camp {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): TODO
  update(delta: TODO): TODO
  select_current_home_point(first_call: TODO): TODO
  select_state(): TODO
  execute_state(): TODO
  deactivate(): TODO
  net_destroy(): TODO
}
