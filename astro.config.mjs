// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.URL || "https://vinoth-akithon.github.io",
  base: process.env.BASE_URL || "/3dstructure_v4",
  vite: {
    plugins: [tailwindcss()],
  },
});
