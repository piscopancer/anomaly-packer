import { createElement, type JSX } from 'react'
import { renderToString } from 'react-dom/server'
import jsxToJson, { JsxCreateElementNode } from 'simplified-jsx-to-ast'
import { buildXml, element, textNode, XmlNode } from './_xml'

/**
 * Convert HEX color code to RGBA object
 * @example
 * ```ts
 * const clr = hexToRgba('#2dd4c982')
 * const alpha = clr!.a // 51
 * ```
 */
function hexToRgba(hex: string): {
  /** 0 - 255 */
  r: number
  /** 0 - 255 */
  g: number
  /** 0 - 255 */
  b: number
  /** 0 - 100 */
  a: number
} | null {
  const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex)
  if (result) {
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)
    const _a = parseInt(result[4], 16)
    const a = Math.round(((isNaN(_a) ? 255 : _a) / 255) * 100)
    return { r, g, b, a }
  }
  return null
}

function jsxToXml(tree: JSX.Element) {
  return buildXml(astToNodes(jsxToJson(renderToString(tree))))
}

function astToNodes(ast: JsxCreateElementNode): XmlNode[] {
  if (typeof ast === 'string') {
    return ast === '' ? [] : [textNode(ast)]
  }
  const children = normalizeChildren(ast.children)
  // A Fragment carries no tag of its own — it collapses into its children
  return ast.type === 'Fragment' ? children : [element(ast.type, ast.props, children)]
}

/** simplified-jsx-to-ast types children as an array, but a text-only Fragment hands back the raw string, so both shapes are normalized here. */
function normalizeChildren(children: JsxCreateElementNode[] | string): XmlNode[] {
  if (typeof children === 'string') {
    return children === '' ? [] : [textNode(children)]
  }
  return children.flatMap(astToNodes)
}

/**
 * The texture a control draws, as a typed element: `<Texture id="ui_icons_PDA_dialog" />` emits
 * `<texture>ui_icons_PDA_dialog</texture>`, and `state` picks the per-state variant a button
 * needs (`texture_e`, `texture_t`, `texture_h`, `texture_d`).
 *
 * It exists because a texture id cannot be typed as element text directly: TypeScript refuses a
 * union of string literals as a `children` type (TS2745, "requires multiple children"), so
 * writing the id inside the tag can only ever be checked as `string`. Passing it as a prop keeps
 * {@link UI.TextureId} in force, and a texture no `ui\textures_descr` file registers becomes a
 * build error instead of a blank control in game.
 */
export function Texture({
  id,
  state,
  ...rest
}: UI.Texture & { id: UI.TextureRef; state?: 'e' | 't' | 'h' | 'd' }) {
  return createElement(state ? `texture_${state}` : 'texture', rest, id)
}

export const ui = { jsxToXml, hexToRgba }
