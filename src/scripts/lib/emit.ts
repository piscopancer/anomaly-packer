import { ModuleDeclarationKind, Project, QuoteKind } from "ts-morph"

/**
 * ts-morph assembly for one generated schema `.d.ts`. Every leaf is a module: a leading
 * comment block, a single type-only `anomaly-packer` import for whatever AP types the
 * bodies actually reference (the branded separated-strings and/or `Section` — none of
 * which are globals), and a `declare global` block holding the path-derived interface(s)
 * plus an optional `IniFileSchemas` registration. Building the import from the bodies and
 * the `declare global` wrapper structurally (not by string-stitching) is what keeps the
 * two generators emitting the exact same, always-valid shape.
 */

const SEPARATED = ["CommaSeparatedString", "SlashSeparatedString", "TwoBackslashSeparatedString"] as const

const project = new Project({
  useInMemoryFileSystem: true,
  manipulationSettings: { quoteKind: QuoteKind.Single },
})

export type LeafInterface = { name: string; body: string }

export function emitLeafFile(opts: {
  /** Full leading comment block, `//`-prefixed lines, no trailing newline. */
  comment: string
  interfaces: LeafInterface[]
  /** `IniFileSchemas` entry for a directly-opened file: backslash path key + interface. */
  register?: { key: string; iface: string }
}): string {
  const bodies = opts.interfaces.map((i) => i.body).join("\n")
  const named = new Set<string>()
  for (const n of SEPARATED) if (new RegExp(`\\b${n}<`).test(bodies)) named.add(n)
  if (/\bSection\./.test(bodies)) named.add("Section")

  const sf = project.createSourceFile("__leaf.d.ts", "", { overwrite: true })
  if (named.size) {
    sf.addImportDeclaration({
      isTypeOnly: true,
      moduleSpecifier: "anomaly-packer",
      namedImports: [...named].sort(),
    })
  } else {
    // `declare global` is only valid in a module; with no import to make this file one, an
    // empty `export {}` provides the module marker.
    sf.addExportDeclaration({})
  }
  const g = sf.addModule({
    name: "global",
    hasDeclareKeyword: true,
    declarationKind: ModuleDeclarationKind.Global,
  })
  for (const it of opts.interfaces) g.addInterface({ name: it.name }).addMembers(it.body)
  if (opts.register) {
    g.addInterface({ name: "IniFileSchemas" }).addProperty({
      name: `'${opts.register.key}'`,
      type: opts.register.iface,
    })
  }
  sf.formatText({ indentSize: 2, convertTabsToSpaces: true, semicolons: "remove" as never })
  return `${opts.comment}\n${sf.getFullText()}`
}
