import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [react()],
    };
  } else {
    return {
      plugins: [react()],
      base: "https://dalekvim.github.io/mai-waifu-web/",
    };
  }
});
