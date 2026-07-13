/** @noSelfInFile */

declare namespace sound_manager {
  export function get_sound_manager(id: number): sound_manager
}

/** @customConstructor CStory */
declare class CStory {
  constructor(story_id: string)
  is_finished(): boolean
  reset_story(): void
  get_next_phrase(): string | undefined
}

/** @customConstructor sound_manager */
declare class sound_manager {
  constructor(id: number)
  register_npc(npc_id: number): void
  unregister_npc(npc_id: number): void
  set_storyteller(npc_id: number): void
  update(): void
  choose_random_storyteller(): void
  is_finished(): boolean
  set_story(story_id: string): void
}
