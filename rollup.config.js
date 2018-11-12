import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

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
    postcss({
      modules: true
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
