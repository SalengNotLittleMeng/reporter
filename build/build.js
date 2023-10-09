const babel = require("rollup-plugin-babel");
const nodeResolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const rollup = require("rollup");
const path = require("path");
const definePlugins = [
  nodeResolve({
    extensions: [".js", ".ts"],
  }),
  commonjs(),
  babel({
    exclude: ["node_modules/*"],
  }),
  typescript({
    tsconfig: path.resolve(__dirname, "../tsconfig.json"),
  }),
];
const outputList = ["errorcatch", "requestlist", "performancemonitor"];
//这里写私有打包配置
const selfConfigList = [
  {
    name: "errorcatch",
  },
];

const buildList = outputList.map((name) => {
  return {
    name,
    input: `./packages/${name}/lib/${name}.ts`,
    output: {
      file: `./packages/${name}/dist/${name}.js`,
      name,
      format: "umd",
      sourcemap: true,
    },
    plugins: definePlugins,
  };
});
const param = process.argv[2];

function getBuildPackages() {
  if (param == "--a" || param == "--all" || param == "") {
    return buildList;
  }
  const packageName = param.slice(2);
  if (!outputList.find((item) => item == packageName)) {
    console.error("参数错误，请输入正确包名", packageName);
    return [];
  }
  return buildList.filter((options) => {
    if (options.name == packageName) {
      const selfConfig = selfConfigList.find(
        (config) => config.name == options.name
      );
      selfConfig && (options = Object.assign(options, selfConfig));
      return true;
    }
    return false;
  });
}
async function build() {
  const buildPackages = getBuildPackages();
  for (let i = 0; i < buildPackages.length; i++) {
    const options = buildPackages[i];
    delete options.name;
    const bundle = await rollup.rollup(options);
    await bundle.write(options.output);
  }
  const watcher = rollup.watch(buildPackages);
  console.log("热更新已开启");
  watcher.on("event", ({ result }) => {
    if (result) {
      result.close();
    }
  });
  watcher.on("change", () => {
    console.log("热更新触发");
  });
}

build();
