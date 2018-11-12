import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const cssExportMap = {};

export default {
  input: "./src/entry.js",
  output: {
    file: "bundle.js",
    dir: "dist",
    format: "umd",
    name: "my-components",
    globals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
  },
  external: [ "react", "react-dom" ],
  plugins: [
    resolve(),
    postcss({
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens;
          }
        })
      ],
      getExportNamed: false,
      getExport (id) {
        return cssExportMap[id];
      },
      extract: 'dist/styles.css',
    }),
    commonjs({
      exclude: 'src/**',
    }),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}
