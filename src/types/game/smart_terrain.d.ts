/** @noSelfInFile */

declare namespace smart_terrain {
  export const actor_level: TODO
  export const dbg_hud: TODO
  export const nearest_to_actor_smart: TODO
  export function arrived_to_smart(se_obj: CseAbstract, smart: se_smart_terrain): boolean
  export function get_smart_terrain_name(smart: se_smart_terrain): string | undefined
  export function on_death(se_obj: CseAbstract): void
  export function setup_gulag_and_logic_on_spawn(obj: CGameObject, st: TODO, se_obj: CseAbstract, stype: TODO, loaded: boolean): void
  export function smart_terrain_squad_count(board_smart_squads: TODO): number
  export function surge_stats(): void
}

/** @customConstructor se_smart_terrain */
declare class se_smart_terrain extends cse_alife_smart_zone {
  constructor(section: string)
  on_before_register(): void
  on_register(): void
  on_unregister(): void
  read_params(): void
  fill_npc_info(obj: CGameObject): TODO
  register_delayed_npc(): void
  register_npc(obj: CGameObject): void
  only_faction_on_jobs(faction: Community): TODO
  unregister_npc(obj: CGameObject): void
  clear_dead(obj: CGameObject): void
  load_jobs(): void
  clear_job(id: number, rem: TODO): void
  update_jobs(): void
  select_npc_job(npc_info: TODO, now: TODO, surge_started?: TODO): TODO
  getJob(obj_id: number): TODO
  idNPCOnJob(job_name: string): TODO
  switch_to_desired_job(npc: CGameObject): void
  save_state(m_data: TODO): void
  load_state(m_data: TODO): void
  STATE_Write(packet: TODO): void
  STATE_Read(packet: TODO, size: number): void
  init_npc_after_load(): void
  stayed_squad_count(): number
  get_smart_props(): TODO
  show(): void
  hide(): void
  check_smart_faction(): TODO
  update(): void
  set_alarm(enemy: CGameObject): void
  check_alarm(): void
  find_job_by_section(section: string): TODO
  setup_logic(npc: CGameObject): void
  get_location(): LuaMultiReturn<[vector, number, number]>
  am_i_reached(squad: sim_squad_scripted): boolean
  on_after_reach(squad: sim_squad_scripted): void
  on_reach_target(squad: sim_squad_scripted): void
  get_alife_task(): TODO
  sim_available(): boolean
  target_precondition(squad: sim_squad_scripted, ignore_population?: boolean, skip_props?: boolean): boolean
  evaluate_prior(squad: sim_squad_scripted): number
  try_respawn(): void
}
