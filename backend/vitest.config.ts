import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["./src/tests/setup.ts", "./vitest.setup.ts"],
  },
});
/// <reference types="vitest/globals" />