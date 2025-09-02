import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Silence warnings we accept in this project
      "@next/next/no-img-element": "off",
      // In the app router we intentionally include a font stylesheet in <head>
      "@next/next/no-page-custom-font": "off",
      // Ensure Google font links use display parameter
      "@next/next/google-font-display": "error",
      "jsx-a11y/alt-text": "off",
      // Typing tolerances in authored MDX renderers/components
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }],
      // Hooks warnings in non-critical visual components
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
