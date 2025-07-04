import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import unusedImports from "eslint-plugin-unused-imports";
import prettier from "eslint-plugin-prettier";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "**/*.cts"]),
  {
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "unused-imports": unusedImports,
      prettier: prettier,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.js", "vite.config.js"],
          defaultProject: "tsconfig.json",
        },
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        React: "readonly",
        ...globals.browser,
      },
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      prettierRecommended,
    ],
    rules: {
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          argsIgnorePattern: "^_", // _로 시작하는 인자는 무시
        },
      ],
      "unused-imports/no-unused-imports": "error",
      semi: ["error", "always"],
      "react/react-in-jsx-scope": "off",
    },
  },
]);
