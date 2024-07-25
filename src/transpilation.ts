import path from 'path'
import * as tstl from 'typescript-to-lua'
import { PackOptions } from './pack'

export type TranspiledScript = {
  sourceFileName: string
  buildFileName: string
  buildFileText: string
}

export async function transpile(scripts: NonNullable<PackOptions['scripts']>): Promise<TranspiledScript[]> {
  let transpiledFiles: TranspiledScript[] = []
  tstl.transpileProject(
    process.cwd() + '/gamedata/scripts/tsconfig.json',
    {
      luaLibImport: tstl.LuaLibImportKind.Inline,
      extension: '.script',
    },
    async (buildFileName, text) => {
      buildFileName = path.basename(buildFileName).replace('.script', '')
      const regScript = scripts.find((regScript) => buildFileName.endsWith(regScript.sourceFileName))
      if (regScript) {
        buildFileName = regScript.buildFileName ?? regScript.sourceFileName
        transpiledFiles.push({
          sourceFileName: regScript.sourceFileName,
          buildFileName,
          buildFileText: correctLua(text),
        })
      }
    }
  )
  return transpiledFiles
}

function correctLua(lua: string) {
  lua = globalizeFuncsVars(lua)
  lua = removeExports(lua)
  return lua
}

function globalizeFuncsVars(lua: string) {
  return lua.replaceAll(/\nlocal\s/g, '\n')
}

function removeExports(lua: string) {
  return (
    lua
      // Replace instances of "____exports.ANYTHING = function(" with "function ANYTHING("
      .replace(/____exports\.(\w+)\s*=\s*function\s*\(/g, 'function $1(')
      .replace(/____exports\./g, '')
      .replace(/local ____exports\s*=\s*{\s*}/, '')
      .replace(/return ____exports/, '')
  )
}
