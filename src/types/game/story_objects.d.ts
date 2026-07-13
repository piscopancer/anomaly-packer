/** @noSelfInFile */

declare namespace story_objects {
  export const item_object_id_by_story_id: AnyTable
  export const object_id_by_story_id: AnyTable
  export const story_id_by_object_id: AnyTable
  export function check_spawn_ini_for_story_id(se_obj: CseAbstract): void
  export function get_story_se_item(story_id: string): CseAbstract | null
  export function register(obj_id: number, story_id: string): void
  export function unregister(id: number): void
}
