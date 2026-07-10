// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace mob_walker {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor mob_walker */
declare class mob_walker {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): TODO
  update(delta: TODO): TODO
  arrived_to_first_waypoint(): TODO
  waypoint_callback(obj: TODO, action_type: TODO, index: TODO): TODO
  update_movement_state(): TODO
  update_standing_state(): TODO
  deactivate(): TODO
  look_at_waypoint(pt: TODO): TODO
}
