import { Config } from "@stencil/core";
import nodePolyfills from "rollup-plugin-node-polyfills";
import { namespace } from "./package.json";

export const config: Config = {
  namespace,
  globalStyle: "src/css/global.css",
  globalScript: "src/global.ts",
  outputTargets: [
    {
      type: "dist",
    },
    {
      type: "dist-custom-elements",
      generateTypeDeclarations: true,
    },
    {
      type: "docs-readme",
    },
    {
      type: "docs-json",
      file: "www/core.json",
    },
  ],
  rollupPlugins: {
    after: [nodePolyfills()],
  },
};
