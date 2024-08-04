/** @noSelfInFile */

declare namespace surge_manager {
  export function get_surge_manager(): TODO
  export function start_surge(): void
  export function stop_surge(): void
  export function is_started(): boolean
  export function is_finished(): boolean
  export function is_loaded(): boolean
  export function actor_in_cover(): boolean
  export function npc_in_cover(npc: CGameObject): boolean
  export function job_in_surge_cover(se_obj: CseAbstract, job: TODO): boolean
  export function set_surge_message(message: string): void
  export function is_killing_all(): boolean
  export function sound_started(): boolean
}
