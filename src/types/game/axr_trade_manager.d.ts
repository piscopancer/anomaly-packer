/** @noSelfInFile */

declare namespace axr_trade_manager {
  export function check_tech_item(npc: CGameObject, item: CGameObject): boolean
  export function check_trade_item(npc: CGameObject, item: CGameObject): boolean
  export function init_settings(): void
  export function npc_tech_upgrade_sell(npc: CGameObject): void
  export function npc_trade_buy_sell(npc: CGameObject): void
  export function on_game_start(): void
  export function print_debug(...args: any[]): void
}
