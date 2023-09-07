import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginSVGR from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginSVGR(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts", // or index.tsx if it's a tsx file
      name: "RouviaIcons",
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Add more external dependencies if you have any
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
