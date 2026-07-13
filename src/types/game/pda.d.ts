/** @noSelfInFile */

declare namespace pda {
  export const dialog_closed: boolean
  export function actor_menu_mode(mode: number): void
  export function add_quick_slot_items_on_game_start(): void
  export function calculate_rankings(): void
  export function coc_rankings_can_show(index: number): boolean
  export function coc_rankings_set_description(index: number): string
  export function coc_rankings_set_hint(index: number): string
  export function coc_rankings_set_icon(index: number): string
  export function coc_rankings_set_name(index: number): string
  export function coc_rankings_show_border(index: number): boolean
  export function discover_spots(): void
  export function fill_primary_objects(): void
  export function get_coc_ranking_list(): AnyTable
  export function get_rankings_array_size(): number
  export function get_stat(index: number): string
  export function get_time_elapsed(): string
  export function on_game_start(): void
  export function on_low_battery(): void
  export function pda_use(): void
  export function property_box_add_properties(property_ui: AnyTable, id: number, level_name: string, hint: string): void
  export function property_box_clicked(property_ui: AnyTable): void
  export function set_active_subdialog(section: string): void
}
