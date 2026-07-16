import { readFileSync } from "node:fs"
import { basename, join } from "node:path"

/**
 * Shared Lua `.script` parsing used by the base skeleton generator
 * (`gen-script-skeletons.ts`, vanilla scripts) and the on-demand addon-pack generator
 * (`anomaly-packer gen-addon`, a mod's scripts). Anomaly loads every `<name>.script`
 * as a global table `<name>`, so its top-level `function foo()` / `bar = …` become
 * `<name>.foo` / `<name>.bar`, and `class "X" (Base)` becomes a global class `X`.
 *
 * Types are never guessed: parameter names are kept but every type is the `TODO`
 * placeholder, to be refined by hand. Keeping the parser here means the addon packs are
 * produced by exactly the same rules as the shipped vanilla skeletons.
 */

const TS_RESERVED = new Set(['function', 'var', 'let', 'const', 'class', 'return', 'default', 'new', 'delete', 'in', 'of', 'typeof', 'void', 'this', 'super', 'null', 'true', 'false', 'enum', 'export', 'import', 'extends', 'implements', 'interface', 'package', 'private', 'public', 'static', 'yield', 'await', 'debugger', 'with', 'switch', 'case', 'break', 'continue', 'do', 'while', 'for', 'if', 'else', 'throw', 'try', 'catch', 'finally', 'instanceof'])
const LUA_KEYWORDS = new Set(['if', 'for', 'while', 'return', 'local', 'end', 'else', 'elseif', 'do', 'then', 'repeat', 'until', 'function', 'and', 'or', 'not', 'in', 'break', 'goto'])

export type ClassMethod = { name: string; params: string; static: boolean }
/**
 * Provable primitive evidence for one instance field, gathered from every `self.field = <rhs>`
 * assignment. `kinds` collects the literal kinds seen; `poisoned` is set the moment a non-literal
 * rhs appears (function call, table, another variable, `nil`, …), which means the field's type
 * cannot be proven from the source and must stay `TODO`.
 */
export type FieldEvidence = { kinds: Set<'number' | 'string' | 'boolean'>; poisoned: boolean }
export type LuaClass = { base: string | null; methods: Map<string, ClassMethod>; fields: Set<string>; fieldTypes: Map<string, FieldEvidence>; file: string | null }
export type FileMembers = { funcs: Map<string, string>; vars: Set<string> }

/**
 * Classifies a Lua assignment right-hand side as a provable primitive, or `null` when it is not a
 * bare literal. Deliberately conservative: only same-line number / string / boolean literals count
 * (a string literal or concatenation both yield `string`); anything else — calls, tables, `nil`,
 * variables, arithmetic on non-literals — returns `null` and poisons the field.
 */
export function classifyRhs(rhs: string): 'number' | 'string' | 'boolean' | null {
  const s = rhs.trim()
  if (/^-?\d+(\.\d+)?\b/.test(s) || /^0x[0-9a-fA-F]+\b/.test(s)) return 'number'
  if (/^["']/.test(s)) return 'string'
  if (/^(true|false)\b/.test(s)) return 'boolean'
  return null
}

/** The proven type for a field: a union of its literal kinds, or `TODO` when unprovable/absent. */
export function inferFieldType(c: LuaClass, field: string): string {
  const ev = c.fieldTypes.get(field)
  if (!ev || ev.poisoned || ev.kinds.size === 0) return 'TODO'
  return [...ev.kinds].sort().join(' | ')
}

/**
 * Blanks Lua comments and long-bracket strings so the parser never mistakes their
 * contents for code. Handles `-- line`, `--[[ block ]]`, `[[ long string ]]` and their
 * `[=[ ]=]` level variants across lines, and skips `--` inside quoted strings.
 */
export function stripLua(lines: string[]): string[] {
  const out: string[] = []
  let close: string | null = null
  for (const raw of lines) {
    let line = raw
    if (close !== null) {
      const idx = line.indexOf(close)
      if (idx === -1) { out.push(''); continue }
      line = ' '.repeat(idx + close.length) + line.slice(idx + close.length)
      close = null
    }
    let res = ''
    let i = 0
    while (i < line.length) {
      if (line.slice(i, i + 2) === '--') {
        const m = line.slice(i + 2).match(/^\[(=*)\[/)
        if (m) {
          const cl = ']' + m[1] + ']'
          const rest = line.slice(i + 2 + m[0].length)
          const j = rest.indexOf(cl)
          if (j === -1) { close = cl; line = ''; break }
          line = rest.slice(j + cl.length); i = 0; continue
        }
        break // line comment
      }
      const m = line.slice(i).match(/^\[(=*)\[/)
      if (m) {
        const cl = ']' + m[1] + ']'
        const rest = line.slice(i + m[0].length)
        const j = rest.indexOf(cl)
        if (j === -1) { close = cl; line = ''; break }
        line = rest.slice(j + cl.length); i = 0; continue
      }
      const c = line[i]
      if (c === '"' || c === "'") {
        res += c; i++
        while (i < line.length && line[i] !== c) {
          if (line[i] === '\\') { res += line[i]; i++ }
          if (i < line.length) { res += line[i]; i++ }
        }
        if (i < line.length) { res += line[i]; i++ }
        continue
      }
      res += c; i++
    }
    out.push(res)
  }
  return out
}

function paramName(raw: string, idx: number, seen: Set<string>): string {
  const p = raw.replace(/--.*$/, '').trim()
  if (p === '...') return '...args'
  const m = p.match(/^[A-Za-z_][A-Za-z0-9_]*/)
  let name = m ? m[0] : `arg${idx}`
  if (TS_RESERVED.has(name)) name = `_${name}`
  while (seen.has(name)) name += '_'
  seen.add(name)
  return name
}

export function parseParams(sig: string): string {
  const inner = sig.slice(sig.indexOf('(') + 1, sig.lastIndexOf(')'))
  if (!inner.trim()) return ''
  const seen = new Set<string>()
  return inner
    .split(',')
    .map((p, i) => paramName(p, i, seen))
    .map((name) => (name.startsWith('...') ? `${name}: TODO[]` : `${name}: TODO`))
    .join(', ')
}

/** Reads a possibly multi-line function signature starting at line `i`. */
function readSignature(lines: string[], i: number): { sig: string; next: number } {
  let s = lines[i]
  let depth = (s.match(/\(/g) ?? []).length - (s.match(/\)/g) ?? []).length
  let j = i
  while (depth > 0 && j + 1 < lines.length) {
    j++
    s += ' ' + lines[j].trim()
    depth += (lines[j].match(/\(/g) ?? []).length - (lines[j].match(/\)/g) ?? []).length
  }
  return { sig: s, next: j }
}

export type ParseResult = { perFile: Map<string, FileMembers>; classes: Map<string, LuaClass> }

/**
 * Pass 1 over a set of `.script` files in `dir`: collect per-file namespace members
 * (top-level functions with param names, and top-level variables) and global Lua classes
 * (methods, statics, and `self.field` instance fields). Identical to the base skeleton
 * generator's first pass.
 */
export function parseScripts(dir: string, files: string[]): ParseResult {
  const classes = new Map<string, LuaClass>()
  const perFile = new Map<string, FileMembers>()

  function ensureClass(name: string): LuaClass {
    let c = classes.get(name)
    if (!c) classes.set(name, (c = { base: null, methods: new Map(), fields: new Set(), fieldTypes: new Map(), file: null }))
    return c
  }

  for (const file of files) {
    const ns = basename(file, '.script')
    const lines = stripLua(readFileSync(join(dir, file), 'latin1').split(/\r?\n/))
    const funcs = new Map<string, string>()
    const vars = new Set<string>()
    let selfClass: string | null = null

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      const classRe = /class\s*["']([A-Za-z_][A-Za-z0-9_]*)["']\s*(?:\(\s*([A-Za-z_][A-Za-z0-9_.]*)\s*\))?/g
      let cm: RegExpExecArray | null
      while ((cm = classRe.exec(line))) {
        const c = ensureClass(cm[1])
        if (cm[2]) c.base = cm[2]
        if (!c.file) c.file = ns
      }

      if (selfClass) {
        // Capture both the field name and its right-hand side so the type can be proven from the
        // assigned literal. The rhs runs to end of line (comments are already blanked upstream).
        const selfRe = /\bself\.([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)([^;\n]*)/g
        let sm: RegExpExecArray | null
        while ((sm = selfRe.exec(line))) {
          const c = ensureClass(selfClass)
          c.fields.add(sm[1])
          const ev = c.fieldTypes.get(sm[1]) ?? c.fieldTypes.set(sm[1], { kinds: new Set(), poisoned: false }).get(sm[1])!
          const kind = classifyRhs(sm[2])
          if (kind) ev.kinds.add(kind)
          else ev.poisoned = true
        }
      }

      if (/^\s/.test(line)) continue

      let fm = line.match(/^function\s+([A-Za-z_][A-Za-z0-9_]*)([.:])([A-Za-z_][A-Za-z0-9_]*)\s*\(/)
      if (fm) {
        const { sig, next } = readSignature(lines, i)
        i = next
        const isStatic = fm[2] === '.'
        ensureClass(fm[1]).methods.set((isStatic ? '.' : ':') + fm[3], { name: fm[3], params: parseParams(sig), static: isStatic })
        selfClass = fm[1]
        continue
      }
      fm = line.match(/^function\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/)
      if (fm) {
        const { sig, next } = readSignature(lines, i)
        i = next
        funcs.set(fm[1], parseParams(sig))
        selfClass = null
        continue
      }

      const am = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)/)
      if (am && !LUA_KEYWORDS.has(am[1])) vars.add(am[1])
    }
    perFile.set(ns, { funcs, vars })
  }

  // drop pseudo-classes that were never declared with `class "X"` (local tables)
  for (const [name, c] of classes) if (c.file === null) classes.delete(name)

  return { perFile, classes }
}

/** Emits a global `declare class` for a parsed Lua class (methods, statics, ctor, fields). */
export function emitClass(name: string, classes: Map<string, LuaClass>): string {
  const c = classes.get(name)!
  const out = [`/** @customConstructor ${name} */`, `declare class ${name}${c.base ? ` extends ${c.base}` : ''} {`]
  const ctor = c.methods.get(':__init') ?? c.methods.get('.__init')
  if (ctor) out.push(`  constructor(${ctor.params})`)
  const methodNames = new Set([...c.methods.values()].map((m) => m.name))
  for (const f of [...c.fields].filter((f) => !methodNames.has(f)).sort()) out.push(`  ${f}: ${inferFieldType(c, f)}`)
  for (const m of c.methods.values()) {
    if (m.name === '__init') continue
    out.push(`  ${m.static ? 'static ' : ''}${m.name}(${m.params}): TODO`)
  }
  out.push('}')
  return out.join('\n')
}

/**
 * Emits the body of one script's `.d.ts`: the `declare namespace <ns>` with its
 * top-level vars/functions, followed by any global classes that script declares. No
 * header/marker — the caller prepends its own. Shared by the vanilla skeleton generator
 * and the addon-pack generator so both format script types identically.
 */
export function emitScriptBody(
  ns: string,
  pf: FileMembers | undefined,
  byFile: Map<string, string[]>,
  classes: Map<string, LuaClass>,
): string {
  const out: string[] = ['/** @noSelfInFile */', '']
  const classNames = (byFile.get(ns) ?? []).slice().sort()
  if ((pf && (pf.funcs.size || pf.vars.size)) || classNames.length) {
    out.push(`declare namespace ${ns} {`)
    if (pf) {
      for (const v of [...pf.vars].sort()) out.push(`  export const ${v}: TODO`)
      for (const [fn, params] of [...pf.funcs].sort((a, b) => a[0].localeCompare(b[0]))) out.push(`  export function ${fn}(${params}): TODO`)
    }
    // Anomaly's `class "X"` creates a real global AND exposes the class table on its defining
    // script's namespace (base game constructs it as `<ns>.X(...)` and patches its methods as
    // `<ns>.X.Method = ...`). Typed as the instance so those methods are directly reachable for
    // overriding — no `.prototype` (Anomaly stores methods on the class table itself).
    for (const cname of classNames) out.push(`  export const ${cname}: ${cname}`)
    out.push('}', '')
  }
  for (const cname of classNames) out.push(emitClass(cname, classes), '')
  return out.join('\n').replace(/\n+$/, '\n')
}

/** Files whose classes are declared, grouped by declaring file namespace. */
export function classesByFile(classes: Map<string, LuaClass>): Map<string, string[]> {
  const byFile = new Map<string, string[]>()
  for (const [name, c] of classes) {
    const list = byFile.get(c.file!) ?? byFile.set(c.file!, []).get(c.file!)!
    list.push(name)
  }
  return byFile
}
