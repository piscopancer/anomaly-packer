// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_companion {
  export const beh_wait_ignore: TODO
  export const beh_wait_near: TODO
  export const beh_wait_simple: TODO
  export const beh_walk_ignore: TODO
  export const beh_walk_near: TODO
  export const beh_walk_simple: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function select_position(npc: TODO, st: TODO): TODO
  export function set_scheme(object: TODO, ini: TODO, scheme: TODO, section: TODO): TODO
  export function vector_rotate_y(v: TODO, angle: TODO): TODO
}

/** @customConstructor action_companion_activity */
declare class action_companion_activity extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  beh_walk_simple(): TODO
  beh_wait_simple(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_need_companion */
declare class evaluator_need_companion extends property_evaluator {
  constructor(storage: TODO, name: TODO, name_: TODO)
  evaluate(): TODO
}
