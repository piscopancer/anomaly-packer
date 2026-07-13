/** @noSelfInFile */

declare namespace xr_eat_medkit {
  export function broadcast(npc: CGameObject): void
  export function consume_medkit(npc: CGameObject, medkit: CGameObject, kind: string): void
  export function get_max_strings(): number
  export function heal_bleed(id: number, left: number): boolean
  export function heal_hp(id: number, left: number): boolean
  export function npc_update(npc: CGameObject, st: AnyTable): void
  export function on_game_start(): void
  export function on_register(se: CseAbstract, kind: string): void
  export function pr(...args: any[]): boolean
}

/** @customConstructor eat_medkit */
declare class eat_medkit {
  constructor(object: CGameObject, storage: AnyTable)
  update(npc: CGameObject): void
}
