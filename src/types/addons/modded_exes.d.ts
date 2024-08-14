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
  export function keys<T extends AnyTable>(t: T): keyof T[]
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
  ): void
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

/** Open file, apply DXML edits and return {@link XmlObj} outside of callback */
declare function openXMLFile(path: string): XmlObj | null

interface XmlElement {
  el: {
    type: '<' | '#'
    name: string
    attributes: AnyTable
    parent: XmlElement | null
  }
  kids: XmlElement[]
}
/** `string` if attribute has value, `true` if there is no value */
declare type XmlElementAttr = Record<string, string | true>
declare class XmlObj {
  xml_string: string
  xml_table: AnyTable
  isPi(el: XmlElement): boolean
  isElement(el: XmlElement): boolean
  isText(el: XmlElement): boolean
  getElementName(el: XmlElement): string | null
  getElement(el: XmlElement): { name: string; attr?: XmlElementAttr } | null
  /** If XML has single child element of !doc node (for example `<w>` tag in *ui_options.xml*), this child will be considered the root. Otherwise the root will be !doc node */
  getRoot(): XmlElement
  findElement(
    /** Non-empty array of search arguments */
    args: {
      name: string
      attr: Record<string, string | number | boolean>
    },
    where: XmlElement
  ): XmlElement | null
  /** Check if element fulfills args */
  checkElement(el: XmlElement, args: { name: string; attr?: XmlElementAttr }): { name: string; attr: XmlElementAttr } | null
  iterateChildren(
    el: XmlElement,
    /** @returns `true` to stop iteration */
    cb: (child: XmlElement, index: number) => true | void
  ): void
  findSiblings(el: XmlElement, args: { name: string; attr?: XmlElementAttr }, first: boolean): XmlElement[] | null
  findFirstSibling(): [XmlElement] | null
  getElementPosition(el: XmlElement): number | null
  convertElement(args: { name: string; attr?: XmlElementAttr }): {
    /** Stringified element tag with attributes */
    el: string
    kids: XmlElement['kids']
  } | null
  getElementAttr(el: XmlElement): XmlElementAttr | null
  setElementAttr(el: XmlElement, attrs: XmlElementAttr): void
  removeElementAttr(el: XmlElement, attrs: string[]): void
  insertElement(
    args: {
      name: string
      /** @deprecated unused */
      el?: XmlElement
    },
    /** @default root */
    where?: XmlElement,
    /** @default to the end */
    pos?: number
  ): LuaMultiReturn<[inserted_element: XmlElement, pos: number]>
  insertElementBefore(
    args: {
      name: string
      /** @deprecated unused */
      el?: XmlElement
    },
    el: XmlElement,
    after?: boolean
  ): ReturnType<typeof this.insertElement>
  insertElementAfter(
    args: {
      name: string
      /** @deprecated unused */
      el?: XmlElement
    },
    el: XmlElement
  ): ReturnType<typeof this.insertElement>
  parseXmlString(xml: string): XmlObj
  /** @returns the position of first inserted element in `where` */
  insertFromXMLString(
    /** XML string to process */
    xml: string,
    /**
     * The element in which new data will be inserted
     * @default root element */
    where?: XmlElement,
    /**
     * Where to insert
     * @default to the end
     */
    pos?: number,
    /** Hint DXML to insert contents inside the root node if it has one instead of whole string */
    use_root_node?: boolean
  ): LuaMultiReturn<[inserted_element: XmlElement, pos: number]> | null
  insertFromXMLFile(
    /** Path to XML file with extension */
    path: string,
    where?: XmlElement,
    pos?: number,
    use_root_node?: boolean
  ): ReturnType<typeof this.insertFromXMLString>
  getText(el: XmlElement): string | null
  setText(el: XmlElement, text: string): void
  removeElement(
    /** Element received by {@link findElement} */
    el: XmlElement
  ): LuaMultiReturn<[removed_element: XmlElement, pos: number]> | null
  /** @deprecated TODO */
  selector_functions: {
    ' ': TODO
    '>': TODO
    '+': TODO
    '~': TODO
  }
  /**
   * CSS-like query
   * @example
   * ```ts
   * const text = xml_obj.query('string[id=ui_st_game_version] > text')[1]
   * ```
   */
  query(query: string): (XmlElement | null)[]
  /** Add unique `actor_dialog` line for `specific_character` element in `character_desc` */
  insertActorDialog(
    character_id: string,
    dialog_id: string,
    /**
     * Where to insert the dialog line
     * @default before `<actor_break_dialog>`
     */
    pos?: number
  ): ReturnType<typeof this.insertElement>
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
  /** @returns index of added dialog line */
  add(dialog_id: string): number
  find(regex: RegExp): string | null
  /** @returns index of dialog line */
  has(dialog_id: string): number
  /** @returns index of added dialog line */
  add_first(dialog_id: string): number
  /** @returns index of added dialog line */
  add_last(dialog_id: string): number
  remove(dialog_id: string): LuaMultiReturn<[dialog_id: string, index: number]>
  get_dialogs(): string[]
}

/** @noSelf */
interface GameEvents {
  on_xml_read(xml_file_name: string, xml_obj: XmlObj): void
  on_specific_character_init(character_id: string, data: DxmlCharacterData): void
  on_specific_character_dialog_list(character_id: string, dialog_list: DialogList): void
}

//#endregion DXML
