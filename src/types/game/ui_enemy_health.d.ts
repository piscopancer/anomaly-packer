/** @noSelfInFile */

declare namespace ui_enemy_health {
  export function cs_remove(): void
  export function hbar(bi: string, id: number): boolean
  export function on_game_start(): void
  export function on_hit(obj: CGameObject, power: number, dir: vector, who: CGameObject, bi: number): void
}
