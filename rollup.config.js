import scss from 'rollup-plugin-scss'
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel';
import {uglify} from "rollup-plugin-uglify";
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import copy from 'rollup-plugin-copy';
import commonjs from 'rollup-plugin-commonjs';

const resolvePath = require('./rollup-plugins/resolve-css-path');
import image from '@rollup/plugin-image';
// import url from "rollup-plugin-url"
const url = require("postcss-url");

import dataUri from '@rollup/plugin-data-uri';

// const plugin = url({
//   limit: 10, // inline files < 10k, copy files > 10k
//   emitFiles: true // defaults to true
// });

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
  ],
  plugins: [
    scss({
      modules: true,
      extensions: ['.css', '.scss'],
      outputStyle: "compressed",
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => {
          return result.css.replace(/~assets/g, '/assets');
          // return result.css;
        })
    }),
    dataUri(),
    resolve({
      extensions: ['.ts', '.tsx', '.css', '.scss', '.svg', '.png', '.json'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    copy({
      targets: [{src: 'src/assets/*', dest: 'dist/assets'}],
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
  ]
};