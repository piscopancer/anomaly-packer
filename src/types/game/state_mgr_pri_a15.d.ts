/** @noSelfInFile */

declare namespace state_mgr_pri_a15 {
  export function add_animation_list(): AnyTable
  export function add_state_lib(): AnyTable
  export function break_fence(): void
  export function check(param: AnyTable | string): void
  export function check_availability(precondition: AnyTable, existing_npc: CGameObject): boolean
  export function end_scene(): void
  export function get_sequence_for_npc(npc: CGameObject, existing_npc: CGameObject): AnyTable
  export function lights_off(): void
  export function lights_on(): void
  export function strap_weapon(npc: CGameObject): void
  export function unstrap_weapon(npc: CGameObject): void
}
