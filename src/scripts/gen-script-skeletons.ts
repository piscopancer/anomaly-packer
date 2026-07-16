import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { classesByFile, emitScriptBody, inferFieldType, parseScripts } from './lib/lua-core'

/**
 * Generates skeleton `.d.ts` type declarations from the STALKER Anomaly Lua
 * scripts, one file per `.script` in `src/types/game`.
 *
 * Mapping: each `<name>.script` becomes `declare namespace <name>` whose members
 * are the top-level (column 0) `function name()` and `name = ...` definitions
 * (`local` ones are private and skipped). Lua classes declared with
 * `class "X" (Base)` are emitted as global `declare class X extends Base`, with
 * `X:method()` as methods, `X.method()` as statics and `__init` as constructor.
 * The parsing itself lives in `./lib/lua-core` (shared with `anomaly-packer gen-addon`).
 *
 * The first pass is deliberately shallow: parameter names are preserved but every
 * type is the `TODO` placeholder, to be refined by hand afterwards. Hand-written
 * files are recognised by the absence of the `@generated` marker on their first
 * line and are never overwritten.
 *
 * Usage: `tsx src/scripts/gen-script-skeletons.ts [path-to-anomaly-scripts-dir] [--augment]`
 *
 * With `--augment`, instead of only writing fresh skeletons, the script injects any
 * instance fields (`self.field = …`) that a class's Lua sets but its existing hand-written
 * `.d.ts` omits — as `field: TODO` members — leaving every other declaration untouched. This
 * back-fills the data members that the original method-only skeletons dropped.
 */

const argv = process.argv.slice(2)
const AUGMENT = argv.includes('--augment')
const SCRIPTS_DIR = resolve(argv.find((a) => !a.startsWith('--')) ?? 'c:/Games/STALKER Anomaly/tools/_unpacked/scripts')
const OUT_DIR = resolve('src/types/game')
const MARKER = '// @generated skeleton — auto-produced from Lua scripts, refine by hand'

const files = readdirSync(SCRIPTS_DIR).filter((f) => f.endsWith('.script'))
const { perFile, classes } = parseScripts(SCRIPTS_DIR, files)
const byFile = classesByFile(classes)

// ---- Augment mode: back-fill missing instance fields into existing hand-written files ----
if (AUGMENT) {
  const FIELD_MARK = ' // @generated field — refine type'

  // Recursively list every .d.ts under OUT_DIR (classes may have been moved into subfolders).
  function listDts(dir: string): string[] {
    const out: string[] = []
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name)
      if (e.isDirectory()) out.push(...listDts(p))
      else if (e.name.endsWith('.d.ts')) out.push(p)
    }
    return out
  }

  // Names a class block already declares at its top level (methods, getters, fields, ctor).
  const memberRe = /^\s*(?:public |private |protected |readonly |static |abstract |declare )*(?:get |set )?([A-Za-z_][A-Za-z0-9_]*)\s*[<(?:]/

  let filesChanged = 0
  let fieldsAdded = 0
  for (const path of listDts(OUT_DIR)) {
    const src = readFileSync(path, 'utf8').split(/\r?\n/)
    const inserts = new Map<number, string[]>() // src line index -> stub lines to emit after it

    for (let i = 0; i < src.length; i++) {
      const decl = src[i].match(/^declare class ([A-Za-z_][A-Za-z0-9_]*)/)
      const c = decl && classes.get(decl[1])
      if (!decl || !c || c.fields.size === 0) continue

      // Locate the class body: first line bearing `{`, then walk to its matching `}`.
      let open = i
      while (open < src.length && !src[open].includes('{')) open++
      if (open >= src.length) continue

      let depth = 0
      let end = -1
      const existing = new Set<string>()
      for (let j = open; j < src.length; j++) {
        const before = depth
        for (const ch of src[j]) {
          if (ch === '{') depth++
          else if (ch === '}') depth--
        }
        // Lines that start at class-body top level (depth 1 before their own braces) are members.
        if (before === 1) {
          const mm = src[j].match(memberRe)
          if (mm) existing.add(mm[1])
        }
        if (depth === 0 && j >= open) { end = j; break }
      }
      if (end === -1) continue // unterminated; leave this class alone

      const methodNames = new Set([...c.methods.values()].map((m) => m.name))
      const missing = [...c.fields].filter((f) => !existing.has(f) && !methodNames.has(f)).sort()
      if (missing.length) {
        inserts.set(open, missing.map((f) => `  ${f}: TODO${FIELD_MARK}`)) // after the opening brace
        fieldsAdded += missing.length
      }
      i = end // resume after this class block
    }

    if (inserts.size) {
      const out: string[] = []
      for (let i = 0; i < src.length; i++) {
        out.push(src[i])
        const stubs = inserts.get(i)
        if (stubs) out.push(...stubs)
      }
      writeFileSync(path, out.join('\n'))
      filesChanged++
    }
  }
  // Also expose each script-defined `class "X"` on its defining script's namespace (`<ns>.X`).
  // The vanilla emit does this for freshly-generated files; here we back-fill hand-written ones
  // by appending a merging `declare namespace <ns> { export const X: X }` block. Anomaly reaches
  // these classes both as a global and as `<ns>.X`, and the latter is what the method-override
  // idiom (`utils_ui.UICellItem.Add_Layers = ...`) needs. Typed as the instance so the class
  // table's methods are directly reachable (Anomaly keeps them on the table, not a `.prototype`).
  let membersAdded = 0
  let memberFilesChanged = 0
  for (const path of listDts(OUT_DIR)) {
    const declared = [...readFileSync(path, 'utf8').matchAll(/^declare class ([A-Za-z_][A-Za-z0-9_]*)/gm)].map((m) => m[1])
    if (!declared.length) continue
    const text = readFileSync(path, 'utf8')
    // Group the classes this file declares by their Lua script namespace, keeping only those
    // not already exposed as a namespace member somewhere in the file.
    const byNs = new Map<string, string[]>()
    for (const cname of declared) {
      const c = classes.get(cname)
      if (!c?.file) continue
      if (new RegExp(`\\bconst ${cname}\\s*:`).test(text)) continue // already exposed
      const list = byNs.get(c.file) ?? byNs.set(c.file, []).get(c.file)!
      list.push(cname)
    }
    if (!byNs.size) continue

    let block = ''
    for (const [ns, cnames] of byNs) {
      block += `\ndeclare namespace ${ns} {\n`
      block += cnames
        .sort()
        .map(
          (c) =>
            `  /** Anomaly \`class "${c}"\` is also reachable on the \`${ns}\` script namespace; typed as\n   *  the instance so its methods can be captured/overridden (\`${ns}.${c}.Method = ...\`). */\n  export const ${c}: ${c}`,
        )
        .join('\n')
      block += '\n}\n'
      membersAdded += cnames.length
    }
    writeFileSync(path, text.replace(/\s*$/, '\n') + block)
    memberFilesChanged++
  }
  // Refine existing `<field>: TODO` members to the type proven by the Lua `self.field = <literal>`
  // assignments. Walks each `declare class` body, and only rewrites a field whose every assignment
  // is a bare literal (see `inferFieldType`) — unprovable fields keep their `TODO`.
  let fieldsTyped = 0
  let typedFilesChanged = 0
  const fieldTodoRe = /^(\s*)([A-Za-z_][A-Za-z0-9_]*)(\??): TODO(\b[^\n]*)?$/
  for (const path of listDts(OUT_DIR)) {
    const src = readFileSync(path, 'utf8').split(/\r?\n/)
    let changed = false
    let depth = 0
    let cls: string | null = null
    for (let i = 0; i < src.length; i++) {
      const decl = src[i].match(/^declare class ([A-Za-z_][A-Za-z0-9_]*)/)
      if (decl && depth === 0) cls = decl[1]
      // Refine a field line sitting directly in a class body (depth 1, before this line's braces).
      if (cls && depth === 1) {
        const m = src[i].match(fieldTodoRe)
        const c = m && classes.get(cls)
        if (m && c) {
          const t = inferFieldType(c, m[2])
          if (t !== 'TODO') {
            src[i] = `${m[1]}${m[2]}${m[3]}: ${t}${m[4] ?? ''}`
            fieldsTyped++
            changed = true
          }
        }
      }
      for (const ch of src[i]) {
        if (ch === '{') depth++
        else if (ch === '}') depth--
      }
      if (depth === 0) cls = null
    }
    if (changed) {
      writeFileSync(path, src.join('\n'))
      typedFilesChanged++
    }
  }

  console.log(`Augment: added ${fieldsAdded} fields across ${filesChanged} files; added ${membersAdded} class namespace members across ${memberFilesChanged} files; typed ${fieldsTyped} fields across ${typedFilesChanged} files`)
  process.exit(0)
}

// ---- Pass 2: emit one .d.ts per namespace / class-declaring file ----
let written = 0
let skipped = 0
for (const ns of new Set([...perFile.keys(), ...byFile.keys()])) {
  const outPath = join(OUT_DIR, `${ns}.d.ts`)
  if (existsSync(outPath) && !readFileSync(outPath, 'utf8').startsWith(MARKER)) {
    skipped++ // preserve hand-written declarations
    continue
  }

  const body = emitScriptBody(ns, perFile.get(ns), byFile, classes)
  writeFileSync(outPath, `${MARKER}\n\n${body}`)
  written++
}

console.log(`Generated ${written} skeletons, preserved ${skipped} hand-written files (${files.length} scripts, ${classes.size} classes)`)
