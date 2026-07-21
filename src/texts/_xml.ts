import { XMLBuilder } from 'fast-xml-parser'

/** Value that can be rendered as element text or an attribute. */
type Scalar = string | number | boolean

/** A node in fast-xml-parser's preserveOrder tree: an element `{ tag: children }` optionally carrying a `:@` attributes bag, or a `{ '#text': value }` leaf. */
export type XmlNode = { [key: string]: string | Record<string, string> | XmlNode[] }

const builder = new XMLBuilder({ ignoreAttributes: false, attributeNamePrefix: '@_', format: true, indentBy: '  ', suppressEmptyNode: true, preserveOrder: true })

/** Serializes nodes to a headerless, indented XML string with self-closing empty elements. */
export function buildXml(nodes: XmlNode[]) {
  // fast-xml-parser opens indented output with a newline, which would leave every generated
  // file starting on a blank line. Trimmed to a single trailing newline instead.
  return String(builder.build(nodes)).trim() + '\n'
}

/** `<tag ...attrs>children</tag>`, self-closing when it has no children. */
export function element(tag: string, attrs: Record<string, Scalar | undefined> | undefined, children: XmlNode[]): XmlNode {
  const node: XmlNode = { [tag]: children }
  const bag = buildAttrs(attrs)
  if (bag) node[':@'] = bag
  return node
}

/** `<tag>value</tag>`, self-closing when the value stringifies to empty. */
export function leaf(tag: string, value: Scalar): XmlNode {
  const text = String(value)
  return { [tag]: text === '' ? [] : [{ '#text': text }] }
}

/** Bare text content placed among an element's children. */
export function textNode(value: string): XmlNode {
  return { '#text': value }
}

/** Repeated `<tag>` elements from a value that may be a scalar, an array, or absent — the successor to toXmlStructure. */
export function field(tag: string, value: Scalar | readonly Scalar[] | undefined): XmlNode[] {
  if (value === undefined) return []
  return (Array.isArray(value) ? value : [value]).map((item) => leaf(tag, item))
}

function buildAttrs(attrs: Record<string, Scalar | undefined> | undefined) {
  if (!attrs) return undefined
  const bag: Record<string, string> = {}
  for (const [key, value] of Object.entries(attrs)) {
    if (value !== undefined) bag['@_' + key] = String(value)
  }
  return Object.keys(bag).length ? bag : undefined
}
