#!/usr/bin/env node
import c from 'chalk'
import Table from 'cli-table3'
import fs from 'fs/promises'
import path from 'path'
import { argv } from 'process'

async function run() {
  const [, , cmd] = argv as [never, never, 'types']
  switch (cmd) {
    case 'types':
      const [, , , cmd] = argv as [never, never, never, 'list']
      const declarationsDirs = await fs.readdir(path.join(import.meta.dirname, '..', 'types'))
      let declarationGroups = await Promise.all(
        declarationsDirs.map(async (dir) => {
          return {
            dir,
            dts: await fs
              .readdir(path.join(import.meta.dirname, '..', 'types', dir))
              .then((tds) => tds.filter((tds) => tds.endsWith('d.ts')).map((td) => td.replace('.d.ts', ''))),
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
        default:
          console.error('[Anomaly Packer CLI] Unknown command')
      }
      break
    default:
      console.error('[Anomaly Packer CLI] Unknown command')
      break
  }
}

run()
