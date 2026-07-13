/** @noSelfInFile */

declare namespace heli_snd {
  export const snd_damaged: AnyTable
  export const snd_down: AnyTable
  export const snd_hit: AnyTable
  export const snd_see_enemy: AnyTable
  export function play_snd(st: AnyTable, snd_set: AnyTable, priority: number): void
  export function stop_snd(st: AnyTable): void
}
