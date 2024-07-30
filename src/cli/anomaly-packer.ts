import c from 'chalk'
import fs from 'fs/promises'
import { argv } from 'node:process'
import path from 'path'

const commands = ['add', 'upd', 'update'] as const

async function run() {
  const [, , cmd] = argv as [any, any, (typeof commands)[number]]
  switch (cmd) {
    case 'add':
      const [, , , addSearch] = argv
      const declarationsDirs = await fs.readdir(path.join(__dirname, '..', 'types'))
      let declarationGroups = await Promise.all(
        declarationsDirs.map(async (dir) => {
          return {
            dir,
            tds: await fs.readdir(path.join(__dirname, '..', 'types', dir)).then((tds) => tds.map((td) => td.replace('.d.ts', ''))),
          }
        })
      )
      if (!addSearch || !(await fs.exists(path.join(__dirname, '..', 'types', addSearch + '.d.ts')))) {
        console.error(
          '[Anomaly Packer CLI] Incorrect type declaration file. Available type declarations are: \n%s',
          declarationGroups.map((d) => '  ' + d.dir + '/' + '\n' + d.tds.map((td, i) => `    ${i + 1}. ${td}`).join('\n')).join('\n')
        )
        return
      }
      const declDir = addSearch.split('/')[0]
      if (!(await fs.exists(path.join(process.cwd(), 'gamedata/scripts/types', declDir)))) {
        await fs.mkdir(path.join(process.cwd(), 'gamedata/scripts/types', declDir), { recursive: true })
      }
      await fs.cp(path.join(__dirname, '..', 'types', addSearch + '.d.ts'), path.join(process.cwd(), 'gamedata/scripts/types', addSearch + '.d.ts'), {
        recursive: true,
        force: true,
      })
      console.log(c.cyan.bold(addSearch) + c.cyan(' type declaration file was copied to ') + c.cyan.bold('gamedata/scripts/types'))
      break
    // case 'upd':
    // case 'update':
    //   const [, , , updDir] = argv
    //   if (!updDir) {
    //     console.error('[Anomaly Packer CLI] No directory with type declarations was provided')
    //     return
    //   }
    //   const staleFiles = await fs.readdir(path.join(process.cwd(), updDir))
    //   const freshFiles = await fs.readdir(path.join(__dirname, '..', 'types'))
    //   let filesUpdated = 0
    //   for (const staleFile of staleFiles) {
    //     const freshFile = freshFiles.find((ff) => ff === staleFile)
    //     if (freshFile) {
    //       await fs.cp(path.join(__dirname, '../types', freshFile), path.join(process.cwd(), updDir, staleFile))
    //       filesUpdated++
    //     }
    //   }
    //   console.log(c.cyan.bold(filesUpdated) + c.cyan(' type declaration files were updated in ') + c.cyan.bold(updDir))
    //   break
    default:
      console.error('[Anomaly Packer CLI] Unknown command')
      break
  }
}

await run()
