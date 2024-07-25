import fs from 'fs/promises'
import { argv } from 'node:process'
import path from 'path'

async function run() {
  if (argv[2] === 'add') {
    let declarations = await fs.readdir(path.join(process.cwd(), 'src/types'))
    if (!declarations) return
    declarations = declarations.map((d) => d.replace('.d.ts', ''))
    const search = argv[3]
    if (!search || !declarations.includes(search)) {
      console.error('[Anomaly Packer CLI] Incorrect type declaration file. Available type declarations are: \n%s', declarations.map((d) => '- ' + d).join('\n'))
      return
    }
    const declaration = await fs.readFile(path.join(process.cwd(), 'src/types', search + '.d.ts')).then((d) => d.toString('utf8'))
    console.log(process.cwd())
  } else {
    console.error('[Anomaly Packer CLI] Unknown command')
  }
}

await run()
