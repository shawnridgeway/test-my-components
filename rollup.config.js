import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';


export default {
  input: "./src/entry.js",
  output: [
    {
      file: "index.esm.js",
      dir: "dist",
      format: "esm",
      name: "my-components",
      globals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "classnames": "cx"
      }
    }, {
      file: "index.cjs.js",
      dir: "dist",
      format: "cjs",
      name: "my-components",
      globals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "classnames": "cx"
      }
    }
  ],
  external: [ "react", "react-dom", "classnames" ],
  plugins: [
    resolve(),
    postcss({
      modules: true,
      extract: 'dist/styles.css',
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}
