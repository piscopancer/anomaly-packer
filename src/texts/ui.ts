import json2xml from 'json2xml'
import { renderToString } from 'react-dom/server'
import jsxToJson, { JsxCreateElementNode } from 'simplified-jsx-to-ast'

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

export const ui = { jsxToXml }
