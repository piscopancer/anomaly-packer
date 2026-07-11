/** @noSelfInFile */

declare namespace sr_camp {
  export function get_current_camp(position: TODO): CCampManager | null
  export function start_guitar(npc: TODO): void
  export function start_harmonica(npc: TODO): void
}

/** @customConstructor CCampManager */
declare class CCampManager {
  constructor(object: TODO)
  update(): void
  set_next_state(new_state: TODO): void
  get_director(): number
  set_story(): void
  get_camp_action(npc_id: TODO): LuaMultiReturn<[TODO, boolean]>
  register_npc(npc_id: TODO): void
  unregister_npc(npc_id: TODO): void
  get_npc_role(npc_id: TODO, state: string): TODO
}
