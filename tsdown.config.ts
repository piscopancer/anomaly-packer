import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts', 'src/cli/anomaly-packer.ts'],
  format: ['esm'],
  dts: true,
  copy: [
    { from: 'src/types', to: 'dist' },
    { from: 'src/runtime', to: 'dist' },
  ],
})
