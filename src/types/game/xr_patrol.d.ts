// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_patrol {
  export function add_to_binder(object: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor PatrolManager */
declare class PatrolManager {
  constructor(path_name: TODO)
  add_npc(npc: TODO, leader: TODO): TODO
  remove_npc(npc: TODO): TODO
  reset_positions(): TODO
  set_formation(formation: TODO): TODO
  get_commander(npc: TODO): TODO
  get_npc_command(npc: TODO): TODO
  set_command(npc: TODO, command: TODO, formation: TODO): TODO
  is_commander(npc_id: TODO): TODO
  is_commander_in_meet(): TODO
  update(): TODO
}

/** @customConstructor action_commander */
declare class action_commander extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  activate_scheme(): TODO
  execute(): TODO
  finalize(): TODO
  deactivate(npc: TODO): TODO
  death_callback(npc: TODO): TODO
  net_destroy(npc: TODO): TODO
  formation_callback(mode: TODO, number: TODO, index: TODO): TODO
}

/** @customConstructor evaluator_patrol_comm */
declare class evaluator_patrol_comm extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_patrol_end */
declare class evaluator_patrol_end extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
