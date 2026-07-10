// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_reach_task {
  export function add_reach_task_action(npc: TODO): TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor action_reach_task_location */
declare class action_reach_task_location extends action_base {
  constructor(name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
  single_execute(se_obj: TODO): TODO
  fake_target(squad: TODO): TODO
  commander_execute(squad: TODO): TODO
  soldier_execute(squad: TODO): TODO
  death_callback(npc: TODO): TODO
  net_destroy(npc: TODO): TODO
}

/** @customConstructor evaluator_reached_task_location */
declare class evaluator_reached_task_location extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
