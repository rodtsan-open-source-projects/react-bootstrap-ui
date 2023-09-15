import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import { visualizer } from "rollup-plugin-visualizer";
import { terser } from "rollup-plugin-terser";
import { getFiles } from "./scripts/buildUtils.js";

const extensions = [".js", ".ts", ".jsx", ".tsx"];
const outputDir = "lib";

const scssFiles = getFiles("./src/Assets", [".scss"]).map((file) => {
  const output = file.split("/").pop();
  const cssOutput = output.replace(".scss", ".css").replace(".sass", ".css");
  return {
    input: [file],
    output: {
      file: `${outputDir}/assets/${cssOutput}`,
      format: "esm",
      //sourcemap: true,
      // preserveModules: true,
    },
    plugins: [
      scss({
        fileName: cssOutput,
        processor: () => postcss([autoprefixer()]),
        output: true,
        failOnError: true,
        outputStyle: "compressed",
        sourceMap: true,
      }),
    ],
  };
});

export default [
  {
    input: [...getFiles("./src", extensions, [".test.tsx"])],
    output: {
      dir: outputDir,
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
    plugins: [
      commonjs(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: outputDir,
      }),
      terser(),
      visualizer({
        filename: "bundle-analysis.html",
        open: false,
      }),
    ],
    external: [/node_modules/],
  },
  ...scssFiles,
];
