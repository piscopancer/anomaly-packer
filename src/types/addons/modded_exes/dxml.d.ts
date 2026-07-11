/** @noSelfInFile */

declare namespace dxml_core {
  /** Open file, apply DXML edits and return {@link XmlObj} outside of callback */
  export function openXMLFile(path: string): XmlObj | null
}

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
