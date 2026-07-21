/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace mob_trade {
    export function ActorMenu_on_trade_closed(): void
    export function ActorMenu_on_trade_started(): void
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp: AnyTable): void
    export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
    export function GetTalkingNpc(): CGameObject
    export function on_game_start(): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp: AnyTable): void
  }
  
  /** @customConstructor mob_trade */
  class mob_trade {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
    storage_trade_section(): string
    start_trade(zone: CGameObject, obj: CGameObject): void
    end_trade(): void
    on_trade(buy_coast: AnyTable, sell_coast: AnyTable): void
  }

  namespace mob_trade {
    /** Anomaly `class "mob_trade"` is also reachable on the `mob_trade` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`mob_trade.mob_trade.Method = ...`). */
    export const mob_trade: mob_trade
  }
}
