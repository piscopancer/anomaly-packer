// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace sound_manager {
  export function get_sound_manager(id: TODO): TODO
}

/** @customConstructor CStory */
declare class CStory {
  constructor(story_id: TODO)
  is_finished(): TODO
  reset_story(): TODO
  get_next_phrase(): TODO
}

/** @customConstructor sound_manager */
declare class sound_manager {
  constructor(id: TODO)
  register_npc(npc_id: TODO): TODO
  unregister_npc(npc_id: TODO): TODO
  set_storyteller(npc_id: TODO): TODO
  update(): TODO
  choose_random_storyteller(): TODO
  is_finished(): TODO
  set_story(story_id: TODO): TODO
}
