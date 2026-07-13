/** @noSelfInFile */

declare namespace item_money {
  export function actor_on_loot_money(corpse: CGameObject): void
  export function menu_money_100(obj: CGameObject): string | undefined
  export function menu_money_1000(obj: CGameObject): string | undefined
  export function menu_money_500(obj: CGameObject): string | undefined
  export function menu_money_5000(obj: CGameObject): string | undefined
  export function npc_on_loot_money(npc: CGameObject, corpse: CGameObject): void
  export function on_game_start(): void
  export function use_money_100(obj: CGameObject): void
  export function use_money_1000(obj: CGameObject): void
  export function use_money_500(obj: CGameObject): void
  export function use_money_5000(obj: CGameObject): void
}
