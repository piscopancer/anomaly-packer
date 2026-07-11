/** @noSelfInFile */

declare namespace xr_reach_task {
  export function add_reach_task_action(npc: TODO): TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_reach_task_location */
declare class action_reach_task_location extends action_base {
  constructor(name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  finalize(): void
  single_execute(se_obj: TODO): void
  fake_target(squad: TODO): void
  commander_execute(squad: TODO): TODO
  soldier_execute(squad: TODO): TODO
  death_callback(npc: TODO): void
  net_destroy(npc: TODO): void
}

/** @customConstructor evaluator_reached_task_location */
declare class evaluator_reached_task_location extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): boolean
}
