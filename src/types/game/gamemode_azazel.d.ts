/** @noSelfInFile */

declare namespace gamemode_azazel {
  export const printd: (...args: any[]) => void
  export function actor_on_before_death(whoID: number, flags: AnyTable): boolean
  export function cam_effector_end(): void
  export function get_possessed_lives(): number
  export function heal_everything(): void
  export function on_game_load(): void
  export function on_game_start(): void
}
