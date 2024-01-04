import Inspect from "vite-plugin-inspect";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        jpg: {
          quality: 80,
        },
      }),
    ],
  };
});
