/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace mob_walker {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }

  /** @customConstructor mob_walker */
  class mob_walker {
    crouch: boolean // @generated field — refine type
    cur_anim_set: TODO // @generated field — refine type
    last_index: TODO // @generated field — refine type
    last_look_index: TODO // @generated field — refine type
    object: TODO // @generated field — refine type
    path_look_info: TODO // @generated field — refine type
    path_walk_info: TODO // @generated field — refine type
    patrol_look: TODO // @generated field — refine type
    patrol_walk: TODO // @generated field — refine type
    pt_wait_time: TODO // @generated field — refine type
    running: boolean // @generated field — refine type
    scheduled_snd: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    state: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
    arrived_to_first_waypoint(): boolean
    waypoint_callback(obj: CGameObject, action_type: number, index: number): void
    update_movement_state(): void
    update_standing_state(): void
    deactivate(): void
    look_at_waypoint(pt: vector): void
  }

  namespace mob_walker {
    /** Anomaly `class "mob_walker"` is also reachable on the `mob_walker` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`mob_walker.mob_walker.Method = ...`). */
    export const mob_walker: mob_walker
  }
}
