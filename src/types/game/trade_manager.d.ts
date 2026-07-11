/** @noSelfInFile */

declare namespace trade_manager {
  export function get_buy_discount(npc_id: TODO): number
  export function get_sell_discount(npc_id: TODO): number
  export function get_trade_cfg(cfg: TODO): TODO
  export function get_trade_profile(id: TODO, key: TODO): TODO
  export function on_game_start(): void
  export function on_npc_death(npc: TODO): void
  export function setup_buy_sell_conditions(npc: CGameObject, id: TODO, config: TODO): void
  export function trade_init(npc: CGameObject, cfg: TODO): void
  export function trade_load(m_data: TODO): void
  export function trade_save(m_data: TODO): void
  export function update(npc: TODO, force_refresh: TODO): void
}
