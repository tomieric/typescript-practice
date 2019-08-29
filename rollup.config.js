import typescript from 'rollup-plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'

const typeMaps = {
  'cjs': 'lib',
  'es': 'esm',
  'umd': 'umd'
}

const name = 'lib'

const config = ['cjs', 'es', 'umd'].map(format => ({
  name,
  input: './src/index.ts',
  output: {
    name,
    file: `dist/${typeMaps[format]}/index.js`,
    format
  },
  plugins: [
    typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
    commonjs({extensions: ['.js', '.ts']})
  ]
}))

export default config
