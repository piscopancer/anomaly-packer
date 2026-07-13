/** @noSelfInFile */

declare namespace ui_item {
  export function build_desc_footer(obj: CGameObject, sec: string, str: string): string
  export function build_desc_header(obj: CGameObject, sec: string, str: string): string
  export function build_name_first(obj: CGameObject, sec: string, str: string): string
  export function build_name_last(obj: CGameObject, sec: string, str: string): string
  export function build_short_name_first(obj: CGameObject, sec: string, str: string): string
  export function get_list_highlight(): number
  export function get_obj_desc(obj: CGameObject): string
  export function get_obj_name(obj: CGameObject): string
  export function get_obj_short_name(obj: CGameObject): string
  export function get_sec_desc(sec: string): string
  export function get_sec_name(sec: string): string
  export function get_sec_short_name(sec: string): string
  export function item_description(obj: CGameObject, str: string): string
  export function item_name(obj: CGameObject, str: string): string
  export function item_short_name(obj: CGameObject, str: string): string
  export function on_game_start(): void
  export function refresh_strings(): void
}
