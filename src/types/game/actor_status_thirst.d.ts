/** @noSelfInFile */

declare namespace actor_status_thirst {
  export function actor_on_item_use(item: CGameObject): void
  export function actor_on_sleep(hours: number): void
  export function actor_on_update(b: any, d: any): boolean
  export function create(): void
  export function destroy(): void
  export function force_sleep(): void
  export function get_water_deprivation(visual: string): number
  export function load_state(m_data: AnyTable): void
  export function on_game_start(): void
  export function save_state(m_data: AnyTable): void
  export function test_blur(): void
  export function toggle_feature(val: boolean): void
}
