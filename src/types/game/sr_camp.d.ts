// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace sr_camp {
  export function get_current_camp(position: TODO): TODO
  export function start_guitar(npc: TODO): TODO
  export function start_harmonica(npc: TODO): TODO
}

/** @customConstructor CCampManager */
declare class CCampManager {
  constructor(object: TODO)
  update(): TODO
  set_next_state(new_state: TODO): TODO
  get_director(): TODO
  set_story(): TODO
  get_camp_action(npc_id: TODO): TODO
  register_npc(npc_id: TODO): TODO
  unregister_npc(npc_id: TODO): TODO
  get_npc_role(npc_id: TODO, state: TODO): TODO
}
