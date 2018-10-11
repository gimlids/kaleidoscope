import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import strip from 'rollup-plugin-strip';


export default {
  input: 'src/main.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true,
    }),
    strip({debugger: true, sourceMap: false}),
    commonjs(),
    babel(),
  ],
  // moduleId: 'kaleidoscope',
  output: [
    {file: 'dist/kaleidoscope.js', format: 'umd', name: 'kaleidoscope'},
    {file: 'dist/kaleidoscope.iife.js', format: 'iife', name: 'kaleidoscope'},
    {file: 'dist/kaleidoscope.es.js', format: 'es', name: 'kaleidoscope'},
  ],
};
