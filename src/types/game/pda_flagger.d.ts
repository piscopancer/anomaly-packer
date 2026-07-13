/** @noSelfInFile */

declare namespace pda_flagger {
  export const flaggedObjectID: number
  export const printd: (e: number, optionalMessage?: string) => void
  export const spot: AnyTable
  export function clear(): void
  export function get_selected_object(): CGameObject | undefined
  export function get_selected_object_id(): number
  export function is_object_selected(): boolean
  export function on_game_start(): void
  export function refresh_strings(): void
}
