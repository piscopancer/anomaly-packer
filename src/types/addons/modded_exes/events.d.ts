/** @noSelfInFile */

interface Bullet {
  position: vector
  direction: vector
  speed: number
  distance: number
  section: Section
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
  on_news_received(window: CUIWindow, time: CUITextWnd, caption: CUITextWnd, message: CUITextWnd, icon: CUIStatic, tags: {}): void
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
  // DXML
  on_xml_read(xml_file_name: string, xml_obj: XmlObj): void
  on_specific_character_init(character_id: string, data: DxmlCharacterData): void
  on_specific_character_dialog_list(character_id: string, dialog_list: DialogList): void
}
