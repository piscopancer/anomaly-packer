/** @noSelfInFile */

declare namespace xr_bribe {
  export const WARNING_DISTANCE: number
  export const WARNING_TIME: number
  export const cmd: AnyTable
  export function actor_on_first_update(): void
  export function announce_break(npc_comm: string, is_expired: boolean): void
  export function at_peace(npc_comm: string, player_comm: string, distance: number): boolean
  export function bribe_2_days_army(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_2_days_bandit(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_2_days_csky(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_2_days_dolg(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_2_days_ecolog(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_2_days_freedom(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_2_days_killer(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_2_days_stalker(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_4_days_army(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_4_days_bandit(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_4_days_csky(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_4_days_dolg(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_4_days_ecolog(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_4_days_freedom(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_4_days_killer(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_4_days_stalker(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function bribe_check(): boolean
  export function have_money_10000(): boolean
  export function have_money_12000(): boolean
  export function have_money_4000(): boolean
  export function have_money_5000(): boolean
  export function have_money_6000(): boolean
  export function have_money_8000(): boolean
  export function is_enemy_to_army(): boolean
  export function is_enemy_to_bandit(): boolean
  export function is_enemy_to_csky(): boolean
  export function is_enemy_to_dolg(): boolean
  export function is_enemy_to_ecolog(): boolean
  export function is_enemy_to_freedom(): boolean
  export function is_enemy_to_killer(): boolean
  export function is_enemy_to_stalker(): boolean
  export function load_state(m_data: AnyTable): void
  export function npc_on_hit_callback(comm: string): void
  export function npc_on_update(obj: CGameObject): void
  export function on_game_start(): void
  export function save_state(m_data: AnyTable): void
  export function set_bribe(faction: string, distance: number, seconds: number): void
  export function split(txt: string): string[]
  export function take_money_10000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_money_12000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_money_4000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_money_5000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_money_6000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_money_8000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function trigger_warning(comm: string): void
  export function try_to_toggle(state: boolean): void
}
