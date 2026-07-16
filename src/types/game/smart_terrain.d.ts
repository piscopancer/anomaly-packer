/** @noSelfInFile */

declare namespace smart_terrain {
  export const actor_level: AnyTable
  export const dbg_hud: AnyTable
  export const nearest_to_actor_smart: AnyTable
  export function arrived_to_smart(se_obj: CseAbstract, smart: se_smart_terrain): boolean
  export function get_smart_terrain_name(smart: se_smart_terrain): string | undefined
  export function on_death(se_obj: CseAbstract): void
  export function setup_gulag_and_logic_on_spawn(obj: CGameObject, st: AnyTable, se_obj: CseAbstract, stype: number, loaded: boolean): void
  export function smart_terrain_squad_count(board_smart_squads: AnyTable): number
  export function surge_stats(): void
}

/** @customConstructor se_smart_terrain */
declare class se_smart_terrain extends cse_alife_smart_zone {
  __campfire_check_time: TODO // @generated field — refine type
  alarm_length: TODO // @generated field — refine type
  alarm_start_sound: TODO // @generated field — refine type
  alarm_stop_sound: TODO // @generated field — refine type
  already_spawned: TODO // @generated field — refine type
  arrive_dist: TODO // @generated field — refine type
  arriving_npc: TODO // @generated field — refine type
  b_registred: boolean // @generated field — refine type
  check_time: TODO // @generated field — refine type
  death_idle_time: TODO // @generated field — refine type
  def_restr: TODO // @generated field — refine type
  default_faction: TODO // @generated field — refine type
  disabled: boolean // @generated field — refine type
  dist_to_actor: TODO // @generated field — refine type
  faction: TODO // @generated field — refine type
  faction_controlled: TODO // @generated field — refine type
  faction_war_in_progress: boolean // @generated field — refine type
  fname: TODO // @generated field — refine type
  ignore_zone: TODO // @generated field — refine type
  ini: TODO // @generated field — refine type
  is_on_actor_level: TODO // @generated field — refine type
  job_count: TODO // @generated field — refine type
  last_respawn_update: TODO // @generated field — refine type
  level_id: TODO // @generated field — refine type
  load_info: TODO // @generated field — refine type
  max_population: TODO // @generated field — refine type
  min_population: TODO // @generated field — refine type
  need_init_npc: TODO // @generated field — refine type
  npc_by_job_section: TODO // @generated field — refine type
  npc_info: TODO // @generated field — refine type
  npc_to_register: TODO // @generated field — refine type
  respawn_idle: TODO // @generated field — refine type
  respawn_only_level: TODO // @generated field — refine type
  respawn_only_smart: TODO // @generated field — refine type
  respawn_params: TODO // @generated field — refine type
  respawn_point: boolean // @generated field — refine type
  respawn_radius: TODO // @generated field — refine type
  safe_restr: TODO // @generated field — refine type
  smart_alarm_position: TODO // @generated field — refine type
  smart_alarm_time: TODO // @generated field — refine type
  smart_alife_task: TODO // @generated field — refine type
  spawn_point: TODO // @generated field — refine type
  squad_id: TODO // @generated field — refine type
  constructor(section: Section)
  on_before_register(): void
  on_register(): void
  on_unregister(): void
  read_params(): void
  fill_npc_info(obj: CGameObject): void
  register_delayed_npc(): void
  register_npc(obj: CGameObject): void
  only_faction_on_jobs(faction: Community): boolean
  unregister_npc(obj: CGameObject): void
  clear_dead(obj: CGameObject): void
  load_jobs(): void
  clear_job(id: number, rem: boolean): void
  update_jobs(): void
  select_npc_job(npc_info: AnyTable, now: number, surge_started?: boolean): boolean
  getJob(obj_id: number): AnyTable | undefined
  idNPCOnJob(job_name: string): number | undefined
  switch_to_desired_job(npc: CGameObject): void
  save_state(m_data: AnyTable): void
  load_state(m_data: AnyTable): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: number): void
  init_npc_after_load(): void
  stayed_squad_count(): number
  get_smart_props(): string
  show(): void
  hide(): void
  check_smart_faction(): void
  update(): void
  set_alarm(enemy: CGameObject): void
  check_alarm(): void
  find_job_by_section(section: Section): AnyTable | undefined
  setup_logic(npc: CGameObject): void
  get_location(): LuaMultiReturn<[vector, number, number]>
  am_i_reached(squad: sim_squad_scripted): boolean
  on_after_reach(squad: sim_squad_scripted): void
  on_reach_target(squad: sim_squad_scripted): void
  get_alife_task(): CALifeSmartTerrainTask
  sim_available(): boolean
  target_precondition(squad: sim_squad_scripted, ignore_population?: boolean, skip_props?: boolean): boolean
  evaluate_prior(squad: sim_squad_scripted): number
  try_respawn(): void
}

declare namespace smart_terrain {
  /** Anomaly `class "se_smart_terrain"` is also reachable on the `smart_terrain` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`smart_terrain.se_smart_terrain.Method = ...`). */
  export const se_smart_terrain: se_smart_terrain
}
