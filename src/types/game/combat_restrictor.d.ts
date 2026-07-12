/** @noSelfInFile */

declare namespace combat_restrictor {
  export const combat_sectors: AnyTable
  export function accessible_job(se_obj: CseAbstract, way_name: string): boolean
  export function apply_combat_restrictor(npc: CGameObject): void
  export function clear_combat_restrictor(npc: CGameObject): void
  export function get_job_restrictor(way_name: string): string
  export function register_combat_restrictor(restrictor: CGameObject): void
}
