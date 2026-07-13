/** @noSelfInFile */

declare namespace sr_camp {
  export function get_current_camp(position: vector): CCampManager | null
  export function start_guitar(npc: CGameObject): void
  export function start_harmonica(npc: CGameObject): void
}

/** @customConstructor CCampManager */
declare class CCampManager {
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
