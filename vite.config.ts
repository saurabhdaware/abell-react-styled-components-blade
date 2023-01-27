import { defineConfig } from "abell";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // // vite configs
  // resolve: {
  //   alias: {
  //     "styled-components-old": "styled-components",
  //     "styled-components": "./styled-components-fix.ts",
  //   },
  // },
  abell: {
    esbuild: {
      loader: "jsx",
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
  ],
  ssr: {
    noExternal: ["@razorpay/blade/*"],
  },
});
