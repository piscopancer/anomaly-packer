/** @noSelfInFile */

declare namespace xr_bribe {
  export const WARNING_DISTANCE: number
  export const WARNING_TIME: number
  export const cmd: TODO
  export function actor_on_first_update(): void
  export function announce_break(npc_comm: TODO, is_expired: TODO): void
  export function at_peace(npc_comm: TODO, player_comm: TODO, distance: TODO): boolean
  export function bribe_2_days_army(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_2_days_bandit(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_2_days_csky(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_2_days_dolg(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_2_days_ecolog(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_2_days_freedom(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_2_days_killer(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_2_days_stalker(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_4_days_army(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_4_days_bandit(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_4_days_csky(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_4_days_dolg(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_4_days_ecolog(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_4_days_freedom(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_4_days_killer(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_4_days_stalker(first_speaker: TODO, second_speaker: TODO): void
  export function bribe_check(): boolean
  export function have_money_10000(): TODO
  export function have_money_12000(): TODO
  export function have_money_4000(): TODO
  export function have_money_5000(): TODO
  export function have_money_6000(): TODO
  export function have_money_8000(): TODO
  export function is_enemy_to_army(): boolean
  export function is_enemy_to_bandit(): boolean
  export function is_enemy_to_csky(): boolean
  export function is_enemy_to_dolg(): boolean
  export function is_enemy_to_ecolog(): boolean
  export function is_enemy_to_freedom(): boolean
  export function is_enemy_to_killer(): boolean
  export function is_enemy_to_stalker(): boolean
  export function load_state(m_data: TODO): void
  export function npc_on_hit_callback(comm: TODO): void
  export function npc_on_update(obj: TODO): void
  export function on_game_start(): void
  export function save_state(m_data: TODO): void
  export function set_bribe(faction: TODO, distance: TODO, seconds: TODO): void
  export function split(txt: string): TODO
  export function take_money_10000(first_speaker: TODO, second_speaker: TODO): void
  export function take_money_12000(first_speaker: TODO, second_speaker: TODO): void
  export function take_money_4000(first_speaker: TODO, second_speaker: TODO): void
  export function take_money_5000(first_speaker: TODO, second_speaker: TODO): void
  export function take_money_6000(first_speaker: TODO, second_speaker: TODO): void
  export function take_money_8000(first_speaker: TODO, second_speaker: TODO): void
  export function trigger_warning(comm: TODO): TODO
  export function try_to_toggle(state: TODO): void
}
