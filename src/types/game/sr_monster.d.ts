/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace sr_monster {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }

  /** @customConstructor fake_monster */
  class fake_monster {
    appear_snd: TODO // @generated field — refine type
    cur_point: TODO // @generated field — refine type
    current: TODO // @generated field — refine type
    dir: TODO // @generated field — refine type
    final_action: boolean // @generated field — refine type
    idle_state: boolean // @generated field — refine type
    is_actor_inside: TODO // @generated field — refine type
    monster: TODO // @generated field — refine type
    monster_obj: TODO // @generated field — refine type
    object: TODO // @generated field — refine type
    path_name: TODO // @generated field — refine type
    snd_obj: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    target: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
    on_enter(): void
    reset_path(): void
    next_point(): number
    set_positions(): void
  }

  namespace sr_monster {
    /** Anomaly `class "fake_monster"` is also reachable on the `sr_monster` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`sr_monster.fake_monster.Method = ...`). */
    export const fake_monster: fake_monster
  }
}
