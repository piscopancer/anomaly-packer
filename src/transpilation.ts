import { existsSync } from 'fs'
import path from 'path'
import * as tstl from 'typescript-to-lua'
import { buildHeader } from './header'
import { PackOptions } from './pack'

export type TranspiledScript = {
  sourceFileName: string
  buildFileName: string
  buildFileText: string
}

/**
 * Importable runtime modules shipped with Anomaly Packer, mapped from their `import` specifier to the runtime that provides them at runtime. `template` is the source `.script` in {@link ./runtime} to copy; `suffix` is appended to the addon id to form the per-addon flat script name `<addonId>__<suffix>`. When a transpiled script requires one of these, its `require(...)` is rewritten to that cross-script global and the template is copied into the build under that name. The double underscore keeps the technical part visible while sorting the file right next to the addon's own scripts.
 */
export const runtimeModules = {
  'anomaly-packer/mcm': { template: '__anomaly_packer_mcm', suffix: 'ap_mcm' },
  'anomaly-packer/class': { template: '__anomaly_packer_class', suffix: 'ap_class' },
} as const

/** The flat Anomaly script name a registered source file is built to: the entry `index` becomes the bare addon id, every other short name is prefixed with it (`mcm` -> `<addonId>_mcm`). */
export function scriptBuildName(addonId: string, sourceFileName: string) {
  return sourceFileName === 'index' ? addonId : `${addonId}_${sourceFileName}`
}

export type Transpilation = {
  scripts: TranspiledScript[]
  /** Runtime templates the build depends on, mapped from the source template name to the per-addon flat script name it is copied to. */
  runtimes: Map<string, string>
  /** The credit block prepended to every script of this build. Exposed so the copied runtime templates carry the same block — and the same date — as the transpiled scripts. */
  header: string
}

export function transpile(scripts: NonNullable<PackOptions['scripts']>, addonId: string): Transpilation {
  const transpiledFiles: TranspiledScript[] = []
  const runtimes = new Map<string, string>()
  // Built once so every script in a build carries the same date, rather than drifting across
  // a slow transpile.
  const header = buildHeader()
  // Prefer a `gamedata`-level tsconfig (so authored `configs/*.ts` text modules share the
  // program with `scripts/`), falling back to the historical `scripts/`-scoped path.
  const gamedataTsconfig = process.cwd() + '/gamedata/tsconfig.json'
  const scriptsTsconfig = process.cwd() + '/gamedata/scripts/tsconfig.json'
  tstl.transpileProject(
    existsSync(gamedataTsconfig) ? gamedataTsconfig : scriptsTsconfig,
    {
      luaTarget: tstl.LuaTarget.LuaJIT,
      luaLibImport: tstl.LuaLibImportKind.Inline,
      extension: '.script',
      noHeader: true,
    },
    (buildFileName, text) => {
      buildFileName = path.basename(buildFileName).replace('.script', '')
      const regScript = scripts.find((sourceFileName) => buildFileName === sourceFileName)
      if (regScript) {
        transpiledFiles.push({
          sourceFileName: regScript,
          buildFileName: scriptBuildName(addonId, regScript),
          buildFileText: header + linkRuntimes(modifyLua(text), addonId, runtimes),
        })
      }
    }
  )
  return { scripts: transpiledFiles, runtimes, header }
}

/** Rewrites `require("<runtime module>")` into the Anomaly cross-script global that provides it, recording which runtimes the build now needs. tstl emits a deterministic `require("<specifier>")` for `@noResolution` modules — with path separators turned into dots — so matching the exact call is precise, not a heuristic. */
function linkRuntimes(lua: string, addonId: string, runtimes: Map<string, string>) {
  for (const [specifier, { template, suffix }] of Object.entries(runtimeModules)) {
    const requireCall = `require("${specifier.replaceAll('/', '.')}")`
    if (lua.includes(requireCall)) {
      const global = `${addonId}__${suffix}`
      lua = lua.split(requireCall).join(global)
      runtimes.set(template, global)
    }
  }
  return lua
}

/** tstl wraps a module in an ES-like shell (____exports table, local declarations, __TS__ lib helpers) — Anomaly expects a flat script of global functions, so we unwrap it. Order matters: strip ____exports before globalizing, otherwise "local ____exports = {}" loses its "local" and stops matching. */
function modifyLua(lua: string) {
  lua = removeExports(lua)
  lua = dropTopLevelForwardDeclarations(lua)
  lua = globalizeTopLevel(lua)
  lua = stripTsHelperPrefix(lua)
  lua = reindent(lua)
  return lua
}

/**
 * Halves the transpiler's fixed four-space indent to two, matching how Anomaly's own scripts
 * are written — generated files sit beside hand-written ones and should not look foreign.
 *
 * Only the run of leading spaces is touched, so indentation inside string literals (which
 * begins after a quote, never at the start of a line) is left alone.
 */
function reindent(lua: string) {
  return lua
    .split('\n')
    .map((line) => {
      const indent = line.length - line.trimStart().length
      return indent ? ' '.repeat(indent / 2) + line.slice(indent) : line
    })
    .join('\n')
}

/** Drops tstl's top-level forward declarations — `local name` or `local a, b, c` with no initializer, which it emits to hoist a function used before its definition (or a lualib class group like `local Error, RangeError, ...`). Left alone they would survive {@link globalizeTopLevel} as a bare `name` / `a, b, c` line, which is not a valid Lua statement and breaks the whole script on load. Globals need no forward declaration, so the line can simply be removed. Anchored to column 0 and requires the whole line to be `local` + identifiers (no `=`, no `(`), so real declarations like `local x = 1` and `local function f(` are untouched. */
function dropTopLevelForwardDeclarations(lua: string) {
  return lua.replaceAll(/^local \w[\w, ]*$\n?/gm, '')
}

/** Drops the "__TS__" prefix from tstl runtime helpers (both their definitions and call sites). Restricted to identifier characters so it never reaches into string literals or comments. */
function stripTsHelperPrefix(lua: string) {
  return lua.replaceAll(/__TS__(\w+)\(/g, '$1(')
}

/** Removes "local" from top-level declarations so the engine can reach them as globals. Anchored to the start of a line (no indentation) so nested locals inside function bodies stay local; only genuine "[[ ]]" multi-line strings with a line beginning in "local " could be affected. */
function globalizeTopLevel(lua: string) {
  return lua.replaceAll(/^local (function |\w)/gm, '$1')
}

/** Unwraps the tstl "____exports" module table: exported functions become global declarations, the table and its trailing "return" are dropped. */
function removeExports(lua: string) {
  return (
    lua
      // "____exports.foo = function(" -> "function foo("
      .replace(/____exports\.(\w+)\s*=\s*function\s*\(/g, 'function $1(')
      // "function ____exports.foo(" and every other "____exports." reference -> bare name
      .replaceAll(/____exports\./g, '')
      .replace(/local\s+____exports\s*=\s*\{\s*\}\n?/, '')
      .replace(/\n?return ____exports\s*$/, '')
  )
}
