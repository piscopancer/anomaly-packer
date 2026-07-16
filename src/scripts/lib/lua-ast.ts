import { createRequire } from "node:module"
import { Language, Parser } from "web-tree-sitter"

/**
 * AST-based extraction of an Anomaly `.script`'s public API, used by the addon-pack
 * generator (`anomaly-packer gen-addon`). Unlike the regex skeleton parser (fine for the
 * vanilla scripts, which are hand-refined afterwards), this reads a real Lua parse tree
 * via web-tree-sitter (pure WASM — no native toolchain), so library-style modules like
 * Xlib parse correctly, and it lifts real parameter/return types from the author's
 * LuaDoc (`--- @param name type`, `--- @return type`) instead of emitting `TODO`.
 *
 * Anomaly loads each `<name>.script` as a global table `<name>`, so a file's top-level
 * GLOBAL `function foo()` / `bar = …` become `<name>.foo` / `<name>.bar`; `local`
 * declarations are private and dropped.
 */

const require = createRequire(import.meta.url)

/** TS reserved words that are valid Lua identifiers, so can appear as params/members. */
const TS_RESERVED = new Set(["new", "class", "default", "enum", "export", "import", "extends", "implements", "interface", "package", "private", "public", "static", "yield", "await", "debugger", "with", "typeof", "void", "delete", "in", "instanceof", "var", "let", "const", "function", "this", "super", "null", "true", "false"])

/** Makes a Lua param name safe as a TS identifier (reserved words get a `_` prefix). */
function safeParam(name: string): string {
  return TS_RESERVED.has(name) ? `_${name}` : name
}

let parserPromise: Promise<Parser> | null = null
async function getParser(): Promise<Parser> {
  if (!parserPromise)
    parserPromise = (async () => {
      await Parser.init()
      const lua = await Language.load(require.resolve("@tree-sitter-grammars/tree-sitter-lua/tree-sitter-lua.wasm"))
      const p = new Parser()
      p.setLanguage(lua)
      return p
    })()
  return parserPromise
}

export type Param = { name: string; type: string }
export type Fn = { name: string; params: Param[]; ret: string; doc?: string }
export type Var = { name: string; type: string; doc?: string }
export type ScriptApi = { funcs: Fn[]; vars: Var[] }

/** Maps one LuaDoc type token to a TS type. `nil` in a union marks the whole thing
 *  nullable. Unknown tokens fall back to `TODO` (= any) so the pack always typechecks —
 *  we never invent a type the addon didn't declare. */
function mapType(token: string): { ts: string; nilable: boolean } {
  let nilable = false
  const mapped: string[] = []
  for (const raw of token.split("|").map((s) => s.trim()).filter(Boolean)) {
    const p = raw.toLowerCase()
    if (p === "nil") { nilable = true; continue }
    if (p === "string") mapped.push("string")
    else if (p === "number" || p === "integer" || p === "int" || p === "float") mapped.push("number")
    else if (p === "boolean" || p === "bool") mapped.push("boolean")
    else if (p === "table") mapped.push("AnyTable")
    else if (p === "function") mapped.push("(this: void, ...args: any[]) => any")
    else if (p === "any" || p === "*" || p === "unknown") mapped.push("any")
    else mapped.push("TODO")
  }
  const uniq = [...new Set(mapped)]
  return { ts: uniq.length ? uniq.join(" | ") : "any", nilable }
}

/** Parses the `--- @param name type …` / `--- @return type …` tags out of a LuaDoc block. */
function parseDoc(lines: string[]): { params: Map<string, string>; returns: string[] } {
  const params = new Map<string, string>()
  const returns: string[] = []
  for (const raw of lines) {
    const line = raw.replace(/^\s*-+/, "").trim()
    let m = line.match(/^@param\s+([A-Za-z_][A-Za-z0-9_]*)\s+(\S+)/)
    if (m) { params.set(m[1], m[2]); continue }
    m = line.match(/^@return\s+(\S+)/)
    if (m) returns.push(m[1])
  }
  return { params, returns }
}

/** Converts a LuaDoc comment block into JSDoc body text (the inner lines, no `/* * /`
 *  wrapper — the emitter adds that). Strips the leading `--`/`---`, and rewrites Lua tags
 *  to their JSDoc form: `@param name luatype desc` → `@param name desc` (the TS signature
 *  already carries the type), `@return luatype desc` → `@returns desc`. Other lines
 *  (description, `@example`, the mod's own `@scope`/`@src` notes) are passed through so
 *  the author's documentation shows up in editor hover. */
function toJsDoc(block: string[]): string | undefined {
  const body: string[] = []
  for (const raw of block) {
    const line = raw.replace(/^\s*-+\s?/, "").replace(/\s+$/, "")
    // Drop tags with no prose — the TS signature already carries the type, so a bare
    // `@param name` / `@returns` would be noise.
    let m = line.match(/^@param\s+([A-Za-z_]\w*)\s+\S+\s*(.*)$/)
    if (m) { if (m[2]) body.push(`@param ${m[1]} ${m[2]}`); continue }
    m = line.match(/^@returns?\s+\S+\s*(.*)$/)
    if (m) { if (m[1]) body.push(`@returns ${m[1]}`); continue }
    body.push(line)
  }
  while (body.length && body[0] === "") body.shift()
  while (body.length && body[body.length - 1] === "") body.pop()
  return body.length ? body.join("\n") : undefined
}

/** The contiguous block of comment lines immediately above `row` (0-based). */
function docAbove(lines: string[], row: number): string[] {
  const block: string[] = []
  for (let i = row - 1; i >= 0; i--) {
    if (/^\s*--/.test(lines[i])) block.unshift(lines[i])
    else if (lines[i].trim() === "") break // blank line ends the doc block
    else break
  }
  return block
}

function retType(returns: string[]): string {
  if (!returns.length) return "TODO"
  const mapped = returns.map((r) => {
    const { ts, nilable } = mapType(r)
    return nilable ? `${ts} | undefined` : ts
  })
  if (mapped.length === 1) return mapped[0]
  return `LuaMultiReturn<[${mapped.join(", ")}]>`
}

/** A returned-expression literal we can type with certainty. `nil` contributes only
 *  nullability; anything else (a call, an identifier, arithmetic) is unknown → null. */
function exprType(nodeType: string | undefined): { ts: string; nilable: boolean } | null {
  switch (nodeType) {
    case "true":
    case "false": return { ts: "boolean", nilable: false }
    case "number": return { ts: "number", nilable: false }
    case "string": return { ts: "string", nilable: false }
    case "table_constructor": return { ts: "AnyTable", nilable: false }
    case "nil": return { ts: "", nilable: true }
    default: return null
  }
}

/** Collects the `return_statement` nodes belonging to THIS function — i.e. it does not
 *  descend into nested `function`s, whose returns belong to them, not us. */
function collectReturns(node: any, acc: any[]): void {
  for (const c of node.namedChildren) {
    if (!c) continue
    if (c.type === "function_definition" || c.type === "function_declaration") continue
    if (c.type === "return_statement") { acc.push(c); continue }
    collectReturns(c, acc)
  }
}

/** Collects the `assignment_statement` nodes in THIS function's body (including those
 *  wrapped in a `local` `variable_declaration`), not descending into nested functions. */
function collectAssignments(node: any, acc: any[]): void {
  for (const c of node.namedChildren) {
    if (!c) continue
    if (c.type === "function_definition" || c.type === "function_declaration") continue
    if (c.type === "assignment_statement") acc.push(c)
    collectAssignments(c, acc)
  }
}

/** Option-2: recover a parameter's type from the `x = x or <literal>` default idiom that
 *  Lua modders use to give an omitted/nil argument a fallback. The fallback literal is an
 *  author-supplied type; because the idiom exists precisely for the nil case, the param is
 *  typed `T | undefined`. Only single-target `<param> or <literal>` assignments count. */
function inferParamDefaults(fnNode: any): Map<string, string> {
  const acc: any[] = []
  collectAssignments(fnNode, acc)
  const m = new Map<string, string>()
  for (const a of acc) {
    const targets = a.childForFieldName("variable_list") ?? a.namedChild(0)
    const values = a.childForFieldName("value_list") ?? a.namedChild(1)
    if (!targets || !values) continue
    const tnames = targets.namedChildren.filter((t: any) => t && t.type === "identifier")
    if (tnames.length !== 1) continue
    const pname = tnames[0].text
    const vals = values.namedChildren.filter(Boolean)
    if (vals.length !== 1) continue
    const be = vals[0]
    if (be.type !== "binary_expression" || be.childForFieldName("operator")?.type !== "or") continue
    const left = be.childForFieldName("left")
    if (!left || left.type !== "identifier" || left.text !== pname) continue
    const et = exprType(be.childForFieldName("right")?.type)
    if (!et || !et.ts) continue // nil default carries no type
    if (!m.has(pname)) m.set(pname, et.ts)
  }
  return m
}

/** Option-3: resolve the types of local variables/assignments in a function body, so a
 *  `return t` where `local t = {}` can be typed. A name is resolved only if EVERY
 *  assignment to it is a known literal (or a `… or <literal>` default) of the SAME type;
 *  any unknown RHS or a conflicting type leaves it unresolved (→ stays `TODO`), so we
 *  never guess. Field writes like `t.x = …` don't target a bare identifier, so a table
 *  that's created once and then mutated still resolves to `AnyTable`. */
function resolveLocals(fnNode: any): Map<string, string> {
  const acc: any[] = []
  collectAssignments(fnNode, acc)
  const info = new Map<string, { types: Set<string>; unknown: boolean }>()
  for (const a of acc) {
    const targets = a.childForFieldName("variable_list") ?? a.namedChild(0)
    const values = a.childForFieldName("value_list") ?? a.namedChild(1)
    if (!targets) continue
    const tnames = targets.namedChildren.filter((t: any) => t && t.type === "identifier")
    const vals = values ? values.namedChildren.filter(Boolean) : []
    tnames.forEach((t: any, i: number) => {
      const rhs = vals[i]
      let ty: string | null = null
      if (rhs) {
        const et = exprType(rhs.type)
        if (et && et.ts) ty = et.ts
        else if (rhs.type === "binary_expression" && rhs.childForFieldName("operator")?.type === "or") {
          const r = exprType(rhs.childForFieldName("right")?.type)
          if (r && r.ts) ty = r.ts
        }
      }
      const cur = info.get(t.text) ?? { types: new Set<string>(), unknown: false }
      if (ty) cur.types.add(ty)
      else cur.unknown = true
      info.set(t.text, cur)
    })
  }
  const out = new Map<string, string>()
  for (const [name, cur] of info) if (!cur.unknown && cur.types.size === 1) out.set(name, [...cur.types][0])
  return out
}

/** Part-1 usage inference: type a parameter from how the body actually uses it, purely
 *  from evidence in the code (never from its name). We infer ONLY `AnyTable`, and only
 *  from signals that in Anomaly Lua are table-exclusive: bracket indexing (`p[i]`, incl.
 *  as an assignment target) and `pairs`/`ipairs`/`next`/`table.*`. We deliberately do NOT
 *  infer from `p.x` (an xray `vector` is read/written as `v.x`/`v.y`/`v.z`), `p:method()`
 *  (game_object userdata and strings also use `:`), arithmetic (vectors overload
 *  operators), or `..` (string/number ambiguous) — every one of those could yield a wrong
 *  type. Bracket indexing is safe: xray vectors don't support `[i]` and strings are
 *  immutable, and `pairs`/`next`/`table.*` raise on non-tables. Does not descend into
 *  nested functions, whose same-named parameters are a different variable. */
function inferParamUsage(fnNode: any, paramSet: Set<string>): Map<string, string> {
  const tables = new Set<string>()
  const isParamId = (n: any) => n && n.type === "identifier" && paramSet.has(n.text)

  function walk(n: any): void {
    for (const c of n.namedChildren) {
      if (!c) continue
      if (c.type === "function_definition" || c.type === "function_declaration") continue // shadowing scope
      // Bracket-indexing a param (`p[i]`, read or as a write target) ⇒ it's a table.
      if (c.type === "bracket_index_expression") {
        if (isParamId(c.namedChild(0))) tables.add(c.namedChild(0).text)
      } else if (c.type === "function_call") {
        // `pairs(p)` / `ipairs(p)` / `next(p)` / `table.*(p, …)` ⇒ p is a table.
        const callee = c.namedChild(0)
        const isTableCall =
          (callee?.type === "identifier" && (callee.text === "pairs" || callee.text === "ipairs" || callee.text === "next")) ||
          (callee?.type === "dot_index_expression" && callee.namedChild(0)?.text === "table")
        if (isTableCall) {
          const args = c.childForFieldName("arguments") ?? c.namedChild(1)
          const first = args?.namedChildren.find(Boolean)
          if (isParamId(first)) tables.add(first.text)
        }
      }
      walk(c)
    }
  }
  walk(fnNode)

  const out = new Map<string, string>()
  for (const name of tables) out.set(name, "AnyTable")
  return out
}

/** The callee of a call node, if it's a bare identifier (`foo()`), else null. A
 *  `mod.fn()` / `obj:m()` callee isn't a same-file function we can resolve, so we skip it. */
function calleeName(callNode: any): string | null {
  const c = callNode.namedChild(0)
  return c && c.type === "identifier" ? c.text : null
}

/** Option-4 support: locals assigned exactly once from a same-file call (`local x = foo()`),
 *  so `return x` can adopt foo's return type. Any second assignment or non-call RHS
 *  disqualifies the name (→ not returned here). */
function resolveLocalCalls(fnNode: any): Map<string, string> {
  const acc: any[] = []
  collectAssignments(fnNode, acc)
  const info = new Map<string, { callee: string | null; bad: boolean }>()
  for (const a of acc) {
    const targets = a.childForFieldName("variable_list") ?? a.namedChild(0)
    const values = a.childForFieldName("value_list") ?? a.namedChild(1)
    if (!targets) continue
    const tnames = targets.namedChildren.filter((t: any) => t && t.type === "identifier")
    const vals = values ? values.namedChildren.filter(Boolean) : []
    tnames.forEach((t: any, i: number) => {
      const rhs = vals[i]
      const callee = rhs && rhs.type === "function_call" ? calleeName(rhs) : null
      const cur = info.get(t.text)
      if (cur) { cur.bad = true; return } // reassigned → ambiguous
      info.set(t.text, { callee, bad: callee === null })
    })
  }
  const out = new Map<string, string>()
  for (const [n, c] of info) if (!c.bad && c.callee) out.set(n, c.callee)
  return out
}

/** A memoized, cycle-guarded resolver of a same-file function's return type, so option-4
 *  can propagate a callee's inferred/documented return into `return foo()`. */
export type ReturnCtx = { returnTypeOf: (name: string) => string }

/** Option-1 fallback (with option-3 local tracing + option-4 call propagation): infer a
 *  return type from the body's `return` statements when the author gave no `@return`.
 *  Deliberately conservative — only single-value returns of a literal, a resolved local,
 *  or (single-return functions) a same-file call are typed; anything else stays `TODO`. */
function inferReturn(fnNode: any, ctx?: ReturnCtx): string {
  const rets: any[] = []
  collectReturns(fnNode, rets)
  if (!rets.length) return "void"

  const perStmt = rets.map((r) => {
    const list = r.namedChildren.find((c: any) => c && c.type === "expression_list")
    return list ? list.namedChildren.filter(Boolean) : []
  })
  const maxArity = Math.max(...perStmt.map((e) => e.length))
  if (maxArity === 0) return "void" // every path is a bare `return`
  if (maxArity > 1) return "TODO" // multi-value: don't guess the tuple shape

  // Option-4: a function whose single return is a same-file call (`return foo()`) or a
  // local taken straight from one (`local x = foo() … return x`) adopts that callee's
  // return type. Restricted to single-return functions so we never blend a call result
  // with literal branches (which would need union reasoning over arbitrary type strings).
  if (ctx && perStmt.length === 1 && perStmt[0].length === 1) {
    const e = perStmt[0][0]
    const callee = e.type === "function_call" ? calleeName(e) : e.type === "identifier" ? resolveLocalCalls(fnNode).get(e.text) ?? null : null
    if (callee) {
      const rt = ctx.returnTypeOf(callee)
      if (rt && rt !== "TODO") return rt
    }
  }

  const locals = resolveLocals(fnNode)
  let nilable = false
  const types = new Set<string>()
  for (const exprs of perStmt) {
    if (!exprs.length) { nilable = true; continue } // `return` alongside `return x`
    const e = exprs[0]
    let et = exprType(e.type)
    if (!et && e.type === "identifier" && locals.has(e.text)) et = { ts: locals.get(e.text)!, nilable: false }
    if (!et) return "TODO" // an unknown expression on any path → give up honestly
    if (et.nilable) nilable = true
    else types.add(et.ts)
  }
  if (!types.size) return "undefined" // only `nil` / bare returns
  const base = [...types].join(" | ")
  return nilable ? `${base} | undefined` : base
}

/** Extracts the public API (global functions with typed params/returns, global vars)
 *  from one script's source. */
export async function extractScript(code: string): Promise<ScriptApi> {
  const parser = await getParser()
  const tree = parser.parse(code)
  const lines = code.split(/\r?\n/)
  const funcs: Fn[] = []
  const vars = new Map<string, { type: string; doc?: string }>()
  if (!tree) return { funcs, vars: [] }

  // Option-4 registry: every named function in the file (globals and `local function`s),
  // so `return foo()` can resolve foo's own return type. `returnTypeOf` is memoized and
  // cycle-guarded (a recursive/mutually-recursive call resolves to `TODO`, not a hang).
  const registry = new Map<string, any>()
  ;(function walk(n: any) {
    for (const c of n.namedChildren) {
      if (!c) continue
      if (c.type === "function_declaration") {
        const nm = c.childForFieldName("name")
        if (nm && nm.type === "identifier" && !registry.has(nm.text)) registry.set(nm.text, c)
      }
      walk(c)
    }
  })(tree.rootNode)
  const cache = new Map<string, string>()
  const inProgress = new Set<string>()
  const ctx: ReturnCtx = {
    returnTypeOf(name) {
      if (cache.has(name)) return cache.get(name)!
      const node = registry.get(name)
      if (!node) return "TODO"
      if (inProgress.has(name)) return "TODO"
      inProgress.add(name)
      const doc = parseDoc(docAbove(lines, node.startPosition.row))
      const r = doc.returns.length ? retType(doc.returns) : inferReturn(node, ctx)
      inProgress.delete(name)
      cache.set(name, r)
      return r
    },
  }

  for (const node of tree.rootNode.namedChildren) {
    if (!node) continue

    // Global function: `function foo(...) end` — name is a bare identifier (skip
    // `function T.x`/`T:x` member/methods, and `local function`).
    if (node.type === "function_declaration") {
      const nameNode = node.childForFieldName("name")
      if (!nameNode || nameNode.type !== "identifier") continue
      if (node.children[0]?.type === "local") continue // `local function` is private — modders can't reach it
      const name = nameNode.text
      const block = docAbove(lines, node.startPosition.row)
      const doc = parseDoc(block)
      const paramsNode = node.childForFieldName("parameters")
      const defaults = inferParamDefaults(node)
      const paramSet = new Set<string>()
      if (paramsNode) for (const pn of paramsNode.namedChildren) if (pn?.type === "identifier") paramSet.add(pn.text)
      const usage = inferParamUsage(node, paramSet)
      const params: Param[] = []
      if (paramsNode)
        for (const pn of paramsNode.namedChildren) {
          if (!pn) continue
          if (pn.type === "vararg_expression") { params.push({ name: "...args", type: "any[]" }); continue }
          if (pn.type !== "identifier") continue
          // Precedence: author's @param doc > `x = x or default` idiom > body usage > TODO.
          const docType = doc.params.get(pn.text)
          const type = docType
            ? (({ ts, nilable }) => (nilable ? `${ts} | undefined` : ts))(mapType(docType))
            : defaults.has(pn.text)
            ? `${defaults.get(pn.text)} | undefined`
            : usage.get(pn.text) ?? "TODO"
          params.push({ name: safeParam(pn.text), type })
        }
      const ret = doc.returns.length ? retType(doc.returns) : inferReturn(node, ctx)
      funcs.push({ name, params, ret, doc: toJsDoc(block) })
      continue
    }

    // Global variable(s): `name = …` (not `local`). `local` is a `variable_declaration`
    // node, so a plain `assignment_statement` at top level is a global. Type is read
    // from the RHS literal when unambiguous, else TODO.
    if (node.type === "assignment_statement") {
      const targets = node.childForFieldName("variable_list") ?? node.namedChild(0)
      const values = node.childForFieldName("value_list") ?? node.namedChild(1)
      if (!targets) continue
      const names = targets.namedChildren.filter((t) => t && t.type === "identifier")
      const doc = toJsDoc(docAbove(lines, node.startPosition.row))
      names.forEach((t, i) => {
        const rhs = values?.namedChildren[i]
        vars.set(t!.text, { type: valueType(rhs?.type), doc })
      })
    }
  }

  return { funcs, vars: [...vars].map(([name, { type, doc }]) => ({ name, type, doc })) }
}

/** Maps a RHS expression node type to a conservative TS type for a global var. */
function valueType(nodeType: string | undefined): string {
  switch (nodeType) {
    case "table_constructor": return "AnyTable"
    case "string": return "string"
    case "number": return "number"
    case "true": case "false": return "boolean"
    default: return "TODO"
  }
}
