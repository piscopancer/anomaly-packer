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
  heal_kind: string // @generated field — refine type
  item: TODO // @generated field — refine type
  rank: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  stage: number // @generated field — refine type
  state: number // @generated field — refine type
  timer: TODO // @generated field — refine type
  constructor(object: CGameObject, storage: AnyTable)
  update(npc: CGameObject): void
}

declare namespace xr_eat_medkit {
  /** Anomaly `class "eat_medkit"` is also reachable on the `xr_eat_medkit` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_eat_medkit.eat_medkit.Method = ...`). */
  export const eat_medkit: eat_medkit
}
