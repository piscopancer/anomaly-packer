/** @noSelfInFile */

declare namespace sim_board {
  export function clear(): void
  export function general_base_precondition(squad: CseAlifeOnlineOfflineGroup, target: AnyTable): boolean
  export function general_lair_precondition(squad: CseAlifeOnlineOfflineGroup, target: AnyTable): boolean
  export function general_resource_precondition(squad: CseAlifeOnlineOfflineGroup, target: AnyTable): boolean
  export function general_squad_precondition(squad: CseAlifeOnlineOfflineGroup, target: AnyTable): boolean
  export function general_territory_precondition(squad: CseAlifeOnlineOfflineGroup, target: AnyTable): boolean
  export function get_sim_board(): simulation_board
}

/** @customConstructor simulation_board */
declare class simulation_board {
  simulation_started: boolean // @generated field — refine type
  smarts: TODO // @generated field — refine type
  smarts_by_names: TODO // @generated field — refine type
  squads: TODO // @generated field — refine type
  start_position_filled: boolean // @generated field — refine type
  tmp_assigned_squad: TODO // @generated field — refine type
  constructor()
  register_smart(obj: CGameObject): void
  unregister_smart(obj: CGameObject): void
  start_sim(): void
  stop_sim(): void
  set_actor_community(community: Community): void
  init_smart(obj: CGameObject): void
  create_squad(spawn_smart: se_smart_terrain, sq_id: number): sim_squad_scripted
  create_squad_at_named_location(loc_name: string, squad_id: number): sim_squad_scripted
  remove_squad(squad: CseAlifeOnlineOfflineGroup): void
  assign_squad_to_smart(squad: CseAlifeOnlineOfflineGroup, smart_id: number): void
  setup_squad_and_group(se_obj: CseAbstract): void
  fill_start_position(): void
  get_smart_by_name(name: string): se_smart_terrain | undefined
  get_smart_population(smart: se_smart_terrain): number
  get_squad_target(squad: CseAlifeOnlineOfflineGroup): AnyTable | undefined
}

declare namespace sim_board {
  /** Anomaly `class "simulation_board"` is also reachable on the `sim_board` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sim_board.simulation_board.Method = ...`). */
  export const simulation_board: simulation_board
}
