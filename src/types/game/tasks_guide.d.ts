/** @noSelfInFile */

declare namespace tasks_guide {
  export function __do_timer_action(select_str: string, action: string): void
  export function activate(): void
  export function actor_on_first_update(): void
  export function actor_on_update(): void
  export function change_money(num: number, type: string): void
  export function check_ignore_tbl(curr_level: string, tbl: AnyTable): boolean
  export function check_storage(): void
  export function check_tbl(check: string, tbl: AnyTable): boolean
  export function check_timers(): void
  export function clear(): void
  export function collector_ways(start: string, finish: string, curr_level: string): void
  export function complete(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function copy_tbl(tbl: AnyTable): AnyTable
  export function d_v(name: string): void
  export function fail(): void
  export function fail_time(): void
  export function fCall(file: string, func: string, ...args: unknown[]): void
  export function g_start_timer(name: string, delay_d: number, delay_h: number, delay_m: number, name_script: string, name_func: string, param?: unknown): boolean
  export function get_back_level(tbl: AnyTable): string | undefined
  export function get_comm_id(squad_id: number): number | undefined
  export function get_phrase_1(actor: CGameObject, npc: CGameObject): string
  export function get_phrase_start_1(): string
  export function get_phrase_start_2(): string
  export function get_phrase2(actor: CGameObject, npc: CGameObject): string
  export function get_phrase3(actor: CGameObject, npc: CGameObject): string
  export function get_rnd_level(start_point: string): string
  export function go_poisk(): LuaMultiReturn<[string, number]>
  export function has_g_timer(name: string): boolean
  export function has_timer(name: string): boolean
  export function ins_mass_onl(): number | undefined
  export function is_guider_companion(actor: CGameObject, npc: CGameObject): boolean
  export function is_not_enemy(actor: CGameObject, npc: CGameObject): boolean
  export function is_not_guider_companion(actor: CGameObject, npc: CGameObject): boolean
  export function is_not_quest_npc(se_obj: CseAlifeObject): boolean
  export function l_v(name: string, def?: unknown): unknown
  export function load_state(): boolean | undefined
  export function not_prec_1(actor: CGameObject, npc: CGameObject): boolean
  export function on_game_start(): void
  export function prec_1(actor: CGameObject, npc: CGameObject): boolean
  export function prec_2(actor: CGameObject, npc: CGameObject): boolean
  export function prec_3(actor: CGameObject, npc: CGameObject): boolean
  export function prec_4(actor: CGameObject, npc: CGameObject): boolean
  export function prec_5(actor: CGameObject, npc: CGameObject): boolean
  export function prepare_follower(): boolean
  export function s_v(name: string, val: unknown): void
  export function save_state(): void
  export function squad_on_npc_death(squad: cse_alife_online_offline_group, se_npc: CseAlifeObject): void
  export function squad_on_unregister(squad: cse_alife_online_offline_group, type_name: string): void
  export function start_timer(name: string, delay: number, name_script: string, name_func: string, param?: unknown): boolean
  export function stop_g_timer(name: string): void
  export function stop_timer(name: string): void
}
