/** @noSelfInFile */

declare namespace sound_manager {
  export function get_sound_manager(id: TODO): TODO
}

/** @customConstructor CStory */
declare class CStory {
  constructor(story_id: TODO)
  is_finished(): TODO
  reset_story(): void
  get_next_phrase(): TODO
}

/** @customConstructor sound_manager */
declare class sound_manager {
  constructor(id: TODO)
  register_npc(npc_id: TODO): void
  unregister_npc(npc_id: TODO): void
  set_storyteller(npc_id: TODO): void
  update(): void
  choose_random_storyteller(): void
  is_finished(): boolean
  set_story(story_id: TODO): void
}
