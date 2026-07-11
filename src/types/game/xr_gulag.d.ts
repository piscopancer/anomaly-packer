/** @noSelfInFile */

declare namespace xr_gulag {
  export function find_stalker_for_job(obj: TODO, need_job: TODO): TODO
  export function free_object(obj: TODO): void
  export function get_gulag(name_or_sid: TODO): TODO
  export function get_gulag_by_name(name: TODO): TODO
  export function get_gulag_by_sid(sid: TODO): TODO
  export function get_npc_smart(obj: TODO): TODO
  export function is_info_restricted(obj_id: TODO, info_pos: TODO): boolean
  export function job_in_restrictor(smart: TODO, restrictor_name: TODO, way_name: TODO): boolean
  export function resetJob(obj: TODO): void
  export function setGulagEnemy(name_or_sid: TODO, target_obj: TODO): void
  export function setGulagGoodwill(name_or_sid: TODO, goodwill: TODO, target_obj: TODO): void
  export function setGulagNeutral(name_or_sid: TODO, target_obj: TODO): void
  export function setGulagRelation(name_or_sid: TODO, relation: TODO, target_obj: TODO): void
  export function switch_to_desired_job(npc: TODO): void
}
