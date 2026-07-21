/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_patrol {
    export function add_to_binder(object: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }

  /** @customConstructor PatrolManager */
  class PatrolManager {
    commander_dir: TODO // @generated field — refine type
    commander_id: TODO // @generated field — refine type
    commander_lid: TODO // @generated field — refine type
    current_state: TODO // @generated field — refine type
    formation: TODO // @generated field — refine type
    npc_count: TODO // @generated field — refine type
    npc_list: TODO // @generated field — refine type
    path_name: TODO // @generated field — refine type
    constructor(path_name: string)
    add_npc(npc: CGameObject, leader: boolean): void
    remove_npc(npc: CGameObject): void
    reset_positions(): void
    set_formation(formation: string): void
    get_commander(npc: CGameObject): CGameObject
    get_npc_command(npc: CGameObject): LuaMultiReturn<[number, vector, string]>
    set_command(npc: CGameObject, command: string, formation: string): void
    is_commander(npc_id: number): boolean
    is_commander_in_meet(): boolean
    update(): void
  }

  /** @customConstructor action_commander */
  class action_commander extends action_base {
    cur_state: string // @generated field — refine type
    move_mgr: TODO // @generated field — refine type
    old_state: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    was_reset: boolean // @generated field — refine type
    constructor(npc: CGameObject, action_name: string, storage: AnyTable)
    initialize(): void
    activate_scheme(): void
    execute(): void
    finalize(): void
    deactivate(npc: CGameObject): void
    death_callback(npc: CGameObject): void
    net_destroy(npc: CGameObject): void
    formation_callback(mode: any, number: number, index: number): void
  }

  /** @customConstructor evaluator_patrol_comm */
  class evaluator_patrol_comm extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    evaluate(): boolean
  }

  /** @customConstructor evaluator_patrol_end */
  class evaluator_patrol_end extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    evaluate(): boolean
  }

  namespace xr_patrol {
    /** Anomaly `class "PatrolManager"` is also reachable on the `xr_patrol` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_patrol.PatrolManager.Method = ...`). */
    export const PatrolManager: PatrolManager
    /** Anomaly `class "action_commander"` is also reachable on the `xr_patrol` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_patrol.action_commander.Method = ...`). */
    export const action_commander: action_commander
    /** Anomaly `class "evaluator_patrol_comm"` is also reachable on the `xr_patrol` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_patrol.evaluator_patrol_comm.Method = ...`). */
    export const evaluator_patrol_comm: evaluator_patrol_comm
    /** Anomaly `class "evaluator_patrol_end"` is also reachable on the `xr_patrol` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_patrol.evaluator_patrol_end.Method = ...`). */
    export const evaluator_patrol_end: evaluator_patrol_end
  }
}
