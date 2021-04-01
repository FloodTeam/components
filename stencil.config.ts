import { Config } from "@stencil/core";
import typescript from "rollup-plugin-typescript";

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
      type: "www",
      serviceWorker: null,
    },
    {
      type: "docs-readme",
    },
    {
      type: "docs-json",
      file: "www/core.json",
    },
    {
      type: "dist-hydrate-script",
      dir: "dist/hydrate",
    },
  ],
  rollupPlugins: {
    before: [typescript()],
  },
};
