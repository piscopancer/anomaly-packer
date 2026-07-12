/** @noSelfInFile */

declare namespace xr_logic {
  export function abort_syntax_error_in_cond(section: string, field: string, c: string): void
  export function activate_by_section(npc: CGameObject, ini: system_ini, section: string, gulag_name: string, loading: boolean): void
  export function assign_storage_and_bind(npc: CGameObject, ini: system_ini, scheme: string, section: string, temp?: boolean): AnyTable
  export function cfg_get_condlist(ini: system_ini, section: string, field: string, npc: CGameObject, cond_name?: string, str?: string): AnyTable | undefined
  export function cfg_get_npc_and_zone(ini: system_ini, section: string, field: string, npc: CGameObject, cond_name?: string): AnyTable
  export function cfg_get_number_and_condlist(ini: system_ini, section: string, field: string, npc: CGameObject, cond_name?: string, str?: string): AnyTable | undefined
  export function cfg_get_overrides(ini: system_ini, section: string, npc: CGameObject, l: AnyTable): AnyTable
  export function cfg_get_string_and_condlist(ini: system_ini, section: string, field: string, npc: CGameObject, cond_name?: string, str?: string): AnyTable | undefined
  export function cfg_get_switch_conditions(ini: system_ini, section: string, npc: CGameObject): AnyTable
  export function cfg_get_two_strings_and_condlist(ini: system_ini, section: string, field: string, npc: CGameObject, cond_name?: string, str?: string): AnyTable | undefined
  export function check_action(npc: CGameObject, st: AnyTable, event_fn: string, p: AnyTable): boolean
  export function configure_schemes(npc: CGameObject, ini: system_ini, ini_filename: string, stype: string, section_logic: string, gulag_name: string): system_ini | undefined
  export function determine_section_to_activate(npc: CGameObject, ini: system_ini, section_logic: string, actor: CGameObject): string
  export function disable_generic_schemes(npc: CGameObject, stype: string): void
  export function enable_generic_schemes(ini: system_ini, npc: CGameObject, stype: string, section: string): void
  export function extract_conditions(c: string, lst: AnyTable, n: number, index: number): void
  export function generic_scheme_overrides(npc: CGameObject): AnyTable
  export function get_customdata_or_ini_file(npc: CGameObject, filename: string): LuaMultiReturn<[system_ini, string]>
  export function initialize_obj(obj: CGameObject, st: AnyTable, loaded: boolean, actor: CGameObject, stype: string): void
  export function is_active(npc: CGameObject, st: AnyTable): boolean
  export function issue_event(npc: CGameObject, st: AnyTable, event_fn: string, ...args: unknown[]): void
  export function load_obj(obj: CGameObject, reader: net_packet): void
  export function mob_capture(mob: CGameObject, reset_actions: boolean): void
  export function mob_captured(mob: CGameObject): boolean
  export function mob_release(mob: CGameObject): void
  export function parse_condlist(npc: CGameObject | null, section: string | null, field: string | null, src: string): AnyTable
  export function parse_func_params(str: string): AnyTable
  export function parse_infop(rslt: AnyTable, str?: string): void
  export function parse_infop1(rslt: AnyTable, str?: string): void
  export function pick_section_from_condlist(obj: CGameObject | null, npc: CGameObject, condlist: AnyTable): string | undefined
  export function pstor_load_all(obj: CGameObject, reader: net_packet): void
  export function pstor_save_all(obj: CGameObject, packet: net_packet): void
  export function reset_generic_schemes_on_scheme_switch(npc: CGameObject, scheme: string, section: string): void
  export function reset_logic(npc: CGameObject, st: AnyTable): void
  export function restore_scheme_and_logic(npc: CGameObject): void
  export function save_obj(obj: CGameObject, packet: net_packet): void
  export function see_actor(npc: CGameObject): boolean
  export function set_new_scheme_and_logic(npc: CGameObject, scheme: string, section: string, logic: string, gulag: string, ini_filename: string): void
  export function spawn_items(npc: CGameObject, st: AnyTable): void
  export function str_from_condlist(obj: CGameObject, ini: system_ini, section: string, field: string): string | undefined
  export function subscribe_action_for_events(npc: CGameObject, storage: AnyTable, new_action: AnyTable): void
  export function switch_to_section(npc: CGameObject, ini: system_ini, section: string): boolean
  export function try_switch_to_another_section(npc: CGameObject, st: AnyTable, actor: CGameObject): boolean | undefined
  export function unsubscribe_action_from_events(npc: CGameObject, storage: AnyTable, new_action: AnyTable): void
}
