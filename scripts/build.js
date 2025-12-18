import esbuild from "esbuild";
import path from "path";

const root = path.resolve("src");

await esbuild.build({
  entryPoints: ["js/index.ts"],
  absWorkingDir: root,
  bundle: true,
  minify: true,
  format: "iife",
  outfile: "../dist/liteui.min.js",
  target: ["es2018"],
  resolveExtensions: [".ts", ".js"],
  alias: {
    components: path.join(root, "js/components"),
    core: path.join(root, "js/core")
  }
});