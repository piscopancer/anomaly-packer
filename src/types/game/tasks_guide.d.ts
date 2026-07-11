/** @noSelfInFile */

declare namespace tasks_guide {
  export function __do_timer_action(select_str: TODO, action: TODO): void
  export function activate(): void
  export function actor_on_first_update(): void
  export function actor_on_update(): void
  export function change_money(num: TODO, type: TODO): void
  export function check_ignore_tbl(curr_level: TODO, tbl: TODO): boolean
  export function check_storage(): void
  export function check_tbl(check: TODO, tbl: TODO): boolean
  export function check_timers(): void
  export function clear(): void
  export function collector_ways(start: TODO, finish: TODO, curr_level: TODO): TODO
  export function complete(first_speaker: TODO, second_speaker: TODO): void
  export function copy_tbl(tbl: TODO): TODO
  export function d_v(name: TODO): void
  export function fail(): TODO
  export function fail_time(): void
  export function fCall(file: TODO, func: TODO, ...args: TODO[]): void
  export function g_start_timer(name: TODO, delay_d: TODO, delay_h: TODO, delay_m: TODO, name_script: TODO, name_func: TODO, param: TODO): boolean
  export function get_back_level(tbl: TODO): TODO
  export function get_comm_id(squad_id: TODO): TODO
  export function get_phrase_1(actor: TODO, npc: TODO): TODO
  export function get_phrase_start_1(): TODO
  export function get_phrase_start_2(): TODO
  export function get_phrase2(actor: TODO, npc: TODO): TODO
  export function get_phrase3(actor: TODO, npc: TODO): TODO
  export function get_rnd_level(start_point: TODO): TODO
  export function go_poisk(): TODO
  export function has_g_timer(name: TODO): boolean
  export function has_timer(name: TODO): boolean
  export function ins_mass_onl(): TODO
  export function is_guider_companion(actor: TODO, npc: TODO): TODO
  export function is_not_enemy(actor: TODO, npc: TODO): boolean
  export function is_not_guider_companion(actor: TODO, npc: TODO): TODO
  export function is_not_quest_npc(se_obj: TODO): boolean
  export function l_v(name: TODO, def: TODO): TODO
  export function load_state(): TODO
  export function not_prec_1(actor: TODO, npc: TODO): TODO
  export function npc_switcher(npc_id: TODO, func: TODO, param2: TODO, param3: TODO): boolean
  export function on_game_start(): void
  export function prec_1(actor: TODO, npc: TODO): TODO
  export function prec_2(actor: TODO, npc: TODO): TODO
  export function prec_3(actor: TODO, npc: TODO): TODO
  export function prec_4(actor: TODO, npc: TODO): TODO
  export function prec_5(actor: TODO, npc: TODO): TODO
  export function prepare_follower(): TODO
  export function s_v(name: TODO, val: TODO): void
  export function save_state(): void
  export function squad_on_npc_death(squad: TODO, se_npc: TODO): void
  export function squad_on_unregister(squad: TODO, type_name: TODO): void
  export function squad_switcher(npc_id: TODO, func: TODO, param2: TODO, param3: TODO): boolean
  export function start_timer(name: TODO, delay: TODO, name_script: TODO, name_func: TODO, param: TODO): boolean
  export function stop_g_timer(name: TODO): void
  export function stop_timer(name: TODO): void
}
