/** @noSelfInFile */

declare namespace xr_gulag {
  export function find_stalker_for_job(obj: CGameObject, need_job: string): void
  export function free_object(obj: CGameObject): void
  export function get_gulag(name_or_sid: string | number): se_smart_terrain
  export function get_gulag_by_name(name: string): se_smart_terrain
  export function get_gulag_by_sid(sid: number): se_smart_terrain
  export function get_npc_smart(obj: CGameObject): se_smart_terrain
  export function is_info_restricted(obj_id: number, info_pos: string): boolean
  export function job_in_restrictor(smart: se_smart_terrain, restrictor_name: string, way_name: string): boolean
  export function resetJob(obj: CGameObject): void
  export function setGulagEnemy(name_or_sid: string | number, target_obj: CGameObject): void
  export function setGulagGoodwill(name_or_sid: string | number, goodwill: number, target_obj: CGameObject): void
  export function setGulagNeutral(name_or_sid: string | number, target_obj: CGameObject): void
  export function setGulagRelation(name_or_sid: string | number, relation: string, target_obj: CGameObject): void
  export function switch_to_desired_job(npc: CGameObject): void
}
