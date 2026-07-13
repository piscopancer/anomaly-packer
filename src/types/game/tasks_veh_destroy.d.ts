/** @noSelfInFile */

declare namespace tasks_veh_destroy {
  export function load_state(md: AnyTable): void
  export function on_game_start(): void
  export function save_state(md: AnyTable): void
  export function vehicle_on_death_callback(obj: CGameObject): void
}
