/** @noSelfInFile */

interface alife {
  /** Iterate over every server object in the game */
  iterate_object(functor: (se_obj: CseAbstract) => void): void
  force_update(): void
  /** @returns array of all server-object ids */
  object_ids(keytable?: boolean, with_actor?: boolean): number[]
  iterate_objects(functor: (se_obj: CseAbstract) => boolean | void): void
  iterate_level_objects_of_clsid(clsid: number, functor: (se_obj: CseAbstract) => boolean | void): void
  max_id(): number
}

/** Modded exes add material info to ray-pick results. */
interface rq_result {
  readonly material_name: string | null
  readonly material_flags: number
  readonly material_phfriction: number
  readonly material_phdamping: number
  readonly material_phspring: number
  readonly material_phbounce_start_velocity: number
  readonly material_phbouncing: number
  readonly material_flotation_factor: number
  readonly material_shoot_factor: number
  readonly material_shoot_factor_mp: number
  readonly material_bounce_damage_factor: number
  readonly material_injurious_speed: number
  readonly material_vis_transparency_factor: number
  readonly material_snd_occlusion_factor: number
  readonly material_density_factor: number
}

declare namespace game {
  export function change_game_news_show_time(window: CUIWindow, time: number): void
  export function ui2world(pos: vector2): LuaMultiReturn<[result: vector, obj_id: number]>
  export function on_map_right_click(
    property_ui: CUIPropertiesBox,
    map: {
      /** Name of hovered map */
      level_name: LevelName
      /** Position in the real world under the cursor on the hovered map */
      pos: vector2
      /** Position under the cursor on the global map canvas, not the real world position */
      global_map_pos: vector2
      /** ID of object under cursor, `65535` if no object */
      object_id: number
      /** Tooltip for the object under cursor, `null` if no object */
      hint: string | null
      /** Level vertex id by position on the hovered map */
      lvid: number
      /** Game vertex id by position on the hovered map */
      gvid: number
    }
  ): void
  export function update_pda_news_from_uiwindow(window: CUIWindow): void
  export function world2ui(
    pos: vector,
    /** @default false */
    hud?: boolean,
    /** @default false */
    allow_offscreen?: boolean
  ): vector2
}

interface hud {
  GetWindow(): TODO
}

declare function player_hud(): PlayerHud | null

declare class PlayerHud {
  set_hands(section: Section): void
  reset_hands(): void
}

interface hit {
  bullet_id: number
  // bone: string
}

interface ini_file {
  get_filename(): string
  dltx_print(
    /** @default null */
    section?: Section | null,
    /** @default null */
    line?: string | null
  ): void
  dltx_get_filename_of_line(section: Section, line: string): string
  dltx_get_section(section: Section): AnyTable
  dltx_is_override(section: Section, line: string): boolean
}

declare namespace level {
  export function get_target_pos(): vector
  export function get_target_result(): rq_result
  export function get_music_volume(): number
  export function set_music_volume(vol: number): void
  /** @returns CUIStatic object of the spot on the map */
  export function map_get_object_spot_static(id: number, spot_type: string): TODO
  /** @returns CUIStatic object of the spot on the minimap */
  export function map_get_object_minimap_spot_static(id: number, spot_type: string): TODO
  export function map_remove_all_object_spots(id: number): void
  export function remove_cam_custom_position_direction(): void
  export function set_cam_custom_position_direction(
    pos: vector,
    /** x - head, y - pitch, z - roll */
    dir: vector,
    snoothing?: number,
    draw_hud?: boolean,
    affect_hud?: boolean
  ): void
  /** @returns `true` meaning the desired object was found, stopping the iteration */
  export function iterate_nearest(pos: vector, distance: number, functor: (obj: CGameObject) => boolean | void): void
}

declare namespace callbacks_gameobject {
  export const gameobjects_registry: CGameObject[]
  export function game_objects_iter(): CGameObject[]
}

/** Modded exes expose the level changer's destination as readonly fields. */
interface cse_alife_level_changer {
  readonly dest_game_vertex_id: number
  readonly dest_level_vertex_id: number
  readonly dest_position: vector
}

interface ray_pick {
  /** Surface normal at the pick point */
  get_normal(): vector
}
