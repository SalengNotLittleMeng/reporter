import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2"; // 处理typescript
const plugins = [
  nodeResolve(),
  commonjs(),
  typescript(),
  babel({
    exclude: ["node_modules/*"],
  }),
];
const outputList = ["errorcatch", "requestlist", "performancemonitor"];
const buildList = outputList.map((name) => {
  return {
    input: `./packages/${name}/lib/${name}.ts`,
    output: {
      file: `./packages/${name}/dist/${name}.js`,
      name,
      format: "umd",
      sourcemap: true,
    },
    plugins,
  };
});
export default buildList;
