import c from 'chalk'
import fs from 'fs/promises'
import { argv } from 'node:process'
import path from 'path'

const commands = ['add', 'upd', 'update'] as const

async function run() {
  const [, , cmd] = argv as [any, any, (typeof commands)[number]]
  switch (cmd) {
    case 'add':
      const [, , , addSearch, addDir] = argv
      let declarations = await fs.readdir(path.join(__dirname, '..', 'types'))
      if (!declarations) return
      declarations = declarations.map((d) => d.replace('.d.ts', ''))
      if (!addSearch || !declarations.includes(addSearch)) {
        console.error(
          '[Anomaly Packer CLI] Incorrect type declaration file. Available type declarations are: \n%s',
          declarations.map((d) => '- ' + d).join('\n')
        )
        return
      }
      if (!addDir) {
        console.error(
          '[Anomaly Packer CLI] Relative path to the directory was expected after the name of the declaration file. For example,\n\nnpm run anomaly-packer add game src/declarations'
        )
        return
      }
      if (!(await fs.exists(path.join(process.cwd(), addDir)))) {
        await fs.mkdir(path.join(process.cwd(), addDir))
      }
      await fs.cp(path.join(__dirname, '..', 'types', addSearch + '.d.ts'), path.join(process.cwd(), addDir, addSearch + '.d.ts'), {
        recursive: true,
        force: true,
      })
      console.log(c.cyan.bold(addSearch) + c.cyan(' type declaration file was copied to ') + c.cyan.bold(addDir))
      break
    case 'upd':
    case 'update':
      const [, , , updDir] = argv
      if (!updDir) {
        console.error('[Anomaly Packer CLI] No directory with type declarations was provided')
        return
      }
      const staleFiles = await fs.readdir(path.join(process.cwd(), updDir))
      const freshFiles = await fs.readdir(path.join(__dirname, '..', 'types'))
      let filesUpdated = 0
      for (const staleFile of staleFiles) {
        const freshFile = freshFiles.find((ff) => ff === staleFile)
        if (freshFile) {
          await fs.cp(path.join(__dirname, '../types', freshFile), path.join(process.cwd(), updDir, staleFile))
          filesUpdated++
        }
      }
      console.log(c.cyan.bold(filesUpdated) + c.cyan(' type declaration files were updated in ') + c.cyan.bold(updDir))
      break
    default:
      console.error(
        '[Anomaly Packer CLI] Unknown command. Avaliable commands are:\n\nadd <declaration-name> <destination-directory>\nupd|update <declarations-directory>'
      )
      break
  }
}

await run()
