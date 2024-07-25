import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  entry: ['src/index.ts', 'src/cli/anomaly-packer.ts'],
  dts: true,
  format: ['esm'],
})
