/** @noSelfInFile */

declare namespace item_parts {
  export function clear_parts_con(id: number): void
  export function copy_parts_con(id_from: number, id_to: number): void
  export function create_disassemble_list(t: AnyTable): string
  export function disassembly_item(obj: CGameObject, obj_d: CGameObject): boolean
  export function disassembly_outfit(obj: CGameObject, obj_d: CGameObject): void
  export function disassembly_weapon(obj: CGameObject, obj_d: CGameObject): boolean
  export function evaluate_parts(obj: CGameObject): any
  export function func_disassembly(obj: CGameObject, obj_d: CGameObject): boolean
  export function get_parts_con(obj: CGameObject, id: number, evaluate: boolean): any
  export function get_suitable_dtool(obj: CGameObject): CGameObject
  export function get_suitable_part_con(sec: Section, con: number): number
  export function init_settings(): void
  export function is_suitable_dtool(obj: CGameObject, obj_d: CGameObject): boolean
  export function menu_disassembly(obj: CGameObject): void
  export function on_game_start(): void
  export function print_con_tbl(tbl: AnyTable, str: string): void
  export function print_parts_tbl(): void
  export function set_parts_con(id: number, data: AnyTable): void
}
