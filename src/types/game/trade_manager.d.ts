/** @noSelfInFile */

declare namespace trade_manager {
  export function get_buy_discount(npc_id: number): number
  export function get_sell_discount(npc_id: number): number
  export function get_trade_cfg(cfg: AnyTable): AnyTable
  export function get_trade_profile(id: number, key: string): AnyTable
  export function on_game_start(): void
  export function on_npc_death(npc: CGameObject): void
  export function setup_buy_sell_conditions(npc: CGameObject, id: number, config: AnyTable): void
  export function trade_init(npc: CGameObject, cfg: AnyTable): void
  export function trade_load(m_data: AnyTable): void
  export function trade_save(m_data: AnyTable): void
  export function update(npc: CGameObject, force_refresh: boolean): void
}
