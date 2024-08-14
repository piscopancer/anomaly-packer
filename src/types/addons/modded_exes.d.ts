/** @noSelfInFile */

declare namespace bit {
  export function tobit(n: number): void
  export function tohex(n: number): void
  export function bnot(n: number): void
  export function band(n_1: number, n_2: number): void
  export function bor(n_1: number, n_2: number): void
  export function bxor(n_1: number, n_2: number): void
  export function lshift(n_1: number, n_2: number): void
  export function rshift(n_1: number, n_2: number): void
  export function rol(n: number): void
  export function ror(n: number): void
}

declare namespace string {
  export function trim(str: string): string
  export function trim_l(str: string): string
  export function trim_r(str: string): string
  export function trim_w(str: string): string
}

declare namespace table {
  export function keys(t: AnyTable): string[]
  export function values<T extends AnyTable>(t: T): T[keyof T][]
  export function size(t: AnyTable): number
  export function random<T extends AnyTable>(t: T): T[keyof T]
}

declare const MODDED_EXES_VERSION: number
declare function get_modded_exes_version(): number
/** @returns all translated strings */
declare function get_string_table(): Record<string, string>

interface Bullet {
  position: vector
  direction: vector
  speed: number
  distance: number
  section: string
  id: number
  weapon_id: number
  parent_id: number
  target_id: number
  material: string
  life_time: number
}

/** @noSelf */
interface GameEvents {
  actor_on_changed_slot(new_slot: number, new_obj: CGameObject | null, prev_slot: number, prev_obj: CGameObject | null): void
  actor_on_weapon_zoom_type_changed(weapon: CGameObject, prev: number, current: number): void
  bullet_on_init(bullet: Bullet): void
  bullet_on_update(bullet: Bullet): void
  bullet_on_impact(bullet: Bullet): void
  bullet_on_remove(bullet: Bullet): void
  game_object_on_net_spawn(obj: CGameObject): void
  game_object_on_net_destroy(obj: CGameObject): void
  on_news_received(
    window: TODO /** UIWindow*/,
    time: TODO /** UITimeText*/,
    caption: TODO /** UICaptionText*/,
    message: TODO /** UIMsgText*/,
    icon: TODO /** UIIconStatic*/,
    tags: {}
  ): TODO
  on_before_hit_after_calcs(_hit: hit, target: CGameObject, bone_id: number): void
  on_mouse_wheel(
    /** 1 - up, 0 - down */
    dir: 0 | 1,
    flags: { ret_value: boolean }
  ): void
  on_phrase_callback(sound: string, obj: CGameObject): void
  on_loading_screen_key_prompt(): void
  on_loading_screen_dismissed(): void
  /** @deprecated WIP */
  rocket_on_update(...args: TODO[]): TODO
}

interface CGameObject {
  // NPCs
  angle(): vector
  force_set_angle(angle: vector): void
  get_enable_anomalies_pathfinding(): boolean
  set_enable_anomalies_pathfinding(enable: boolean): void
  get_enable_anomalies_damage(): boolean
  set_enable_anomalies_damage(enable: boolean): void
  set_enable_movement_collision(enable: boolean): void
  character_dialogs(): string[]
  // Actor
  get_scope_ui(): {
    name: string
    uiWindow: TODO /** CUIWindow */
    statics: TODO /** CUIStatic[] */
  }
  set_scope_ui(
    /** @example 'wpn_crosshair_mosin' */
    texture: string
  ): void
  get_actor_walk_accel(): number
  set_actor_walk_accel(accel: number): void
  get_actor_walk_back_coef(): number
  set_actor_walk_back_coef(coef: number): void
  get_actor_lookout_coef(): number
  set_actor_lookout_coef(coef: number): void
  set_actor_direction(yaw: number, pitch: number, roll?: number): void
  set_actor_direction(hpb: vector): void
  get_artefact_additional_inventory_weight(): number
  set_artefact_additional_inventory_weight(weight: number): void
  get_actor_crouch_coef(): number
  set_actor_crouch_coef(coef: number): void
  get_actor_climb_coef(): number
  set_actor_climb_coef(coef: number): void
  get_actor_walk_strafe_coef(): number
  set_actor_walk_strafe_coef(coef: number): void
  get_actor_run_strafe_coef(): number
  set_actor_run_strafe_coef(coef: number): void
  get_actor_sprint_strafe_coef(): number
  set_actor_sprint_strafe_coef(coef: number): void
  /** Force update of weight */
  update_weight(): void
  get_total_weight_force_update(): number
  get_talking_npc(): CGameObject | null
  // Bones
  get_bone_id(name: string, hud?: boolean): number
  bone_id(name: string, hud?: boolean): number
  bone_name(id: number, hud?: boolean): string
  bone_position(id: string, hud?: boolean): vector
  bone_position(bone_name: string, hud?: boolean): vector
  bone_direction(id: string, hud?: boolean): vector
  bone_direction(bone_name: string, hud?: boolean): vector
  bone_parent(id: string, hud?: boolean): number
  bone_parent(bone_name: string, hud?: boolean): number
  bone_visible(id: string, hud?: boolean): boolean
  bone_visible(bone_name: string, hud?: boolean): boolean
  set_bone_visible(id: number, visibile: boolean, recursive: boolean, hud: boolean): void
  set_bone_visible(name: string, visibile: boolean, recursive: boolean, hud: boolean): void
}

interface alife {
  /** Iterate over every server object in the game */
  iterate_object(functor: (se_obj: CseAbstract) => void): void
}

interface CArtefact {
  m_additional_weight: number
}

interface RayPickCtor {
  new (pos: vector, dir: vector, range: number, flags: rq_target, obj: CGameObject): RayPick
}

declare namespace game {
  export function change_game_news_show_time(window: TODO /** CUIWindow */, time: number): void
  export function ui2world(pos: vector2): LuaMultiReturn<[result: vector, obj_id: number]>
  export function on_map_right_click(...args: TODO): void
  export function update_pda_news_from_uiwindow(window: TODO /** CUIWindow */): void
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
  set_hands(section: string): void
  reset_hands(): void
}

interface vector {
  add(x: number, y: number, z: number): vector
  sub(x: number, y: number, z: number): vector
  mul(x: number, y: number, z: number): vector
  div(x: number, y: number, z: number): vector
  distance_to_xz_sqr(vector: vector): number
}

interface hit {
  bullet_id: number
  // bone: string
}

interface ini_file {
  get_filename(): string
  dltx_print(
    /** @default null */
    section?: string | null,
    /** @default null */
    line?: string | null
  ): void
  dltx_get_filename_of_line(section: string, line: string): string
  dltx_get_section(section: string): AnyTable
  dltx_is_override(section: string, line: string): boolean
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
  export function iterate_nearest(...args: TODO): TODO
}

declare namespace callbacks_gameobject {
  export const gameobjects_registry: CGameObject[]
  export function game_objects_iter(): CGameObject[]
}

//#region DXML

interface XmlElement {
  el: {
    type: '<' | '#'
    name: string
    attributes: TODO
    parent: XmlElement[]
  }
  kids: XmlElement[]
}

declare class XmlObj {
  /**
   * CSS-like query
   * @example
   * ```ts
   * const text = xml_obj.query('string[id=ui_st_game_version] > text')[1]
   * ```
   */
  query(query: string): (XmlElement | null)[]
  setText(el: XmlElement, el_text: string): void
  getText(el: XmlElement): string
  /**
   * @param xml XML string to process
   * @param where the element in xml_obj in which new data will be inserted argument is optional and specifies an element subtable of self.xml_table to insert (default - root element)
   * @param pos specifies position to insert (default - to the end)
   * @param use_root_node hint DXML to insert contents inside the root node if it has one instead of whole string
   * @returns the position of first inserted element in `where`
   */
  insertFromXMLString(xml: string, where?: XmlElement, pos?: number, use_root_node?: boolean): void
  insertFromXMLFile(xml: string, where?: XmlElement, pos?: number, use_root_node?: boolean): void
  setElementAttr(el: XmlElement, attrs: Record<string, any>): void
  removeElementAttr(el: XmlElement, attrs: string[]): void
}

interface DxmlCharacterData {
  name: string | null
  bio: string | null
  community: string | null
  icon: string | null
  start_dialog: string | null
  panic_threshold: number
  hit_probability_factor: number
  crouch_type: number
  mechanic_mode: boolean
  critical_wound_weights: string | null
  supplies: string | null
  visual: string | null
  npc_config: string | null
  snd_config: string | null
  terrain_sect: string | null
  rank_min: number
  rank_max: number
  reputation_min: number
  reputation_max: number
  money_min: number
  money_max: number
  money_infinitive: boolean
}

declare class DialogList {
  /**
   * @returns index of added dialog option
   */
  add(dialog_id: string): number
  find(regex: RegExp): TODO
  has(dialog_id: string): number
  add_first(dialog_id: string): TODO
  add_last(dialog_id: string): TODO
  remove(dialog_id: string): TODO
  get_dialogs(): TODO
}

/** @noSelf */
interface GameEvents {
  on_xml_read(xml_file_name: string, xml_obj: XmlObj): void
  on_specific_character_init(character_id: string, data: DxmlCharacterData): void
  on_specific_character_dialog_list(character_id: string, dialog_list: DialogList): void
}

//#endregion DXML
