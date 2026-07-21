import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts', 'src/cli/anomaly-packer.ts', 'src/jsx-runtime.ts'],
  format: ['esm'],
  dts: true,
  // `typescript` is bundled in (typescript-to-lua pulls it in) and its node host reads
  // `__filename`, which does not exist in an ES module — the cli crashed on startup without
  // these shims, before running any command.
  shims: true,
  copy: [
    { from: 'src/types', to: 'dist' },
    { from: 'src/runtime', to: 'dist' },
    { from: 'src/lua-lib.d.ts', to: 'dist' },
    { from: 'src/tsconfig.scripts.json', to: 'dist' },
  ],
})
