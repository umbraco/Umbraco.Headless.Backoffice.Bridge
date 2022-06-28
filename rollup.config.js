// Import rollup plugins
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import summary from 'rollup-plugin-summary'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

export default {
  input: './src/index.ts',
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    resolve(),
    terser({
      ecma: 2020,
      module: true,
      warnings: true
    }),
    summary()
  ],
  output: {
    file: pkg.browser,
    exports: 'named',
    format: 'es',
    sourcemap: true
  },
  preserveEntrySignatures: 'strict'
}
