/** @noSelfInFile */

declare namespace combat_restrictor {
  export const combat_sectors: TODO
  export function accessible_job(se_obj: TODO, way_name: TODO): boolean
  export function apply_combat_restrictor(npc: TODO): void
  export function clear_combat_restrictor(npc: TODO): void
  export function get_job_restrictor(way_name: TODO): TODO
  export function register_combat_restrictor(restrictor: TODO): void
}
