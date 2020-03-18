import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy';
const copyAssets = require('postcss-copy-assets');


const url = require("postcss-url");

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: [
    'react',
  ],
  plugins: [
    copy({
      targets: [{ src: 'src/assets/*', dest: 'dist/assets' }],
    }),
    postcss({
      to: 'dist',
      plugins: [
        copyAssets({ base: '../'})
      ],
      extensions: ['.css', '.scss'],
      extract: 'dist/styles.css',
    }),
    resolve(),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
  ]
};
