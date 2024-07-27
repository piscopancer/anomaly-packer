import * as fs from 'fs/promises'
import * as path from 'path'
import { defineConfig } from 'tsup'

export default defineConfig({
  // clean: true,
  entry: ['src/index.ts', 'src/cli/anomaly-packer.ts'],
  dts: true,
  format: ['esm'],
  onSuccess() {
    return fs.cp(path.join(__dirname, 'src/types'), path.join(__dirname, 'dist/types'), { recursive: true })
  },
})
