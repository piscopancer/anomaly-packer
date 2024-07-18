import fs from 'fs/promises'
import * as tstl from 'typescript-to-lua'
import { PackOptions } from './src/pack'

export async function transpile(scripts: NonNullable<PackOptions<any>['scripts']>, outDir: string): Promise<string[]> {
  const scriptsDir = process.cwd() + `/${outDir}/gamedata/scripts`
  if (!(await fs.exists(scriptsDir))) {
    await fs.mkdir(scriptsDir)
  }
  let transpiledFiles: string[] = []
  tstl.transpileProject(
    'tsconfig.json',
    {
      luaLibImport: tstl.LuaLibImportKind.Inline,
      extension: '.script',
    },
    async (name, text) => {
      const match = scripts.find((sc) => name.replace('.script', '').endsWith(sc.fileName))
      if (match) {
        transpiledFiles.push(match.outFileName + '.script')
        await fs.writeFile(scriptsDir + `/${match.outFileName}.script`, correctLua(text))
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
