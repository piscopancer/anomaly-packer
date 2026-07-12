import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

/**
 * Generates skeleton `.d.ts` type declarations from the STALKER Anomaly Lua
 * scripts, one file per `.script` in `src/types/game`.
 *
 * Mapping: each `<name>.script` becomes `declare namespace <name>` whose members
 * are the top-level (column 0) `function name()` and `name = ...` definitions
 * (`local` ones are private and skipped). Lua classes declared with
 * `class "X" (Base)` are emitted as global `declare class X extends Base`, with
 * `X:method()` as methods, `X.method()` as statics and `__init` as constructor.
 *
 * The first pass is deliberately shallow: parameter names are preserved but every
 * type is the `TODO` placeholder, to be refined by hand afterwards. Hand-written
 * files are recognised by the absence of the `@generated` marker on their first
 * line and are never overwritten.
 *
 * Usage: `tsx src/scripts/gen-script-skeletons.ts [path-to-anomaly-scripts-dir]`
 */

const SCRIPTS_DIR = resolve(process.argv[2] ?? 'c:/Games/STALKER Anomaly/tools/_unpacked/scripts')
const OUT_DIR = resolve('src/types/game')
const MARKER = '// @generated skeleton — auto-produced from Lua scripts, refine by hand'

const TS_RESERVED = new Set(['function', 'var', 'let', 'const', 'class', 'return', 'default', 'new', 'delete', 'in', 'of', 'typeof', 'void', 'this', 'super', 'null', 'true', 'false', 'enum', 'export', 'import', 'extends', 'implements', 'interface', 'package', 'private', 'public', 'static', 'yield', 'await', 'debugger', 'with', 'switch', 'case', 'break', 'continue', 'do', 'while', 'for', 'if', 'else', 'throw', 'try', 'catch', 'finally', 'instanceof'])
const LUA_KEYWORDS = new Set(['if', 'for', 'while', 'return', 'local', 'end', 'else', 'elseif', 'do', 'then', 'repeat', 'until', 'function', 'and', 'or', 'not', 'in', 'break', 'goto'])

/**
 * Blanks Lua comments and long-bracket strings so the parser never mistakes their
 * contents for code. Handles `-- line`, `--[[ block ]]`, `[[ long string ]]` and
 * their `[=[ ]=]` level variants across lines, and skips `--` inside quoted
 * strings. Without this, `.ltx` text inside `[[ ]]` blocks leaks in as phantom
 * members and trailing `--( … )` comments leak in as phantom parameters.
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

type ClassMethod = { name: string; params: string; static: boolean }
type LuaClass = { base: string | null; methods: Map<string, ClassMethod>; file: string | null }
type FileMembers = { funcs: Map<string, string>; vars: Set<string> }

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

const files = readdirSync(SCRIPTS_DIR).filter((f) => f.endsWith('.script'))
const classes = new Map<string, LuaClass>()
const perFile = new Map<string, FileMembers>()

function ensureClass(name: string): LuaClass {
  let c = classes.get(name)
  if (!c) classes.set(name, (c = { base: null, methods: new Map(), file: null }))
  return c
}

// ---- Pass 1: collect namespace members (per file) and Lua classes (global) ----
for (const file of files) {
  const ns = basename(file, '.script')
  const lines = stripLua(readFileSync(join(SCRIPTS_DIR, file), 'latin1').split(/\r?\n/))
  const funcs = new Map<string, string>()
  const vars = new Set<string>()

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // class declarations may appear indented (e.g. inside a block), scan anywhere
    const classRe = /class\s*["']([A-Za-z_][A-Za-z0-9_]*)["']\s*(?:\(\s*([A-Za-z_][A-Za-z0-9_.]*)\s*\))?/g
    let cm: RegExpExecArray | null
    while ((cm = classRe.exec(line))) {
      const c = ensureClass(cm[1])
      if (cm[2]) c.base = cm[2]
      if (!c.file) c.file = ns
    }

    // only top-level (column 0) function/assignment definitions form the API
    if (/^\s/.test(line)) continue

    let fm = line.match(/^function\s+([A-Za-z_][A-Za-z0-9_]*)([.:])([A-Za-z_][A-Za-z0-9_]*)\s*\(/)
    if (fm) {
      const { sig, next } = readSignature(lines, i)
      i = next
      const isStatic = fm[2] === '.'
      ensureClass(fm[1]).methods.set((isStatic ? '.' : ':') + fm[3], { name: fm[3], params: parseParams(sig), static: isStatic })
      continue
    }
    fm = line.match(/^function\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/)
    if (fm) {
      const { sig, next } = readSignature(lines, i)
      i = next
      funcs.set(fm[1], parseParams(sig))
      continue
    }

    const am = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)/)
    if (am && !LUA_KEYWORDS.has(am[1])) vars.add(am[1])
  }
  perFile.set(ns, { funcs, vars })
}

// drop pseudo-classes that were never declared with `class "X"` (local tables)
for (const [name, c] of classes) if (c.file === null) classes.delete(name)

// ---- Pass 2: emit one .d.ts per namespace / class-declaring file ----
const classesByFile = new Map<string, string[]>()
for (const [name, c] of classes) {
  const list = classesByFile.get(c.file!) ?? classesByFile.set(c.file!, []).get(c.file!)!
  list.push(name)
}

function emitClass(name: string): string {
  const c = classes.get(name)!
  const out = [`/** @customConstructor ${name} */`, `declare class ${name}${c.base ? ` extends ${c.base}` : ''} {`]
  const ctor = c.methods.get(':__init') ?? c.methods.get('.__init')
  if (ctor) out.push(`  constructor(${ctor.params})`)
  for (const m of c.methods.values()) {
    if (m.name === '__init') continue
    out.push(`  ${m.static ? 'static ' : ''}${m.name}(${m.params}): TODO`)
  }
  out.push('}')
  return out.join('\n')
}

let written = 0
let skipped = 0
for (const ns of new Set([...perFile.keys(), ...classesByFile.keys()])) {
  const outPath = join(OUT_DIR, `${ns}.d.ts`)
  if (existsSync(outPath) && !readFileSync(outPath, 'utf8').startsWith(MARKER)) {
    skipped++ // preserve hand-written declarations
    continue
  }

  const pf = perFile.get(ns) ?? { funcs: new Map<string, string>(), vars: new Set<string>() }
  const out = [MARKER, '', '/** @noSelfInFile */', '']

  if (pf.funcs.size || pf.vars.size) {
    out.push(`declare namespace ${ns} {`)
    for (const v of [...pf.vars].sort()) out.push(`  export const ${v}: TODO`)
    for (const [fn, params] of [...pf.funcs].sort((a, b) => a[0].localeCompare(b[0]))) out.push(`  export function ${fn}(${params}): TODO`)
    out.push('}', '')
  }
  for (const cname of (classesByFile.get(ns) ?? []).sort()) out.push(emitClass(cname), '')

  writeFileSync(outPath, out.join('\n').replace(/\n+$/, '\n'))
  written++
}

console.log(`Generated ${written} skeletons, preserved ${skipped} hand-written files (${files.length} scripts, ${classes.size} classes)`)
