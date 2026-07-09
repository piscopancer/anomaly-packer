import path from 'path'
import * as tstl from 'typescript-to-lua'
import { PackOptions } from './pack'

export type TranspiledScript = {
  sourceFileName: string
  buildFileName: string
  buildFileText: string
}

export function transpile(scripts: NonNullable<PackOptions['scripts']>) {
  const transpiledFiles: TranspiledScript[] = []
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
      const regScript = scripts.find((regScript) => buildFileName.endsWith(regScript.sourceFileName))
      if (regScript) {
        buildFileName = regScript.buildFileName ?? regScript.sourceFileName
        transpiledFiles.push({
          sourceFileName: regScript.sourceFileName,
          buildFileName,
          buildFileText: modifyLua(text),
        })
      }
    }
  )
  return transpiledFiles
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
