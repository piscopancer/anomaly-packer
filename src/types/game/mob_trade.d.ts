/** @noSelfInFile */

declare namespace mob_trade {
  export function ActorMenu_on_trade_closed(): void
  export function ActorMenu_on_trade_started(): void
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): void
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function GetTalkingNpc(): CGameObject
  export function on_game_start(): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor mob_trade */
declare class mob_trade {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  storage_trade_section(): string
  start_trade(zone: TODO, obj: TODO): void
  end_trade(): void
  on_trade(buy_coast: TODO, sell_coast: TODO): void
}
