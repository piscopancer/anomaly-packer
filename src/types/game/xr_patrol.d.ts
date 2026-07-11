/** @noSelfInFile */

declare namespace xr_patrol {
  export function add_to_binder(object: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor PatrolManager */
declare class PatrolManager {
  constructor(path_name: TODO)
  add_npc(npc: TODO, leader: TODO): void
  remove_npc(npc: TODO): TODO
  reset_positions(): void
  set_formation(formation: TODO): void
  get_commander(npc: TODO): TODO
  get_npc_command(npc: TODO): TODO
  set_command(npc: TODO, command: TODO, formation: TODO): TODO
  is_commander(npc_id: TODO): TODO
  is_commander_in_meet(): boolean
  update(): void
}

/** @customConstructor action_commander */
declare class action_commander extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  activate_scheme(): void
  execute(): void
  finalize(): void
  deactivate(npc: TODO): void
  death_callback(npc: TODO): void
  net_destroy(npc: TODO): void
  formation_callback(mode: TODO, number: TODO, index: TODO): void
}

/** @customConstructor evaluator_patrol_comm */
declare class evaluator_patrol_comm extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_patrol_end */
declare class evaluator_patrol_end extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): TODO
}
