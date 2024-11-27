import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const selectedConfig = perfectionist.configs["recommended-natural"];

export default [
  {
    ...selectedConfig,
    files: ["*/.tsx"],
    languageOptions: {
      ...selectedConfig.languageOptions,
      parser: typescriptParser,
      sourceType: "module",
    },
    plugins: {
      ...selectedConfig.plugins,
      perfectionist,
      "unused-imports": unusedImports,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...selectedConfig.rules,
      "no-console": ["error", { allow: ["info"] }],
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^[_]{1,3}$",
          vars: "all",
          varsIgnorePattern: "^[_]{1,3}$",
        },
      ],
    },
  },
];
