/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_wounded {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function as_play_sound(actor: CGameObject, obj: CGameObject, p: AnyTable): void
    export function as_self_explode(actor: CGameObject, obj: CGameObject): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function eat_medkit(npc: CGameObject): void
    export function hit_callback(npc_id: number): void
    export function init_wounded(npc: CGameObject, ini: system_ini, section: Section.Item, st: AnyTable, scheme: string): void
    export function is_heavy_wounded_by_id(npc_id: number): boolean
    export function is_psy_wounded_by_id(npc_id: number): boolean
    export function is_wounded(npc: CGameObject): boolean
    export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section.Item, stype: number, st: AnyTable): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function unlock_medkit(npc: CGameObject): void
  }

  /** Per-NPC wound state controller. @customConstructor Cwound_manager */
  class Cwound_manager {
    a: TODO // @generated field — refine type
    can_use_medkit: boolean // @generated field — refine type
    cover: string // @generated field — refine type
    fight: TODO // @generated field — refine type
    npc: TODO // @generated field — refine type
    sound: TODO // @generated field — refine type
    victim: TODO // @generated field — refine type
    constructor(npc: CGameObject, storage: AnyTable)
    update(): void
    unlock_medkit(): void
    eat_medkit(): void
    process_fight(hp: number): string
    process_victim(hp: number): string
    process_hp_wound(hp: number): LuaMultiReturn<[string, string]>
    process_psy_wound(hp: number): LuaMultiReturn<[string, string]>
    get_key_from_distance(t: AnyTable, hp: number): string
    hit_callback(): void
  }

  /** @customConstructor action_wounded */
  class action_wounded extends action_base {
    a: TODO // @generated field — refine type
    suicide: boolean // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    initialize(): void
    execute(): void
    finalize(): void
  }

  /** @customConstructor evaluator_can_fight */
  class evaluator_can_fight extends property_evaluator {
    a: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    evaluate(): boolean
  }

  /** @customConstructor evaluator_wound */
  class evaluator_wound extends property_evaluator {
    a: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    evaluate(): boolean
  }

  namespace xr_wounded {
    /** Anomaly `class "Cwound_manager"` is also reachable on the `xr_wounded` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_wounded.Cwound_manager.Method = ...`). */
    export const Cwound_manager: Cwound_manager
    /** Anomaly `class "action_wounded"` is also reachable on the `xr_wounded` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_wounded.action_wounded.Method = ...`). */
    export const action_wounded: action_wounded
    /** Anomaly `class "evaluator_can_fight"` is also reachable on the `xr_wounded` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_wounded.evaluator_can_fight.Method = ...`). */
    export const evaluator_can_fight: evaluator_can_fight
    /** Anomaly `class "evaluator_wound"` is also reachable on the `xr_wounded` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_wounded.evaluator_wound.Method = ...`). */
    export const evaluator_wound: evaluator_wound
  }
}
