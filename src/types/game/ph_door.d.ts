/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ph_door {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
    export function try_to_close_door(npc: CGameObject, doors: AnyTable): void
    export function try_to_open_door(npc: CGameObject, opened_doors: AnyTable): void
  }

  /** @customConstructor action_door */
  class action_door {
    block: boolean // @generated field — refine type
    hi_limits: TODO // @generated field — refine type
    initialized: boolean // @generated field — refine type
    joint: TODO // @generated field — refine type
    object: TODO // @generated field — refine type
    show_tips: TODO // @generated field — refine type
    snd_obj: TODO // @generated field — refine type
    soundless_block: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(loading: boolean): void
    update(delta: number): void
    fastcall(): boolean
    open_fastcall(): boolean
    close_action(): void
    open_door(disable_snd: boolean): void
    is_closed(): boolean
    is_open(): boolean
    close_door(disable_snd: boolean): void
    try_switch(): boolean
    use_callback(door: CGameObject, actor: CGameObject): void
    hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
    deactivate(): void
  }

  namespace ph_door {
    /** Anomaly `class "action_door"` is also reachable on the `ph_door` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ph_door.action_door.Method = ...`). */
    export const action_door: action_door
  }
}
