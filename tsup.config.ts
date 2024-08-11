import * as fs from 'fs/promises'
import * as path from 'path'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/cli/anomaly-packer.ts'],
  dts: true,
  format: ['esm'],
  async onSuccess() {
    await Promise.all([
      fs.cp(path.join(__dirname, 'src/types'), path.join(__dirname, 'dist/types'), { recursive: true }),
      // fs.copyFile(path.join(__dirname, 'tsconfig.json'), path.join(__dirname, 'dist/tstl-tsconfig.json')),
    ])
  },
})
