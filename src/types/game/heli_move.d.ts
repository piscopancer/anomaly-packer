// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace heli_move {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor heli_move */
declare class heli_move {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): TODO
  save(): TODO
  update(delta: TODO): TODO
  iterate_nodes(): TODO
  create_path_nodes(): TODO
  update_path_by_logic(): TODO
  update_movement_state(): TODO
  update_look_state(): TODO
  waypoint_callback(obj: TODO, action_type: TODO, index: TODO): TODO
}
