// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace sim_board {
  export function clear(): TODO
  export function general_base_precondition(squad: TODO, target: TODO): TODO
  export function general_lair_precondition(squad: TODO, target: TODO): TODO
  export function general_resource_precondition(squad: TODO, target: TODO): TODO
  export function general_squad_precondition(squad: TODO, target: TODO): TODO
  export function general_territory_precondition(squad: TODO, target: TODO): TODO
  export function get_sim_board(): TODO
}

/** @customConstructor simulation_board */
declare class simulation_board {
  constructor()
  register_smart(obj: TODO): TODO
  unregister_smart(obj: TODO): TODO
  start_sim(): TODO
  stop_sim(): TODO
  set_actor_community(community: TODO): TODO
  init_smart(obj: TODO): TODO
  create_squad(spawn_smart: TODO, sq_id: TODO): TODO
  create_squad_at_named_location(loc_name: TODO, squad_id: TODO): TODO
  remove_squad(squad: TODO): TODO
  assign_squad_to_smart(squad: TODO, smart_id: TODO): TODO
  setup_squad_and_group(se_obj: TODO): TODO
  fill_start_position(): TODO
  get_smart_by_name(name: TODO): TODO
  get_smart_population(smart: TODO): TODO
  get_squad_target(squad: TODO): TODO
}
