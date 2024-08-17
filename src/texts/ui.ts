import json2xml from 'json2xml'
import { renderToString } from 'react-dom/server'
import jsxToJson, { JsxCreateElementNode } from 'simplified-jsx-to-ast'

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
  const ast = jsxToJson(renderToString(tree))
  const fAst = formatAst(ast)
  const xml = json2xml(fAst, { attributes_key: 'props' })
  return xml
}

function formatAst(ast: JsxCreateElementNode): any {
  if (typeof ast === 'string') {
    return ast
  } else if (typeof ast === 'object') {
    if (ast.type === 'Fragment') {
      return ast.children
    }
    return {
      [ast.type]: [...ast.children].map(formatAst),
      props: ast.props,
    }
  }
  return ast
}

export const ui = { jsxToXml, hexToRgba }
