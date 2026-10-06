import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  // Next.js defaults
  ...coreWebVitals,
  ...nextTypescript,

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

export default config;
