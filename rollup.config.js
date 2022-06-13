// Import rollup plugins
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import summary from 'rollup-plugin-summary'
import typescript from '@rollup/plugin-typescript'
import cleaner from 'rollup-plugin-cleaner'

export default {
  input: './src/index.ts',
  plugins: [
    cleaner({
      targets: [
        './dist/'
      ]
    }),
    typescript(),
    resolve(),
    terser({
      ecma: 2020,
      module: true,
      warnings: true
    }),
    summary()
  ],
  output: {
    dir: './dist',
    format: 'es',
    sourcemap: true
  },
  preserveEntrySignatures: 'strict'
}
