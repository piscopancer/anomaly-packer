import c from 'chalk'
import Table from 'cli-table3'
import fs from 'fs/promises'
import path from 'path'
import { argv } from 'process'

async function run() {
  const [, , cmd] = argv as [never, never, 'types']
  switch (cmd) {
    case 'types':
      const [, , , cmd] = argv as [never, never, never, 'list' | 'tsconfig']
      const declarationsDirs = await fs.readdir(path.join(__dirname, '..', 'types'))
      let declarationGroups = await Promise.all(
        declarationsDirs.map(async (dir) => {
          return {
            dir,
            dts: await fs.readdir(path.join(__dirname, '..', 'types', dir)).then((tds) => tds.map((td) => td.replace('.d.ts', ''))),
          }
        })
      )
      switch (cmd) {
        case 'list':
          const t = new Table()
          for (const d of declarationGroups) {
            t.push({ [d.dir + ' ' + c.gray('(' + d.dts.length + ')')]: c.yellow(d.dts.join('\n')) })
          }
          console.log(t.toString())
          break
        case 'tsconfig':
          const types: string[] = []
          for (const d of declarationGroups) {
            for (const dts of d.dts) {
              types.push(`anomaly-packer/dist/types/${d.dir}/${dts}`)
            }
          }
          console.log(JSON.stringify({ types }, null, 2))
          break
        default:
          console.error('[Anomaly Packer CLI] Unknown command')
      }
      break
    default:
      console.error('[Anomaly Packer CLI] Unknown command')
      break
  }
}

await run()
