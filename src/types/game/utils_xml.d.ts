/** @noSelfInFile */

/** Item pixel axis returned by {@link utils_xml.get_item_axis}. */
interface ItemAxis {
  x1: number
  y1: number
  x2: number
  y2: number
  w: number
  h: number
}

/** A parsed XML node produced by {@link utils_xml.XmlParser}. */
interface XmlNode {
  Name?: string
  Value?: string
  Attributes: Record<string, string>
  ChildNodes: XmlNode[]
}

declare namespace utils_xml {
  export function get_color(color: Color, to_code?: boolean): string
  export function get_hud_xml(): CScriptXmlInit
  export function get_Mhud_xml(): CScriptXmlInit
  /** Condition-graded colour (red/orange/yellow/green by `condition` 0–100). */
  export function get_color_con(condition: number, to_code?: boolean): string
  export function get_icons_texture(section?: Section): string
  /**
   * Interpolates an ARGB colour for `val` between the `{A,R,G,B,value}` stops.
   * @param mi min stop @param md middle stop @param mx max stop
   */
  export function lerp_color(val: number, mi: number[], md: number[], mx: number[]): number
  export function correct_ratio(element: CUIWindow, main_dialog?: boolean): void
  export function move_element(element: CUIWindow, x?: number, y?: number): void
  export function sync_pos(base: CUIWindow, element: CUIWindow): void
  export function sync_size(base: CUIWindow, element: CUIWindow, offset_x?: number, offset_y?: number): void
  export function sync_element(element: CUIWindow, base: CUIWindow): void
  export function sync_cursor(base: CUIWindow, element: CUIWindow | undefined, offset_x?: number, offset_y?: number): void
  export function align_to_center(element: CUIWindow, base: CUIWindow, offset_x?: number, offset_y?: number): void
  export function adjust_pos_to_element(element: CUIWindow, offset_x: number, offset_y: number, ...elements: CUIWindow[]): void
  export function adjust_size_to_element(element: CUIWindow, _w: number, _h: number, ...elements: CUIWindow[]): void
  /**
   * Item pixel axis from its section's inventory grid info.
   * @returns `{x1,y1,x2,y2,w,h}`, or the four corner values `(x1, y1, x2, y2)`
   * as a multi-return when `unpacked` is set.
   */
  export function get_item_axis<Unpacked extends boolean = false>(section: Section, grid_size?: number, unpacked?: Unpacked): Unpacked extends true ? LuaMultiReturn<[number, number, number, number]> : ItemAxis
  export function is_widescreen(): boolean
  export function screen_ratio(): number
  export function hide_menu(): void
  export function get_name_cond(condition: number, is_wpn?: boolean, section?: Section): string
  export function set_msg(str: string, ignore?: boolean): void
  /** Human-readable level name for a level section id (falls back to the id). */
  export function get_special_txt(str: string): string
  export function set_icon(sec: Section, hidden: boolean | undefined, XML_temp: CScriptXmlInit, XML_box: CScriptXmlInit, XML_box_small?: CScriptXmlInit): void
  export function set_upgr_icon(obj: CGameObject, sec: Section, XML_box: CScriptXmlInit, XML_temp: CScriptXmlInit): void
  /** Places item `p` into the first free spot of `grid`; returns the last row used. */
  export function set_grid_element(p: AnyTable, grid: AnyTable, ...ele: CUIWindow[]): number
  /** Minimal XML parser object (`XmlParser:loadFile`, `:ParseXmlText`, …). */
  export const XmlParser: AnyTable
  export function XmlFindNodeWithAttribute(n: XmlNode, node_name: string, prop_name: string, val: string): XmlNode | undefined
  export function XmlFindNextNodeByName(n: XmlNode, node_name: string): XmlNode | undefined
  export function XmlGetNodeValue(n: XmlNode, node_name: string): string | undefined
  export function XmlGetNodeAttribute(n: XmlNode, node_name: string, attribute: string): string | undefined
}
