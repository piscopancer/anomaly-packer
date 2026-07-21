/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace mob_camp {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }

  /** @customConstructor mob_camp */
  class mob_camp {
    camp_node: TODO // @generated field — refine type
    camp_position: TODO // @generated field — refine type
    cur_point_index: TODO // @generated field — refine type
    home_path: TODO // @generated field — refine type
    look_path: TODO // @generated field — refine type
    object: TODO // @generated field — refine type
    prev_enemy: boolean // @generated field — refine type
    st: TODO // @generated field — refine type
    state_current: TODO // @generated field — refine type
    state_prev: TODO // @generated field — refine type
    time_point_changed: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
    select_current_home_point(first_call: boolean): void
    select_state(): void
    execute_state(): void
    deactivate(): void
    net_destroy(): void
  }

  namespace mob_camp {
    /** Anomaly `class "mob_camp"` is also reachable on the `mob_camp` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`mob_camp.mob_camp.Method = ...`). */
    export const mob_camp: mob_camp
  }
}
