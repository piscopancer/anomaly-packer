// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace sr_postprocess {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor PPEffector */
declare class PPEffector extends effector {
  constructor(id_number: TODO, arg1: TODO)
  process(pp: TODO): TODO
}

/** @customConstructor action_postprocess */
declare class action_postprocess {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): TODO
  deactivate(): TODO
  update(delta: TODO): TODO
  update_hit(delta: TODO): TODO
}
