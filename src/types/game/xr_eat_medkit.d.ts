/** @noSelfInFile */

declare namespace xr_eat_medkit {
  export function broadcast(npc: CGameObject): TODO
  export function consume_medkit(npc: TODO, medkit: TODO, kind: TODO): void
  export function get_max_strings(): TODO
  export function heal_bleed(id: TODO, left: TODO): boolean
  export function heal_hp(id: TODO, left: TODO): boolean
  export function npc_update(npc: CGameObject, st: TODO): void
  export function on_game_start(): TODO
  export function on_register(se: TODO, kind: TODO): TODO
  export function pr(...args: TODO[]): boolean
}

/** @customConstructor eat_medkit */
declare class eat_medkit {
  constructor(object: TODO, storage: TODO)
  update(npc: CGameObject): void
}
