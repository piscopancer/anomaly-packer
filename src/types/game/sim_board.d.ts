/** @noSelfInFile */

declare namespace sim_board {
  export function clear(): void
  export function general_base_precondition(squad: TODO, target: TODO): boolean
  export function general_lair_precondition(squad: TODO, target: TODO): boolean
  export function general_resource_precondition(squad: TODO, target: TODO): boolean
  export function general_squad_precondition(squad: TODO, target: TODO): boolean
  export function general_territory_precondition(squad: TODO, target: TODO): boolean
  export function get_sim_board(): simulation_board
}

/** @customConstructor simulation_board */
declare class simulation_board {
  constructor()
  register_smart(obj: TODO): void
  unregister_smart(obj: TODO): void
  start_sim(): void
  stop_sim(): void
  set_actor_community(community: TODO): void
  init_smart(obj: TODO): void
  create_squad(spawn_smart: TODO, sq_id: TODO): sim_squad_scripted
  create_squad_at_named_location(loc_name: TODO, squad_id: TODO): sim_squad_scripted
  remove_squad(squad: TODO): void
  assign_squad_to_smart(squad: TODO, smart_id: TODO): void
  setup_squad_and_group(se_obj: TODO): void
  fill_start_position(): void
  get_smart_by_name(name: TODO): TODO
  get_smart_population(smart: TODO): number
  get_squad_target(squad: TODO): TODO
}
