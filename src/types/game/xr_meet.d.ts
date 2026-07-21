/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_meet {
    export function add_to_binder(npc: CGameObject, char_ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
    export function has_dialog_override(npc_id: number): boolean
    export function init_meet(npc: CGameObject, ini: system_ini, section: Section.Item, st: AnyTable, scheme: string): void
    export function is_meet(npc: CGameObject): boolean
    export function load_state(m: AnyTable): void
    export function notify_on_use(victim: CGameObject, who: CGameObject): void
    export function on_game_start(): void
    export function override_dialog(npc_id: number, dialog_name: string): boolean
    export function process_npc_usability(npc: CGameObject): void
    export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section.Item, stype: number, st: AnyTable): void
    export function restore_dialog(npc_id: number): void
    export function save_state(m: AnyTable): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }

  /** @customConstructor Cmeet_manager */
  class Cmeet_manager {
    __stimer: TODO // @generated field — refine type
    a: TODO // @generated field — refine type
    abuse_mode: TODO // @generated field — refine type
    allow_break: TODO // @generated field — refine type
    bye_passed: boolean // @generated field — refine type
    curent_distance: TODO // @generated field — refine type
    current_distance: TODO // @generated field — refine type
    hello_passed: boolean // @generated field — refine type
    npc: TODO // @generated field — refine type
    npc_is_camp_director: boolean // @generated field — refine type
    startdialog: TODO // @generated field — refine type
    trade_enable: TODO // @generated field — refine type
    use: TODO // @generated field — refine type
    constructor(npc: CGameObject, storage: AnyTable)
    update_state(): void
    set_start_distance(): void
    update(): void
  }

  /** @customConstructor action_meet_wait */
  class action_meet_wait extends action_base {
    a: TODO // @generated field — refine type
    char_ini: TODO // @generated field — refine type
    constructor(npc_name: string, action_name: string, storage: AnyTable, char_ini: system_ini)
    initialize(): void
    execute(): void
    finalize(): void
  }

  /** @customConstructor evaluator_contact */
  class evaluator_contact extends property_evaluator {
    a: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    evaluate(): boolean
  }

  namespace xr_meet {
    /** Anomaly `class "Cmeet_manager"` is also reachable on the `xr_meet` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_meet.Cmeet_manager.Method = ...`). */
    export const Cmeet_manager: Cmeet_manager
    /** Anomaly `class "action_meet_wait"` is also reachable on the `xr_meet` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_meet.action_meet_wait.Method = ...`). */
    export const action_meet_wait: action_meet_wait
    /** Anomaly `class "evaluator_contact"` is also reachable on the `xr_meet` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_meet.evaluator_contact.Method = ...`). */
    export const evaluator_contact: evaluator_contact
  }
}
