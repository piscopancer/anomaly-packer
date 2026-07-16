/** @noSelfInFile */

declare namespace sr_camp {
  export function get_current_camp(position: vector): CCampManager | null
  export function start_guitar(npc: CGameObject): void
  export function start_harmonica(npc: CGameObject): void
}

/** @customConstructor CCampManager */
declare class CCampManager {
  active_state: TODO // @generated field — refine type
  active_state_time: TODO // @generated field — refine type
  director: TODO // @generated field — refine type
  idle_talker: TODO // @generated field — refine type
  npc: TODO // @generated field — refine type
  npc_count: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  schemes: TODO // @generated field — refine type
  sound_manager: TODO // @generated field — refine type
  sound_manager_started: boolean // @generated field — refine type
  timeout: TODO // @generated field — refine type
  constructor(object: CGameObject)
  update(): void
  set_next_state(new_state: string): void
  get_director(): number
  set_story(): void
  get_camp_action(npc_id: number): LuaMultiReturn<[string, boolean]>
  register_npc(npc_id: number): void
  unregister_npc(npc_id: number): void
  get_npc_role(npc_id: number, state: string): number
}

declare namespace sr_camp {
  /** Anomaly `class "CCampManager"` is also reachable on the `sr_camp` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_camp.CCampManager.Method = ...`). */
  export const CCampManager: CCampManager
}
