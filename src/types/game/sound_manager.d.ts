/** @noSelfInFile */

declare namespace sound_manager {
  export function get_sound_manager(id: number): sound_manager
}

/** @customConstructor CStory */
declare class CStory {
  id: TODO // @generated field — refine type
  max_phrase_count: TODO // @generated field — refine type
  next_phrase: TODO // @generated field — refine type
  replics: TODO // @generated field — refine type
  constructor(story_id: string)
  is_finished(): boolean
  reset_story(): void
  get_next_phrase(): string | undefined
}

/** @customConstructor sound_manager */
declare class sound_manager {
  id: TODO // @generated field — refine type
  last_playing_npc: TODO // @generated field — refine type
  npc: TODO // @generated field — refine type
  phrase_idle: TODO // @generated field — refine type
  phrase_timeout: TODO // @generated field — refine type
  story: TODO // @generated field — refine type
  storyteller: TODO // @generated field — refine type
  constructor(id: number)
  register_npc(npc_id: number): void
  unregister_npc(npc_id: number): void
  set_storyteller(npc_id: number): void
  update(): void
  choose_random_storyteller(): void
  is_finished(): boolean
  set_story(story_id: string): void
}

declare namespace sound_manager {
  /** Anomaly `class "CStory"` is also reachable on the `sound_manager` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sound_manager.CStory.Method = ...`). */
  export const CStory: CStory
  /** Anomaly `class "sound_manager"` is also reachable on the `sound_manager` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sound_manager.sound_manager.Method = ...`). */
  export const sound_manager: sound_manager
}
