type XmlElement = {
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
  query(query: string): XmlElement[]
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

type CharacterData = {
  name: TODO
  bio: TODO
  community: TODO
  icon: TODO
  start_dialog: TODO
  panic_threshold: TODO
  hit_probability_factor: TODO
  crouch_type: TODO
  mechanic_mode: TODO
  critical_wound_weights: TODO
  supplies: TODO
  visual: TODO
  npc_config: TODO
  snd_config: TODO
  terrain_sect: TODO
  rank_min: TODO
  rank_max: TODO
  reputation_min: TODO
  reputation_max: TODO
  money_min: TODO
  money_max: TODO
  money_infinitive: TODO
}

declare class DialogList {
  add(dialog_id: string): TODO
  find(regex: RegExp): TODO
  has(dialog_id: string): number
  add_first(dialog_id: string): TODO
  add_last(dialog_id: string): TODO
  remove(dialog_id: string): TODO
  get_dialogs(): TODO
}

/** @noSelf */
declare interface GameEvents {
  on_xml_load(callback: (this: void, xml_file_name: string, xml_obj: XmlObj) => void): void
  on_specific_character_init(character_id: string, data: CharacterData): void
  on_specific_character_dialog_list(character_id: string, dialog_list: DialogList): void
}
