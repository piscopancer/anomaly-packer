import path from 'path'
import * as tstl from 'typescript-to-lua'
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
} as const

/** The flat Anomaly script name a registered source file is built to: the entry `index` becomes the bare addon id, every other short name is prefixed with it (`mcm` -> `<addonId>_mcm`). */
export function scriptBuildName(addonId: string, sourceFileName: string) {
  return sourceFileName === 'index' ? addonId : `${addonId}_${sourceFileName}`
}

export type Transpilation = {
  scripts: TranspiledScript[]
  /** Runtime templates the build depends on, mapped from the source template name to the per-addon flat script name it is copied to. */
  runtimes: Map<string, string>
}

export function transpile(scripts: NonNullable<PackOptions['scripts']>, addonId: string): Transpilation {
  const transpiledFiles: TranspiledScript[] = []
  const runtimes = new Map<string, string>()
  tstl.transpileProject(
    process.cwd() + '/gamedata/scripts/tsconfig.json',
    {
      luaTarget: tstl.LuaTarget.Lua51,
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
          buildFileText: linkRuntimes(modifyLua(text), addonId, runtimes),
        })
      }
    }
  )
  return { scripts: transpiledFiles, runtimes }
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
  lua = globalizeTopLevel(lua)
  lua = stripTsHelperPrefix(lua)
  return lua
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
