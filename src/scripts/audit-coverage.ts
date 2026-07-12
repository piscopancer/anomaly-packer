import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

/**
 * Audits the coverage of the hand-refined `src/types/game/*.d.ts` declarations
 * against the actual STALKER Anomaly Lua scripts, and optionally fills the gaps.
 *
 * For every `<name>.script` it collects the top-level (column 0) API — `function`
 * definitions and `name = ...` assignments, exactly like the skeleton generator —
 * and compares that set against the identifiers declared inside the matching
 * `declare namespace <name> { ... }` block. Members present in the Lua but absent
 * from the block are reported as coverage gaps. It also counts `TODO`-typed
 * members still awaiting hand-refinement.
 *
 * It additionally audits Lua classes (`class "X" (Base)` with `X:method()` /
 * `X.method()`) against the matching `declare class X { ... }` bodies anywhere in
 * the type tree, reporting and filling missing instance/static methods, and
 * emitting a whole class declaration when one is absent entirely.
 *
 * Modes:
 *   (report, default)     print the gap/TODO table; exit non-zero if any gaps exist.
 *   --fill                append the missing members to each namespace block, using
 *                         the parameter names parsed from the Lua and `TODO` types,
 *                         to be refined by hand afterwards.
 *   --refine-conventions  type the scheme-dispatch families (xr_effects,
 *                         xr_conditions, dialogs) from their guaranteed calling
 *                         convention (`fn(actor, npc, p)`): `actor`/`npc`/`obj` →
 *                         CGameObject, `p`/`params` → AnyTable, and the return type
 *                         (effects → void, conditions → boolean). Only rewrites
 *                         positions still typed `TODO`.
 *   --todos               list every type file with its remaining `TODO` count,
 *                         for tracking refinement progress.
 *   --prune               remove phantom namespace members — declarations that
 *                         exist only inside a Lua comment/long-string block and so
 *                         are not real API.
 *   --json                emit the raw report as JSON instead of a table.
 *
 * Usage: `tsx src/scripts/audit-coverage.ts [--fill|--refine-conventions|--todos|--json] [scripts-dir]`
 */

const argv = process.argv.slice(2)
const FILL = argv.includes('--fill')
const REFINE = argv.includes('--refine-conventions')
const TODOS = argv.includes('--todos')
const PRUNE = argv.includes('--prune')
const JSON_OUT = argv.includes('--json')
const posArg = argv.find((a) => !a.startsWith('--'))
const SCRIPTS_DIR = resolve(posArg ?? 'c:/Games/STALKER Anomaly/tools/_unpacked/scripts')
const TYPES_DIR = resolve('src/types/game')

const LUA_KEYWORDS = new Set(['if', 'for', 'while', 'return', 'local', 'end', 'else', 'elseif', 'do', 'then', 'repeat', 'until', 'function', 'and', 'or', 'not', 'in', 'break', 'goto'])
const TS_RESERVED = new Set(['function', 'var', 'let', 'const', 'class', 'return', 'default', 'new', 'delete', 'in', 'of', 'typeof', 'void', 'this', 'super', 'null', 'true', 'false', 'enum', 'export', 'import', 'extends', 'implements', 'interface', 'package', 'private', 'public', 'static', 'yield', 'await', 'debugger', 'with', 'switch', 'case', 'break', 'continue', 'do', 'while', 'for', 'if', 'else', 'throw', 'try', 'catch', 'finally', 'instanceof'])

type ScriptMember = { name: string; kind: 'func' | 'var'; params: string }
type ClassMethod = { name: string; params: string; static: boolean }
type LuaClass = { name: string; base: string | null; file: string; methods: Map<string, ClassMethod> }

// Lua stdlib libraries are sometimes monkey-patched with extra methods
// (e.g. `function string.gsplit(...)`); these are namespace augmentations, not
// script classes, and are checked/declared as `declare namespace <lib>` members.
const STDLIB_LIBS = new Set(['string', 'table', 'math', 'os', 'io', 'debug', 'coroutine'])

// ---- Lua parsing (mirrors gen-script-skeletons.ts) ----

/**
 * Blanks Lua comments and long-bracket strings so the line parser never mistakes
 * their contents for code. Handles `-- line`, `--[[ block ]]`, `[[ long string ]]`
 * and their `[=[ ]=]` level variants across lines, and skips `--` inside quoted
 * strings. Without this, template `.ltx` text inside `[[ ]]` blocks and trailing
 * `--( … )` comments leak in as phantom members/parameters.
 */
function stripLua(lines: string[]): string[] {
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

function parseParams(sig: string): string {
  const inner = sig.slice(sig.indexOf('(') + 1, sig.lastIndexOf(')'))
  if (!inner.trim()) return ''
  const seen = new Set<string>()
  return inner
    .split(',')
    .map((p, i) => paramName(p, i, seen))
    .map((name) => (name.startsWith('...') ? `${name}: TODO[]` : `${name}: TODO`))
    .join(', ')
}

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

function scriptMembers(file: string, raw = false): ScriptMember[] {
  const src = readFileSync(file, 'latin1').split(/\r?\n/)
  const lines = raw ? src : stripLua(src)
  const out = new Map<string, ScriptMember>()
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (/^\s/.test(line)) continue
    // skip class methods (`function Class:method()` / `function Class.method()`)
    if (/^function\s+[A-Za-z_][A-Za-z0-9_]*[.:]/.test(line)) {
      i = readSignature(lines, i).next
      continue
    }
    let m = line.match(/^function\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/)
    if (m) {
      const { sig, next } = readSignature(lines, i)
      i = next
      if (!out.has(m[1])) out.set(m[1], { name: m[1], kind: 'func', params: parseParams(sig) })
      continue
    }
    m = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)/)
    if (m && !LUA_KEYWORDS.has(m[1]) && !out.has(m[1])) out.set(m[1], { name: m[1], kind: 'var', params: '' })
  }
  return [...out.values()]
}

/**
 * Collects every Lua class declared across the scripts (`class "X" (Base)`), with
 * its column-0 methods (`function X:m()` instance, `function X.m()` static).
 * Mirrors the class handling in gen-script-skeletons.ts.
 */
function luaClasses(dir: string, files: string[]): Map<string, LuaClass> {
  const classes = new Map<string, LuaClass>()
  const ensure = (name: string, file: string): LuaClass => {
    let c = classes.get(name)
    if (!c) classes.set(name, (c = { name, base: null, file, methods: new Map() }))
    return c
  }
  for (const file of files) {
    const ns = basename(file, '.script')
    const lines = stripLua(readFileSync(join(dir, file), 'latin1').split(/\r?\n/))
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const classRe = /class\s*["']([A-Za-z_][A-Za-z0-9_]*)["']\s*(?:\(\s*([A-Za-z_][A-Za-z0-9_.]*)\s*\))?/g
      let cm: RegExpExecArray | null
      while ((cm = classRe.exec(line))) {
        const c = ensure(cm[1], ns)
        if (cm[2]) c.base = cm[2]
      }
      if (/^\s/.test(line)) continue
      const fm = line.match(/^function\s+([A-Za-z_][A-Za-z0-9_]*)([.:])([A-Za-z_][A-Za-z0-9_]*)\s*\(/)
      if (fm) {
        const { sig, next } = readSignature(lines, i)
        i = next
        const isStatic = fm[2] === '.'
        const c = ensure(fm[1], ns)
        const key = fm[3]
        if (!c.methods.has(key)) c.methods.set(key, { name: fm[3], params: parseParams(sig), static: isStatic })
      }
    }
  }
  return classes
}

// ---- .d.ts parsing ----

/** Returns the char span `[open, close]` of the body of `declare namespace NS { ... }`. */
function namespaceBodySpan(src: string, ns: string): [number, number] | null {
  const re = new RegExp(`declare namespace\\s+${ns}\\s*\\{`)
  const m = re.exec(src)
  if (!m) return null
  const open = m.index + m[0].length
  let depth = 1
  for (let k = open; k < src.length; k++) {
    if (src[k] === '{') depth++
    else if (src[k] === '}') {
      depth--
      if (depth === 0) return [open, k]
    }
  }
  return null
}

/** Returns the char span `[open, close]` of the body of `declare class X { ... }`. */
function classBodySpan(src: string, name: string): [number, number] | null {
  const re = new RegExp(`declare class\\s+${name}\\b[^{]*\\{`)
  const m = re.exec(src)
  if (!m) return null
  const open = m.index + m[0].length
  let depth = 1
  for (let k = open; k < src.length; k++) {
    if (src[k] === '{') depth++
    else if (src[k] === '}') {
      depth--
      if (depth === 0) return [open, k]
    }
  }
  return null
}

/** Member names (methods and properties) declared directly in a class body. */
function classMembers(body: string): Set<string> {
  const ids = new Set<string>()
  for (const line of body.split(/\r?\n/)) {
    const m = line.match(/^\s*(?:static\s+|readonly\s+|get\s+|set\s+|public\s+|private\s+|protected\s+|abstract\s+)*([A-Za-z_][A-Za-z0-9_]*)\s*[(<:?]/)
    if (m) ids.add(m[1])
  }
  return ids
}

/** Identifiers declared in a chunk of `.d.ts` text (namespace body or whole file). */
function declaredIdentifiers(body: string): Set<string> {
  const ids = new Set<string>()
  const patterns = [
    /(?:declare\s+|export\s+)*function\s+([A-Za-z_][A-Za-z0-9_]*)/g,
    /(?:declare\s+|export\s+)*(?:const|let|var)\s+([A-Za-z_][A-Za-z0-9_]*)/g,
    /(?:declare\s+|export\s+)*(?:class|namespace|interface|type)\s+([A-Za-z_][A-Za-z0-9_]*)/g,
  ]
  for (const re of patterns) {
    let m: RegExpExecArray | null
    while ((m = re.exec(body))) ids.add(m[1])
  }
  return ids
}

/** Value-level members declared in a namespace body (function / const / let / var). */
function declaredValues(body: string): Set<string> {
  const ids = new Set<string>()
  const patterns = [/(?:export\s+)?function\s+([A-Za-z_][A-Za-z0-9_]*)/g, /(?:export\s+)?(?:const|let|var)\s+([A-Za-z_][A-Za-z0-9_]*)/g]
  for (const re of patterns) {
    let m: RegExpExecArray | null
    while ((m = re.exec(body))) ids.add(m[1])
  }
  return ids
}

// ---- Run ----

/** All `.d.ts` under a directory, recursively. */
function allDts(dir: string): string[] {
  const out: string[] = []
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...allDts(p))
    else if (e.name.endsWith('.d.ts')) out.push(p)
  }
  return out
}

// Project-wide global identifiers, to avoid re-declaring an existing global
// (in any file) when filling global-scope members like those of `_g.script`.
const projectGlobals = new Set<string>()
for (const p of allDts(TYPES_DIR)) for (const id of declaredIdentifiers(readFileSync(p, 'utf8'))) projectGlobals.add(id)

const files = readdirSync(SCRIPTS_DIR).filter((f) => f.endsWith('.script'))
type Row = { ns: string; total: number; missing: ScriptMember[]; extra: string[]; todos: number; global: boolean }
const rows: Row[] = []

for (const file of files) {
  const ns = basename(file, '.script')
  const members = scriptMembers(join(SCRIPTS_DIR, file))
  if (members.length === 0) continue
  const dtsPath = join(TYPES_DIR, `${ns}.d.ts`)
  const src = existsSync(dtsPath) ? readFileSync(dtsPath, 'utf8') : ''
  const span = src ? namespaceBodySpan(src, ns) : null
  // `_g.script` (and any file with no matching namespace block) maps to global
  // scope: its API is declared as top-level `declare function`/`declare const`.
  const global = !span
  // whole-file identifiers guard against re-declaring globals (e.g. classes)
  const fileIds = declaredIdentifiers(src)
  const declared = global ? fileIds : declaredIdentifiers(src.slice(span![0], span![1]))
  const missing = members.filter((m) => !declared.has(m.name) && !fileIds.has(m.name) && !(global && projectGlobals.has(m.name)))
  // extra/phantom: value members declared in the namespace body that appear as a
  // column-0 def in the RAW script but disappear after stripping — i.e. they live
  // only inside a comment or long-string block (safe to prune). Members that are
  // absent from the raw script too are legit dynamic/hand-added members (kept).
  const memberNames = new Set(members.map((m) => m.name))
  const rawNames = new Set(scriptMembers(join(SCRIPTS_DIR, file), true).map((m) => m.name))
  const extra = global ? [] : [...declaredValues(src.slice(span![0], span![1]))].filter((n) => !memberNames.has(n) && rawNames.has(n))
  const scope = global ? src : src.slice(span![0], span![1])
  const todos = (scope.match(/\bTODO\b/g) ?? []).length
  if (missing.length || extra.length || todos) rows.push({ ns, total: members.length, missing, extra, todos, global })
}

rows.sort((a, b) => b.missing.length - a.missing.length)

// ---- Class-method coverage ----

type ClassRow = { name: string; base: string | null; file: string; missing: ClassMethod[]; ctorParams: string | null; declPath: string | null; declExists: boolean }
const classRows: ClassRow[] = []
const dtsCache = allDts(TYPES_DIR).map((p) => [p, readFileSync(p, 'utf8')] as const)
const luaCls = luaClasses(SCRIPTS_DIR, files)
for (const [name, c] of luaCls) {
  let declPath: string | null = null
  let memberSet = new Set<string>()
  if (STDLIB_LIBS.has(name)) {
    // stdlib augmentation: gather members from every `declare namespace <lib>` body
    for (const [, src] of dtsCache) {
      const span = namespaceBodySpan(src, name)
      if (span) for (const id of declaredIdentifiers(src.slice(span[0], span[1]))) memberSet.add(id)
    }
  } else {
    for (const [p, src] of dtsCache) {
      const span = classBodySpan(src, name)
      if (span) {
        declPath = p
        memberSet = classMembers(src.slice(span[0], span[1]))
        break
      }
    }
  }
  const declExists = STDLIB_LIBS.has(name) || declPath !== null || projectGlobals.has(name)
  // when a class exists only as an interface (no `declare class` body we can edit)
  // we cannot know/extend its members safely — report but do not fill.
  const haveMembers = declPath !== null || STDLIB_LIBS.has(name)
  const missing = [...c.methods.values()].filter((m) => m.name !== '__init' && (haveMembers ? !memberSet.has(m.name) : !declExists))
  const ctor = c.methods.get('__init')
  if (missing.length) classRows.push({ name, base: c.base, file: c.file, missing, ctorParams: ctor ? ctor.params : null, declPath, declExists })
}
classRows.sort((a, b) => b.missing.length - a.missing.length)

if (JSON_OUT) {
  console.log(JSON.stringify({
    namespaces: rows.map((r) => ({ ns: r.ns, total: r.total, missing: r.missing.map((m) => m.name), extra: r.extra, todos: r.todos, global: r.global })),
    classes: classRows.map((r) => ({ name: r.name, missing: r.missing.map((m) => (m.static ? '.' : ':') + m.name), declared: r.declExists, orphanInterface: r.declExists && !r.declPath })),
  }, null, 2))
} else if (!FILL && !REFINE && !TODOS && !PRUNE) {
  const totalMissing = rows.reduce((n, r) => n + r.missing.length, 0)
  const totalExtra = rows.reduce((n, r) => n + r.extra.length, 0)
  const totalTodos = rows.reduce((n, r) => n + r.todos, 0)
  const totalClassMissing = classRows.reduce((n, r) => n + r.missing.length, 0)
  console.log(`Scripts scanned: ${files.length}`)
  console.log(`Namespaces with missing members: ${rows.filter((r) => r.missing.length).length}`)
  console.log(`Total missing top-level members: ${totalMissing}`)
  console.log(`Total extra/phantom declared members: ${totalExtra}`)
  console.log(`Total TODO occurrences (in scanned namespaces): ${totalTodos}`)
  console.log(`Classes with missing methods: ${classRows.length}  (missing methods: ${totalClassMissing})`)
  console.log('\n--- namespaces with gaps (missing / total, TODO count) ---')
  for (const r of rows.filter((r) => r.missing.length)) {
    console.log(`${r.ns}  (${r.missing.length}/${r.total}${r.global ? ', global' : ''}, ${r.todos} TODO)  ${r.missing.slice(0, 12).map((m) => m.name).join(', ')}${r.missing.length > 12 ? ' …' : ''}`)
  }
  console.log('\n--- namespaces with extra/phantom members (declared but not in the Lua) ---')
  for (const r of rows.filter((r) => r.extra.length)) {
    console.log(`${r.ns}  (${r.extra.length})  ${r.extra.slice(0, 12).join(', ')}${r.extra.length > 12 ? ' …' : ''}`)
  }
  console.log('\n--- classes with missing methods ---')
  for (const r of classRows) {
    const tag = !r.declExists ? ', NO DECL' : !r.declPath ? ', interface-only' : ''
    console.log(`${r.name}  (${r.missing.length}${tag})  ${r.missing.slice(0, 12).map((m) => (m.static ? '.' : ':') + m.name).join(', ')}${r.missing.length > 12 ? ' …' : ''}`)
  }
  if (totalMissing + totalClassMissing > 0) process.exitCode = 1
}

// ---- Fill ----

if (FILL) {
  let filled = 0
  let members = 0
  const note = '// --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---'
  for (const r of rows) {
    if (!r.missing.length) continue
    const dtsPath = join(TYPES_DIR, `${r.ns}.d.ts`)
    let src = existsSync(dtsPath) ? readFileSync(dtsPath, 'utf8') : ''

    if (r.global) {
      // top-level globals (e.g. _g.script): `declare function` / `declare const`
      const lines = r.missing.map((m) => (m.kind === 'func' ? `declare function ${m.name}(${m.params}): TODO` : `declare const ${m.name}: TODO`))
      src = src.replace(/\n*$/, '\n') + `\n${note}\n${lines.join('\n')}\n`
    } else {
      const lines = r.missing.map((m) => (m.kind === 'func' ? `  export function ${m.name}(${m.params}): TODO` : `  export const ${m.name}: TODO`))
      const block = `  ${note}\n${lines.join('\n')}\n`
      const span = namespaceBodySpan(src, r.ns)! // non-global rows always have a block
      src = src.slice(0, span[1]) + block + src.slice(span[1])
    }
    writeFileSync(dtsPath, src)
    filled++
    members += r.missing.length
  }
  console.log(`Filled ${members} missing members across ${filled} namespaces.`)

  // Lua stdlib libraries monkey-patched with extra methods are not script classes.
  const NOT_A_CLASS = new Set(['string', 'table', 'math', 'os', 'io', 'debug', 'coroutine'])
  let classesFilled = 0
  let methodsFilled = 0
  for (const r of classRows) {
    if (NOT_A_CLASS.has(r.name)) continue
    if (r.declPath) {
      // class exists: insert the missing methods before its closing brace
      const src = readFileSync(r.declPath, 'utf8')
      const span = classBodySpan(src, r.name)
      if (!span) continue
      const lines = r.missing.map((m) => `  ${m.static ? 'static ' : ''}${m.name}(${m.params}): TODO`)
      const block = `  ${note}\n${lines.join('\n')}\n`
      writeFileSync(r.declPath, src.slice(0, span[1]) + block + src.slice(span[1]))
      classesFilled++
      methodsFilled += r.missing.length
    } else if (!r.declExists) {
      // class absent entirely: emit a whole declaration into its namespace's file
      const dtsPath = join(TYPES_DIR, `${r.file}.d.ts`)
      let src = existsSync(dtsPath) ? readFileSync(dtsPath, 'utf8') : '/** @noSelfInFile */\n'
      const extend = r.base && (projectGlobals.has(r.base) || luaCls.has(r.base)) ? ` extends ${r.base}` : ''
      const body: string[] = [`/** @customConstructor ${r.name} */`, `declare class ${r.name}${extend} {`]
      if (r.ctorParams !== null) body.push(`  constructor(${r.ctorParams})`)
      for (const m of r.missing) body.push(`  ${m.static ? 'static ' : ''}${m.name}(${m.params}): TODO`)
      body.push('}')
      src = src.replace(/\n*$/, '\n') + `\n${note}\n${body.join('\n')}\n`
      writeFileSync(dtsPath, src)
      classesFilled++
      methodsFilled += r.missing.length
    }
  }
  console.log(`Filled ${methodsFilled} missing methods across ${classesFilled} classes.`)
}

// ---- Prune phantom members ----

if (PRUNE) {
  let removed = 0
  let touched = 0
  for (const r of rows) {
    if (!r.extra.length) continue
    const dtsPath = join(TYPES_DIR, `${r.ns}.d.ts`)
    const phantom = new Set(r.extra)
    const kept = readFileSync(dtsPath, 'utf8').split(/\r?\n/).filter((line) => {
      const m = line.match(/^\s*export (?:function|const)\s+([A-Za-z_][A-Za-z0-9_]*)\b/)
      if (m && phantom.has(m[1])) { removed++; return false }
      return true
    })
    writeFileSync(dtsPath, kept.join('\n'))
    touched++
  }
  console.log(`Pruned ${removed} phantom members across ${touched} namespaces.`)
}

// ---- TODO progress listing ----

if (TODOS) {
  const counts = allDts(TYPES_DIR)
    .map((p) => ({ file: p.slice(TYPES_DIR.length + 1).replace(/\\/g, '/'), n: (readFileSync(p, 'utf8').match(/\bTODO\b/g) ?? []).length }))
    .filter((c) => c.n > 0)
    .sort((a, b) => b.n - a.n)
  const total = counts.reduce((n, c) => n + c.n, 0)
  const width = String(counts[0]?.n ?? 0).length
  for (const c of counts) console.log(`${String(c.n).padStart(width)}  ${c.file}`)
  console.log(`\n${total} TODO across ${counts.length} files (of ${allDts(TYPES_DIR).length} total).`)
}

// ---- Convention refinement of scheme-dispatch families ----

if (REFINE) {
  // xr_logic invokes every effect/condition/dialog as `fn(actor, npc, p)`, so the
  // parameter types are fixed by name and the return type by family. See
  // xr_logic.script (`xr_effects[name](obj, npc, infop[3])`).
  const OBJ = 'CGameObject'
  const families: Record<string, { params: Record<string, string>; ret: string | null }> = {
    xr_effects: { params: { actor: OBJ, npc: OBJ, obj: OBJ, p: 'AnyTable', params: 'AnyTable' }, ret: 'void' },
    xr_conditions: { params: { actor: OBJ, npc: OBJ, obj: OBJ, p: 'AnyTable', params: 'AnyTable' }, ret: 'boolean' },
    dialogs: { params: { a: OBJ, b: OBJ, first_speaker: OBJ, second_speaker: OBJ }, ret: null },
  }
  let changedParams = 0
  let changedReturns = 0
  const sig = /^(\s*export function\s+\w+\()([^)]*)(\):\s*)TODO(\s*)$/
  for (const [ns, cfg] of Object.entries(families)) {
    const dtsPath = join(TYPES_DIR, `${ns}.d.ts`)
    if (!existsSync(dtsPath)) continue
    const out = readFileSync(dtsPath, 'utf8').split(/\r?\n/).map((line) => {
      const m = line.match(sig)
      if (!m) return line
      const params = m[2]
        .split(',')
        .map((raw) => {
          const pm = raw.match(/^(\s*)([A-Za-z_][A-Za-z0-9_]*)(\s*:\s*)TODO(\s*)$/)
          if (pm && cfg.params[pm[2]]) {
            changedParams++
            return `${pm[1]}${pm[2]}${pm[3]}${cfg.params[pm[2]]}${pm[4]}`
          }
          return raw
        })
        .join(',')
      const ret = cfg.ret ?? 'TODO'
      if (cfg.ret) changedReturns++
      return `${m[1]}${params}${m[3]}${ret}${m[4]}`
    })
    writeFileSync(dtsPath, out.join('\n'))
  }
  console.log(`Refined ${changedParams} parameters and ${changedReturns} return types across ${Object.keys(families).length} scheme-dispatch families.`)
}
