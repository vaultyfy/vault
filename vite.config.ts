import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      TanStackRouterVite({
        autoCodeSplitting: true,
      }),
      react(),
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  };
});

// const result: Partial<AppSearchParams> = {}
// if (search.ui) result.ui = search.ui as UiComponents
// if (search.redirect) result.redirect = search.redirect
// if (search.referrer) result.referrer = search.referrer

// return result
