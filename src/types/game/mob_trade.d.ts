// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace mob_trade {
  export function ActorMenu_on_trade_closed(): TODO
  export function ActorMenu_on_trade_started(): TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): TODO
  export function GetTalkingNpc(): TODO
  export function on_game_start(): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor mob_trade */
declare class mob_trade {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): TODO
  update(delta: TODO): TODO
  storage_trade_section(): TODO
  start_trade(zone: TODO, obj: TODO): TODO
  end_trade(): TODO
  on_trade(buy_coast: TODO, sell_coast: TODO): TODO
}
