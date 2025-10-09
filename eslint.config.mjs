import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next.js defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignore build artifacts
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // Your rule tweaks
  {
    rules: {
      // Fix the Netlify error on curly quotes like I’m / it’s
      "react/no-unescaped-entities": "off",

      // Make unused vars a warning, and allow underscore-prefixed args
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // Avoid duplicate noise from the base rule
      "no-unused-vars": "off",
    },
  },
];